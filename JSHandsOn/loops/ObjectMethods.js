let employee={
    empName:"John",
    empCity:"NYC",
    empAge: 28
}

let dept={
    deptName:"HR",
    deptHead: "Ram Mohan",
    location: "3rd floor"
}
/*
let info=Object.assign(employee , dept)
console.log(info);
console.log("Keys In Employee ",Object.keys(employee))
console.log("Value In Employee ",Object.values(employee))
*/
employee.empName="Saam Bahadur"
console.log(employee)
Object.freeze(employee);
employee.empAge=76;
console.log(employee)