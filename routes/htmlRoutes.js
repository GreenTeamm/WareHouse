// Dependencies

const path = require("path");

// routing
module.exports = (app) => {
  // If no matching route is found default to home -placeholder
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/landingpage.html"));
  });
  // login page placeholder
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/loginpage.html"));
  });

  // search page placeholder
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });
};