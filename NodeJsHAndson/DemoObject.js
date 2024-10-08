//Creating the Object Using Object Constructor
let employee=new Object();
employee.empName="Radhe";
employee.empAge=32;
employee.city="Banglore";
employee.showEmployee=function(){
    console.log("Employee Details: "+this.empName+" "+this.empAge+" "+this.city);
}

//console.log(employee);// { , , ,}
employee.showEmployee();



/*let student={
    fname:"Anil",
    lname:"Kapoor",
    age:16,
    city: "Delhi",

    showStudent: function(){
        console.log("Student Name: ", this.fname, this.lname);
    }
}

student.showStudent();
student.fname="Vivek";
student.showStudent();
//object addition
// num1, num2 , num3, num4
//function add
//function display

console.log("--------------------")
let addition={
    num1:10,
    num2:20,
    num3:30,
    num4:40,
    result: 0,

    add : function(){
        this.result=this.num1+this.num2+this.num3+this.num4;
    },

    display : function(){
        return this.result;
    }

}

addition.add();
console.log(addition.display());




//creating the Object using literal
let student = {}; // empty object
console.log(student); // {}
student.fname="Sunil";
student.lname="Mohan";
student.age=32;

student.showStudent = function(){
    console.log("Student Name: ", this.fname," ",this.lname);
}
//console.log(student); // { , , , ,}
student.showStudent(); // Student Name:  Sunil Mohan


*/