// Import Node Modules
let mysql = require('mysql');
require('dotenv').config();
let keys = require('keys');

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: keys.CREDENTIALS.id,
    password: keys.CREDENTIALS.secret,
    database: "BurgerDB"
});

connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;

