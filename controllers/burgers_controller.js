let express = require('express');
let router = express.Router();
let burger = require('../models/burger');

router.get('/', function(req, res) {
  burger.all(function cb(data) {
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
        req.body.burgerName
    ], function cb(result) {
        res.json({id: result.insertId});
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
    });
});

module.exports = router;