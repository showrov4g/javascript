let weight = 40;
let height = 1.5;
let bmi = weight / height ^ 2;
if (bmi < 18.5){
    console.log("You are underweight")
}else if (bmi >= 18.5 && bmi <= 24.9){
    console.log("you are normal");
}
else if(bmi >= 25 && bmi <= 29.9){
    console.log("you are overweight");
}
else {
    console.log("You are obese");
}