//let toc , dbms , ds , dsa, cn;
function calculateGrade(){
        //let num='10';
        //let intNumber=parseInt(num)

       let toc=parseInt(document.getElementById("toc").value);
       let dbms=parseInt(document.getElementById("dbms").value);
       let ds=parseInt(document.getElementById("ds").value);
       let dsa=parseInt(document.getElementById("dsa").value);
       let cn=parseInt(document.getElementById("cn").value);

        let obtainMarks=toc+dbms+ds+dsa+cn;

        let perc=(obtainMarks/500)*100

        document.getElementById('obtainMarks').innerHTML="Obtain Marks is :"+obtainMarks;
        document.getElementById('percentage').innerHTML="You Got "+perc+"%";

        if(perc>=90 && perc<=100){
                document.getElementById('grade').innerHTML="Grade is A";
        }
        else if(perc>=80 && perc<90){
                document.getElementById('grade').innerHTML="Grade is B";
        }
        else if(perc>=70 && perc<80){
                document.getElementById('grade').innerHTML="Grade is C";
        }
        else if(perc>=0 && perc<70){
                document.getElementById('grade').innerHTML="Grade is D";
        }
        else{
                document.getElementById('grade').innerHTML="Invalid Marks"; 
        }
}