const db = require("../models");
const passport = require("../passport/passport.js");
const router = require("express").Router();

//---------------------------------------------//
//------------- API Routes (/api) -------------//
//---------------------------------------------//

// Retrieve All Posts
router.get("/posts/all", (req, res) => {
  db.Post.findAll({
    include: [db.User],
    order: [['updatedAt', 'DESC']]
  })
    .then((data) => {
      res.json(data);
    });
});

// Retrieve All Posts for Selected Category (userId is optional)
router.get("/posts/category/:category/:userId?", (req, res) => {
  if (req.params.userId) {
    db.Post.findAll({
      include: [db.User],
      where: {
        category: req.params.category,
        userId: req.params.userId
      },
      order: [['updatedAt', 'DESC']]
    })
      .then((data) => {
        res.json(data)
      });
  }
  else {
    db.Post.findAll({
      include: [db.User],
      where: { category: req.params.category },
      order: [['updatedAt', 'DESC']]
    })
      .then((data) => {
        res.json(data);
      });
  };
});

// Delete Post
router.delete("/posts/delete/:id", (req, res) => {
  console.log('test: ', req.params.id)
  db.Post.destroy(
    { where: { id: req.params.id } }
  )
    .then((result) => {
      if (result.changedRows === 0) return res.status(404).end();
      res.status(200).end();
    });
});

// Create New Post
router.post("/posts/new", (req, res) => {
  db.Post.create({
    body: req.body.body,
    category: req.body.category,
    UserId: req.user.id
  })
    .then((results) => {
      res.end();
    });
});

// Retrieve All Posts for Logged On User
// router.get("/posts/user", (req, res) => {
//   db.User.findOne({
//     include: [{ model: db.Post, order: [['updatedAt', 'DESC']] }],
//     where: { id: req.user.id }
//   })
//     .then((data) => {
//       res.json(data);
//       return;
//     });
// });

// Retrieve All Logged On User Posts
router.get("/posts/user/:userId", (req, res) => {
  db.Post.findAll({
    include: [db.User],
    where: { userId: req.params.userId },
    order: [['updatedAt', 'DESC']]
  })
    .then((data) => {
      res.json(data)
    });
});

module.exports = router;