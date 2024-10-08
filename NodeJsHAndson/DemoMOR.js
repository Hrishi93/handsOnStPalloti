class Operations{
    add(){
        console.log("Operations add method")
    }

    sub(){
        console.log("Operations sub method")
    }
}

class Addition extends Operations{
    add(){
        let n1=10;
        let n2=20;
        console.log(n1+n2);
    }
}

class Subtraction extends Operations{
    sub(){
        let n1=20;
        let n2=10;
        console.log(n1-n2)
    }
}

let objOp=new Operations();
objOp.add();
objOp.sub();

let objADD=new Addition();
objADD.add();

let objSUB=new Subtraction();
objSUB.sub();

