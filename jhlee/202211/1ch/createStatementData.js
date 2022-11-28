export function createStatementData(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.totalVolumCredits = totalVolumCredits(statementData);
  statementData.totalAmount = totalAmount(statementData);
  return statementData;

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }

  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance);
    const calculator = new PerformanceCalculator(
      aPerformance,
      playFor(aPerformance),
    );
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }
}

class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performances = aPerformance;
    this.play = aPlay;
  }

  get amount() {
    let result = 0;

    switch (this.play.type) {
      case 'tragedy': // 비극
        result = 40000;
        if (this.performances.audience > 30) {
          result += 1000 * (this.performances.audience - 30);
        }
        break;
      case 'comedy':
        result = 30000;
        if (this.performances.audience > 20) {
          result += 10000 + 500 * (this.performances.audience - 20);
        }
        result += 300 * this.performances.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${this.play.type}`);
    }
    return result;
  }

  get volumeCredits() {
    let result = 0;
    result += Math.max(this.performances.audience - 30, 0);
    if ('comedy' === this.play.type)
      result += Math.floor(this.performances.audience / 5);

    return result;
  }
}
