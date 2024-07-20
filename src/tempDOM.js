import Wind from '../src/icons/wind.png';
import WindRose from '../src/icons/windRose.png';
import Moisture from '../src/icons/moisture.png';
import Climate from '../src/icons/climate.png';
import { getWeatherData } from "./weatherApiFetch";
import { weatherData } from "./weatherApiFetch";
import { searchCity } from "./searchEventListener";

export function preFillIcons() {
    let tIcon = document.querySelector(".tempIconDiv");
    let wIcon = document.querySelector(".windIcon");
    let uvIcon = document.querySelector(".uvIcon");
    let moIcon = document.querySelector(".moIcon");

    tIcon.src = Climate;
    wIcon.src = Wind;
    uvIcon.src = WindRose;
    moIcon.src = Moisture;
}

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
        "Heat Index: " + weatherData.current.heatindex_f + "°F\r\n";
    lCont.textContent = weatherData.location.name + ",\r\n" +
        weatherData.location.region + ",\r\n" +
        weatherData.location.country;
    windSideOne();
    uvSideTwo();
    lastUpdateSideThree();
    moistureSideFour();
}

export function windSideOne() {
    let wIcon = document.querySelector(".windIcon");
    let windInfo = document.querySelector(".windInfo");

    wIcon.src = Wind;
    windInfo.textContent = "WIND\r\n\r\n" + "Speed: " + weatherData.current.wind_mph + "mph\r\n" +
        "Gust: " + weatherData.current.gust_mph + "mph\r\n" +
        "Direction: " + weatherData.current.wind_dir;
}

export function uvSideTwo() {
    let uvIcon = document.querySelector(".uvIcon");
    let uvInfo = document.querySelector(".uvInfo");

    uvIcon.src = WindRose;
    uvInfo.textContent = "INFO\r\n\r\n" + "UV: " + weatherData.current.uv +
        "\r\nVisibility: " + weatherData.current.vis_miles +
        "mi\r\nWindchill: " + weatherData.current.windchill_f + "°F";
}

export function lastUpdateSideThree() {
    let luSpan = document.querySelector(".sideThree");

    luSpan.textContent = "Last Updated: " + weatherData.current.last_updated;
}

export function moistureSideFour() {
    let moIcon = document.querySelector(".moIcon");
    let moInfo = document.querySelector(".moInfo");

    moIcon.src = Moisture;
    moInfo.textContent = "HUMIDITY\r\n\r\nHumidity: " + weatherData.current.humidity +
        "%\r\nDewpoint: " + weatherData.current.dewpoint_f +
        "°F\r\nPressure: " + weatherData.current.pressure_in + "in";
}