let employee={
    fname:"Ram",
    lname:"Kumar",
    age:32
}

console.log(employee);
console.log(employee.fname)
console.log(employee.age);
console.log("-------------------")


// destructure
let {fname, lname, age}=employee
console.log(fname);
console.log(lname);
console.log(age);
