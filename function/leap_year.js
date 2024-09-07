function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

let value = `This year is ${isLeapYear(1999)}`;
// console.log(value);


function isLeapYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

let lepYear = isLeapYear2(2023);
// console.log(lepYear);

function oddAverage(numbers) {

}

const numbers = [42, 45, 13, 58, 65, 81];
const avg = oddAverage(numbers);
console.log('average of the odd numbers is:', avg);