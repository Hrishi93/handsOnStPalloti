//Normal Function
function add(n1, n2){
    return n1+n2;
}
console.log("Normal Function ", add(23,45))

//ArrowFunction
const addArrow = (n1 , n2) => (n1+n2);
console.log("Arrow Fuction ", addArrow(23, 50))

//ArrowForString
const fullName = (firstName , lastName) => (firstName+lastName)
console.log("Full Name is " , fullName("Ram ", "Kumar"))



// const result = (age>18) ? "Voter" : "Not Voter"