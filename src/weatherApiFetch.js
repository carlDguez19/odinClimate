export async function getWeatherData(place) {
    try {
        let resp = await fetch(`https://api.weatherapi.com/v1/current.json?key=44d73ca092904ea18a8191905241405&q=${place}`, { mode: 'cors' });
        const weatherData = await resp.json();
        return weatherData;
        // const windLondon = weatherData.current.wind_mph;
        // console.log(resp.status + " is my status code");//200 for valid entry
        // console.log(weatherData);
        // console.log(windLondon + "mph wind in El Paso!!!!");
    } catch (error) {
        console.log("no such place o_O " + error.message);
    }
}