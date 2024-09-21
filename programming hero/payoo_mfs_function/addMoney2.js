document
  .getElementById("add-money-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let addMoney = getInputFieldValueById('add-amount');
    let pinNumber = getInputFieldValueById("pin-number");

    if(isNaN(addMoney)){
      alert('please provide Number');
      return;
    }


    if(pinNumber === 1234){
      let balance = getTextFieldValueById('amount-number');
      const newBalance = balance + addMoney;
      document.getElementById('amount-number').innerText = newBalance;

      // add a transition history
      let p =document.createElement('p');
      p.innerText = `added: ${addMoney}Tk. New Balance: ${newBalance}Tk. `
      document.getElementById('transition-container').appendChild(p);

    }else{
        alert("something is wrong. please try again later");
    }



  });
