// const user = {
//     Id:1,
//     name: "showrov ghosh",
//     job: 'actor',
// }
// const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    owner: "Showrov",
    address:{
        street: "Faridpur green Hospital",
        city: "Faridpur",
        country: "india"
    },
    product: ['laptop','mic','monitor', "hub", 'much'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
}

console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj);

