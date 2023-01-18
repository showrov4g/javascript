console.log(80>=70);

// if (new Date().getHours(10) > 18) {
//     document.getElementById("demo").innerHTML = "Good day!";
//   }

// const hour = new Date().getHours(20); 
// let greeting;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// document.getElementById("demo").innerHTML = "greeting";

let hour = new Date().getHours(20);

let greeting;

if(hour < 24){
    greeting = "good Day";
}else{
    greeting = "Good Evenging";
}

document.getElementById("demo").innerHTML = greeting;