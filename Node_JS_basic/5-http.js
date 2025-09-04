const http = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    // save log to restore later
    const originalLog = console.log;

    // empty string to catch logs
    let output = '';

    // temmporary log to catcht logs message and build answer
    console.log = (message) => { output += `${message}\n`; };

    countStudents(databasePath)
      // restore original log and show answer
      .then(() => {
        console.log = originalLog;
        res.write(output.trim());
        res.end();
      })
      .catch(() => {
        // restore original log and error message
        console.log = originalLog;
        res.end('Cannot load the database');
      });
  }
});
app.listen(1245);

module.exports = app;
