function Person(first, last){
    this.firstName = first,
    this.lastName = last,
    this.getFullName = function(){
        return this.firstName + " " + this.lastName
    }
}

const Person1 = new Person("Showrov", "Ghosh");
const Person2 = new Person ("Dipu", "ghosh");

console.log(Person2.getFullName());

