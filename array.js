let num = [1, 2, 34, 4];
let b = num.toString();
console.log(b);
let c =num.join(" ro ");
console.log(c, typeof(c));
console.log(typeof(num));
let r = num.shift();
console.log(num, r); //remove the element

let f = num.unshift(777);
console.log(num, f);