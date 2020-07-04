  const path = require("path");

module.exports = function (app) {
        app.get("/", function(req, res) {
            //  console.log(__dirname);
        res.sendFile(path.join(__dirname + '/Develop/public/index.html'));
         });

        app.get("/notes", function(req,res) {
            res.sendFile(path.join(__dirname,"/Develop/notes.html"));
        });

        app.get("*", function(req,res) {
            res.sendFile(path.join(__dirname, "/Develop/index.html"));
        });
};