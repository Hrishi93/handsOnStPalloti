// method Overloading
// if  Same method with para in same calss MOL
/*class Addtion{
    n1=0;
    n2=0;
    n3=0;
    constructor(n1 , n2 , n3){
        this.n1=n1;
        this.n2=n2;
        this.n3=n3;
       // console.log(this.n1+this.n2+this.n3);
    }

    /*constructor(n1,n2,n3){
        this.n1=n1;
        this.n2=n2;
        this.n3=n3;
        console.log(this.n1+this.n2+this.n3)
    }*/
    
    add(){
        this.n1=10;
        this.n2=20;
        return n1+n2;
    }

    add(new1, new2){
        return new1+new2;
    }

    add(new1, new2, new3){
        return new1+new2+new3;
    }
}

let objAdd=new Addtion();
console.log(objAdd.add())// nAn
console.log(objAdd.add(23,34,34)) 
*/
//method Overriding
// Same method same para but in child Class MOR