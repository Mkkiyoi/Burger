// Import Node Modules
let express = require('express');
let app = express();
var exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let routes = require('./controllers/burgers_controller');

app.use(routes);

app.listen(PORT, (error) => {
    if (error) throw error;
    console.log('Server listening on PORT: ' + PORT);
});

