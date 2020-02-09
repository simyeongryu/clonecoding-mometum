const body = document.querySelector("body");

// 이미지 개수
const IMG_NUMBER = 4;

// API 를 통해 사진을 받는다면 해야 할 처리
// function handleImgLoad() {
//     console.log("finished loading");
// }

function paintImage(imgNum){
    // img 태그 추가
    const img = document.createElement("img");
    // src 속성 추가
    img.setAttribute("src", `img/${imgNum+1}.jpg`);
    // bgImg 클래스 추가
    img.classList.add("bgImg");
    body.prepend(img); // 태그 앞에 추가
    // body.appendChild(img); 는 태그 맨 뒤에 추가
    // API 를 통해 사진을 받는다면 해야 할 처리
    // image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
    // floor 내림, ceil 올림
    // random()*n. 0~n 미만 사이의 랜덤한 숫자(float)
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    paintImage(genRandom());
}

init();