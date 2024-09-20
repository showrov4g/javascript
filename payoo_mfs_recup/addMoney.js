document.getElementById('add-money-button').addEventListener('click', function(event){
    event.preventDefault();
   let addAmount = document.getElementById('add-amount').value;
   let pin = document.getElementById('pin-number').value;
   let totalAmount = document.getElementById('amount-number').innerText;

   if (pin === '1234'){
        let addAmountNumber = parseFloat(addAmount);
        let totalAmountNumber = parseFloat(totalAmount);
        let finalAmount = totalAmountNumber + addAmountNumber;
        document.getElementById('amount-number').innerText = finalAmount;
   }
   else{
    alert('something is wrong. Please try again letter');
   }
   
})