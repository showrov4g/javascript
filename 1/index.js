const person = {
    firstName : "Showrov",
    midName : "Kumar",
    lastName: "ghosh",
    age: 35,
    address: {
        street: "Tesla Road",
        city: "Austin",
        state: "Texas",
        country:"United States",
        zipCode: "78725"
    }
}

person.company = "google";

delete person.midName;
delete person.age; 

console.log(person);