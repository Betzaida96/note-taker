const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const {v4: uuidv4} = require('uuid');

//read db.json and return content
router.get('/notes', (req, res) => {
    fs.readFile(path.join(__dirname,'../db/db.json'), 'utf8', (err, data) => {
        if(err) {
          res.status(500).json({error: 'Falied to read notes'});
        } else {
            res.json(JSON.parse(data));
        }
    });
});

//post notes
router.post('/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();

    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read notes'});
        }
        const notes = JSON.parse(data);
        notes.push(newNote);

        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save note'});
            }
            res.json(newNote);
        });
    });
});

//delete the notes
router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;

    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read notes'});
        }

        let notes = JSON.parse(data);
        notes = notes.filter( note => note.id !== noteId);

        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes, null, 2), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Failed to delete note'});
            }

            res.json({ message: 'Note deleted successfully'});
        });
    });
});

module.exports = router;