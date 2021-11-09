# Momentum app clone

Nomad coder 바닐라 JS로 크롬 앱 만들기 코스의 대한 내용입니다.  
\*배운 내용을 정리해가며 작성하고 정리하는 것에 목적을 두었습니다.

## 1. Login 기능

유저의 이름을 입력하고 저장할 수 있게합니다

- html의 form 태그를 활용하여 JS에서 이벤트를 제어

- JS의 localStorage 를 사용하여 유저의 이름을 브라우저에 저장

- if else 문을 활용하여 localStorage에 데이터가 없을 경우 폼이 생성

## 2. Clock 기능

유저의 로컬 시간을 시간:분:초 로 출력해 주는 기능입니다.

- Date() 내장 객체를 이용하여 현재 브라우저에서 불러들이는 시간 정보를 가져온 후 메서드를 통하여 시, 분, 초를 각 변수로 선언 이후 string으로 감싸주었음

- 10의 자리 수가 아닌 시간이 표기될 경우 0n 로 출력되지 않고 1의 자리 수로 출력되기 때문에 padStart 메서드를 이용하여 1의 자리 수일 경우 앞에 0이 출력되도록 하였음

- 브라우저 초기 로드 시 시간이 출력되 않음으로 시간을 출력해주는 함수 실행

- 이후 setInterval을 1000ms(1s) 의 일정한 간격을 두고 재 출력하는 식으로 매 초마다 실시간으로 시간이 재출력
