// array has some duplicate element 

const bairyanikhor = ['abul','babul', 'kabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];

const number = [1,5,61,5,87,7,5,81,61];

function noDuplicate(array){
    const unique = [];
    for (const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

let uniqueArray = noDuplicate(number);

console.log(uniqueArray, uniqueArray.length);
