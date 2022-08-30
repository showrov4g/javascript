let arr = [45, 67, 89];
let a = arr.map((value, index, array)=>{
    console.log(value, index, array);
    return value + index;
})
console.log(a);