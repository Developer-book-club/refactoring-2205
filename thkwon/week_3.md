# Ch06. 기본적인 리팩터링

# 6. 1 함수 추출하기

## 중요 내용

- 코드를 언제 독립된 함수로 묶어야 할지에 과한 의견은 수없이 많다.
    - 길이
    - 재사용성
- 목적과 구현을 분리하는 방식이 가장 합리적인 기준으로 보인다.
- 코드를 보고 무슨 일을 하는지 파악하는 데 한참이 걸린다면 그 부분을 함수로 추출한 뒤 ‘무슨 일'에 걸맞는 이름을 짖는다
- 함수를 아주 짧게, 대체로 단 몇 줄 만 담도록 작성하는 습관이 생겼다.
- 메서드 이름이 구현 코드보다 길었지만, 그건 문제가 되지 않았다. 코드의 목적(강조)과 구현(반전) 사이의 차이가 그만큼 컸기 때문이다
- 짧은 함수의 이점은 이름을 잘 지어야만 발휘되므로 이름 짓기에 특별히 신경써야 한다

## 내 생각

- 이름이 함수 추출로 되어있지만, 큰 맥락에서 본다면 이름을 짓는 것으로 모두 퉁쳐서 볼 수 있을 것 같다.
- 여기 있는 모든 패턴들이 마찬가지 일 것인데, 리팩토링은 코드를 보고 작성자의 의도의 목적을 명확히 이해하기 위해서 하는 것이라고 생각한다 그 맥락 에서 함수로 이름을 지어서 추출할 수 있는 코드가 있다면 적극적으로 추출하는게 좋다고 생각한다
- 함수 각각이 너무 많은 책임을 가지고 있다면, 이름이 길어지고, 복잡해진다 그렇기 때문에 함수 자체에 너무 많은 코드가 들어가지 않도록 해야하는 것이 필요하고, 그래야 이름도 명확하게 잘 지을 수 있따

# 6. 2 함수 인라인하기

## 중요 내용

- 때로는 함수 분몬이 이름만큼 명확한 경우도 있다
- 간접호출을 너무 과하게 쓰는 코드도 흔한 인라인 대상이다. 가령 다른 함수로 단순히 위임하기만 하는 함수들이 너무 많아서 위임 관계가 복잡하게 얽혀 있으면 인라인해버린다.

## 내 생각

- 개인적으로 많이 사용하고 있는 패턴이다.
- 주로 과하게 추출한것 같은 느낌이 있을 때, 굳이 메소드 분리하지 말고 인라인 하도록 리뷰를 한다

# 6. 3 변수 추출하기

## 중요 내용

- 지역 변수를 활용하면 표현식을 쪼개 관리하기 더 쉽게 만들 수 있다. 복잡한 로직을 구성하는 단계마다 이름을 붙일 수 있어서 코드 의 목적을 훨씬 명확하게 드러낼 수 있다.
- 변수 추출을 고려한다고 함은 표현식에 이름을 붙이고 싶다는 뜻이다.

## 내 생각

- 변수 추출하기 또한 맥락상 함수추출과 크게 다르지 않다고 생각한다 목적은 항상 복잡한 코드를 읽기좋게 변경하고, 의도를 파악하기 위함이다.
- 나는 항상 코드를 작성할 때, 나 혼자서만 맥락을 이해하고 있다고 판단되는 표현식이 있다면, 누구나 이해할 수 있는 적절한 이름을 붙이는 것을 주저하지 않는다.
- 그러다보니 알고리즘 문제 풀 때 흔히 사용되는 정체를 알 수 없는 이상한 변수명을 매우 싫어하기도 한다 알고리즘 테스트 자체에만 너무 몰입하여 큰 그림을 보지 못하는게 아닌가 싶다

# 6. 4 변수 인라인하기

## 중요 내용

- 원래 표현식과 다를 바 없을 때도 있다.
- 변수가 주변 코드를 리팩터링 하는데 방해가 되기도 한다

## 내 생각

