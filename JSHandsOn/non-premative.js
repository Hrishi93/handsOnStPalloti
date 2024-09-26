const states=new Array();
console.log(states)
/*
const cities=["Nagpur", "Yavatmal", "Amravati", "Wardha"]
console.log(typeof(cities));
console.log(cities);
console.log(cities[1]);
console.log(cities[3]);
console.log('-------------------');
*/
const employee ={
    firstName : "Hrishikesh",
    lastName :"Mahure",
    age:18,
    address:{
        city:"Yavatamal",
        streetName: "Main Road",
      pinCode:"445001"
    }   
}

delete employee.age;
delete employee.address.streetName;
console.log(employee)

/*
console.log(typeof(employee));
console.log(employee.firstName, " ", employee.lastName, " ", employee.age);
console.log(employee.address.city, " ", employee.address.streetName, ' ', employee.address.pinCode)
console.log('-------------------');

const todayDate= new Date();
console.log(typeof(todayDate))
console.log("Date and Time is ",todayDate)
*/


