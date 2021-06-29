// login button event handler
var loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function() {
    var loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';

    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";
})

// deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function() {
    const depositNumber = getInputNumber('depositAmount');

    if (depositNumber < 0) {
        alert('Deposit Number cannot be negative');
    } else {

        updateSpanText('currentDeposit', depositNumber);
        updateSpanText('currentBalance', depositNumber);

        document.getElementById('depositAmount').value = "";
    }

})

// withdraw button event handler

const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function() {
    const withdrawNumber = getInputNumber('withdrawAmount');

    updateSpanText('currentWithdraw', withdrawNumber);
    updateSpanText('currentBalance', withdrawNumber * -1);

    document.getElementById('withdrawAmount').value = "";
})

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = addedNumber + currentNumber;
    document.getElementById(id).innerText = total;
}