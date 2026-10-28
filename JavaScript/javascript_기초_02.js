함수(Function)란?
- 특정 작업을 수행하도록 작성해 둔 코드 묶음

function sayHello() {
  console.log("안녕하세요!");
}

sayHello();
sayHello();
sayHello();


- function : 함수를 선언할 때 사용하는 키워드
- sayHello : 함수 이름
- sayHello() : 함수를 실행하는 호출문


//

function greet(name) {
  console.log(name + "님, 안녕하세요!");
}

greet("클레어");
greet("민수");

클레어님, 안녕하세요!
민수님, 안녕하세요!


- 매개변수(parameter) : 함수가 전달받은 값을 담아두는 변수 → name
- 인수(argument) : 함수를 호출할 때 실제 전달 받는 값 → "클레어", "민수"

//

return
- 값 반환하기

function add(a, b) {
  return a + b;
}

const result = add(3, 5);

console.log(result);

8


- console.log() : 값을 콘솔에 출력한다.
- return : 함수의 결과값을 호출한 곳으로 돌려준다. 

* return이 실행되면 해당 함수의 실행은 종료.