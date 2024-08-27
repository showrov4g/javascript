let text = "the temperature is" + toCelsius(77) + "Celsius";

document.getElementById("demo")
.innerHTML = text;


function toCelsius (fahrenheit){
    return (5/9) * (fahrenheit-32);
}