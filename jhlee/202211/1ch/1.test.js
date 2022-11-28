import plays from './plays.json' assert { type: 'json' };
import invoices from './invoices.json' assert { type: 'json' };
import { statement } from './1-3.js';

// console.log(plays);
// console.log(invoices);
const s = `청구 내역 (고객명: BigCo)
 Hamlet: $650.00 (55석)
 As You Like It: $580.00 (35석)
 Othello: $500.00 (40석)
총액: $1,730.00
적립 포인트: 47점
`;
test('defaultTest', () => {
  expect(statement(invoices[0], plays)).toBe(s);
});
