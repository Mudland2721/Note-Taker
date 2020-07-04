const app = express();
const fs = require("fs");
const madeNote = require("../db/db.json");
//api routes 
app.get("/api/notes", function(req,res) {
    console.log("Note Saved");
    return res.json(madeNote);
});

app.post("/api/notes", function(req, res) {
    let newNote = req.body;
    app.push(newNote)
})