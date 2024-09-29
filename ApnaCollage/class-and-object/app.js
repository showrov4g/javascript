class person {
  constructor() {
    this.species = "homo sapiens";
  }
  eat() {
    console.log("he is eating Apple");
  }
}

class engineer extends person {
  constructor(branch) {
    super();
    this.branch = branch;
  }
  work() {
    console.log("solve problem, build something");
  }
}

let engObj = new engineer("softer Engineer");

