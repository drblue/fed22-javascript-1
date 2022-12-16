/**
 * 🌧️.
 *
 */

const forecastEl = document.querySelector('#forecast');
const spinnerEl = document.querySelector('#spinner');

const renderAlert = (msg, severity = 'info') => {
	forecastEl.innerHTML =
		`<div class="alert alert-${severity}">${msg}</div>`;
}

const renderNotice = msg => renderAlert(msg, 'info');
const renderWarning = msg => renderAlert(msg, 'warning');
const renderError = msg => renderAlert(msg, 'danger');

const renderCurrentWeather = data => {
	// transform weather conditions to listitems
	const conditions = data.weather.map(condition =>
		`<li><img src="http://openweathermap.org/img/wn/${condition.icon}@2x.png" title="${condition.description}"></li>`
	);

	// determine if it's daytime or nighttime
	const now = Math.round(Date.now() / 1000);

	// same as below, but prettier 🤩
	const banner = (now > data.sys.sunrise && now < data.sys.sunset)
		? 'assets/images/day.svg'
		: 'assets/images/night.svg';

	/*
	// same as above, but not as pretty
	let banner;
	if (now > data.sys.sunrise && now < data.sys.sunset) {
		banner = 'assets/images/day.svg';
	} else {
		banner = 'assets/images/night.svg';
	}
	*/

	// get weather report freshness
	const freshness = new Date( data.dt * 1000 );

	forecastEl.innerHTML = `
		<div class="card">
			<img src="${banner}" class="card-img-top">
			<div class="card-body">
				<h5 class="card-title" id="location">
					<span id="city">${data.name}</span>,
					<span id="country">${data.sys.country}</span>
				</h5>
				<p class="temp">
					<span id="temperature">${data.main.temp}</span>
					&deg;C
				</p>
				<p class="humidity">
					<span id="humidity">${data.main.humidity}</span>
					&percnt; humidity
				</p>
				<p class="wind">
					<span id="windspeed">${data.wind.speed}</span>
					m/s
				</p>

				<ul class="conditions">
					${conditions.join('')}
				</ul>

				<p class="text-muted small">${freshness.toLocaleString()}</p>
			</div>
		</div>
	`;
}

document.querySelector('#search-form').addEventListener('submit', async e => {
	e.preventDefault();

	const city = e.target.query.value.trim();

	if (city.length < 3) {
		renderNotice("Please enter at least 3 chars");
		return;
	}

	// save city to localStorage
	localStorage.setItem('weather_city', city);

	// hide forecast and show spinner
	forecastEl.classList.add('hide');
	spinnerEl.classList.remove('hide');

	// do search
	console.log(`Searching for city "${city}"`);
	try {
		const data = await getCurrentWeather(city);

		// render current weather conditions
		renderCurrentWeather(data);
	} catch (e) {
		renderWarning("That does not look like a city.");
	}

	// hide spinner and show forecast again
	spinnerEl.classList.add('hide');
	forecastEl.classList.remove('hide');
});

// set city-input to any previously saved city in localStorage
document.querySelector('#query').value = localStorage.getItem('weather_city') ?? '';