- 함수 인라인과 마찬가지 이유로 변수 인라인도 많이 진행한다
- 빈도를 따져보았을 때는 오히려 변수 인라인을 할 때가 훨씬 더 많다

# 6. 5 함수 선언 바꾸기

## 중요 내용

- (함수를) 잘못 정의하면 지속적인 방해요인으로 작용하여 소프트웨어 동작을 파악하기 어려워지고 요구사항이 바뀔 때 적절히 수정하기 어렵게 한다.

## 내 생각

- 앞에서 말한 주장과 별다르지 않은 이름짓기와 관련된 이야기이다. 이름을 잘지어야 하고, 그렇지 못할 때는 적절한 이름으로 바꿔주어야만 한다
- 배개 변수 이름도 마찬가지이다. 경우와 상황에 따라서 적절한 이름이 있고, 항상 코드 맥락을 잘 파악하여서 적절한 이름을 지을 수 있도록 하자

# 6. 6 변수 캡슐화 하기

## 중요 내용

- 변수를 참조하는 코드를 추가하거나 변경할 때마다 최대한 캡슐화 한다.
- 객체 지향에서 객체의 데이터를 항상 private으로 유지해야 하다고 그토록 강조하는 이유가 바로 여기에 있다.

## 내 생각

- 변수 캡슐화에 대해서는 매우 공감하는 바 이다. 간단한 작업을 할 때는 변수 캡슐화 적용 없이도 코드를 읽는데도 문제가 없고, 실수도 적게 하게 된다
- 그러나, 나중에 프로그램이 커지고, 복잡하게 되면 코드 읽기도 불편하고, 코드가 길어지면서 실수할 가능성도 높아진다고 생각한다
- 위와 같은 이유로 변수들에 대해서도 기본적으로 private으로 하고, 외부에서 직접적으로 접근할 수 있는 방법들은 모두 막고, 내부의 공개된 인터페이스 로만 제한적으로 소통하는 것이 맞다고 생각한다

# 6. 7 변수 이름 바꾸기

## 중요 내용

- 명확한 프로그래밍의 핵심은 이름짓기다.

## 내 생각

- 반복적으로 계속 이름짓기의 중요성을 언급하고 있다.

# 6. 8 매개변수 객체 만들기

## 중요 내용

- 데이터 항목 여러 개가 이 함수에서 저 함수로 함께 몰려다니는 경우를 자주 본다.
- 나는 이런 데이터 무리를 발견하면 데이터 구조 하나로 모아주곤 한다.
- 데이터 뭉치를 데이터 구조로 묶으면 데이터 사이의 관계까 명확 해진다는 이점을 얻는다.

## 내 생각

- 개인적으로 이 리팩토링을 적용할 때도 상황에 맞게 적절하게 적용하는게 맞다고 생각한다
- 매개변수 객체가 필요한 경우도 있지만, 매개변수를 꼭 객체로 묶는게 아닌, 풀어서 전달하는 경우도 상황에 따라서는 충분히 존재할 수 있기 때문이다

# 6. 9 여러 함수를 클래스로 묶기

## 중요 내용

- 공통 데이터를 중심으로 긴밀하게 엮어 작동하는 함수 무리를 발견하면 클래스 하나로 묶고 싶어진다.
- 함수를 한데 묶는 또 다른 방법으로 여러 함수를 변환 함수로 묶기도 있따.
- 중첩 함수 형태로 묶어도 된다.

## 내 생각

- 개인적으로 코드 작업을 할 때 클래스를 적극적으로 활용하려고 하는 편이다
- 클래스를 굳이 쓸 필요가 없을 정도로 간단하다면, 굳이 사용할 필요가 없지만, 현업에서 비즈니스 로직을 구현하다보면, 대개의 경우는 클래스를 구성하여서 응집성을 높이는 쪽의 선택이 더 나은 선택이였던 적이 많았기 때문이다
- 개인적으로 여기서 제시한 중첩 함수에 대해서는 응집성의 장점은 있지만, 가독성을 해치는 부작용이 있다고 생각하기 때문에 특별한 경우가 아니고선 사용하지 않으려 한다

