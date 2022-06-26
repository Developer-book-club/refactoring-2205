// 항상 고유한 인스턴스를 찾을 수 있도록
const customerRepository = new CustomerRepository();

class Order {
  constructor(data) {
    this._number = data.number;
    // this._customer = new Customer(data.customerId);
    this._customer = customerRepository.registerCustomer(data.customerId);
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }
}

class CustomerRepository {
  #customers;

  constructor() {
    this.#customers = new Map();
  }

  registerCustomer(id) {
    if (!this.#customers.has(id)) {
      this.#customers.set(id, new Customer(id));
    }
    return findCustomer(id);
  }

  findCustomer(id) {
    return this.#customers.get(id);
  }
}
