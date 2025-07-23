export default function createReportObject(employeesList) {
  const report = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      let numberOfDepts = 0;
      for (const dept of Object.keys(employeesList)) {
        numberOfDepts += 1;
      }
      return numberOfDepts;
    },
  };
  return report;
}
