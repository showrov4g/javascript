// find the lowest number using for of loop

const heights2 = [167, 190, 120, 165, 137];

let lower = heights2[0];
for (let number of heights2) {
    if (number < lower) {
        lower = number;
    }
}
// console.log(lower);
// find lowest value using function

function lowestValue(input) {
    let lowest = input[0];
    for (const number of heights2) {
        if (number < lowest) {
            lowest = number;
        }
    }
    return lowest;
}

let result = lowestValue(heights2);
// console.log(result);
// finding the smallest name from this Array
// const height = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];



// function sortName(name){
//     let nameValue = name[0];
//     for(const name of height){
//         if(name.length < nameValue.length){
//             nameValue = name;
//         }
//     }
//     return nameValue;
// }
// const small = sortName(height);

// console.log(small);
const height = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function sortName(name){
    let nameValue = name[0];
    for (const name of height){
        if (name.length < nameValue.length){
            nameValue = name; 
        }
    }
    return nameValue;
}
const small = sortName(height);

console.log(small);
