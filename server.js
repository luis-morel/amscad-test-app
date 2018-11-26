// Importing required Node.js packages
const bodyParser = require('body-parser'); // Body parsing middleware
const express = require('express'); // Web server framework
const logger = require('morgan')('tiny'); // HTTP request logging middleware
const passport = require('passport'); // User authentication middleware
const path = require('path'); // Directory & file path handling module
const session = require('express-session'); // Session-handling middleware

// Importing database models
const db = require("./models");

// Importing API and authentication web server routes
const { api, auth } = require("./controllers");

// Express web server declaration and configuration
const app = express();
app.use(bodyParser.json()); // Adding 'bodyParser'
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger); // Adding 'morgan'
app.use(session({ secret: "ILoveP1zza", resave: true, saveUninitialized: true }));
app.use(passport.initialize()); // Adding 'passport'
app.use(passport.session());
app.use("/api", api); // Adding API routes
app.use("/auth", auth); // Adding Authentication routes

// Serving up static assets (for hosting platforms such as Heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Directing every request to the ReactJS app
// Express web server routes (API, Auth, etc.) must be defined before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Express web server listening port declaration
const PORT = process.env.PORT || 3001;

// Connecting to MSSQL and then initializing Express web server
// {force: true} drops and recreates all tables REMOVE WHEN APP IS COMPLETE
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log(`🌎 ==> Server listening on port: ${PORT}!`);
  });
});