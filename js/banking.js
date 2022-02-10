// deposit 

document.getElementById("deposit-id").addEventListener("click", function () {
    let depositInput = document.getElementById("deposit-input");
    let depositValue = depositInput.value;
    let depositAmount = document.getElementById("deposit-amount");
    let newDepositAmount = depositAmount.innerText;
    let newDepositTotal = parseFloat(newDepositAmount) + parseFloat(depositValue);
    depositAmount.innerText = newDepositTotal;
    depositInput.value = "";
    // balance 
    let balanceText = document.getElementById("balance-amount");
    let balanceAmount = balanceText.innerText;
    let newBalanceTotal = parseFloat(balanceAmount) + parseFloat(depositValue);
    balanceText.innerText = newBalanceTotal;

})



// withdraw
document.getElementById("withdraw-id").addEventListener("click", function () {
    let withdrawInput = document.getElementById("withdraw-input");
    let withdrawValue = withdrawInput.value;
    let withdrawAmount = document.getElementById("withdraw-amount");
    let newWithdrawAmount = withdrawAmount.innerText;
    let newwithdrawTotal = parseFloat(newWithdrawAmount) + parseFloat(withdrawValue);
    withdrawAmount.innerText = newwithdrawTotal;
    withdrawInput.value = "";
     let balanceTotal = document.getElementById("balance-amount");
     let balanceTootals = balanceTotal.innerText;
     let newBalanceTotals = parseFloat(balanceTootals)- parseFloat(withdrawValue);
     balanceTotal.innerText = newBalanceTotals;
})