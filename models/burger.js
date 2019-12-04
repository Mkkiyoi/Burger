let orm = require('../config/orm');

let burger = {
    all: (callback) => {
        orm.all("Burgers", (results) => {
            callback(results);
        })
    }, 
    create: (columns, values, callback) => {
        orm.all("Burgers", columns, values, (results) => {
            callback(results);
        })
    },
    update: (objColVals, condition, callback) => {
        orm.all("Burgers", objColVals, condition, (results) => {
            callback(results);
        })
    },
    delete: (condition, callback) => {
        orm.all("Burgers", condition,  (results) => {
            callback(results);
        })
    }
}

module.exports = burger;