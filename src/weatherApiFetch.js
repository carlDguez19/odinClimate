//import { fillMainTempGrid } from "./tempGridDOM";
export let weatherData;

export async function getWeatherData(place) {
    try {
        let resp = await fetch(`https://api.weatherapi.com/v1/current.json?key=44d73ca092904ea18a8191905241405&q=${place}`, { mode: 'cors' });
        weatherData = await resp.json();
        return weatherData;
        // console.log(weatherData);
        // const tempAreaFilled = await fillMainTempGrid(weatherData, "f");
        // console.log(tempAreaFilled);
        // const windLondon = weatherData.current.wind_mph; USE THIS AS A TEMPLATE TO GET ANYTHING U NEED FROM THE JSON FILE
        // console.log(resp.status + " is my status code");//200 for valid entry
        // console.log(weatherData);
        // console.log(windLondon + "mph wind in El Paso!!!!");
    } catch (error) {
        console.log("no such place o_O " + error.message);
    }
}