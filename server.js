
var express = require("express");

// express server
var app = express();

//initial listener
var PORT = process.env.PORT || 3000;

// express.json and express.urlEncoded interpret data sent to server better/easier

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
//interprets data from routing

// listner start server

app.listen(PORT, function() {
  console.log("App listening on PORT: "+ PORT);
});
