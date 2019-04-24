// Express setup
var express = require("express");
var app = express();

// Port initialization
var PORT = process.env.PORT || 2141;

// Express app handling
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing paths
require("/app/routing/htmlRoutes")(app);
require("/app/routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function () {
    console.log("Application listening on port #" + PORT);
});