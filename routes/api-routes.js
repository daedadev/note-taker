const express = require('express');
const router = express.Router();
const note = require("../db/note");
const path = require('path')

router.get('/', (req, res) => {
    note.read().then((notes) => res.json(JSON.parse(notes)));
})

router.get('/notes', (req, res) => {

    note
    .allNotes()
    .then((notes) => res.json(notes))

})

router.post('/notes', (req, res) => {

    note.newNote(req.body);

})

router.delete('/notes/:id', (req, res) => {
    let id = req.params.id
    note.allNotes().then((notes) => {
        for (const note of notes) {
            if (note.id === id) {
                const index = notes.indexOf(note)
                notes.splice(index, 1)
                let getAllNotes = JSON.stringify(notes)
                fs.writeFile('./db/db.json', getAllNotes, (err) =>
                    err ? console.log(err) : console.log('Note Added'));


            }

        }

    })
    note.allNotes().then((notes) => res.json(notes));
});

module.exports = router;