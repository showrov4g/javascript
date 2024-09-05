
// // Print even or odd number 

// for (let i = 0; i <= 100; i++) {
//     if(i%2 !== 0){
//        console.log(i);
//     }
// }

// creating game number 

let gameNum = 25;

let userNum = prompt("Guess the game number :");
while( userNum != gameNum){
   userNum = prompt("you enter wrong number, try new number");
}

console.log('you enter the right number');