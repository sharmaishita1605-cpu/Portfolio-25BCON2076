console.log("JavaScript connected");
const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Switch to Light Mode";
    } else {
        themeButton.textContent = "Switch to Dark Mode";
    }

});
const cityInput = document.getElementById("cityInput");
const weatherButton = document.getElementById("weatherButton");
const weatherResult = document.getElementById("weatherResult");
async function getWeather() {

    const city = cityInput.value.trim();

    if (!city) {
        weatherResult.textContent = "Please enter a city.";
        return;
    }

    weatherResult.textContent = "Loading weather...";

    const apiKey = "64805cde9aa04897f6753331e77ce58d";

    const url =
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        weatherResult.innerHTML = `
            <h3>${data.name}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Condition: ${data.weather[0].description}</p>
        `;

    } catch (error) {

        weatherResult.textContent =
            "Unable to fetch weather. Please try again.";

        console.error(error);
    }
}
const projectSearch = document.getElementById("project-search");
const projectItems = document.querySelectorAll(".projects ul li");
const noProjectsMessage = document.getElementById("no-projects");

if (projectSearch && noProjectsMessage) {
  projectSearch.addEventListener("input", function () {
    const query = projectSearch.value.toLowerCase().trim();
    let count = 0;

    projectItems.forEach(function (item) {
      const matches = item.textContent.toLowerCase().includes(query);

      item.style.display = matches ? "" : "none";

      if (matches) {
        count++;
      }
    });

    noProjectsMessage.hidden = count !== 0;
  });
}