// 0 1 1 2 3 5 8 13 21
function fabSeries(){
    let range=parseInt(document.getElementById('range').value);
    let n1=0; // 1
    let n2=1;

    for(let i=0;i<=range;i++){
        document.write(n1," ")
       // console.log(n1); // 0
        let nextNumber=n1+n2; // 0 + 1
        n1=n2;
        n2=nextNumber;
    }  
}

//fabSeries()