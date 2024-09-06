function evenSizedString(str) {
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0) {
        console.log('even size');
        return true;
    }
    else {
        console.log('odd size');
        return false;
    }
}

// evenSizedString("dhaka");
// evenSizedString("faka");


function doubleOrTriple(number, doDouble) {
    if (doDouble === true) {
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

function numberOfElement(number){
    const len = number.length;
    return len;
}

// console.log (numberOfElement([12,14,58,77,887,7874,]));

function getAge(person){
    const age = person.age;
    return age;
}

function sumOfNumbers(){
    return(5);
}

const sum = sumOfNumbers();
console.log('Sum of numbers is', sum)