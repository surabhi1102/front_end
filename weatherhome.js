const apiKey = "4d35b16ed1deb131812a433160fcd7c5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon"); 

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".Humidity").innerHTML = data.main.humidity + "%"; // Corrected class name
    document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h"; // Corrected class name

    // Update the src attribute of weatherIcon based on the weather condition
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

checkWeather(); // Call the function on page load

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
