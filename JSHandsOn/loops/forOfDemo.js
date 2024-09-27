let numbers=[10,20,30,40,50]; // 0 1 2 .. n-1

console.log(typeof(numbers), " : ", numbers);
console.log(numbers[0]);

console.log("-----------");
console.log("Rertrive the Values of Array using for Loop");
for(let i=0;i<numbers.length; i++){
    console.log("Value at ",i," Index is = ",numbers[i]); // 0 1 
}

console.log("-----------");
//take the values for Array want to stire into Variable so that time we use for-of
console.log("----retrive value and store into variable using for-of-------");
//for (variableName of arrayName){}
for(number of numbers){
    console.log(number);
}
console.log("-----------");
console.log(number);

//WAP take array of Cities with 4 index and retrive data in city
let cities=["Nagpur", "Nashik", "Pune", "Nanded", "Yavatmal"];
for(city of cities){
    console.log(city)
}