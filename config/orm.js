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
        connection.query('SELECT * FROM ' + table + ';', function(error, results) {
            if (error) throw error;
            return cb(results);
        });
    },
    create: function(table, columns, values, cb) {
        connection.query('INSERT INTO ' + table + ' (' + columns.toString() + ') ' 
                         + ' VALUES (' + printQuestionMarks(values.length) + ');', 
                         values, function(error, results) {
            if (error) throw error;
            return cb(results);
        });
    },
    update: function(table, objColVals, condition, cb) {
        connection.query('UPDATE ' + table 
                      + ' SET ' + objToSql(objColVals) 
                      + ' WHERE ' + condition + ';', 
                        function(error, results) {
            if (error) throw error;
            cb(results);
        });
    },
    delete: function(table, condition, cb) {
        connection.query('DELETE FROM ' + table 
                      + ' WHERE ' + condition + ' ;',
                        function(error, results) {
            if (error) throw error;
            cb(results);
        });
    }
}

module.exports = orm;