const notes = require('express').Router();

// GET Route for retrieving diagnostic information
notes.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/notes.json
});

// POST Route for a error logging
notes.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/notes.json file
});

module.exports = notes;
