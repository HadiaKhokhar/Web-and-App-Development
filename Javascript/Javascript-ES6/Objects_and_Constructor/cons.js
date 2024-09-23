// Constructor For Car 
function Car(make,model,year,price,fuelEfficiency){
    this.Manufacturer = make;
    this.Model = model;
    this.Year = year;
    this.Price = price;
    this.fuelEfficiency = fuelEfficiency;
    this.printDetail = function(){
        console.log(`Manufacturer = ${this.Manufacturer}, Model = ${this.Model}, Year = ${this.Year}, Price = ${this.Price};`)
    }
    this.updatePrice = function(newPrice){
        this.Price = newPrice;
    }
    this.isClassic = function(currentYear){
        if ((currentYear - this.Year) > 25){
            return true;
        }
        return false
    }  
    this.calculateFuel = function(ditanceInMiles){
        return Math.round(ditanceInMiles / this.fuelEfficiency)
    }
    this.calculateAge = function(){
        var currentYear = new Date().getFullYear()
        return currentYear - this.Year
    }
}
Car.prototype.adjustFuelEfficiency = function(){
    var carAge = this.calculateAge()
    switch(carAge){
        case (carAge >= 5 && carAge <= 10 ):
            this.fuelEfficiency -= 1
            break;
        case (carAge > 10):
            this.fuelEfficiency -= 2
            break;
    }
}

// Object creation
var car1 = new Car("Toyota","Camry",2000,25000,30);
// var car2 = new Car("Honda","Civic",2015,18000,32);
// var car3 = new Car("Ford","Mustang",2018,32000,120);

// Printing details of each car
// car1.printDetail();

// // Updating price of car1
//  car1.updatePrice(28000);
//  car1.printDetail();

 // Checking if car1 is a classic car
 console.log(`Is ${car1.Model} a classic car? ${car1.isClassic(2028)}`);
 
 // Calculating fuel consumption for car1
 console.log(`${Ccar1.Model} fuel consumption For 200 miles: ${car1.calculateFuel(200)} Galoons`);


for (i in car1){
    // Methods are also properties of an object, and you can check for their existence just like regular properties.
    console.log(`${i}`);
}
for (i in car1){
   if(car1.hasOwnProperty(i)){       //will not include property by prototype
       console.log(`${i}`);
}}

function listProperties(obj) {
    var props = [];
    for (var prop in obj) {
      if (typeof obj[prop] !== 'function' && obj.hasOwnProperty(prop)) {
        props.push(prop);
      }
    }
    return props;
  }
  console.log(listProperties(car1));