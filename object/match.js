const numbers = [45, 65, 23, 98, 19];

// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   console.log(number);
// }

// for(const number of numbers){
//      console.log(number);
// }

const products = [
    {id: 1, name: "oppo Phone", price: 19000},
    {id: 2, name: "Iphone Phone", price: 30000},
    {id: 3, name: "samsung Phone", price: 40000},
    {id: 4, name: "Vivo", price: 50000},
    {id: 5, name: "Realme Phone", price: 80000},
    {id: 6, name: "Tecno ", price: 45000},
    {id: 7, name: "symphony ", price: 10000},
    {id: 8, name: "Redmi Phone", price: 23000},
]


 function matchProducts(products, search){
    matched=[];
    for (let product of products){
        if((product.name.includes(search))){
            matched.push(product);
        }
        
    }
    return matched;
 }
const result = matchProducts(products, 'Phone');
console.log(result);
