/**
 * Cat of the Day
 *
 * <https://cataas.com/>
 * <https://cataas.com/cat?json=true>
 */

const baseUrl = 'https://cataas.com';

const get = async (url) => {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Response was not OK. Status returned was "${res.status} ${res.statusText}".`);
	}
	return await response.json();
}

const getNewCat = async () => {
	const cat = await get(`${baseUrl}/cat?json=true`)
	document.querySelector('#catImg').src = baseUrl + cat.url;
}

// get a mjau-mjau when button is pressed
document.querySelector('#getCatBtn').addEventListener('click', () => {
	getNewCat();
});

// start of with a cat
getNewCat();
