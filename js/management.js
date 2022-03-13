// amount from user
function getInputAmount(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputInText = inputField.value;
    const inputValue = parseFloat(inputInText);
    inputField.value = '';
    return inputValue;
}

// amount update in deposit field
function updateTotal(totalFieldId, inputAmount) {
    const totalField = document.getElementById(totalFieldId);
    const previousTotalText = totalField.innerText;
    const previousTotal = parseFloat(previousTotalText);
    const newTotal = previousTotal + inputAmount;
    totalField.innerText = newTotal;
}

// deposit..
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInputAmount = getInputAmount('deposit-input');
    updateTotal('deposit-total', depositInputAmount);
})

// withdraw..
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInputAmount = getInputAmount('withdraw-input');
    updateTotal('withdraw-total', withdrawInputAmount);
})