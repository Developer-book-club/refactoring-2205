class Customer {
  name;
  discountRate;
  contract;
  constructor(name, discountRate) {
    this.name = name;
    this.contract = new CustomerContract(new Date());
    this.setDiscountRate(discountRate);
  }

  get discountRate() {
    return this.contract.discountRate;
  }
  setDiscountRate(aNumber) {
    this.contract.discountRate = aNumber;
  }
  becomePreferred() {
    this.setDiscountRate(this.discountRate + 0.03);
    // 다른 멋진 일들
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.discountRate));
  }
}

class CustomerContract {
  startDate;
  discountRate;
  constructor(startDate, discountRate) {
    this.startDate = startDate;
    this.discountRate = discountRate;
  }

  get discountRate() {
    return this.discountRate;
  }
  set discountRate(aNumber) {
    this.discountRate = aNumber;
  }
}

const customer1 = new Customer('종호', 0.1);
customer1.becomePreferred();
console.log(customer1.discountRate);
