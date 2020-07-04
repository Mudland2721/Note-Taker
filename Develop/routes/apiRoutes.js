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
    let currNote = JSON.stringify(newNote);
    if (newNote === " ") {
        newNote.id = 0;
    } else {
        newNote.id = madeNote.length;
    }
    madeNote.push(newNote);

    fs.writeFile("../db/db.json", function(err) {
        if (err) throw err;
        console.log("New Note Created")
        res.send()
    })
})

app.delete("/api/notes/:id", function(req, body) {
    let erase = req.body.id;
    madeNote.splice(erase, 1);
    if (madeNote.length === 0 || madeNote === undefined || madeNote === null) {
        for (let i = 0; i < madeNote.length; i++) {
            madeNote[i].id = i;
        }
    }
    fs.writeFile("../db/db.json", function(err) {
        if (err) throw err;
        console.log("Note deleted")
        res.send();
    })
})