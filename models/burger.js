let orm = require('../config/orm');

let burger = {
    all: function(cb) {
        orm.all("burgers", function(results) {
            cb(results);
        });
    }, 
    create: function (columns, values, cb) {
        orm.create("burgers", columns, values, function(results) {
            cb(results);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(results) {
            cb(results);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition,  function(results) {
            cb(results);
        });
    }
};

module.exports = burger;