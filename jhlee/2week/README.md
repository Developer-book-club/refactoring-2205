## 1.3 리팩터링의 첫 단계

첫 단계 == 코드 영역을 검사할 테스트코드 작성

> statement()함수의 테스트는 어떻게 구성하면 될까?

이 함수가 문자열을 반환하므로,
다양한 장르의 공연들로 구성된 공연료 청구서 몇 개를 미리 작성하여 문자열 형태로 준비해둔다.
그런다음 statement()가 반환한 문자열과 준비해둔 정답 문자열을 비교한다.
그리고 테스트프레임워크를 이용하여 모든 테스트를 단축키 하나로 실행할 수 있도록 설정해둔다.

여기서 중요한점:
테스트 결과를 보고하는 방식

테스트가 통과했다면 초록불을
다르다면 빨간불을 켠다.
즉 성공/실패를 스스로 판단하는 자가진단 테스트로 만든다.

자가진단 여부는 매우 중요하다.
그렇지 않으면 테스트 결과를 노트에 적어둔 값과 일일이 눈으로 비교해야하는데, 속도가 매우 떨어진다.

> 리팩터링 하기 전에 제대로 된 테스트부터 마련한다.
> 테스트는 반드시 자가진단하도록 만든다.

## 1.4 statement() 함수 쪼개기

긴 함수를 리팩토링할 떄는 먼저 전체 동작을 각각의 부분으로 나눌 수 있는 지점을 찾는다.

...
이 switch문은 한 번의 공연에 대한 요금을 계산하고 있다.
이러한 사실은 코드르 분석해서 얻은 정보다.

이런식으로 파악한 정보는 휘발성이 높기에, 잊지 않으려면 재빨리 코드에 반영해야한다.
드러면 다음번에 코드를 볼 때, 다시 분석하지 ㅇ낳아도 코드 스스로가 자신이 하는 일이 무엇인지 이야기해줄 것이다.

여기선 코드 조각을 별도의 함수로 추출하는 방식으로 앞서 파악한 정보를 코드에 반영할 것이다.
추출한 함수에는 그 코드가 하는 일을 설명하는 이름을 지어준다.
amountFor(aPerformance)

먼저 함수르 뺐을 때, 유혀범위를 벗어나는 변수, 즉 새함수에서 곧바로 사용할 수 없는 변수가 있는지 확인
이번 예에서는
`perf, play, thisAmount`가 여기 속한다.

`perf, play`는 추출한 새 함수에서도 필요하지만, 값을 변경하지 않기 때문에 매개변수로 전달하면된다.

한편 thisAmount값은 함수안에서 값이 바뀌느넫, 이 값이 여기선 하나뿐이므로 반환하도록 했다.

또한 이 변수를 초기화하는 코드도 추출한 함수에 넣었다.

---

이제 statement()에서 thisAmount 값을 채울 떄 방금 추출한 amountFor() 함수를 호출하도록 한다.

이렇게 수정하고 나면 곧바로 컴파일하고 테스트해서 실수한 게 없는지 확인한다.

> 리팩터링은 프로그램수정을 작은 단계로 나눠 진행한다.
> 그래서 중간에 실수하더라도 버그를 쉽게 찾을 수 있다.

지금 예는 js코드이므로 amountFor()를 statement()의 중첩함수로 만들었다.
이렇게하면 바깥 함수에 쓰더 변수를 새로 추출한 함수에 매개변수로 전달할 필요가 없어 편하다.
지금 경우엔 달라질 게 없지만, 일반적으로 중첩함수로 만들면 할일 하나가 줄어드는 셈이다.

### play 변수 제거하기

amountFor()의 매개변수를 살펴보면서 이 값들이 어디서 오는지 알아봤다.
aPerformance는 루프 변수에서 오기 떄문에 반복문을 한 번 돌 때마다 자연스레 값이 변경된다.

하지만 play는 개별 공연(aPerformance)에서 얻기 때문에 애초에 매개변수로 전달할 필요가 없다.
그냥 amountFor()안에서 다시 계산하면 된다.
나는 긴 함수를 잘게 쪼갤 때마다 play같은 변수를 최대한 제거한다.
이런 임시 변수들 때문에 로컬 범위에 존재하는 이름이 늘어나서 추출 작업이 복잡해지기 때문이다.
이를 해결해주느 리팩터링이 임시 변수르 ㄹ질의 함수로 바꾸기 이다.

지역변수를 제거해서 얻는 가장 큰 장점은 추출작업이 훨씬 쉬워진다는 것이다.
유효범위를 신경써야 할 대상이 줄어들기 때문이다.
실제로 나는 추출작업 전에는 거의 항상 지역 변수부터 제거한다.

---

amountFor를 호출하는 코드로 돌아가보자.
여기서 amountFor는 임시변수인 thisAmount에 값을 설정하는데 사용되는데, 그 값이 다시 바뀌지는 않는다.
변수 인라인하기를 적용한다.

### format 변수 제거하기

임시변수는 나중에 문제를 일으킬 수 있다.
임시 변수는 자신이 속한 루틴에서만 의미가 있어서 루틴이 길고 복잡해지기 쉽다.

따라서 다음으로 할 리팩터링은 임시변수를 제거하는 것이다.

> 함수변수를 일반 함수로 변경하는 것

## 총평 및 느낀점

아직까지도, 어떤 상황에 어떤 리팩터링을 지향해야하는지 불명확하지만,
점점 읽으면서, 명확한 코드
의도가 부분으로 분리된 코드가 중요 방향이라는것을 알것 같다.
설정하면서 그리고 테스트와도 조금 더 친해지는 느낌이었다.

## 논의하고 싶은 내용

함수로 분리하는 기준, 모듈, 클래스로 분리하는 기준에 대해 어떤 생각이 있는지 궁금합니다.

## 요약

리팩토링은 총 4단계로 진행되었다.

1. 테스트코드 작성하기
2. 원본함수를 중첩함수 여러개로 나누기
3. 계산 코드와 출력 코드를 분리
4. 계산 로직은 다형성으로 분리하기

좋은 코드란, 얼마나 수정하기 쉬운가이다.
코드 수정은 사람이 하고
사람은 많은 것을 기억하지 못하기에 명확한 코드가 수정하기 쉬운 코드이다.
분리가 잘 되어있는 코드 역시 명확한 코드이다.

이번 예시에서 중요하게 볼 부분은 리팩터링하는 리듬이다.

아직 전체적인 그림을 다 그릴 능력이 안되서 어떤 지향점을 가지고 리팩터링하게 되었는지
그러니까 이 목표를 이루기 위해 리팩터링하는 능력은 없지만,

어떤 패턴으로 리팩터링을 수행하는지(잘게 쪼개서 문제가 생겨도 금방 발견해서 수정할 수 있게)

## 제안사항