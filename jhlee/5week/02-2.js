class Account {
  constructor(number, type, interestRate) {
    this.number = number;
    this.type = new AccountType(type, interestRate);
  }

  get interestRate() {
    return this.type.interestRate;
  }
}

class AccountType {
  constructor(nameString, interestRate) {
    this.name = nameString;
    this.interestRate = interestRate;
  }

  get interestRate() {
    return this.interestRate;
  }
}
