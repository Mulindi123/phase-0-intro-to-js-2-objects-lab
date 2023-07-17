let employee = {name: 'Joshua Mwaniki', streetAddress: 'Githunguri'};


function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
      };
    }
    
updateEmployeeWithKeyAndValue(employee, 'name', 'Mary Mwaniki')

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Michael Mukoshi')


function deleteFromEmployeeByKey(employee, key) {
    const newestEmployee = {...employee};
    delete newestEmployee[key];
    return newestEmployee;
}
deleteFromEmployeeByKey(employee, 'streetAddress')
console.log(newestEmployee);

function destructivelyDeleteFromEmployeeByKey(employee, key) {
delete employee[key];
return employee;
}
destructivelyDeleteFromEmployeeByKey(employee, 'name')
console.log(employee)