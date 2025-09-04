// import module fs to read file
const fs = require('fs');

function countStudents(path) {
  let students = 0;
  return new Promise((resolve, reject) => {
    // try to read the file
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }

      // count number of non blank line
      const lines = data.split('\n');

      for (let counter = 0; counter < lines.length; counter += 1) {
        if (lines[counter].length > 0) students += 1;
      }

      // skip header if db is not empty
      if (students > 0) {
        students -= 1;
      }

      console.log(`Number of students: ${students}`);

      // empty array for classroom
      const classrooms = [];

      // loop on db to find each classroom (except on first line (headers))
      lines.slice(1).forEach((line) => {
        const parts = line.split(',');
        const field = parts[3];
        // if field and classromm exist; add to the array
        if (field && !classrooms.includes(field)) {
          classrooms.push(field);
        }
      });

      // for each classroom, create a empty array
      const grouped = {};
      classrooms.forEach((field) => {
        grouped[field] = [];
      });

      // loop again on db and add firstname to each classroom array
      lines.slice(1).forEach((line) => {
        const parts = line.split(',');
        const firstname = parts[0];
        const field = parts[3];
        if (firstname && field) {
          grouped[field].push(firstname);
        }
      });

      // show results
      classrooms.forEach((field) => {
        console.log(`Number of students in ${field}: ${grouped[field].length}. List: ${grouped[field].join(', ')}`);
      });
      return resolve();
    });
  });
}

module.exports = countStudents;
