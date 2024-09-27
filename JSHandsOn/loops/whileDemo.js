function msg(){
    let n=1;

    while(n<5){
        console.log(n, " Hello, Nagpur"); //1 2 3 4
        n++;//2 3 4 5
    }
    console.log("Value of n at Last "+n) //5
}

//msg();

//WAP table of 34
function table(){
    let number=34;
    let n=1;
    while(n<=10){
        console.log(number," * ", n, " = ", number*n);
        n++;
    }

    console.log("Out of loop")
}

table();
//WAP reverse Table 12