const notes = require('express').Router();
// to generate unique IDs
const { v4: uuidv4 } = require('uuid');

const storedNotes = require('../Develop/db/db.json');

notes.get('/', (req, res) => {
  res.json(storedNotes);
});

notes.post('/', (req, res) => {
  
});

module.exports = notes;
