import { setMainTemp } from "./tempDOM";
export let searchCity;

export function buttonEventListener() {
    const searchInput = document.getElementById("searchCityButton");
    searchInput.addEventListener('click', function () {
        searchCity = document.getElementById("searchBox");
        if (searchCity.value == "") {
            console.log("");
        } else {
            setMainTemp();
        }
    })
}