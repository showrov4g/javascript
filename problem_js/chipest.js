const phones = [
    {name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'xoami', price: 18000, camera: '12mp', color: 'black'},
    {name: 'Oppo', price: 30000, camera: '12mp', color: 'black'},
    {name: 'Iphone', price: 100000, camera: '12mp', color: 'black'},
    {name: 'Walton', price: 12000, camera: '12mp', color: 'black'},
    {name: 'HTC', price: 27000, camera: '12mp', color: 'black'},

];

// get height value of mobile

function getHeightPhone(phones){
    let heigh = phones [0];
    for (const phone of phones){
        if(phone.price > heigh.price){
            heigh = phone;
        }
    }
    return heigh;
}
const highPhone = getHeightPhone(phones);
console.log(highPhone);

// function getChepestPhone(phones){
//     let min = phones[0];
//     for (const phone of phones){
//         if (phone.price < min.price) {
//             min = phone;
//         }
//     }
//     return min;
// }

// const cheap = getChepestPhone(phones);

// console.log('Cheapest phone is: ', cheap);