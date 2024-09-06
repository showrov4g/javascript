// function inchToFeet(inch){
//    const feet = inch / 12;
//    return feet;   
// }

// const showrovHeight = inchToFeet(70);

// console.log(showrovHeight);


// function inchToFeet2(inch){
//     const feetFraction = inch / 12;
//     const feetNumber = parseInt(feetFraction);
//     const inchRemaining = inch % 12;
//     const result = feetNumber + " Ft " + inchRemaining + " inch "
//     return result;
// }

// const showrovHeight = inchToFeet2(75);
// console.log(showrovHeight);

// mile to kilometer 

function mileToKilometer(mile){
    const Kilo = mile * 1.60934;
    return Kilo;
}
const kilometer =  mileToKilometer(50);
console.log(kilometer)