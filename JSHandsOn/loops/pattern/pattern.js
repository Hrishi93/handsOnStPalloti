let rows=5;
let cols=5;

function patternSquare(){
    for(let n=1; n<=rows; n++){
        for(let k=1;k<=cols;k++){ 
            document.write("#");
        }
      document.write("<br>"); // 1
    }  
}

function trianglePattern(){
    for(let i=1; i<=rows;i++){// 2 3
        for(let j=1;j<=i;j++){ // 1  - 1 2 - 123 - 1234 - 12345
            document.write("*");
        }
        document.write("<br>"); 
    }
}