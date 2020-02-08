const clockContainer = document.querySelector(".js-clock"), 
    clockTitle = document.querySelector("h1");

const date = new Date();

function getTime() {
    // 현재 시, 분, 초값 얻기
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    // 시간값이 10보다 작으면 01, 02, 03, .. 으로 표기. 
    // 10이상이면 그대로 표기
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

}

function init() {
    getTime();
    // setInterval(함수 지정, 시간 지정) - 지정된 시간마다 지정된 함수 실행
    setInterval(getTime, 1000);

}

init();