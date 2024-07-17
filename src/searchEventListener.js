//import { getWeatherData } from "./weatherApiFetch";
//import { fillMainTempGrid } from "./tempGridDOM";
import { setMainTemp } from "./tempDOM";
export let searchCity;

export function buttonEventListener() {
    const searchInput = document.getElementById("searchCityButton");
    searchInput.addEventListener('click', function () {
        searchCity = document.getElementById("searchBox");
        if (searchCity.value == "") {
            console.log("1");
        } else {
            console.log(searchCity.value);
            setMainTemp();
            // const currWeather = getWeatherData(searchCity.value);
            // console.log(currWeather);
            //call method to fill temperature grid passing currWeather as parameter
            //fillMainTempGrid(currWeather, "f");
        }
    })
}