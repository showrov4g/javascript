document
  .getElementById("cash-money-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let cashOut = getInputFieldValueById('cashout-amount');
    let pinNumber = getInputFieldValueById('cashout-pin-number')
    if(pinNumber === 1234){
        let balance = getTextFieldValueById('amount-number')
        let newBalance = balance - cashOut;
        document.getElementById('amount-number').innerText = newBalance;
    }else{
        alert('something went wrong .please try again letter ')
    }
    


  });
