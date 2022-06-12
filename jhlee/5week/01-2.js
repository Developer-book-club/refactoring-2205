class Account {
  daysOverdrawn; // 연체일
  type;
  constructor(daysOverdrawn, type) {
    this.daysOverdrawn = daysOverdrawn;
    this.type = new AccountType(type);
  }

  get backCharge() {
    // 은행 이자 계산
    let result = 4.5;
    if (this._dayOverdrawn > 0) result += this.type.overdraftCharge(this);
    return result;
  }
}

class AccountType {
  isPremium;
  constructor(isPremium) {
    this.isPremium = isPremium;
  }

  overdraftCharge(account) {
    if (this.isPremium) {
      const baseCharge = 10;
      if (account.daysOverdrawn <= 7) return baseCharge;
      else return baseCharge + (account.daysOverdrawn - 7) * 0.85;
    } else return account.daysOverdrawn * 1.75;
  }
}
