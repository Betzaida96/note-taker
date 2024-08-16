const express = require('express')
const router = express.Router();
const fs = require('fs');
const path = require('path');
const{v4:uuidv4} = require('uuid');

//log error
router.post('/', (req, res) => {
    const diagnosticsData = req.body;
    diagnosticsData.id = uuidv4();
    fs.appendFile(path.join(__dirname, '../db/db.json'), JSON.stringify(diagnosticsData, null, 2) + '\n', (err) => {
        if (err) {
            res.status(500).json({error: 'Failed to log diagnostics'});
        } else {
            res.json({message: 'Diagnostics logged'});
        }
    });
});

module.exports = router;