class Student{
    num1;
    num2;
    constructor(num1 , num2){
        this.num1 = num1;
        this.num2 = num2;
        //console.log(num1+num2)
    }
    name="Ram";
    age=20;
    display(){
        console.log("Hello "+this.name+" "+this.age)
    }

    showAdd(){
        //console.log(this.num1+this.num2);
        return this.num1+this.num2;
    }
}

function display(){
        console.log("Hello in Function")
}


display(); // calling the function
const objStudent=new Student(23, 45); // default constructor
objStudent.display(); // calling the method of the class
console.log(objStudent.showAdd()); // calling the method of the class
// class Employee
// fname, lname , age , city
// constructor(fname, lname, age, city)
//showEmployee()