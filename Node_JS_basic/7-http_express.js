const express = require('express');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = express();

// root route
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

// /students route
app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');
  const text = 'This is the list of our students\n';

  // save log to restore later
  const originalLog = console.log;

  // empty string to catch logs
  let output = '';

  // temporary log to catch log messages and build answer
  console.log = (message) => { output += `${message}\n`; };

  // await the answer to avoid having asynchronous response
  try {
    await countStudents(databasePath);
    console.log = originalLog;
    res.send(text + output.trim());
  } catch (err) {
    // restore original log and show error message
    console.log = originalLog;
    res.send('Cannot load the database');
  }
});

// listen on port 1245
app.listen(1245);

module.exports = app;
