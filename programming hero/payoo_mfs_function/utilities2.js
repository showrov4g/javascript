function getInputFieldValueById(id){
    let inputValue = document.getElementById(id).value;
    let inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}


function getTextFieldValueById(id){
    let textValue = document.getElementById(id).innerText;
    let textValueNumber = parseFloat(textValue);
    return textValueNumber;
}

function showSection(id){
    let section = document.getElementById(id);
    return section;
}