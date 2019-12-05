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
    all: (table, callback) => {
        connection.query('SELECT * FROM ' + table + ';', (error, results) => {
            if (error) throw error;
            callback(results);
        });
    },
    create: (table, columns, values, callback) => {
        connection.query('INSERT INTO ' + table + ' (' + columns.toString() + ') ' 
                         + ' VALUES (' + printQuestionMarks(values.length) + ');', 
                         values, (error, results) => {
            if (error) throw error;
            callback(results);
        });
    },
    update: (table, objColVals, condition, callback) => {
        connection.query('UPDATE ' + table 
                      + ' SET ' + objToSql(objColVals) 
                      + ' WHERE ' + condition + ';', 
                        (error, results) => {
            if (error) throw error;
            callback(results);
        });
    },
    delete: (table, condition, callback) => {
        connection.query('DELETE FROM ' + table 
                      + ' WHERE ' + condition + ' ;',
                        (error, results) => {
            if (error) throw error;
            callback(results);
        });
    }
}

module.exports = orm;