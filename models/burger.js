let orm = require('../config/orm');

let burger = {
    all: (cb) => {
        orm.all("burgers", (results) => {
            cb(results);
        })
    }, 
    create: (columns, values, cb) => {
        orm.all("burgers", columns, values, (results) => {
            cb(results);
        })
    },
    update: (objColVals, condition, cb) => {
        orm.all("burgers", objColVals, condition, (results) => {
            cb(results);
        })
    },
    delete: (condition, cb) => {
        orm.all("burgers", condition,  (results) => {
            cb(results);
        })
    }
}

module.exports = burger;