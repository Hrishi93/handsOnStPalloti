class Employee{
    //properties
    /*name;
    age;
    city;
    salary;*/
    constructor(newname, newage, newcity, newsalary) {
        this.name = newname; // ram
        this.age= newage; // 23
        this.city = newcity; // ayodhya
        this.salary = newsalary; // 501
    }

    //methods
    //setting the property using methods
    setName(newname){ // newname=sunil
        this.name = newname;  
    }
    setAge(newage){
        this.age=newage;
    }
    setCity(newcity){
        this.city=newcity;
    }
    setSalary(newsalary){
        this.salary=newsalary;
    }


    //getting properties using methods
    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    getCity(){
        return this.city;
    }

    getSalary(){
        return this.salary;
    }
}

let objEmployee= new Employee("Ram", 23); // assign the value
//getting the property using method
console.log(objEmployee.getName());//undefined
console.log(objEmployee.getAge());// undefined
console.log(objEmployee.getCity());// undefined
console.log(objEmployee.getSalary());// undefined

//inserting the property using methods
objEmployee.setName("Sunil"); //
objEmployee.setAge(34); //
objEmployee.setCity('Nagpur'); //
objEmployee.setSalary(50000); //

console.log("-----------------------")
console.log(objEmployee.getName()); // sunil
console.log(objEmployee.getAge());
console.log(objEmployee.getCity());
console.log(objEmployee.getSalary());


// propert+methods => hiding the propert form the end user 
// getting the data and setting the data instead of using propert we use methods


/*console.log(objEmployee);
// inserting the properties using prperty
objEmployee.name="Sunil";
objEmployee.age=34;
objEmployee.city="Mumbai";
objEmployee.salary=32000;

//console.log(objEmployee);
//getting the propert using propert
console.log(objEmployee.name, objEmployee.age,objEmployee.city, objEmployee.salary);
*/