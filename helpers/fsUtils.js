const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const util = require('util'); 

// Read data from a file and parse it as JSON
const readFileJSON = (filePath) => {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading file:', error);
      return [];
    }
  };
  
  // Write JSON data to a file
  const writeFileJSON = (filePath, data) => {
    try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error writing file:', error);
    }
  };
  
  // Generate a unique ID using uuidv4
  const generateUniqueID = () => {
    return uuidv4();
  };
  
  module.exports = {
    readFileJSON,
    writeFileJSON,
    generateUniqueID,
  };