let orm = require('../config/orm');

let burger = {
    all: function(cb) {
        orm.all("burgers", function(results) {
            cb(results);
        });
    }, 
    create: function (columns, values, cb) {
        orm.all("burgers", columns, values, function(results) {
            cb(results);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.all("burgers", objColVals, condition, function(results) {
            cb(results);
        });
    },
    delete: function(condition, cb) {
        orm.all("burgers", condition,  function(results) {
            cb(results);
        });
    }
};

module.exports = burger;