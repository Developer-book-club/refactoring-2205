import { statement } from './app.js';

import { invoice } from './invoices.js';
import { plays } from './plays.js';

const s = `청구 내역(고객명: BigCo)
 Hamlet: $650.00 (55석)
 As You Like It: $580.00 (35석)
 Othello: $500.00 (40석)
총액: $1,730.00
적립 포인트: 47점
`;
test('test app.js', () => {
  expect(statement(invoice, plays)).toBe(s);
});
