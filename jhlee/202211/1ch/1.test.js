import plays from './plays.json' assert { type: 'json' };
import invoices from './invoices.json' assert { type: 'json' };
import { statement } from './1-3.js';
import { createStatementData } from './createStatementData';

const statementTestResult = `청구 내역 (고객명: BigCo)
 Hamlet: $650.00 (55석)
 As You Like It: $580.00 (35석)
 Othello: $500.00 (40석)
총액: $1,730.00
적립 포인트: 47점
`;
test('test statement', () => {
  expect(statement(invoices[0], plays)).toBe(statementTestResult);
});

const createStatementTestResult = JSON.stringify({
  customer: 'BigCo',
  performances: [
    {
      playID: 'hamlet',
      audience: 55,
      play: {
        name: 'Hamlet',
        type: 'tragedy',
      },
      amount: 65000,
      volumeCredits: 25,
    },
    {
      playID: 'as-like',
      audience: 35,
      play: {
        name: 'As You Like It',
        type: 'comedy',
      },
      amount: 58000,
      volumeCredits: 12,
    },
    {
      playID: 'othello',
      audience: 40,
      play: {
        name: 'Othello',
        type: 'tragedy',
      },
      amount: 50000,
      volumeCredits: 10,
    },
  ],
  totalVolumCredits: 47,
  totalAmount: 173000,
});
test('test creatStatementData', () => {
  expect(JSON.stringify(createStatementData(invoices[0], plays))).toBe(
    createStatementTestResult,
  );
});
