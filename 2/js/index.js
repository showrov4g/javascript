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


// let person = {
//     first_name : "Showrov",
//     middle_name : "kumar",
//     last_name : "ghosh",
//     say_hello(){
//         console.log(`Hello i am ${person.first_name}. I have a ${car.brand}. This car model number is ${car.model}`);
//     }
// };
// let car = {
//     brand : "Tata",
//     model : "Indiga CS"
// }
// person.say_hello(); 

// let person = {
//     first_name : "Showrov",
//     middle_name : "Kumar",
//     last_name : "ghosh",
//     say_hello : function(){
//         console.log(`Hello i am ${person.first_name}. I have a ${car.brand}. This car model number is ${car.model}`)
//     }
// }

// let car = {
//     brand : "Tata",
//     model : "Indiga CS"
// }

// function get_random(min, max){
//     var x = Math.floor(Math.random() * (max - min)) + min;
//     return x;
// }

// console.log(get_random(10, 20));


// let x = new Date('October 13, 2018 11:12:33');


// document.write(x.getDay());


// document.write(Math.sin(90 * Math.PI / 180));

// let x = new Date();

// document.write(Date.now());

// let x = new Date("October 13, 2022 11:12:33");
//  let y = x.setDate(x.getDate() + 50)
// document.write(x );

// var x = new Date("October 13, 2021 11:12:33");
// var y = new Date();


// if(x < y){
//     document.write("X is past Date");
// }else if(x > y){
//     document.write("X is Future Date");
// }else{
//     document.write("X is Same Date");
// }

// new object in javaScript;

// var person = new Object();

// person.name = "Showrov";
// person.age = "22";

// document.write(person.name);


// function Student(first, last, age, cls){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.class = cls;
//     this.nationality = "Bangladeshi";
//     // this.name = function(){
//     //     return this.firstName + " " + this.lastName;
//     // }
// }

// var student1 = new Student("showrov", "kumar", 25 , 5);
// var student2 = new Student("sk", "kumar", 25 , 5);
// var student3 = new Student("dk", "kumar", 25 , 5);
// var student4 = new Student("ak", "kumar", 25 , 5);

// Student.prototype.nationality = "Indian";
// Student.prototype.name = function (){
//     return this.firstName + " " + this.lastName;
// }


// console.log(student1.name()); 


// var user = {
//     id : 101,
//     email: "showrovghosh390@gmail.com",
//     personal_info: {
//         name: "Sk Ghosh",
//         adderss: {
//             street: "dsgsgs",
//             city: "Dhaka",
//             country: "Bangladesh",
//         }
//     }
// }

// console.log(user.personal_info.adderss.country);



// var user = {
//     id: 102,
//     email: "showrovghosh@gmail.com",
//     personal_info: {
//         name: "sk ghosh",
//         address: {
//             street: "fuk",
//             city: "Dhaka",
//             country: "Bangladesh",
//         }
//     }
// }
// console.log(user.personal_info.address.city);

// var user = {
//     id : 102,
//     email: "showrovghosh390@gmail.com",
//     personal_info:{
//         name: "Sk ghosh",
//         address: {
//             street: 'kaligong',
//             city: "jehnaidah",
//             Country: "Bangladesh",
//         }
//     }
// }

// console.log(user.personal_info.address.city);

// hoster

// ghosh();
// function ghosh(){
//     console.log("Hello world");
// }

// var x ;
// x = 7;
// console.log(x);
