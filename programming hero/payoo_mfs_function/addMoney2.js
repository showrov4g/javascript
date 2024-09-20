document
  .getElementById("add-money-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let addMoney = getInputFieldValueById('add-amount');
    let pinNumber = getInputFieldValueById("pin-number");

    if(pinNumber === 1234){
      let balance = getTextFieldValueById('amount-number');
      const newBalance = balance + addMoney;
      document.getElementById('amount-number').innerText = newBalance;
    }else{
        alert("something is wrong. please try again later");
    }



  });
