
// includepath package to get correct path to html

var path = require("path");


module.exports = function(app) {

  // get Requests
  // handles users
  // app.get("/", function(req, res) {
  //   res.json(path.join(__dirname, "/../public/home.html"));
  // });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};
