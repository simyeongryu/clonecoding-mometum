## 1.1

웹프론트엔드에서 사용할 수 있는 유일한 언어

## 1.2

## 1.3
ECMAScript -> specification : 설명문.

바닐라자바스크립트 열심히 하고 버젼을 생각하자.

## 자바스크립트를 배우면 다른 언어를 배울 수 있을까?

언어를 배울 땐 언어의 컨셉을 배우게 되고, 그 컨셉은 대충 비슷하다. 그래서 한 언어를 깊게 파면 다른 언어를 배우는 건 상대적으로 쉬워진다.

## 변수 variables

정의 : 변경되거나 변경될 수 있는 것.

자바스크립트의 문제점. 자식을 훈육하지 않는 부모. 틀려도 에러를 내지 않는다. 최대한 실행하려고 노력한다. 거지같은 문법으로 해도.

하나의 expression 이 끝나는 지점은 `;`

instruction? -> if, for, 등

변수를 생성, 변수 초기화, 변수 사용.

생성과 초기화를 동시에 하기도 한다.

생성 : 선언 = 초기화 : 할당

`let` 변수 선언 시 변수 이름 앞에 붙여준다.

const : contant. 상수. 안정적인. 한 번 선언 및 할당하면 값을 바꿀 수 없다.

let : 언제든지 다른 값으로 다시 할당할 수 있다.

var(variable) : 변수의 유효성 범위를 무시한다. 사용하지 말자.

## 주석.

`// 내용 `, `/* 내용 */`

변수를 사용할 땐 기본적으로 const. 변수가 변해야 할 필요가 있다면 let.

## 데이터 타입

1. String (text string.) 문자열. 실. `""` 혹은 `''` 따옴표가 실의 양 끝이라고 생각하자.

2. boolean (true or false): 소문자로 쓴다.
- false == 0, true == 1 (컴퓨터는 이진법)
- true와 false는 텍스트가 아니다. 값이다.

3. Number 숫자.

4. float 실수.
- floating number `.` (떠돌이)소수점이 있는 숫자.

```javascript
const name = "류시명";
```

## 자료구조

1. Array []
- index : 0 부터 시작
- list. 그냥 데이터의 나열. 리스트.


2. Object {}
- value에 이름을 줄 수 있다. == key
- const로 선언되었더라도 안의 내용은 바꿀 수 있다. (자기 자신은 못바꿈)
- 즉 myInfo.gender 의 값은 바꿀 수 있어도 myInfo를 재할당 할 수는 없음.
- let으로 선언하면 가능
- array 안에 object를 넣을 수 있고, 그 반대도 가능
```javascript
const myInfo = {
    name: "Simyeong",
    age: 33,
    gender: "Male",
    isHandsome: true
};
```

## 함수
console 은 하나의 오브젝트. log는 그 오브젝트의 key.

`console.log`

console 처럼 자바스크립트에 이미 있는 객체는 내장객체(built-in-object)

console.log 는 내장함수

**내가 원하는 만큼 사용할 수 있는 기능(코드 조각).**
`
function sayHello() {
dd
}
`

매개변수 == parameter == argument

console.log()는 텍스트를 매개변수로 한다. (자바로 치면 내용이 없을때, 1개만 있을때, 2개 있을 때 등이 오버로드 되어 있다.)

## 백틱

```javascript
function backtick(name, age) {
    console.log(`Your name is ${name}, and your age is ${age}.`);
}

backtick("시명", 28);
```

## document
document.getElementById("HTMLid")
innerHTML()

내장객체
```javascript

```

DOM - Document Object Model

자바스크립트는 HTML 태그를 갖고 와서 객체로 만든다.

```javascript
const title = document.getElementById("title");

title.innerHTML = "Hello!";
```

`console.dir(object);`

해당 객체의 keyAndValues 를 볼 수 있다.

우리가 알고 있는

console, document 들의 함수들은 모두 해당 객체에 정의되어 있는것.

## document.querySelector()

document.getElementById("title") == document.querySelector("#title)

document.getElementByClassName("title") == document.querySelector(".title)

## events and events handler

JS 는 HTML, CSS를 조작하고, Event를 조작한다.

```javascript
function handleResize() {
    console.log("I have been resized.");
}
//window.addEventListener("resize", handleResize());
// 라고 적지 않는다. 위의 것은 함수가 즉시 실행된다.
// 아래 것은 resize 이벤트가 발생했을 때 실행된다. 
// 즉, 내가 원할 때 특정 함수를 실행시키기 위해서는 '()'를 빼고 적는다. 
window.addEventListener("resize", handleResize);
```

```javascript
// event는 이벤트가 발생할 때 자바스크립트가 자동으로 생성하는 내장 객체
function handleResize(event) {
    console.log(event);
}

window.addEventListener("resize", handleResize);
```

## if-else

if (조건문)

if 의 조건문은 항상 참이어야 한다!!

## MDN

이벤트를 알고 싶으면 MDN 검색.

> js event mdn

## 