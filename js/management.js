// amount from user
function getInputAmount(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputInText = inputField.value;
    const inputValue = parseFloat(inputInText);
    inputField.value = '';
    return inputValue;
}

function getInnerTextValue(fieldId) {
    const field = document.getElementById(fieldId);
    const fieldValueInText = field.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}

// amount update in deposit field
function updateTotal(fieldId, inputAmount) {
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + inputAmount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;
}

// updating balance
function updateBalance(inputAmount, isAdd) {
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    if (isAdd == true) {
        newBalance = previousBalance + inputAmount;
    } else {
        newBalance = previousBalance - inputAmount;
    }
    document.getElementById('balance-total').innerText = newBalance;
}

// deposit..
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInputAmount = getInputAmount('deposit-input');
    if (depositInputAmount > 0) {
        updateTotal('deposit-total', depositInputAmount);
        updateBalance(depositInputAmount, true);
    }
})

// withdraw..
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInputAmount = getInputAmount('withdraw-input');
    const totalBalance = getInnerTextValue('balance-total');
    if (withdrawInputAmount > 0 && withdrawInputAmount <= totalBalance) {
        updateTotal('withdraw-total', withdrawInputAmount);
        updateBalance(withdrawInputAmount, false);
    }
})