const numbers = [4,5,2,8,10]

const doubled =[];

function doubleIt(num){
    console.log('num now', num)
    return num*2;
}

const double2 = n => n*2;


const output  = numbers.map(double2);
const output2 = numbers.map(n => n*2);
console.log(output2);
