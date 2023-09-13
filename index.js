// Write your solution in this file!
const employee = {}
employee.name = "Davies"
employee.streetAddress = "mirema"
//returns an employee with the original key value pairs and the new key value pair
function updateEmployeeWithKeyAndValue(employee,key,value){
    const newObj = {...employee}
    newObj[key]=value;
    return newObj
}
//updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;
    return employee
}
//
function deleteFromEmployeeByKey(employee,key){
    const newObj = {...employee}
    //deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
    delete newObj.name;
    return newObj
}
//
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee.name
    return employee
}