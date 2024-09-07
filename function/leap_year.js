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

