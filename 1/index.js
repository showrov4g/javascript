function Person(fName, lName) {
    this.firstName = fName,
        this.lastName = lName
}

Person.prototype.gender = "male";

const Person1 = new Person("Elon", "musk");
const Person2 = new Person("Bill", "Gates");

console.log(Person1);
