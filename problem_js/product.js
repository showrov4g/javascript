const products = [
    { name: 'Shampoo', price: 300 },
    { name: 'Chiruni', price: 100 },
    { name: 'Shirt', price: 700 },
    { name: 'pant', price: 1200 },

];

function getShoppingProduct(products) {
    let total = 0;
    for (const product of products){
        total = total + product.price;
        
    }
    return total;
}

const total = getShoppingProduct(products);

console.log('aj onak gulo taka koroch hoia galo: ', total);
