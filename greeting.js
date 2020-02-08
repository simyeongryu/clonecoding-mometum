const form = document.querySelector(".js-form"),
/**/
input = document.querySelector(".js-form input"),
/*/
input = form.querySelector("input"),
/**/
greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    // 이벤트의 기본동작 방지 - 이벤트 이후 페이지 새로고침
    event.preventDefault();
    // input 에 입력된 값 저장
    const currentValue = input.value;
    // 이름 띄우기
    paintGreeting(currentValue);
    // 이름 local storage에 저장
    saveName(currentValue);
}

function askForName() {
    // 입력창 생성
    form.classList.add(SHOWING_CN);
    // submit 이벤트 발생 시,
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

// local storage 에서 값을 가져온다.
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    if (currentUser === null) { // userName이 없다면 
        askForName();
    } else { // userName이 있다면
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();

/** 크롬 개발자 도구 요소검사 -> application -> local storage
 * 자바스크립트 정보를 확인/변경할 수 있다. (세션, 브라우저 등)
 * localStorage.setItem("nico", true);
 * -> 저장
 * localStorage.getItem("nico");
 * -> true
 * 해당 URL에서만 작동한다. 
 */