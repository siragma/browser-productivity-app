

function onGeoOk(position) {
    // console.log("success");
    const API_KEY = "0d5d98f5d73489fa2aba0bda56ea0e70";
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        // console.log("국가 : " + data.sys.country);
        // console.log("지역 : " + data.name);
        // console.log("날씨 : " + data.weather[0].main);
        // console.log("온도 : " + data.main.feels_like);
        const city = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:nth-child(2)");
        const weather = document.querySelector("#weather span:last-child");
        const country = data.sys.country;
        
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temp.innerText = data.main.temp;
        
    });
}   
function onGeoError() {
    // console.log("fail");
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
