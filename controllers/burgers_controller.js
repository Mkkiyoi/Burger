let express = require('express');
let router = express.Router();
let burger = require('../models/burger');

router.get('/', function(req, res) {
  burger.all(function(data) {
    let burgerData = {
      burgers: data
    };
    res.render("index", burgerData);
  });
});

router.post('/api/burgers', function(req, res) {
    burger.create([
        'name'
    ], [
        req.body.name
    ], function(result) {
        res.json({id: result.insertId});
        res.redirect("/");
    });
});

router.put('/api/burgers/:id', function(req, res) {
    let condition = 'id = ' + req.params.id;
    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changeRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
        res.redirect("/");
    });
});

router.delete('/api/burgers/:id', function(req, res) {
    let condition = 'id = ' + req.params.id;
    burger.delete(condition, function(result) {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
        res.redirect("/");
    });
});

module.exports = router;