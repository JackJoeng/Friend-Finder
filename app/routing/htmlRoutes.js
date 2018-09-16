var path = require("path");
var questions = require("../data/questions");


module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index", { });
  });

  app.get("/signup", function(req, res) {
    res.render("signup",
    {
      questions: questions
    });
  }); //SAVE FOR LATER

  app.get("/survey", function(req, res) {
    res.render("survey",
    {
      questions: questions
    });
  });
};
