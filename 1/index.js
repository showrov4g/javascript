function person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
const myFather = new person("john", "Deo", 50, "blue");
const myMother = new person ("Dony", "danail", 35, "blue");

document.getElementById("demo").innerHTML = "My father is" + " " + myFather.age + "."+ "My mother name is"+ " "+ myMother.age ;