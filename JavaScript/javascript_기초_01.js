1. JavaScript 기초

HTML, CSS, JavaScript의 역할 구분하기.
- JavaScript 코드 실행 방법 익히기
- console.log() 사용하기
- 직접 문제 풀고 이해도 확인하기

=============================================================================================


console.log("Hello, JavaScript!");
console.log(10 + 20);
console.log("클레어의 첫 번째 JavaScript 수업");


console.log()는 어떤 역할을 할까?
- console : 브라우저 개발자 도구의 콘솔 기능
- log : 값을 출력하는 메서드
- () : 메서드에 전달할 값을 넣는 부분
- "문자열" : 문자나 문장을 표현하는 방법


//


JavaScript의 자료형
- 문자열 (String) : 문자, 문장
- 숫자 (Number) : 정수, 소수 등 숫자
- 불리언 (Boolean) : 참, 거짓. (조건문에서 자주 사용)
- undefined
- null
- 객체
- 배열


//


변수(Variable)
- 변수는 값을 저장해 두고, 나중에 다시 사용하기 위한 이름이다.


const name = "Claire";
const age = 30;

console.log(name);  // Claire
console.log(age);   // 30


- const : 변수를 선언할 때 사용하는 키워드. 선언 후 다른 값을 다시 할당할 수 없음.
- name, age : 변수 이름
- = : 오른쪽의 값을 왼쪽 변수에 할당한다는 뜻.
- "Claire", 30 : 변수에 저장되는 값.


const와 let의 차이?
- const : 다시 할당할 필요가 없는 변수
- let : 나중에 값이 바뀔 수 있는 변수

const city = "Seoul";
console.log(city);

let score = 10;
score = 20;
console.log(score); // 20


let score = 50;       // score라는 변수에 숫자 50을 저장한다.
score = 80;           // 기존에 저장했던 값인 숫자 50을 숫자 80으로 변경한다.
console.log(score);   // 현재 저장된 값인 80을 출력한다.


//

연산자

- (+) 더하기 : 10 + 3 → 13
- (-) 빼기   : 10 - 3 → 7
- (*) 곱하기 : 10 * 3 → 30
- (/) 나누기 : 10 / 2 → 5
- (%) 나머지 : 10 % 3 → 1

console.log(10 % 4); // 2

//

비교 연산자

- (>)   왼쪽이 더 크다          : 10 > 5 → true
- (<)   왼쪽이 더 작다          : 3 < 5 → true
- (>=)  왼쪽이 크거나 같다      : 5 >= 5 → true
- (<=)  왼쪽이 작거나 같다      : 3 <= 5 → true
- (===) 값과 자료형이 모두 같다 : 5 === 5 → true
- (!==) 값이나 자료형이 다르다  : 5 !== 3 → true

console.log(10 > 5);    // true
console.log(10 < 5);    // false
console.log(5 === 5);   // true
console.log(5 === "5"); // false (5는 숫자, "5"는 문자열)

//

논리 연산자

- (&&) AND_그리고 : 두 조건이 모두 참이어야 OK.     // 둘 다 맞아야 함.
- (||) OR_또는    : 두 조건 중 하나 이상 참이면 OK. // 하나만 맞아도 됨.
- (!)  NOT_부정   : 참과 거짓을 반대로 바꿈.        // 반대로 바꾼다.

console.log(true && true);   // true
console.log(true && false);  // false

console.log(true || false);  // true
console.log(false || false); // false

console.log(!true);          // false


//

조건문 if / else

- 특정 조건이 참인지 거짓인지에 따라 서로 다른 코드를 실행한다.

const score = 80;

if (score >= 60) {
  console.log("합격!"); 
}
// 참일때 실행(참이면 else 조건은 없어도 ok)

const score = 50;

if (score >= 60) {
  console.log("합격!");
} else {
  console.log("불합격!");
}
// 참일때와 거짓일때 각각 작성하기 (거짓이면 if 조건 건너뛰고, else 코드가 실행됨)

const score = 72;

if (score >= 90) {
  console.log("A등급");
} else if (score >= 80) {
  console.log("B등급");
} else if (score >= 70) {
  console.log("C등급");
} else {
  console.log("재시험");
}

- if : 조건이 참일 때 실행
- else : 앞의 조건이 모두 거짓일 때 실행
- else if : 앞의 조건이 거짓일 때 다른 조건 확인
- 조건문은 위에서부터 순서대로 확인하며, 처음 만난 참인 블록 하나만 실행한다.


//


반복문

- 반복문(Loop) : 같은 코드를 여러 번 실행할 때 사용한다.


console.log("안녕하세요");
console.log("안녕하세요");
console.log("안녕하세요");
console.log("안녕하세요");
console.log("안녕하세요");


for (let i = 0; i < 5; i++) {
  console.log("안녕하세요");
}

//

for문 기본구조 : for (초기식; 조건식; 증감식)

1. 초기식
- let i=0
- 반복을 시작할 때 변수를 초기화. 보통 반복 횟수를 세는 변수를 만든다.

2. 조건식
- i < 5
- 조건이 true인 동안 반복문을 실행한다. false가 되면 반복이 종료된다.

3. 증감식
- i++
- 한 번 반복한 뒤 실행된다. i++는 i의 값을 1씩 증가시킨다는 의미.AbortController

//

for (let i = 0; i < 5; i++) {
  console.log(i);
}

0
1
2
3
4

//

for문으로 배열 순회하기

const fruits = ["사과", "바나나", "딸기"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

사과
바나나
딸기

- fruits.length : 배열에 들어있는 요소의 전체 수.
- fruits[i] : 배열의 i번째 인덱스의 값을 가져온다.

//

while문
- 조건이 참인 동안 코드 블록을 반복 실행한다.


let i = 1;

while (i <= 3) {
  console.log(i);
  i++;
}

1
2
3

//

break
- 반복문을 즉시 종료.

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }

  console.log(i);
}

1
21
4
5

//

continue
- 현재 반복만 건너뛰고 다음 반복으로 넘어가기

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}

1
2
4
5
