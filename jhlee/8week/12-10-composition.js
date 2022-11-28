// // 컴포지션(위임)
// class Printer {
//   // delegater가 아니라 정말 유효ㅕ한 값의 이름으로 할 수 있겠다. printerHeader처럼
//   #printerHeader;
//   constructor(printerHeader) {
//     this.#printerHeader = printerHeader;
//   }
//   print() {
//     this.#printerHeader
//       ? this.#printerHeader.print()
//       : console.log('기본적인 출력!');
//   }
// }

// class RedPrinterHeader {
//   print() {
//     console.log('빨간색으로 출력');
//   }
// }

// class BlackPrinterHeader {
//   print() {
//     console.log('검은색으로 출력');
//   }
// }

// // 전달된 위임자에 따라 다양하게 사용가능
// // 네트워크를 상속할 수 있고 정말 중요한 클래스를 상속에 사용할 수 있다.
// // 레고를 조립하더듯이 필요한 기능을 하나하나씩 넣을 수 있다.
// // deleagate라는 용어를 사용하지 않고,
// // head에 따라 달라지고
// //
// const printers = [
//   new Printer(),
//   new Printer(new RedPrinterHeader()),
//   new Printer(new BlackPrinterHeader()),
// ];
// printers.forEach(printer => printer.print());

// /**
//  * 위임은 레고를 조립하듯이, 필요한 부품을 외부로부터 주입받아서
// 부품을 활용하는 방식이다.
//  */
