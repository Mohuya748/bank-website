function inputField(idName) {
    const inputFieldGet = document.getElementById(idName);
    const inputValue = inputFieldGet.value;
    inputFieldGet.value = "";
    return inputValue;
}

function updateField(amountId, Value, isAdd) {
    let AmountField = document.getElementById(amountId);
    let newAmountField = AmountField.innerText;
    if (isAdd == true) {
        AmountField.innerText = parseFloat(newAmountField) + parseFloat(Value);
    }
    else {
        AmountField.innerText = parseFloat(newAmountField) - parseFloat(Value);
    }
    return  AmountField.innerText;

}


// deposit 
document.getElementById("deposit-id").addEventListener("click", function () {
    const depositValue = inputField("deposit-input");
    const newDepositAmount = updateField("deposit-amount", depositValue,true);
    // balance 
    const newBalanceTotal = updateField("balance-amount", depositValue,true);

})
// withdraw
document.getElementById("withdraw-id").addEventListener("click", function () {
    const withdrawValue = inputField("withdraw-input");
    const newWithdrawAmount = updateField("withdraw-amount", withdrawValue,true);
    const newBalanceTotals = updateField("balance-amount", withdrawValue, false);
})
