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



//

함수 안에서 다른 함수 호출하기

function sayHello() {
  console.log("안녕하세요!");
}

function startStudy() {
  sayHello();
  console.log("공부를 시작합니다!");
}

startStudy();


안녕하세요!
공부를 시작합니다!


//

함수가 값을 반환하지 않는 경우

function greet() {
  console.log("안녕하세요!");
}

const result = greet();

console.log(result);


안녕하세요!
undefined

- 함수에 return이 없으면 undefined가 반환된다.

//

function multiply(a, b) {
  return a * b;
}

console.log(multiply(3, 4));

12


const result = multiply(3, 4);
console.log(result);

console.log(multiply(3, 4));


- 함수의 반환값을 변수에 저장하지 않아도 바로 사용할 수 있다

//

반환값과 console.log() 구분하기

function add(a, b) {
  console.log(a + b);
}

const result = add(2, 3);

console.log("결과:", result);

5
결과: undefined


// 

화살표함수 (Arrow Function)


function add(a, b) {
  return a + b;
}

console.log(add(3, 5)); // 8


const add = (a, b) => {
  return a + b;
};

console.log(add(3, 5)); // 8


const 함수이름 = (매개변수) => {
  실행할 코드;
  return 반환값;
};

- const add : add라는 변수에 함수를 할당한다.
- (a, b) : 함수가 전달받을 매개변수
- => : 화살표 함수에서 매개변수와 함수 본문을 연결하는 기호
- 마지막에 };가 붙는 이유는 함수 자체를 const 변수에 할당하는 문장이기 때문


// 

더 간단하게..

const double = (number) => {
  return number * 2;
};

const double = number => number * 2;

- 매개변수가 하나면 괄호 ()를 생략할 수 있고,
- 함수 본문이 반환할 표현식 하나뿐이면 중괄호 {}와 return을 생략할 수 있다.

const multiply = (a, b) => a * b;

console.log(multiply(4, 3)); // 12

const multiply = (a, b) => {
  a * b;
};

console.log(multiply(4, 3)); // undefined

- 중괄호 {}를 사용한 함수 본문에서는 return을 직접 작성해야 값을 반환한다.

//

// 기존 함수
function double(number) {
  return number * 2;
}

// 화살표 함수
const doubleArrow = number => number * 2;

console.log(double(5));       // 10
console.log(doubleArrow(5));  // 10


//

배열 메서드 (Array Methods)

const fruits = ["사과", "바나나", "딸기"];

console.log(fruits[0]); // 사과
console.log(fruits[1]); // 바나나


1. push() : 배열 끝에 추가하기
- push()는 배열을 직접 변경한다.
- 추가한 요소는 배열의 마지막에 들어간다.

const numbers = [10, 20, 30];

numbers.push(40);

console.log(numbers[3]); // 40


2. pop() : 배열의 마지막 요소를 제거하고 그 값을 반환한다.

const fruits = ["사과", "바나나", "딸기"];

const removedFruit = fruits.pop();

console.log(removedFruit); // 딸기
console.log(fruits);       // ["사과", "바나나"]


3. unshift() : 배열의 제일 앞에 요소를 추가한다. 기존 요소의 인덱스도 바뀜.

const numbers = [20, 30];

numbers.unshift(10);

console.log(numbers[0]); // 10
console.log(numbers.length); // [10, 20, 30]


4. shift() : 배열의 제일 앞 요소를 제거하고 그 값을 반환한다.

const fruits = ["사과", "바나나", "딸기"];

const firstFruit = fruits.shift();

console.log(firstFruit); // 사과
console.log(fruits);     // ["바나나", "딸기"]


5. includes() : 특정 값을 포함하고 있는지 확인한다.

const fruits = ["사과", "바나나", "딸기"];

console.log(fruits.includes("바나나"));
console.log(fruits.includes("포도"));

true
false


6. indexOf() : 특정 값이 몇 번째 인덱스에 있는지 찾아준다.

const fruits = ["사과", "바나나", "딸기"];

console.log(fruits.indexOf("바나나")); // 1
console.log(fruits.indexOf("포도"));   // -1 (값이 없으면 -1로 반환된다.)


7. forEach() : 배열의 요소를 하나씩 꺼내서 반복 작업해준다. for 반복문과 비슷

const fruits = ["사과", "바나나", "딸기"];

fruits.forEach((fruit) => {
  console.log(fruit);
});

사과
바나나
딸기

forEach()와 for()의 차이

// forEach()
numbers.forEach((number) => {
  console.log(number);
});

// for 반복문
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

- for() : 인덱스를 기준으로 반복 작업을 처리
- forEach() : 인덱스를 관리하지 않고, 배열을 요소에 직접 반복 작업을 처리


8. map() : 새로운 배열을 만들어서 반환한다.

const numbers = [1, 2, 3];

const result = numbers.map((number) => {
  return number * 2;
});

console.log(result);

[2, 4, 6]


9. filter() : 조건에 맞는 요소만 골라 새로운 배열을 만든다.

const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.filter((number) => {
  return number >= 4;
});

console.log(result);

[4, 5, 6]


10. find() : 조건을 만족하는 첫번째 요소 하나를 찾아서 반환한다.

const numbers = [5, 12, 18, 25];

const result = numbers.find((number) => {
  return number > 15;
});

console.log(result); // 18


11. some() : 하나라도 조건을 만족하면 true
12. every() : 모든 요소가 조건을 만족해야 true

const scores = [45, 60, 75, 90];

const result = scores.some((score) => {
  return score >= 80;
});

console.log(result); // true


