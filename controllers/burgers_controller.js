let express = require('express');
let router = express.Router();
let burger = require('../models/burger');

router.get('/', (req,req) => {
  burger.all(function(data) {
    let burgerObj = {
      burgers: data
    };
    res.render("index", burgerObj);
  });
});

router.post()

module.exports = router;