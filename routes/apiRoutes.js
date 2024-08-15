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

module.exports = router;