// Select the id #weatherForm to use the addEventListener
const weatherForm = document.querySelector('#weatherForm');

// Select the <div></div> with the .weatherContainer class
const weatherContainer = document.querySelector('.weatherContainer');

// Use the addEventListener
weatherForm.addEventListener('submit', searchWeather);

// This function is used to search for weather
function searchWeather(e) {
    e.preventDefault();
    const country = document.querySelector('#country').value;
    const city = document.querySelector('#city').value;

    // If any or both of the 2 fields is empty, it executes the weatherError function
    if (country === '' || city === '') {
        weatherError('Both fields are required');
        return;
    }

    // If the 2 fields are complete
    checkWeatherAPI(country, city);
};

// This function is used to display the message "Both fields are required"
function weatherError(message) {

    // If the weatherError message is already displayed

    const fieldsRequiredSign = document.querySelector('.fieldsRequired');

    if (fieldsRequiredSign) {
        fieldsRequiredSign.remove();
    }

    // If the "Both fields are required" message is the first time it is displayed
    const divFieldsRequired = document.createElement('div');
    const fieldsRequired = document.createElement('h4');
    fieldsRequired.textContent = message;
    divFieldsRequired.classList.add('fieldsRequired');
    divFieldsRequired.appendChild(fieldsRequired);

    // Places the message "Both fields are required" inside divFieldsRequired
    weatherContainer.appendChild(divFieldsRequired);

    // Delete the "Both fields are required" message after 3 seconds that it appears
    setTimeout(() => {
    divFieldsRequired.remove();
    }, 3000)
};

// This function is used to check the weather's API
function checkWeatherAPI(country, city) {
    const appID = '807c27d0ce1e6ca7d3964c0642a727c5';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appID}`;

    fetch(url)
        .then(reply => reply.json())
        .then(data => {
            if(data.cod === '404') {
                weatherError('City not found');
                return;
            }

            // Call the function that displays the weather in the .html
            showWeather(data);
        })
};

// Displays the weather in the .html
function showWeather(data) {

    // If there is already a printed weather, delete the content
    cleanWeatherInfo();

    // Extracts the current temperature, the maximum and minimum of main
    const {main: {temp, temp_min, temp_max}} = data;

    // Subtracting 273.15 converts the temperature from kelvin to centigrade, converting it to a number and rounding it off
    const currentTemp = Math.round(Number(temp) - 273.15);
    const minTemp = Math.round(Number(temp_min) - 273.15);
    const maxTemp = Math.round(Number(temp_max) - 273.15);

    // Creates a <p></p> containing the temp, max temp and min temp - &#8451 is used to display "°C"
    const tempP = document.createElement('p');
    tempP.innerHTML = `${city.value}: Temp ${currentTemp} &#8451 - Max ${maxTemp} &#8451 - Min ${minTemp} &#8451`;

    // Places temps inside a <div></div>
    const tempDiv = document.createElement('div');
    tempDiv.classList.add('weatherInfo');
    tempDiv.appendChild(tempP);

    // Places tempDiv inside weatherContainer
    weatherContainer.appendChild(tempDiv);
};

// If there is already a printed weather, delete the content
function cleanWeatherInfo() {
    const weatherInfo = document.querySelector('.weatherInfo');

    if (weatherInfo) {
        weatherInfo.remove();
    }
};