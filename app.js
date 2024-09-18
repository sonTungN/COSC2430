const express = require('express');
const app = express();

const route = require('./routes/index');

// Port number
const port = 3000;

// Set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", "views");

// Use the static folder
app.use(express.static("public"));

// JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home route
route(app);

// Start the server
app.listen(port, function () {
  console.log(`Server started on: http://localhost:${port}`);
});
