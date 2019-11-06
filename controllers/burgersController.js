var express = require("express");
var db = require("../models");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
// var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  db.burger.findAll({
    // attributes: ['id', 'burger_name', 'devoured']
  }).then(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log("data is ------------------", data[0].dataValues);
    // res.render("index", data);
  });
});

router.post("/api/burgers", function (req, res) {
  db.burger.create({
    burger_name: req.body.burger_name
  }).then(function (result) {
    // Send back the ID of the new quote
    res.json({
      id: result.insertId
    });
  });
});
router.put("/api/burgers/:id", function (req, res) {
  // var condition = "id = " + req.params.id;

  // console.log("condition", condition);
  // db.burger.update(
  //   {title: req.body.title},
  //   {where: req.params.bookId}
  // )
  // .then(function(rowsUpdated) {
  //   res.json(rowsUpdated)
  // })


  db.burger.findOne({
      id: req.params.id
    })
    .then(_burger => {
      _burger.dataValues.devoured = true;
    });

  // burger.update("devoured = 1",
  //   condition,
  //   function (result) {
  //     if (result.changedRows === 0) {
  //       // If no rows were changed, then the ID must not exist, so 404
  //       return res.status(404).end();
  //     }
  //     res.status(200).end();

  //   }
  // );
});
router.delete("/api/delBurgers/:id", function (req, res) {
  // var condition = "id = " + req.params.id;




  db.burger.destory({
      where: {
        id: req.params.id
      }
    })
    .then(function (rowDeleted) { // rowDeleted will return number of rows deleted
      if (rowDeleted === 1) {
        console.log('Deleted successfully');
      }
    }, function (err) {
      console.log(err);
    });

});
// Export routes for server.js to use.
module.exports = router;