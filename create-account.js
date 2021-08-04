function createAccount(pin, amount = 0) {
  return {
    checkBalance(correctPin) {
      if (correctPin !== pin) return "Invalid PIN.";
      return `$${amount}`;
    },
    deposit(correctPin, userAmount) {
      if (correctPin !== pin) return "Invalid PIN.";
      amount += userAmount;
      return `Succesfully deposited $${userAmount}. Current balance: $${amount}.`;
    },
    withdraw(correctPin, withdrawalAmount) {
      if (correctPin !== pin) return "Invalid PIN.";
      if (withdrawalAmount > amount)
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      amount -= withdrawalAmount;
      return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${amount}.`;
    },
    changePin(oldPin, newPin) {
      if (oldPin !== pin) return "Invalid PIN.";
      pin = newPin;
      return `PIN successfully changed!`;
    },
  };
}

module.exports = { createAccount };
