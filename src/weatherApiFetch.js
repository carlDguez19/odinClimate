export let weatherData;
export let errorFound;

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
        // eslint-disable-next-line no-unused-vars
        .catch(function (error) {
            let eOverlay = document.querySelector(".errorOverlay");
            eOverlay.style.animation = "errorSlideOn 1.5s forwards";
            setTimeout(function () {//wait 2.5 seconds and slide back up
                eOverlay.style.animation = "errorSlideClose 1.5s forwards"
            }, 2500);
            errorFound = 1;
        });
}

export function displayErrorOverlay() {
    let eOverlay = document.querySelector(".errorOverlay");
    eOverlay.style.animation = "errorSlideOn 1.5s forwards";
    setTimeout(function () {//wait 2.5 seconds and slide back up
        eOverlay.style.animation = "errorSlideClose 1.5s forwards"
    }, 2500);
}