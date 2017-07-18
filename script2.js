// props: make (Mazda), location (USA), airbags (true), abs (true), warranty (60,000 miles / 3 years)

// DECLARE A FACTORY CLASS
// const express = require('express');
// const app = express();
// var isIojs = require('is-iojs');
//
// if (isIojs) {
//   console.log('io.js');
// } else {
//   console.log('not io.js');
// }
//

class Factory {
  constructor({make, location, airbags, abs, warranty}){
    this.make = "Mazda";
    this.location = "USA";
    this.airbags = true;
    this.abs = true;
    this.warranty = "(60,000 miles / 3 years)"
  }
}

class Car extends Factory {
  constructor({make, location, airbags, abs, warranty,model,doors,color,enginetype,transmission, trim, wheelstrim, audio, seatstrim, moonroof}){
    super({make, location, airbags, abs, warranty});
    this.enginesize = 4;
    this.navigation = true;
    this.backupcamera = true;
    this.warranty = "(100,000 miles / 5 years)"
  }
}

class Sport extends Car {
  constructor({
    model, trim, transmission, top, color, seatstrim, audio, wheelstrim
  }){
    super({doors,enginetype, moonroof})
    this.doors = "2";
    this.moonroof = false;
    this.enginetype = "gasoline";
    this.convertible = true;

  }
}

class Truck extends Factory {
  constructor ({model, color, enginesize, hitch, bed, navigation}){
  super(warranty)
  this.standard_backupcamera = true;
  this.audio = "basic";
  this.warranty = "(150,000 / 6 years)";
}}

let mazda3 = new Sport("Mazda","mazda3", null, "red", "hybrid", "automatic", "touring", "base", "premium", "leather", true)

console.log(mazda3);

// console.log("Building " + functions.massBuild("35,000", "red", "touring Mazda3's"));

// console.log(customerBuild("1", "yellow", "mazda3", ["weather package, satellite radio, rear spoiler"]));

let miata_RF = new Car (
  "Miata-RF", "Grand Touring", "manual", "hard top", "red", "leather", "premium", "premium"
);
console.log(Miata_RF);


// import {massBuild, customerBuild} from './Util/function.js'
