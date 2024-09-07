let disa = 65;
let salma = 70;

if (disa > salma) {
    console.log("Disha will get the strawberry");
}
else {
    console.log("salman will eat the strawberry");

}

function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

const max1 = getMax(56, 79);
const max2 = getMax(56, 98);
const ultimateMax = getMax(max1, max2)

console.log('max of two is: ', ultimateMax);
