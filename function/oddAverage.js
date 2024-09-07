function oddAverage(numbers) {
    const odds = [];
    for(let value of numbers){
       if (value % 2 ===1){
        odds.push(value)
       }
        
    }
    // console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count= odds.length;
    console.log(sum, count);

    const avg = sum / count;
    return avg;
    
}

const numbers = [42, 45, 13, 58, 65, 81,9,8,544, 87,54,554,874,654,54,45,45,45,45,45,45,45,4,78,78,8,78,,54,51,,45,4,1,2,1254,8,7,1,23,145,45,45,4,87,8,5,45,7,84,54,54,5,,54,54,5,78,4,54,8,78,45,4,87,51,5,7,54,5,45,5,41,878,,965,6,5,6,455,465,6,5,64,6,5,4,87,4,5,4,56,6,5,698,,475,46,5,68,9,84,4,655,65,64,65,56,4,87,9,596,526,54569,9,5,65,9,,526,5,954,65,26,458,54,54,5,487,84,65,65,6896,2,65,4,6,5,89,96,5,65,67,96,52,64,6,56,5,98,9,465,56,5,9,94,65,68,9,456,5,68994596,52,64,6,96596,796,5,6,49,789,6,9687,9,56,5,64,564,6];
const avg = oddAverage(numbers);
console.log('average of the odd numbers is:', avg);