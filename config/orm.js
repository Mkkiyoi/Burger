let connection = require('connection');

let selectAll = () => {
    connection.query('SELECT * FROM Burgers', (error, results, fields) => {
        if (error) throw error;
    });
}

let insertOne = (burger_name) => {
    connection.query('INSERT INTO Burgers (BurgerName) VALUES (?)', [burger_name], (error, results, fields) => {
        if (error) throw error;
    });
}

let updateOne = (devoured, burger_name) => {
    connection.query('UPDATE Burgers SET Devoured=? WHERE BurgerName=?', [devoured, burger_name], (error, results, fields) => {
        if (error) throw error;
    });
}