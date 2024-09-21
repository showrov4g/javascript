function getInputFieldValueById(id) {
  let inputValue = document.getElementById(id).value;
  let inputValueNumber = parseFloat(inputValue);
  return inputValueNumber;
}

function getTextFieldValueById(id) {
  let textValue = document.getElementById(id).innerText;
  let textValueNumber = parseFloat(textValue);
  return textValueNumber;
}

function showSection(id) {
    // heid all the section 
  document.getElementById("add-money-section").classList.add("hidden");
  document.getElementById("cash-out-section").classList.add("hidden");
  document.getElementById("transtion-section").classList.add("hidden");
//   show which section is needed
  document.getElementById(id).classList.remove('hidden');
}
