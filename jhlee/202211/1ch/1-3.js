import { createStatementData } from './createStatementData.js';

export function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays), plays);
}

function renderPlainText(data) {
  let result = `청구 내역 (고객명: ${data.customer})\n`;

  for (let perf of data.performances) {
    result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
  }
  result += `총액: ${usd(data.totalAmount)}\n`;
  result += `적립 포인트: ${data.totalVolumCredits}점\n`;
  return result;
}

function usd(aNumber) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}

function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays));
}
function renderHtml(data) {
  let result = `<h1>청구 내역 (고객명: ${data.customer})</h1>\n`;

  for (let perf of data.performances) {
    result += `<p> ${perf.play.name}: ${usd(perf.amount)} (${
      perf.audience
    }석)</p>\n`;
  }
  result += `<p>총액: ${usd(data.totalAmount)}</p>\n`;
  result += `<p>적립 포인트: ${data.totalVolumCredits}점</p>\n`;
  return result;
}
