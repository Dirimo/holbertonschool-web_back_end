import fs from 'fs';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      try {
        const lines = data.trim().split('\n');
        const students = {};
        
        // Skip header line
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line) {
            const [firstname, , , field] = line.split(',');
            if (!students[field]) {
              students[field] = [];
            }
            students[field].push(firstname);
          }
        }
        
        resolve(students);
      } catch (parseError) {
        reject(parseError);
      }
    });
  });
};
