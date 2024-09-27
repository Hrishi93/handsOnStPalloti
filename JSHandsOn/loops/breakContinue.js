let n;

for(n=1;n<=10;n++){
    console.log("First Line of loop ", n) // 6 7
    if(n==6){
        //console.log("Terminate the loop ", n);
        //break;
        console.log("Stop the current Itreration")
        continue;
    }
    console.log("Last line of loop ", n) // 7
}
console.log("Out of loop ", n)