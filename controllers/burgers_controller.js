let express = require('express');
let router = express.Router();
let burger = require('../models/burger');

let returnStatus = function(res, res, result) {
    if (result.changeRows === 0) {
        return res.status(404).end();
    } else {
        res.status(200).end();
    }
};

let renderData = function(req, res, data) {
    let burgerData = {
      burgers: data
    };
    res.render("index", burgerData);
};

router.get('/', function(req, res) {
  burger.all(renderData);
});

router.post('/api/burgers', function(req, res) {
    burger.create([
        'name'
    ], [
        req.body.burgerName
    ], function(result) {
        res.json({id: result.insertId});
    });
});

router.put('/api/burgers/:id', function(req, res) {
    let condition = 'id = ' + req.params.id;
    burger.update({
        devoured: req.body.devoured
    }, 
    condition, returnStatus);
});

router.delete('/api/burgers/:id', function(req, res) {
    let condition = 'id = ' + req.params.id;
    burger.delete(condition, returnStatus);
});

module.exports = router;