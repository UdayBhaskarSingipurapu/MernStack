 import {employees} from './ass8.js'

 console.log(employees);
let arr=[];
 employees.forEach(function(element){
    if(element.address.city == 'hyderabad'){
        arr.push(element.name);
    }
 })
 console.log(arr);

 let a=[];
 employees.forEach(function(ele){
    if(40<= ele.age <= 50){
        a.push(ele.name);
        a.push(ele.address);
    }
 })
 console.log(a);

 let ar=[];
 employees.forEach(function(value){
    if(value.address.city != 'hyderabad'){
        ar.push(value.name);
    }
 })
 console.log(ar);

 let reactjsEmployees = employees.filter(function(employee) {
    return employee.skills.includes("reactjs");
});


let reactjsEmployeeNames = reactjsEmployees.map(function(employee) {
    return employee.name;
});


let reactjsEmployeeNamesArray = [];


reactjsEmployeeNames.forEach(function(name) {
    reactjsEmployeeNamesArray.push(name);
});
console.log(reactjsEmployeeNamesArray);