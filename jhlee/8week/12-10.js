// // 상속
// class Printer {
//   print() {
//     console.log('기본적인 출력!');
//   }
// }

// // class Network {
// //   send();
// // }

// class RedPrinter extends Printer {
//   print() {
//     console.log('빨간색으로 출력');
//   }
// }

// // 다형성을 이용해서, 하나의 함수만 호출해서 사용!
// const printers = [new Printer(), new RedPrinter()];
// printers.forEach(printer => printer.print());

// // 단점: 다중상속이 안됨
// // 수정이 어렵다.

// /**
//  * 상속은 수직적인 관계를 이용해서 코드를 재사용 확장해 나가는 방식이다.
//  * 상속의 한계는 딱 한개만 상속할 수 있고, 부모 클래스의 수정이나 확장에 재한이 있다.
//  */
