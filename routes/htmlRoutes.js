const express = require('express');
const router = express.Router();
const path = requrie('path');

router.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '/public/inex.html'))
});

router.get('/notes',(req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

module.exports = router;