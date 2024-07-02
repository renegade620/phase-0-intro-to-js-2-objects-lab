// Write your solution in this file!
const employee = {
    name: "Melissa Ogutu",
    streetAddress: "11 Street Mombasa"
};

// function that updates object employees without mutation
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };

    newEmployee[key] = value;

    return newEmployee;
}

// function that destructively updates object employees
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

// function that deletes key from employee clone
function deleteFromEmployeeByKey(employee, key) {
    const newerEmployee = {...employee};
    delete newerEmployee[key];
    return newerEmployee;
}

// function that returns employee without the deleted key/vaue pair
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}