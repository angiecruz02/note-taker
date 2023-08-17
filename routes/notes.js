const notes = require('express').Router();
const { readFileJSON, writeFileJSON, generateUniqueID } = require('../helpers/fsUtils');
const path = require ('path');
const { v4: uuidv4 } = require('uuid');

// Read notes from db.json
notes.get('/', (req, res) => {
  const notesData = readFileJSON(path.join(__dirname, '../Develop/db/db.json'));
  console.log('Read notes data:', notesData); 
  res.json(notesData);
});

// Create a new note
notes.post('/', (req, res) => {
  const newNote = req.body;
  newNote.id = generateUniqueID(); // Add a unique ID to the note
  const notesData = readFileJSON(path.join(__dirname, '../Develop/db/db.json'));
  console.log('Existing notes before addition:', notesData);
  notesData.push(newNote);
  writeFileJSON(path.join(__dirname, '../Develop/db/db.json'), notesData);
  console.log('Updated notes after addition:', notesData);
  res.json(newNote);
});

// Delete a note by ID
notes.delete('/:id', (req, res) => {
  const noteIdToDelete = req.params.id;
  const notesData = readFileJSON(path.join(__dirname, '../Develop/db/db.json'));

  // Find index of the note with the given ID
  const noteIndex = notesData.findIndex(note => note.id === noteIdToDelete);

  if (noteIndex !== -1) {
    // Remove the note from the array
    notesData.splice(noteIndex, 1);
    // Update the JSON file with the modified data
    writeFileJSON(path.join(__dirname, '../Develop/db/db.json'), notesData);
    res.json({ message: 'Note deleted successfully' });
  } else {
    res.status(404).json({ error: 'Note not found' });
  }
});

module.exports = notes;