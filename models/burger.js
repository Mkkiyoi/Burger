let orm = require('../config/orm');

let burger = {
    all: (callback) => {
        orm.all("burgers", (results) => {
            callback(results);
        })
    }, 
    create: (columns, values, callback) => {
        orm.all("burgers", columns, values, (results) => {
            callback(results);
        })
    },
    update: (objColVals, condition, callback) => {
        orm.all("burgers", objColVals, condition, (results) => {
            callback(results);
        })
    },
    delete: (condition, callback) => {
        orm.all("burgers", condition,  (results) => {
            callback(results);
        })
    }
}

module.exports = burger;