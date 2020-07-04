const express = require('express');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// require("./routes/apiRoutes")(app);

// module.exports = function (app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "./public/index.html"));
    });

    app.get("/notes", function(req,res) {
        res.sendFile(path.join(__dirname,"./public/notes.html"));
    });

    app.get("*", function(req,res) {
        res.sendFile(path.join(__dirname, "./public/index.html"));
    });
// };

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

  