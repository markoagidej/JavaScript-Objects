// Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner.
function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

// Task 2: Implement methods within the Account object to deposit and withdraw funds.
Account.prototype.depositBalance = function(amount) {
    this.balance += amount
    console.log("New Balance: " + this.balance);
}

Account.prototype.withdrawBalance = function(amount) {
    this.balance -= amount
    console.log("New Balance: " + this.balance);
}

// Task 3: Create a method to calculate compound interest based on the balance and specified interest rate.
Account.prototype.calculateInterest = function(interestRate, timesApplied) {
    let counter = 0;
    let balanceCopy = this.balance;
    while (counter < timesApplied) {
        balanceCopy *= interestRate;
        counter += 1;
    }
    console.log("Balance at end of term: " + balanceCopy);
}

let testAccount = new Account(1234, 1000, "Your Mom");
testAccount.depositBalance(200);
testAccount.withdrawBalance(300);
testAccount.calculateInterest(1, 1);
testAccount.calculateInterest(1.05, 5);