let price = 3000;
if (price >= 5000) {
    let discount = price * 10 / 100;
    let payAmount = price - discount;
    console.log(payAmount);
}
else if(price >= 3000){
    //5% discount
    let discount = price * 5/100;
    let payAmount = price - discount;
    console.log(payAmount);
}
 else {
    console.log(price);
    
}