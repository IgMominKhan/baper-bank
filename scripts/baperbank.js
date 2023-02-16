// deposit
// 1. set event listener on deposit btn
// 2. get the deposit amount
// 3. set deposit


document.getElementById('deposit-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const depositField = document.getElementById('deposit-amount');

    const depositAmount = getInputValue(depositField);
    const deposit = document.getElementById('deposit');
    const prevDeposit = getElementValue(deposit);

    deposit.innerText = prevDeposit + depositAmount;

    const prevBalance = getElementValue(balance);
    balance.innerText = prevBalance + depositAmount;
})


const balance = document.getElementById('balance');





// get an element numeric value
function getElementValue(elem) {
    return parseFloat(elem.innerText);
}


// get an input field numeric value
function getInputValue(input) {
    const inputAmount = parseFloat(input.value);
    input.value = '';
    return inputAmount

}




// withdraw 
// 1. set event listener at withdraw btn
// 2. get withdraw amount
// 3. calculate current total withdraw
// 4. update current balance

document.getElementById('withdraw-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const currentBalance = getElementValue(balance);

    const withdrawField = document.getElementById('withdraw-amount');

    const withdrawAmount = getInputValue(withdrawField);

    // validate withdrawable amount
    if (currentBalance < withdrawAmount) {
        return alert('You don\'t have enough money')
    }


    const withdraw = document.getElementById('withdraw');
    const prevWithdraw = getElementValue(withdraw);

    withdraw.innerText = prevWithdraw + withdrawAmount;



    balance.innerText = currentBalance - withdrawAmount
})