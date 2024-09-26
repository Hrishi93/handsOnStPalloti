
function findVoter(){
    let age=-25;
    if(age>=18){
        console.log("Pearson is a Voter")
        document.getElementById('result').innerHTML="Pearson is a voter and age is "+age;
    }
    else if(age<0){
        document.getElementById('result').innerHTML="Age is not valid";
    }
    else{
       console.log("Pearson is Not a Voter")
       document.getElementById('result').innerHTML="Pearson is Not a voter and age is "+age;
    }


    
/*const output= (age>=18) ? "Pearson is A Voter" : "Pearson is Not a Voter";
    console.log(output)
    document.getElementById("result").innerHTML=output; 
*/
}


//findVoter();