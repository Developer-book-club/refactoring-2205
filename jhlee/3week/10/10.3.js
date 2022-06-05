{
  function getPayAmount() {
    let result;
    if (isDead) result = deadAmount();
    else {
      if (isSeparated) result = separatedAmount();
      else {
        if (isRetierd) result = retiredAmount();
        else result = normalPayAmount();
      }
    }

    return result;
  }
}

{
  function getPayAmount() {
    if (isDead) return deadAmount();
    if (isSeparated) return separatedAmount();
    if (isRetierd) return retiredAmount();
    return normalPayAmount();
  }
}

{
  function payAmount(employee) {
    let result;
    if (employee.isSeparated) {
      // 퇴사한 직원인가?
      result = { amount: 0, reasonCode: 'SEP' };
    } else {
      if (employee.isRetired) {
        result = { amount: 0, reasonCode: 'RET' };
      } else {
        lorem.ipsum(dolor.sitAmet);
        consectetur(adipiscing).elit();
        sed.do.eiusmod = tempor.incididunt.ut(dabore) && dolore(magna.aliqua);
        ut.enim.ad(minim.viniam);
        result = someFonalComputation();
      }
    }
  }
}

/* 
  이 코드는 실제로 벌어지는 중요한 일들이 중첩된 조건들에 가려서 잘 보이지 않는다.
  이 코드가 진짜 의도한 일은 모든 조건이 거짓일 때만 실행되기 때문이다.
  이 상황에서는 보호 구문을 사용하면 코드의 의도가 더 잘 드러난다.

  다른 리팩터링과 마찬가지로 나는 단계ㄹ를 작게 나눠서 하나씩 밟아가길 좋아한다.
  그러니 최상위 조건부터 보호 구문으로 바꿔보자.
*/

{
  function payAmount(employee) {
    if (employee.isSeparated) return { amount: 0, reasonCode: 'SEP' };

    if (employee.isRetired) return { amount: 0, reasonCode: 'RET' };

    lorem.ipsum(dolor.sitAmet);
    consectetur(adipiscing).elit();
    sed.do.eiusmod = tempor.incididunt.ut(dabore) && dolore(magna.aliqua);
    ut.enim.ad(minim.viniam);
    return someFonalComputation();
  }
}

// 예시: 조건 반대로 만들기
/* 
  이 책 초판의 원고를 검토하던 조슈아 케리에프스키가 이 리팩터링을 수행할 때는 조건식을 반재돌 만들어 적용하는 경우도 많다고 알려왔다.
  그리고 고맙게도 예시까지 만드렁 보내주었다.
*/
{
  function adjustedCapital(anInstrument) {
    let result = 0;
    if (anInstrument.capital > 0) {
      if (anInstrument.interestRate > 0 && anInstrument.duration > 0) {
        result =
          (anInstrument.income / anInstrument.duration) *
          anInstrument.adjustmentFactor;
      }
    }
    return result;
  }
}
// 역시 한 번에 하나씩 수정한다. 다만 이번엔 보호 구문을 추가하면서 조건을 역으로 바꿀 것이다.
{
  function adjustedCapital(anInstrument) {
    let result = 0;
    if (anInstrument.capital <= 0) return result;

    if (anInstrument.interestRate > 0 && anInstrument.duration > 0) {
      result =
        (anInstrument.income / anInstrument.duration) *
        anInstrument.adjustmentFactor;
    }
    return result;
  }
}
{
  function adjustedCapital(anInstrument) {
    let result = 0;
    if (anInstrument.capital <= 0) return result;

    if (anInstrument.interestRate <= 0 || anInstrument.duration <= 0)
      return result;

    result =
      (anInstrument.income / anInstrument.duration) *
      anInstrument.adjustmentFactor;
    return result;
  }
}
{
  function adjustedCapital(anInstrument) {
    if (
      anInstrument.capital <= 0 ||
      anInstrument.interestRate <= 0 ||
      anInstrument.duration <= 0
    )
      return 0;

    return (
      (anInstrument.income / anInstrument.duration) *
      anInstrument.adjustmentFactor
    );
  }
}
