
class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    set changeName(newName){
        this.name = newName;
    }
}

const person1 = new person("sk ghosh", 24);
const person2 = new person("Dipu ghosh", 24);


person1.changeName = "showrov";

console.log(person1);






