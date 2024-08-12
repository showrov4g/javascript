const person = {
    firstName : "Showrov",
    midName : "Kumar",
    lastName: "ghosh",
    age: 35,
}

person.company = "google";

delete person.midName;
delete person.age; 

console.log(person);