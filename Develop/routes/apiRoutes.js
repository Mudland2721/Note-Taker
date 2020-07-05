const fs = require("fs");
const madeNote = require("../db/db");

module.exports = function (router){
//api routes 
router.get("/api/notes", function(req,res) {
    console.log("Note Saved");
    return res.json(madeNote);
});

router.post("/api/notes", function(req, res) {
    let newNote = req.body;
    let currNote = JSON.stringify(newNote);
    if (newNote === " ") {
        newNote.id = 0;
    } else {
        newNote.id = madeNote.length;
    }
    madeNote.push(newNote);

    fs.writeFile("db/db.json", currNote, function(err) {
        if (err) throw err;
        console.log("New Note Created")
        res.send()
    })
})

router.delete("/api/notes/:id", function(req, body) {
    let erase = req.body.id;
    madeNote.splice(erase, 0);
    if (!madeNote.length === 0 || !madeNote === undefined) {
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
};