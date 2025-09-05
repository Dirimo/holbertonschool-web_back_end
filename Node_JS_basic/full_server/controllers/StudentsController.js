import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const databasePath = process.argv[2] || './database.csv';
      const students = await readDatabase(databasePath);
      
      let result = 'This is the list of our students\n';
      
      // Sort fields alphabetically (case insensitive)
      const sortedFields = Object.keys(students).sort((a, b) => 
        a.toLowerCase().localeCompare(b.toLowerCase())
      );
      
      sortedFields.forEach(field => {
        const studentList = students[field];
        result += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
      });
      
      response.status(200).send(result.trim());
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    
    try {
      const databasePath = process.argv[2] || './database.csv';
      const students = await readDatabase(databasePath);
      
      const studentList = students[major] || [];
      response.status(200).send(`List: ${studentList.join(', ')}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}
