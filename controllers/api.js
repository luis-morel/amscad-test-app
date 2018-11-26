const db = require("../models");
const passport = require("../passport/passport.js");
const router = require("express").Router();

//---------------------------------------------//
//------------- API Routes (/api) -------------//
//---------------------------------------------//

// Add new building
router.post("/buildings/createnewbldg", (req, res) => {
  console.log(`\n/api/buildings/createnewbldg 'req.body' = ${JSON.stringify(req.body)}\n`);
  db.Buildings.create({
    name: req.body.name,
    location: req.body.location,
  })
    .then((results) => {
      res.end();
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    })
});

// Add new floor
router.post("/buildings/createnewfloor", (req, res) => {
  console.log(`\n/api/buildings/createnewfloor 'req.body' = ${JSON.parse(JSON.stringify(req.body))}\n`);
  db.Floors.create(req.body)
    .then((results) => {
      res.end();
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    })
});

// Add new user
router.post("/users/createnewuser", (req, res) => {
  console.log(`\n/api/users/createnewuser 'req.body' = ${JSON.stringify(req.body)}\n`);
  db.Users.create(req.body)
    .then((results) => {
      res.json("/login");
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});

// Retrieve floors in building
router.get("/buildings/listfloors/:bldgId", (req, res) => {
  console.log(`\n\n/api/buildings/listfloors 'req.params' = ${JSON.stringify(req.params)}\n\n`)
    db.Floors.findAll({
      where: { BuildingId: req.params.bldgId},
      order: [['name']]
    })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        console.log(error);
        res.json(error);
      });
});

// Retrieve all buildings
router.get("/buildings/listall", (req, res) => {
  db.Buildings.findAll({
    order: [['name']]
  })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});

module.exports = router;