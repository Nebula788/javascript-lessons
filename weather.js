const container = document.getElementById("weather-info");
const bodyElement = document.getElementsByTagName("body")[0];
const input = document.getElementById("city-input");

async function mainWeather() {
  const city = document.getElementById(`city-input`).value;
  if (city) {
    const weather = await fetch(
      ` https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ffc74c9e41d3cd99bf6bb25a7f582a7a`
    );
    const data = await weather.json();
    console.log(data);

    container.innerHTML = `<p>City: ${data.name}
    </p><img src=${`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} class="image">
    <p> Temperatur: ${data.main.temp}°C</p>
    <p> Weather: ${data.weather[0].description}</p>
    <p> Humidity: ${data.main.humidity}%</p>
    <p> Wind: ${data.wind.speed}m/s</p>
    `;
  }
}
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    mainWeather();
  }
});
