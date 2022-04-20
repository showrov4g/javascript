// console.log("hello world");

// function add( num1, num2){
//     console.log(num1 + num2);
// }
// add( 3 , 9 );

// function add(){
//     if(arguments.length == 0){
//         console.log("No arguments passed !");
//     }else{
//         let sum =0;
//         for(let i = 0; i < arguments.length; i++){
//             sum = sum + arguments[i];
//         }
//         console.log(sum);
//     }
// }

// let addition = add;
// addition(5, 5);
// add(5, 7, 10);

// function return


// function compare(a, b){
//     if(a > b){
//         return 1;
//     }else if(a < b){
//         return -1;
//     }else{
//         return 0;
//     }
// }
// let c = compare ( 7, 6);

// document.write(c);


// let car = "Audi";

// function add(){
//     let result = 33;
// }

// add();

// console.log(result);



// (function(){
//     let string = "hello";

//     console.log(string);
// })();
// (function(){
//     let msg = "hello my script";

//     function show(){
//         console.log(msg);
//     }
//     show();
// })();


// Object


let person = {
    first_name : "Showrov",
    middle_name : "kumar",
    last_name : "ghosh",
    say_hello(){
        console.log(`Hello i am ${person.first_name}. I have a ${car.brand}. This car model number is ${car.model}`);
    }
};
let car = {
    brand : "Tata",
    model : "Indiga CS"
}
person.say_hello(); 


