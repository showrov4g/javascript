class Person {
  constructor(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }
  sleep(){
    console.log(`Sleeping now ${this.name}`)
  }
  activity(){
    this.sleep();
  }
}


const kodom = new Person('Kodom ali', 34,"farmer");

console.log(kodom);

kodom.sleep();


const badam = new Person ("Kacha Badam", 23)
badam.sleep();