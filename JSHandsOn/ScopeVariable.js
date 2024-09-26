let num=10; // global Variable
const constNum=25; // Global Constant Variable

{
    let num=20;
    const constNum=35  // local
    console.log("Inside Block ",num) // local variable // 20
    console.log("Inside Block ",constNum)//35
}

console.log("Outside ", num)//10
console.log("Inside Block ",constNum)//25