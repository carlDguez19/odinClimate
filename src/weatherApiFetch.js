//import { fillMainTempGrid } from "./tempGridDOM";
export let weatherData;

export async function getWeatherData(place) {
    await fetch(`https://api.weatherapi.com/v1/current.json?key=44d73ca092904ea18a8191905241405&q=${place}`, { mode: 'cors' })
        .then(async function (response) {
            if (response.ok) {
                weatherData = await response.json();
                return weatherData;
            } else {
                throw new Error(response.statusText);
            }
        })
        .catch(function (error) {
            console.log("no such place O_o " + error);
        });
}