const number = [1,3,4,5,6,8];

for (let num of number){
    // console.log(num);
}

const nobbab = "Siraj Ud Dolla";
for (const char of nobbab){
    // console.log(char);
}


const glass = {
    name: "glass",
    color: "golden",
    price: 12,
    isCleaned: true,
}

for(let key in glass){
    // const value = glass[key]
    // console.log(key, value);
}

const keys = Object.keys(glass);
console.log(keys);
