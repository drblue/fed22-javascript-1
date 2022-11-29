/**
 * OpenWeatherMap API
 */

const API_KEY = "72387e8d3ae2acd855807a4d77bac3b7";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getCurrentWeather = async (city) => {
	// get weather for city from OpenWeatherMap API
	const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);

	// check if response is ok
	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`);
	}

	// convert response from JSON
	const data = await response.json();

	// return current weather
	return data;
}

getCurrentWeather("Malmö")
	.then(weather => {
		console.log(weather);
	});
