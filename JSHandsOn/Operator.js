//Arethematics operators
let num1=30;
let num2=40;

let add=num1+num2; 
let sub=num1-num2;
let mul=num1*num2;
let div=10/3; // Qutiant / Ans / 1.333
let div2=10%3; // Reminder 10

/*console.log("add "+add);
console.log("sub "+sub);
console.log("mul "+mul)
console.log("div "+div)
console.log("div2 ", div2)*/

// assengment operator
/*let number=20;
console.log(number)//20
number+=10; //10 will be add into 20 = 30
console.log(number);// 30
number+=25; //-25 // 30 will rpalce bhy -25
console.log(number);// 55
// += assignment 
number-=20; // 55 - 20 = 35
console.log(number) //35
number*=2;
console.log(number)// 70
//number=*5;
number/=5; // Q
console.log(number) // 14
number%=3; //R
console.log(number) //2
*/

//relational operator / caparison
let value1=10;
let value2=20;

/*console.log(value1==value2)//false
console.log(value1>=value2); // false // >=
console.log(value1<value2); //true <=
console.log(value1!=value2);//true
*/


let digit1=10; // value  number loose
let digit2='10'; // value string tight
/*
console.log(digit1==digit2); //true value are same
console.log(digit1===digit2);// false type is diffrent
*/
let binaryNumber= 0b0010; //2
let binaryNumber2=0b1010; //10   
/*
        0010      0010       logical and =  1 1 = 1, 1 0 =0,    
        1010      1010       logical or = 0 0 =0 , 1 1 = 1, 1 0 = 1
        -----     ----
        0010      1010
*/
// bitwise operator
const outputAND=binaryNumber & binaryNumber2;
const outputOR=binaryNumber | binaryNumber2
console.log(outputAND); //2
console.log(outputAND.toString(2)); // 0010
console.log(outputOR); //10
console.log(outputOR.toString(2)); //1010

//logical 
let logNum1=10;
let logNum2=20;
console.log(logNum1<logNum2 && logNum1==20)// true false = false
console.log(logNum1<logNum2 && logNum2==20)// true true = true
console.log(logNum1<logNum2 || logNum1==20)// true false = true
console.log(logNum1<logNum2 || logNum2==20)//true true = true


let  num3, num4, num5;
num3=10;
num4=20;
num5=30;

