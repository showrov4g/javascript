const height = [45, 65, 76, 44, 67, 87, 34, 232, 343, 54, 23, 8];
// function getMax(numbers) {
//     let max = numbers[0];
//     for (let num of numbers) {
//         if (num > max) {
//             max = num;
//         }
//     }
//     return max
// }
// const max = getMax(height);
// console.log('max value is', max);

// calculation of lowest number form the array 

function getMin(numbers) {
    let min = numbers[0];
    for (let num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

const min = getMin(height);
console.log('min value is', min);
