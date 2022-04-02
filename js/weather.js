function getGeoSuc(pos) {
    console.log("get Geo success!!");
    
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;

    console.log("You are in", lat, lon);
    // fetch(): 인자로 받은 url 페이지를 요청(request)하여 현재 페이지에 데이터를 불러옴(?)
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather-section span:first-child");
        const city = document.querySelector("#weather-section span:nth-child(2)");
        const temp = document.querySelector("#weather-section span:nth-child(3)");

        weather.innerHTML = `${data.weather[0].main} <br>`;
        city.innerHTML = `${data.name} <br>`;
        temp.innerHTML = `${data.main.temp} <br>`;
    });
}
function getGeoErr() {
    console.log("get Geo failed..");
}

const OPENWEATHER_API_KEY = "3d195e681102724cef1bc0421ab70cfc";

navigator.geolocation.getCurrentPosition(getGeoSuc, getGeoErr);