const express = require('express');


const notesRouter = require('./notes');
// TODO: import your diagnostics route

const app = express();


app.use('/notes', notesRouter);

module.exports = app;
