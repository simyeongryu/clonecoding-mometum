const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDo";

// 할 일들이 저장될 배열 
let toDos = [];

function filterFn(toDo) {
    return toDo.id === 1;
}

function deleteToDo(event) {
    // 부모 요소 찾기.
    // console.dir(event.target);
    // 이벤트가 발생한 버튼
    const btn = event.target;
    // 해당 버튼의 부모요소
    const li = btn.parentNode;
    // 그 부모요소를 지운다.
    toDoList.removeChild(li);

    /** filter()
     * 객체 내에서 () 안의 조건에 맞는 요소들만 추려서 배열로 리턴.
     * 객체 내의 모든 요소에 함수를 실행시킨다.
     */
    const cleanToDos = toDos.filter(function (toDo) {
        // console.log(toDo.id, li.id);
        // li.id 는 string, toDo.id는 number 이기ㄷ 때문에 그냥 하면 적용이 되지 않는다.
        return toDo.id !== parseInt(li.id);
    });
    // 이런 재할당은 toDos가 let으로 선언되어야 가능하다.
    toDos = cleantoDos;
    saveToDos();
}

function saveToDos() {
    /**
     * localStorage.setItem(TODO_LS, toDos); 라고 하면
     * JS 는 local storage에 모든 데이터를 string 으로 저장기 때문에
     * object 값은 제대로 저장되지 않는다.
     * JS의 Object를 String으로 변환해주는 함수를 사용한다.
     */
    // localStorage.setItem(TODO_LS, toDos);
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    // HTML 요소 생성
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌"; // 이모지를 사용하려면 HTML에 <meta charset="utf-8" /> 추가 
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    // 배열이 비었을 때의 id는 1
    const newId = toDos.length + 1;
    span.innerText = text;
    // span 과 delBtn 을 li의 하위요소로 추가
    li.appendChild(span);
    li.appendChild(delBtn);
    // 삭제를 위해 li 태그에 id 값 추가
    li.id = newId;
    // li를 ul의 하위요소로 추가.
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    // 미리 준비해둔 배열에 저장
    toDos.push(toDoObj);
    
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    // 누군가 todo 를 제출하면 input 태그 안의 내용 초기화
    toDoInput.value = "";
}

function loadToDo(){
    const toDo = localStorage.getItem(TODO_LS);

    if (toDo !== null) {
        // 문자열로 저장된 데이터를 JS로 읽기 위해 다시 Object로 변환
        const parsedToDo = JSON.parse(toDo);
        /** forEach
         * array 내장 함수
         * 기본적으로 함수를 실행함. 배열의 요소들에 한 번씩 함수를 실행시키는 것
         */
        parsedToDo.forEach(function(toDoChild) {
            paintToDo(toDoChild.text);
        });
    }
}

function init() {
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();

/** JSON
 * JavaScript Object Notation
 * 데이터를 JS가 다룰 수 있도록 object형으로 만든 것 
 */