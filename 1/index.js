function Person(first, last){
    this.firstName = first,
    this.lastName = last
}

const person1 = new Person("showrov" , "ghosh");
const person2 = new Person( "dipu", "ghosh");

person1.age = 52;
console.log(person1);
