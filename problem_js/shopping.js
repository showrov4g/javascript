const products = [
    { name: 'Shampoo', price: 300, quantity: 3 },
    { name: 'Chiruni', price: 100, quantity: 4 },
    { name: 'Shirt', price: 700, quantity: 6 },
    { name: 'pant', price: 1200, quantity: 2 },

];


function cartTotal(products) {
    let total = 0;
    for (const product of products) {
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}

const totalSoppingCost = cartTotal(products);
console.log(totalSoppingCost);
