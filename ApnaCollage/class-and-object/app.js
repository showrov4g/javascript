class person {
  constructor(name) {
    this.species = "homo sapiens";
    this.name = name;
  }
  eat() {
    console.log("he is eating Apple");
  }
}

class engineer extends person {
  constructor(name) {
    super(name);
  }
  work() {
    super.eat();
    console.log("solve problem, build something");
  }
}

let engObj = new engineer("softer Engineer");

