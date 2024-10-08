class Vehicle{
    constructor(make, model){
        if(new.target === Vehicle){
            throw new Error("Vehicle is the abtract Class we are not able to call Constructor");
        }
        this.make = make;
        this.model = model;
    }

    startEngine(){
        //console.log("Engine Get Start")
        throw new Error("this is a abstract method need to Override into sub class")
    }

    vehicleInfo(){
        console.log("Make: ",this.make);
        console.log("Model " ,this.model)
    }

}

// need to call he method of Vehicle Class
//let myVehicle = new Vehicle("Toyota", "Glanza"); // beacause Vehicle is a Abstract Class so we are not able to call Constructor
//myVehicle.vehicleInfo();
//myVehicle.startEngine();

class Car extends Vehicle{
    constructor(make, model, doors){
        super(make, model);
        //this.make=make;
        this.doors=doors;
    }

    //MOR
    startEngine(){
        console.log("Start the Engine of ", this.model)
    }
    carInfo(){
        this.vehicleInfo();
        //console.log("Car Make :", this.make);
       // console.log("Car Model :", this.model);
        console.log("Car doors :", this.doors);
    }
}

const myCar=new Car("Tata", "Nexon", 5);
myCar.startEngine();
//myCar.vehicleInfo();
myCar.carInfo();
