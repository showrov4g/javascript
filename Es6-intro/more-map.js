const numbers = [12, 32, 4, 56, 7, 6];

const doubled = numbers.map((num) => num * 2);
// console.log(doubled);

const fiveBonus = numbers.map((num) => num + 5);

// console.log(fiveBonus);

const halves = numbers.map(num => num/2);

// console.log(halves);

const friend = ['tom', 'john','Micheal',"Oliver"];


const lengths = friend.map(frd => frd.length);
console.log(lengths);

const firstLetter = friend.map(fr => fr[0]);

console.log(firstLetter);
