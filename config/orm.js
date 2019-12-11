let connection = require('./connection');

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

let orm = {
    all: function(table, cb) {
        console.log(cb)
        let queryString = 'SELECT * FROM ' + table + ';';
        connection.query(queryString, function(error, results) {
            if (error) throw error;
            cb(results);
        });
    },
    create: function(table, columns, values, cb) {
        let queryString = 'INSERT INTO ' + table + ' (' + columns.toString() + ') ' + ' VALUES (' + printQuestionMarks(values.length) + ');';
        console.log(queryString)
        connection.query(queryString, values, function(error, results) {
            if (error) throw error;
            cb(results);
        });
    },
    update: function(table, objColVals, condition, cb) {
        let queryString = 'UPDATE ' + table + ' SET ' + objToSql(objColVals) + ' WHERE ' + condition + ';';
        connection.query(queryString, function(error, results) {
            if (error) throw error;
            cb(results);
        });
    },
    delete: function(table, condition, cb) {
        let queryString = 'DELETE FROM ' + table + ' WHERE ' + condition + ' ;';
        connection.query(queryString, function(error, results) {
            if (error) throw error;
            cb(results);
        });
    }
}

module.exports = orm;