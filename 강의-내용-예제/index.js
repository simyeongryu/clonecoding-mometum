/*별로 안좋은 예*
// 1) html id가 title 인 태그를 개체로 얻는다.
const title = document.querySelector("#title");

// 현재 색과 같은지 아닌지 확인하여 이벤트 핸들링
// 2) 일반적으로 상수는 대문자로 선언
const BASE_COLOR = "#ffffff";
const OTHER_COLOR = "#000000";

// 현재 title.style.color를 console로 출력
// 클릭할 때마다 두 개의 컬러로 번갈아가면서 ㄱ변경
function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

// 페이지 실행시 title의 색상은 BASE_COLOR. title을 click하면 handleClick 함수 실행 
function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

// 3) init 함수 호출
init();

/*/
// 하지만 자바스크립트로 직접 페이지의  HTML/CSS 을 조작하는 것보다
// CSS는 CSS 파일에서만 조작되게, HTML 은 HTML 에서만 조작되게 하는 것이 좀더 좋은 자바스크립트
// 좋은 예 시작 

// 1) html id가 title 인 태그를 개체로 얻는다.
const title = document.querySelector("#title");

/* css 파일에 
h1 {
    color : #ffffff;
}

.clicked {
    color : #000000;
}

.btn {
    cursor : pointer;
}
*/

const CLICKED_CLASS = "clicked"

function handleClick() {
    const currentClass = title.className;
    if (currentClass !== CLICKED_CLASS) {
        title.className = CLICKED_CLASS
    } else {
        title.className = "";
    }
}

// 위의 함수는 title 의 클래스가 애초에 비어 있을 떄 좋다. 
// 하지만 클래스가 btn이라고 명시 되어 있으면 .btn의 pointer는 toggle 되지 못한다.  

function handleClick() {
    const currentClass = title.className;
    if (currentClass !== CLICKED_CLASS) {
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
}

// 위 함수 실행 시 한 번 클릭하고 다시는 toggle 되지 못한다. 이유는 currentClass가 CLICKED_CLASS, 즉 clicked 여야 하는데 btn clicked 이기 때문에 if절이 작동하지 않는다.

function handleClick() {
    // title 의 class 중에 CLICKED_CLASS 가 있다면,
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if (!hasClass) {
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
}
// 혹은
function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if (hasClass) {
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }
}

// 위의 함수들을 요약하면
function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}

// 페이지 실행시 title의 색상은 BASE_COLOR. title을 click하면 handleClick 함수 실행 
function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

// 3) init 함수 호출
init();

/**/