class ToyotaCar {
    constructor(){
        // console.log("this is constructor");
        
    }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
  setBrand(brand){
    this.brand = brand;
  }
}

let fortuner = new ToyotaCar();
fortuner.setBrand('fortuner'); 

let luxes = new ToyotaCar();
luxes.setBrand('luxes')