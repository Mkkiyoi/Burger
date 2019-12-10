let orm = require('../config/orm');

let burger = {
    all: function(cb) {
        orm.all("burgers", function(results) {
            return cb(results);
        });
    }, 
    create: function (columns, values, cb) {
        orm.all("burgers", columns, values, function(results) {
            return cb(results);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.all("burgers", objColVals, condition, function(results) {
            return cb(results);
        });
    },
    delete: function(condition, cb) {
        orm.all("burgers", condition,  function(results) {
            return cb(results);
        });
    }
};

module.exports = burger;