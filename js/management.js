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

// updating balance
function updateBalance(inputAmount, isAdd) {
    const balanceField = document.getElementById('balance-total');
    const previousBalanceText = balanceField.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    let newBalance;
    if (isAdd == true) {
        newBalance = previousBalance + inputAmount;
    } else {
        newBalance = previousBalance - inputAmount;
    }
    balanceField.innerText = newBalance;
}

// deposit..
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInputAmount = getInputAmount('deposit-input');
    updateTotal('deposit-total', depositInputAmount);
    updateBalance(depositInputAmount, true);
})

// withdraw..
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInputAmount = getInputAmount('withdraw-input');
    updateTotal('withdraw-total', withdrawInputAmount);
    updateBalance(withdrawInputAmount, false);
})