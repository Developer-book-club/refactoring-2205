{
  const organization = { name: '애크미 구스베리', country: 'GB' };

  let newName = '이종호';
  result += `<h1>${organization.name}</h1>`;
  organization.name = newName;
}

// 1. 가장 먼저 이 상수를 캡슐화해보자.
{
  function getRawDataOfOrganization() {
    return organization;
  }

  result += `<h1>${getRawDataOfOrganization().name}</h1>`;
  getRawDataOfOrganization().name = newName;
}
/**
 * 방금 변수 캡슐화하기를 정식으로 따르지 않고 게터를 찾기 쉽도록 의도적으로 이상한 이름을 붙였다.
 * 이 게커는 임시로만 사용할 것이기 떄문이다.
 *
 * 레코드를 캡슐화하는 목적은 변수 자체는 물론 그 내용을 조작하는 방식도 통제하기 위해ㅑ서다.
 * 2. 이렇게 하려면 레코드를 클래스로 바꾸고, 45. 새 클래스의 인스턴스를 반환하는 함수를 새로 만든다.
 */

{
  class Organization {
    constructor(data) {
      this._data = data;
    }
  }

  const organization = new Organization({
    name: '애크미 구스베리',
    country: 'GB',
  });
  function getRawDataOfOrganization() {
    return organization.data;
  }
  function getOrganization() {
    return organization;
  }
}

// 객체로 만드는 작업이 끝났으니 5 레코드를 사용화던 코드를 살펴보자.
// 레코드를 생신하던 코드는 모두 세ㅐ토ㅓ를 사용하도록 고친다.

{
  class Organization {
    constructor(data) {
      this._data = data;
    }
    set name(aString) {
      this._data.name = aString;
    }
    get name() {
      return this._data.name;
    }
  }

  const organization = new Organization({
    name: '애크미 구스베리',
    country: 'GB',
  });
  // function getRawDataOfOrganization() {
  //   return organization.data;
  // }
  function getOrganization() {
    return organization;
  }

  // client 1
  getOrganization().name = newName;

  // client 2
  result += `<h1>${getOrganization().name}</h1>`;
}

// 6. 다 바꿨다면 앞에서 이상한 이름으로 지었던 임시 함수를 제거한다.

// 마지막으로 _data의 필드들을 객체 안에 바로 펼쳐놓으면 더 깔끔할 것 같다.
{
  class Organization {
    constructor(data) {
      this._name = data.name;
      this._contry = data.country;
    }
    get name() {
      return this._name;
    }
    set name(aString) {
      this._name = aString;
    }
    get country() {
      return this._country;
    }
    set country(aString) {
      this._country = aString;
    }
  }
}

/**
 * 예시: 중첩된 레콛 캡슐화하기
 *
 */

{
  const customerData = {
    1920: {
      name: '마틴 파울러',
      id: '1920',
      usages: {
        2016: {
          1: 50,
          2: 55,
        },
        2015: {
          1: 70,
          2: 63,
        },
      },
    },
    38673: {
      name: '닐 포드',
      id: '38673',
    },
  };

  // write example
  customerData[customerID].usages[year][month] = amount;

  // read example
  function compareUsage(customerID, laterYesr, month) {
    const later = customerData[customerID].usages[laterYesr][month];
    const earlier = customerData[customerID].usages[laterYesr - 1][month];
    return { laterAmount: later, change: later - earlier };
  }
}

// 이번 캡술화도 아에서와 마찬가지로 변수 캡슐화부터 시작한다.
{
  function getRawDataOfCustomers() {
    return customerData;
  }
  function setRawDataOfCustomers(arg) {
    customerData = arg;
  }

  // write example
  getRawDataOfCustomers()[customerID].usages[year][month] = amount;

  // read ex
  function compareUsage(customerID, laterYesr, month) {
    const later = getRawDataOfCustomers()[customerID].usages[laterYesr][month];
    const earlier =
      getRawDataOfCustomers()[customerID].usages[laterYesr - 1][month];
    return { laterAmount: later, change: later - earlier };
  }
}

// 그런 다음 전체 데이터 구조를 표현하는 클래스를 정의하고, 이를 반환하는 함수를 새로 만든다.
{
  class CustomerData {
    constructor(data) {
      this._data = data;
    }
  }

  function getCustomerData() {
    return customerData;
  }
  function getRawDataOfCustomers() {
    return customerData._data;
  }
  function setRawDataOfCustomers(arg) {
    customerData = new CustomerData(arg);
  } // 왜 여기만 클래스를 사용한건지????????

  /**
   * 여기서 가장 중요한 부분은 데이터를 스는 코드다.
   * 따라서 getRawDataOfCustomers()를 호출한 후 데이터를 변경하는 경우에도 중의해야한다.
   * 값을 쓰는 예를 다시 한번 상기해보자.
   */

  // wr ex
  getRawDataOfCustomers()[customerID].usages[year][month] = amount;

  /**
   * 기본 절차에 따르면 고객 객체를 반환하고 필요한 접근자를 만드어서 사여ㅛㅇ하게 ㅎ면 된다.
   * 현재 곡객 ㄲ체에는 이 값을 쓰는 세터가 없어서 데이터 구조 안으로 기이 들어가서 값을 바꾸고 있다.
   * 따라서 데이터 구조 안으로 글어가는 코드를 세터로 뽑아내는 작업부터 한다.
   * 함수 춫라하기
   */

  // wr ex
  setUsage(customerID, year, month, amount);

  // 최상위
  function setUsage(customerID, year, month, amount) {
    getRawDataOfCustomers()[customerID].usages[year][month] = amount;
  }

  // 그런 다음 이 함수를 고객 데이터 클래스로 옮긴다.

  // wr ex
  getCustomerData().setUsage(customerID, year, month, amount);

  class CustomerData {
    constructor(data) {
      this._data = data;
    }

    setUsage(customerID, year, month, amount) {
      this._data[customerID].usages[year][month] = amount;
    }
  }
}
/**
 * 나는 덩치 큰 데이터 구졸르 다룰 수록 쓰기 부분에 집중한다. 캡슐화에서는 값을 수정하는 부분을 명확하게 드러내고 한 곳에 모아두는 일이 굉장히 중요하다.
 *
 * 이렇게 쓰는 부분을 찾아 수정하다 보면 빠진 건 없느니 궁금해질 것이다.
 *  확ㅇ니하는 방법은 여러가지ㅇ다.
 * 우선 getRawDataOfCustomers()에서 데이터를 깊은 복사하여 반환하는 방법이다.
 * 테스트 커버리지가 충분하다면 깜빡 잊고 수정하지 ㅇ낳는 부분을 테스트가 걸러내줄 것이다.
 */
{
  function getCustomerData() {
    return customerData;
  }
  function getRawDataOfCustomers() {
    return customerData.rawData;
  }
  function setRawDataOfCustomers(arg) {
    return (customerData = new CustomerData(arg));
  }
  class CustomerData {
    get rawData() {
      return _.cloneDeep(this._data);
    }
  }
}