# 6. 10 여러 함수를 변환 함수로 묶기

## 중요 내용

- 그러다보면 이 정보가 사용되는 것 마다 같은 도출 로직이 반복되기도 한다. 나는 이런 도출 작업들을 한데로 모아두길 좋아한다. 모아두면 검색과 갱신을 일관된 장소에서 처리할 수 있고, 로직 중복도 막을 수 있다.
- 함수로 추출하는 것만으로도 같은 효과를 볼 수 있지만, 데이터 구조와 이를 사용하는 함수가 근처에 있지 않으면 함수를 발견하기 어려울 때가 많다.

## 내 생각

- 개인적으로는 클래스 설계 이후에 내부에서 변환함수를 활용하는 것이 좋다고 생각한다
- 역시나 마찬가지 이유로 작은 프로그램의 개발을 진행할 때는 변환 함수를 적절하게 이용하는게 좋을 것 같다 하지만, 프로그램이 커지면 커질 수록 클래스를 통해서 관리하는게 복잡성을 관리하면서 응집성을 높이는데 더 효과적이라고 생각한다

# 6. 11 단계 쪼개기

## 중요 내용

- 서로 다른 두 대상을 한꺼번에 다루는 코드를 발견하면 각각을 별개 모듈로 나누는 방법을 모색한다.
- 규모에 관계없이 여러 단계로 분리하면 좋을만한 코드를 발견할 때마다 기본적인 단계 쪼개기 리팩터링을 한다.

## 내 생각

- 이 부분은 복잡하게 얽혀 있는 로직들을 분리하는 것에 대해서 얘기를 하는 것으로 이해 하였다.
- 풀어서 설명하고 있는 내용들을 종합해보면 결국 책임을 확실히 분리하여서, 책임에 맞게 한가지 일만 할 수 있도록 분리하자 라는 말을 하고 있다



# Ch10. 조건부 로직 간소화

# 10.1 조건문 분해하기

## 중요 내용

- 복잡한 조건부 로직은 프로그램을 복잡하게 만드는 가장 흔한 원흉에 속한다
- 거대한 코드 블록이 주어지면 코드를 부위별로 분해한 다음 해체된 코드 덩어리들을 각 덩어리의 의도를 살린 이름의 함수 호출로 바꿔주자

## 내 생각

- 코드를 읽기 어렵게 만드는 매우 큰 요소 중의 하나가 조건부 로직이 복잡한 것이라고 생각한다.
- 코드를 읽을 때, 평균적으로 개발자들의 STM(Short Term Memory) 공간은 제한 적이기 때문에 최대한 효율적으로 인지하고 이해할 수 있도록 해야하는데, 복잡한 로직은 매우 큰 방해를 준다
- 그런 관점에서 조건 문을 분해하고 이름을 붙임으로서, 복잡성을 줄이는 것은 매우 현명한 방법이다

# 10.2 조건식 통합하기

## 중요 내용

- 비교하는 조건은 다르지만, 그 결과로 수행하는 동작은 똑같은 코드들이 더러 있는데, 어차피 같은 일을 할거라면 조건 검사도 하나로 통합하는게 낫다.
- 조건부 코드를 통합하는게 중요한 이유는 두 가지다.
    - 내가 하려는 일이 더 명확해진다.
    - 함수 추출하기 까지 이어질 가능성이 높기 때문
- 독립된 검사들이라고 판단되면 이 리팩터링을 해서는 안된다

## 내 생각

- 나 같은 경우데 비슷한 동작을 하는 조건문은 한번에 합쳐서 이름을 붙여주려고 한다
- 어디까지 묶고, 어디까지 묶지 않을 것인지가 사람마다 기준도 다르고 애매한데, 책에서 적절히 대안을 제시해준 것 같다

# 10.3 중첩 조건문을 보호 구문으로 바꾸기

## 중요 내용

