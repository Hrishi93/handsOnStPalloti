const numers=[];
const cities=new Array("Hrishi", "Saam");

console.log(numers);
console.log(cities)

numers.push(10); // inserting last elemet
numers.push(20);
numers.push(30);
numers.unshift(40);
numers.push(50);
numers.unshift(60);
console.log("unshift ",numers);
numers.pop(); // deleting the last value
console.log(" pop " ,numers);
numers.shift();
console.log("shift ",numers)

let numers2=[11,22,33,44,55];
let newNumbers=numers.concat(numers2);
console.log("New Array ", newNumbers)


//Take home Activity - find out other methos of Array 