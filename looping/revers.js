const numbers = [0,1,2,3,4,5,6,7,8,9];



// for(let num of numbers ){
//     console.log(num);
//     x_revers.unshift(num);
// }

// console.log(x_revers);

// let x_revers = [];
// for (let i = 0; i <= numbers.length; i++){
//     let num = numbers[i];
//     x_revers.unshift(num);
//     console.log(x_revers);
// }

const rev_rev_numbers = [];
for (let i = numbers.length -1; i >=0; i--){
    const num = numbers[i];
    console.log(num);
    rev_rev_numbers.push(num);
}
console.log(rev_rev_numbers);
