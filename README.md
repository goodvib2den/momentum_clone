# Momentum app clone

Nomad coder 바닐라 JS로 크롬 앱 만들기 코스의 대한 내용입니다.  
배운 내용을 정리해가며 작성하고 정리하는 것에 목적을 두었습니다.
<br/><br/>
🔗[Nomadcoders.co](https://nomadcoders.co/)
<br/><br/>

---

## 📝 코스에 따라가며 만든 기능 소개<br/><br/>

### 1. Login 기능 🔐

유저의 이름을 입력하고 저장할 수 있게합니다

- html의 `form` 태그를 활용하여 JS에서 이벤트를 제어

- 브라우저 localStorage 를 사용하여 유저의 이름을 브라우저에 저장

- `if else` 문을 활용하여 localStorage에 데이터가 없을 경우 폼이 생성
  <br/><br/>

### 2. 시계 기능 🕒

유저의 로컬 시간을 시간:분:초 로 출력해 주는 기능입니다.

- `Date()` 내장 객체를 이용

- setInterval을 1000ms(1s) 의 일정한 간격을 두고 재 출력하는 식으로 매 초마다 실시간으로 시간이 재출력
  <br/><br/>

### 3. Random elements 기능 ⚙️

초기 로드 시 명언과 배경 이미지가 출력되는 기능입니다.

Math 내장객체를 활용하여 무작위한 수를 생성하여 대입시켰습니다.

1. 명언(quote.js)

   - 명언과 작가를 오브젝트로 묶어 배열로 변수 선언
   - `Math` 를 통하여 배열의 length를 이용한 수를 받아옴
   - 명언과 작가를 같은 배열의 수로 받아 화면에 출력함
     <br/><br/>

2. 배경(background.js)

   - unsplash random 소스링크를 이용하여 사진을 받아옴
   - 사진의 크기를 FHD의 크기로 받아옴

### 4. To-do List 기능 ✅

일반적인 할일 목록 기능입니다.  
폼을 활용하여 유저가 입력하고 아래 순서대로 출력합니다.

- html의 `form` 태그를 활용하여 JS에서 이벤트를 제어

- html에 ul/li 구조로 생성하여 todo는 `li`태그로 출력

- 브라우저 localStorage 를 사용하여 유저의 이름을 브라우저에 저장

- localStorage의 아이템을 `JSON`을 이용하여 array로 변환하고 내부의 todo 입력 시 오브젝트로 생성하여 관리

- todo 삭제는 버튼에 이벤트를 리스닝함  
   `filter()`를 통하여 삭제를 구현

  _순서 변경 및 체크 박스를 통한 삭제 검토중_
  _할일 수정 불가_
  <br/><br/>

### 5. 날씨 정보 기능 ☀️

현재 위치 정보를 통하여 [openweathermap](https://openweathermap.org/)의 API를 이용한 날씨 정보 제공 기능입니다.

- `navigator`를 이용한 브라우저 위치정보를 파악

- 위치정보 파악 시 함수

  1. 허용 시 함수

     - 브라우저 상 위도, 경도 파악
     - API 호출
     - 간략한 날씨 정보와 도시 출력
       <br/><br/>

  2. 비허용 시 함수
     - 알림창을 통하여 위치정보 파악 불가 출력
       <br/><br/>

---

## ➕ 추가

- clone 0.1

  - html 구조를 수정하였습니다.
  - 날씨 기능에 온도를 추가하였습니다.
  - img array에 파일명을 일일히 string으로 추가해야 하는 단점을 보완하여 위하여 for문을 이용하였습니다.  
    _\* 하지만 수정하였음에도 여전히 파일명을 정수의 오름차순으로 정렬해주어야 한다는 단점이 존재하긴 합니다._
  - 1차 UI 구성 완료

- clone 0.2
  - bg 이미지를 unsplash 제공하는 소스 링크를 이용하여 추가합니다.