- 나는 두 경로 모두 정상 동작이라면 if와 else, 한쪽만 정상이라면 비정상 조건을 if에서 검사한 다음 조건이 참이면 함수에서 빠져 나온다.
- if, else 절에 똑같은 무게를 두어, 코드를 읽는 이에게 양 갈래가 똑같이 중요하다는 뜻을 전달한다. 이와 달리 보호 구문은 이건 이 함수의 핵심이 아니다. 이 일이 일어나면 무언가 조치를 취한 후 함수에서 빠져나온다 라고 이야기 한다.

## 내 생각

- 가드절을 써야할지 if,else를 써야할지 코드리뷰를 하다보면 이런 경우를 많이 보게 된다. 그에 대한 확실한 기준점을 책에서 말해준 것 같다 코드리뷰 및 내 코드 작성 시에 많이 활용하면 좋을 것 같다

# 10.4 조건부 로직을 다형성으로 바꾸기

## 중요 내용

- 복잡한 조건부 로직은 클래스와 다형성을 이용하면 더 확실하게 분리할 수도 있다.

## 내 생각

- 조건부 로직을 다형성으로 바꾸는 것은 객체지향적인 관점에서는 어떻게 보면 당연하게 해야하는 것 처럼 볼 수도 있을 것 같다. OCP 원칙을 지키면서 코드도 깔끔하게 분리와 시켜서 관리 할 수 있는데 굳이 if,else로 결합도 높게 관리할 필요가 없기 때문이다.
- 그러나, 상속을 활용한 다형성을 쓰는 것은 한번쯤 생각해봐야할 문제라고 생각한다 책의 예제에서는 상속을 통한 다형성구현을 말하는데, 상속이 모든 경우에 해도 큰 문제가 없다는 것을 말하는 것처럼 보일 수도 있기 때문이다.

# 10.5 특이 케이스 추가하기

## 중요 내용

- 코드베이스에서 특정 값에 대해 똑같이 반응하는 코드가 여러 곳이라면, 그 반응들을 한 데로 모으는게 효율적이다.
- 특수한 경우의 공통 동작을 요소 하나에 모아서 사용하는 특이 케이스 패턴이라는 것이 있는데 ,바로 이럴 대 적용하면 좋은 메커니즘 이다.

## 내 생각

- 현재 회사 코드에도 반복적으로 특정값에 대해서 체크하고 에러를 raise 하는 코드가 있는데, 이 패턴을 적용해보면 중복을 줄일 수 있을 것 이라는 생각이 들었따

# 10.6 어설션 추가하기

## 중요 내용

- 어서셜은 항상 참이라고 가정하는 조건부 문장으로, 어설션이 실패 했다는 건 프로그래머가 잘못했다는 뜻이다.
- 어서션은 프로그램이 어떤 상태임을 가정한 채 실행되는지를 다른 개발자에게 알려주는 훌륭한 소통 도구인 것이다.
- 한편, 테스트 코드가 있다면 어서션의 디버깅 용도로서의 효용은 줄어든다

## 내 생각

- 어설션과 관련해서 실용주의 프로그래머 책에서 내용이 나와서 실제 구현 코드에 어설션을 쓰는게 맞는지에 대한 고민이 있었는데, 어느정도 풀린 것 같다
- 테스트 코드에서 적절히 어설션을 활용하고 있다면, 굳이 구현 코드 내에서 어설션을 추가할 필요가 없다는 것을 이해할 수있게 되었다

# 10.7 제어 플래그를 탈출문으로 바꾸기

## 중요 내용

- 함수에서 할 일을 다 마쳤다면, 그 사실을 return문으로 명확히 알리는 편이 낫지 않을까?

## 내 생각

- 저자는 일관되게 함수에서 여러 return문을 쓰는 것에 동의하는 입장을 내고 있다. 나 또한 비슷하게 적절하게 return 이 활용되는게 프로그램의 안정성을 높이고 코드 가독성을 높이는데 훨씬더 도움이 될 수 있다고 믿는다.
- 나도 제어 플래그 사용은 자제하려는 편인데, 코드를 읽을 때 불필요하게 STM을 쓰게 만들기 때문이다