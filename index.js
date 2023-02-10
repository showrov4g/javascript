let marks = prompt("Inter your number");

if(marks >= 80 && marks <= 100) {
    document.getElementById("demo").innerHTML = "A+"
}else if(marks >= 70 && marks <= 79) {
    document.getElementById("demo").innerHTML = "A"
}else if(marks >= 60 && marks <= 69) {
    document.getElementById("demo").innerHTML = "B"
}else if(marks >= 50 && marks <= 59) {
    document.getElementById("demo").innerHTML = "c"
}else if(marks >= 40 && marks <= 49) {
    document.getElementById("demo").innerHTML = "D"
}else{
    document.getElementById("demo").innerHTML = "Fail";
}