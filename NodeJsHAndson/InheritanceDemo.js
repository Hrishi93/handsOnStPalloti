class RBI{
    bankPolicy(){
        console.log("Bank Regulation Act 1975")
    }

    roi(){
        console.log("Rate of Interest is 5%")
    }
}

class SBI extends RBI{
    roi(){
        console.log("Rate of Interest is 8%")
    }

    bankAct(){
        console.log("Bank will run as per Public Sector Bank ACT 1984")
    }
    
}

class HDFC extends RBI{
    roi(){
        console.log("Rate of Interest is 10%")
    }
}


class DistrictBank extends SBI{
    roi(){
        console.log("ROI 9%")
    }
}
console.log("-----DB------")
let objDB=new DistrictBank();  
objDB.bankPolicy(); // child is able to access the prop of grandParent
objDB.bankAct(); // child is able to acccess the prop of parent class
objDB.roi(); // grand over into parent again over into child

//let objRBI=new RBI();
//objRBI.roi();
//objRBI.bankPolicy();
//objRBI.bankAct(); // not able to access the propert of child class into parent class

console.log("-----SBI------")
let objSBI=new SBI();
objSBI.bankPolicy();  // 1975
objSBI.roi();  // 8%

console.log("-----HDFC------")
let objHDFC=new HDFC();
objHDFC.bankPolicy(); // 1975
objHDFC.roi() // 10%