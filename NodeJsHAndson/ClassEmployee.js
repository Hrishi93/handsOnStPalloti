class Employee{
    fname;
    lname;
    age;
    city;

    /*constructor(fname, lname, age, city){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.city = city;
    }*/

    setEmployee(fname, lname, age, city){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.city = city;
    }

    showEmployee(){
        console.log("Name :"+this.fname+" "+this.lname);
        console.log("Age "+this.age+" from "+this.city)
    }
}

const objEmployee=new Employee();
objEmployee.setEmployee("Sameer", "Kulkarkarni", 34, "Pune")
objEmployee.showEmployee();