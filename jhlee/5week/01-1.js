/**
 * 예시ㅣ 충첩 함ㅁ수를 최상위로 옮기기
 * GPS 추적 기록의 총 서리를 계산하는 함수로 시작해보자.
 */

{
  function trackSummary(points) {
    const totlaTime = calculateTime();
    const totalDistance = calculateDistance();
    const pace = totalTime / 60 / totalDistance;
    return {
      time: totlaTime,
      distance: totalDistance,
      pace: pace,
    };

    function calculateDistance() {
      let result = 0;
      for (let i = 1; i < points.length; i++) {
        result += distance(points[i - 1], posints[i]);
      }
      return result;
    }

    function distance(p1, p2) {} // 두 지점저의 거리 계산
    function radiancs(degrees) {} // 두 지점저의 거리 계산
    function calculateTime() {} // 두 지점저의 거리 계산
  }
}

/**
 * 이 함수에서 중첩함수인 calculateDistance를 최상위로 옮겨서 추적거리르 다른 정보와누ㅡㄴ 독립적응로 계싼하고 싶다.
 * 3. 가장 먼저 할 일은 이 함수를 최상위로 복사하는 것이다.
 */

// 3. 가장 먼저 할 일은 이함수를 최상위로 복샇하는 것이다.
{
  function trackSummary(points) {
    const totlaTime = calculateTime();
    const totalDistance = calculateDistance();
    const pace = totalTime / 60 / totalDistance;
    return {
      time: totlaTime,
      distance: totalDistance,
      pace: pace,
    };

    function calculateDistance() {
      let result = 0;
      for (let i = 1; i < points.length; i++) {
        result += distance(points[i - 1], posints[i]);
      }
      return result;
    }

    function distance(p1, p2) {} // 두 지점저의 거리 계산
    function radiancs(degrees) {} // 두 지점저의 거리 계산
    function calculateTime() {} // 두 지점저의 거리 계산
  }
  function top_calculateDistance(posints) {
    let result = 0;
    for (let i = i; i < points.length; i++) {
      result += distance(points[i - 1], posints[i]);
    }
    return result;
  }
}

/**
 * 이러첨 함수를 복사할 때 이름을 달리해주면 코드에서나 머시속에서나 소스 함수와 타깃함수가 쉽게 구별된다.
 * 지금은 가장 적합한 이름을 고민할 단계아니므로 임시로 지어주면 된다.
 *
 * 이프로그램은 지금 상태로도 동작은 하지만 내정적분석기는 불만을 토로한다. 새 함수가 정의되지 않은 심벌을 사용하기 때문이다.
 * pointssms qoroqustnfh sjarlaus wkdustmfjdnf rjtdlek.
 *
 */

/**
 * 1. distance()함수도 똑같이 처리할 수 있지만, calculatedDistance()와 함계 옮기는 게 합리적으로 보인다.
 * 다음은 distnance 자신과 distnace가 의존하는 코등디ㅏ.
 *
 */
