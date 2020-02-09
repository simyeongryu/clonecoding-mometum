const weather = document.querySelector(".js-weather");

const API_KEY = "91c9d63d5dcf2b74c7d2e66cb945ce0a";
const COORDS = 'coords';

// 날씨 정보 받기
// 새로고침 없이 데이터를 받아온다.
// 개발자도구 network 패널 확인할 것 - request, response 내용 확인 가능
function getWeather(lat, lon) {
    // fetch 함수로 url을 받아온다.
    // &units=metric : 섭씨로 변환
    // then() - 데이터가 완전히 넘어온 이후에 함수 실행
    // fetch가 다 이루어지지 않은 상태에서 다음 작업을 하면 fetch나 그 다음 작업이 잘 안 될 수 있다.
    // json object 보기
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        // 온도와 장소 찾기
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `기온 ${temp} 도 @ ${place}`;
    })
}

// 위도와 경도를 local storage에 저장
function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// 현재 위치를 찾는 데 성공했을 때 실행되는 함수
function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        /** 객체의 key 값과 변수의 이름이 같을 때 */
        latitude,
        longitude
        // 위의 코드는 아래의 코드와 같다.
        // latitude: latitude,
        // longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
// 현재 위치를 찾는 데 실패했을 때 실행되는 함수
function handleGeoError() {
    console.log("Can't access geo location.");
}


function askForCoords() {
    // navigator API > geolocation object > getCurrentPosition fn
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

// 좌표 읽기 함수
function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    
    if (loadedCoords === null) {
        // 좌표가 없으면 얻기
        askForCoords();
    } else {
        // 문자열 값을 JSON 으로 변환
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}


function init() {
    loadCoords();
}

init();