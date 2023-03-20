function getWeather() {
    let city = document.getElementById("search-location").value;
    fetchWeather(city)
}

async function fetchWeather(city) {
    const APIKey = "e6c089e389f49fc471ca52363693c80b";
    if (city == "") {
        city = "Delhi"
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`);
        let data = await response.json();
        insertData(data)
    }
    else {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`);
        let data = await response.json();
        if(data.cod=="404"){
            alert("Not Found");
        }else{
            insertData(data);
        }
        
    }

}

function insertData(data) {
    document.getElementById("city-name").innerHTML = data.name;
    document.getElementById("city-temp").innerHTML = `${parseInt(data.main.temp)}°C`;
    document.getElementById("city-description").innerHTML = data.weather[0].description;
    document.getElementById("city-wind-speed").innerHTML = `${parseInt(data.wind.speed)}Km/h`;
    document.getElementById("city-cloud").innerHTML = `${data.main.humidity}%`;
    document.getElementById("city-visibility").innerHTML = data.visibility;
    const image = document.querySelector('.weather-img img');
    switch (data.weather[0].main) {
        
        case 'Clear':
            image.src = './utils/clear.png';
            break;

        case 'Rain':
            image.src = './utils/rain.png';
            break;

        case 'Thunderstorm':
            image.src = './utils/thunderstorm.png';
            break;

        case 'Clouds':
            image.src = './utils/cloud.png';
            break;

        case 'Haze':
            image.src = './utils/haze.png';
            break;
        case 'smoke':
            image.src = './utils/smoke.png';
            break;
        default:
            image.src = "./utils/default.png";
    }

}

window.onload = function () {
    let monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let currentDate = `${day}-${monthNames[month]}-${year}`;
    document.getElementById("current-date").innerHTML = currentDate;

}
