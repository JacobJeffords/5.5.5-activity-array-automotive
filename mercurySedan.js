//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass").Vehicle

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.fuel = 10;
        this.maxPassengers = 5;
        this.numberOfWheels = 4;
        this.passenger = 0;
        this.maxSpeed = 160;
        this.scheduleService = false;
        console.log("test")
    }
    loadPassenger() {
        if (this.passenger < this.maxPassengers) {
            this.passenger = loadPassenger
            console.log("Passengers loaded. Current passenger count: ") + loadPassenger
        } else {
            console.log("Cannot load more passengers, car is full. Current passenger count: ") + loadPassenger
        }
    }
    start() {
        if (this.fuel > 0) {
            console.log("Vehicle sufficiently fueled. Engine has started.")
            return this.started = true
        } else {
            console.log("Not enough fuel. Engine has not started.")
            return this.started = false
        }
    }
    service() {
        if (this.mileage > 30000) {
            console.log("Service automatically scheduled.")
            this.scheduleService = true
            return this.scheduleService;
        }
    }
}

let myCar = new Car("Mercury", "Sedan", "1965", "color", "mileage")
console.log(myCar)












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
