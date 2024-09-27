function msg(){ 
            let i; 
           for(i=1; i<=5; i++){//4 7
            i++;//2 5
            console.log(i," Hello, Nagpur")// 2 5
            i++;//3 6
           }
           console.log("Value of i at last ", i)//7
           }

//WAP to display the Table of 34
function table(){
    let number=34;
    let n;
    for(n=1; n<=10; n++){
        console.log(number," * ",n,"=",number*n);
    }
}

//table();

//WAP to display the Reverse Table of 12

function reverseTable(){
    let number=12;
    let n;
    for(n=10; n>=1; n--){
        console.log(number," * ",n,"=",number*n)
    }
}
reverseTable();
