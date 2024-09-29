const student = {
  name: "showrov Ghosh",
  id: 1,
  expericence: "top level computer programmer",
  mark: 100,
  village: "Fazilpur",
  printMarks: function(){
    console.log("mark =", this.mark);
  }
};


let arr = ['mango','lichi', 'apple'];

const employee ={
    calcTax1(){
        console.log("tax rate is 15%");
    },
    calcTax2: function(){
        console.log("tax rate is 15%");
        
    }
}

// new object 

const showrovGhosh1 = {
    salary: 50000,
}
const showrovGhosh2 = {
    salary: 50000,
}
const showrovGhosh3 = {
    salary: 50000,
}
showrovGhosh1.__proto__ = employee;
showrovGhosh2.__proto__ = employee;
showrovGhosh3.__proto__ = employee;