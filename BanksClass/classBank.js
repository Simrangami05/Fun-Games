class Bank {
  constructor(balance) {
    this.balance = balance;
  }

  withdraw(amount) {
    // Guard clause
    if (this.balance <= 0) {
      console.log(" Sorry, You cannot withdraw more! Your balance is less than that.");
      console.log({ Balance: this.balance });
      return;
    }

    this.balance -= amount;
    console.log("Withdrew", `$${amount}`);
    console.log({ Balance: this.balance });
  }

  deposit(amount) {
    this.balance += amount;
    console.log("Deposited", `$${amount}`);
    console.log({ Balance: this.balance });
  }
}
const simranBalanceChecking = new Bank(100);
console.log(simranBalanceChecking.balance);
simranBalanceChecking.deposit(100);
simranBalanceChecking.deposit(100);
simranBalanceChecking.deposit(100);
simranBalanceChecking.deposit(100);
simranBalanceChecking.deposit(100);
simranBalanceChecking.withdraw(100);
simranBalanceChecking.withdraw(100);
simranBalanceChecking.withdraw(100);
simranBalanceChecking.withdraw(100);
simranBalanceChecking.withdraw(100);
simranBalanceChecking.withdraw(100);
simranBalanceChecking.withdraw(100);
// console.log(simranBalanceChecking.balance)

const depositButton = document.getElementById("deposit");
const withdrawButton = document.getElementById("withdraw");
const amountInput = document.getElementById("amount");
const balanceDiv = document.getElementById("balance");
const errorDiv = document.getElementById("error");

console.log(amountInput.value);

depositButton.onclick = () => {
    const amount = Number(amountInput.value)
    simranBalanceChecking.deposit(Number(amount));
    balanceDiv.innerText = `Balance: ${simranBalanceChecking.balance}`
};

withdrawButton.onclick = () => {
    const amount = Number(amountInput.value)
    simranBalanceChecking.withdraw(Number(amount));
    balanceDiv.innerText = `Balance: ${simranBalanceChecking.balance}`
    }
