function multi(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'please provide a number'
    }
    const multi = a * b;
    return multi;
}

const result = multi(7, 4);
// console.log(result);

function fullName(first, second) {
    if(typeof first !== "string" || typeof second !== 'string'){
        return 'number is not allowed';
    }
   const full = first + " " + second; 
   return full;
}

const full = fullName (5, 6);
// console.log(full);

// product price 

function productPrice(product){
    if (typeof product !== 'object'){
        return 'please provide an object';
    }
    const price = product.price;
    return price;
}

const price = productPrice({name: 'pen', price: 5, color: 'red'});

// console.log(price);

function getSecond(number){
    if (Array.isArray(number) === false){
        return 'please provide an array';
    }
    
    const second = number[1];
    return second;
}
const second = getSecond([2,34,56,76])
// console.log(second);
const sk = "showrov ghosh";
let val=sk.toUpperCase();
console.log(val)
