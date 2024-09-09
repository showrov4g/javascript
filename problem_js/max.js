const jim = 56;
const tim = 89;
const kim = 90;

if (jim > tim && jim > kim) {
    console.log('jim is the ultimate boss');
}
else if (tim > jim && tim > kim) {
    console.log("Tim is the Boss");

} else {
    console.log('kim is the ultimate king');

}
function getThreeNumberMax(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1
    }
    else if (num2 > num1 && num2 > num3) {
        return num2
    }
    else {
        return num3;
    }
}
let maxNumber = getThreeNumberMax(81, 80, 78);

console.log(maxNumber);
let max = Math.max(12, 3, 90, 45, 76, 112);

console.log('max using Math.max', max);
