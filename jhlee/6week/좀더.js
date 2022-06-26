// 항상 고유한 인스턴스를 찾을 수 있도록
const customerRepository = new CustomerRepository();

const order = new Order(
  data.number,
  customerRepository.registerCustomer(data.customerId),
);

// 도메일 Order라는 클래스는 Repository라는 디펜던시를 가지지 않고, 도메인에 관련된 로직만 가져갈 수 있어서 깔끔해진다.
// point:
// 불변성은 프로그램의 안정성을 높여주기 때문에 아주좋다.
// 실수로 이상한데이터를 만들 여지를 없에주니까
// 데이터가 변할 떄 마다 데이터를 새로 만든다면, 예전버전 값은 업데이트가 반영되지 않기에 문제가 생길 수 있다.
// 내 업데이트가 즉각적으로 반영되어야 한다AUS,
// 주문, 사용자이름 언제든지 변경가능
// 가변적인 클래스 ㅈ참조를 사용하느게 저 맍다.
// 고융한 아이디별로 인스턴스를 만드는 걸 보장하고 싶다면
// 이런 리파지토리패텅ㄴ을 사용하는게 매우 좋다.
class Order {
  constructor(number, customer) {
    this._number = number;
    // this._customer = new Customer(data.customerId);
    // this._customer = customerRepository.registerCustomer(data.customerId);
    this._customer = customer;
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
