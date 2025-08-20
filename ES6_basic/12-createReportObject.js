export default function createReportObject(employeesList) {
  // Define empty list to store all employees
  let allEmployees = {};

  // Populate list with input
  allEmployees = Object.assign(allEmployees, employeesList);

  // Create a method to return the number of departments
  const getNumberOfDepartments = function () {
    return Object.keys(allEmployees).length;
  };

  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
