document
  .getElementById("cash-money-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let cashOut = getInputFieldValueById('cashout-amount');
    let pinNumber = getInputFieldValueById('cashout-pin-number')

    if(isNaN(cashOut)){
      alert("Please provide a valid number");
      return;
    }

    if(pinNumber === 1234){
        let balance = getTextFieldValueById('amount-number')
        if(balance < cashOut){
          alert(' your balance is low');
        }
        let newBalance = balance - cashOut;
        document.getElementById('amount-number').innerText = newBalance;
      // creating cashout transition History 

      const div = document.createElement('div');
      div.classList.add('bg-yellow-300')
      div.innerHTML = `
      <h4 class="text-2xl font-bold">Cash Out</h4>
      <p>${cashOut}withdraw. New Balance ${newBalance}</p>
      `
      document.getElementById('transition-container').appendChild(div);


    }else{
        alert('something went wrong .please try again letter ')
    }

  });
