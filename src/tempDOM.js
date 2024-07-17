import { getWeatherData } from "./weatherApiFetch";
import { weatherData } from "./weatherApiFetch";
import { searchCity } from "./searchEventListener";

export async function setMainTemp() {
    await getWeatherData(searchCity.value);

    let cTemp = document.querySelector(".currTemp");
    let tIcon = document.querySelector(".tempIconDiv");
    let extTemp = document.querySelector(".extraTempInfo");
    let lCont = document.querySelector(".loc");

    console.log(weatherData);
    //let mainTempDiv = document.querySelector(".mainTempCell");
    //mainTempDiv.textContent = weatherData.current.temp_f + " " + weatherData.location.name;

    tIcon.src = "https:" + weatherData.current.condition.icon;
    cTemp.textContent = weatherData.current.temp_f + "°F";
    extTemp.textContent = weatherData.current.condition.text + "\r\n" +
        "Feels Like: " + weatherData.current.feelslike_f + "°F\r\n" +
        weatherData.current.heatindex_f + "°F\r\n";
    lCont.textContent = weatherData.location.name + ",\r\n" +
        weatherData.location.region + ",\r\n" +
        weatherData.location.country;
}