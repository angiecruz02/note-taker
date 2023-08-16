const express = require('express');


const notesRouter = require('./notes');
// TODO: import your diagnostics route

const app = express();


app.use('/notes', notesRouter);
// TODO: Initialize diagnostics route

module.exports = app;
