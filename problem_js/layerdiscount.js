/* multi layer dicount calculator.
1. first 100 --> 100;
2.  100 to 200 ---> 90;
3. above 200 ---> 70;
*/

function layerDiscountTotal(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if (quantity <= 100) {
        const total = quantity * first100Price;
        return total;
    }
    else if (quantity <= 200) {
        const first100total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = first100total + remainingTotal
        return total;
    }
    else {
        const first100T0Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = first100T0Total + second100Total + remainingTotal;
        return total;
    }
}

const total = layerDiscountTotal(1000);

console.log(total);
