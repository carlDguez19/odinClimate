export function getCity(data) {
    return data.location.name;
}
export function getState(data) {
    return data.location.region;
}
export function getCountry(data) {
    return data.location.country;
}
export function getTempF(data) {
    return data.current.temp_f;
}
export function getTempC(data) {
    return data.current.temp_c
}
export function fillMainTempGrid(data, temp) {
    const mainCell = document.querySelector(".mainTemp");
    //projectDOM.js on odinToDoList (.appendChild and classList.add)
    const currLocationDiv = document.createElement('div');

    const currCity = getCity(data);
    const currRegion = getState(data);
    const currCountry = getCountry(data);

    currLocationDiv.textContent = `${currCity}, ${currRegion}, in ${currCountry}`;
    mainCell.appendChild(currLocationDiv);

    const currTempDiv = document.createElement('div');
    if (temp == "f") {
        const currTempF = getTempF(data);
        currTempDiv.textContent = `${currTempF}°F`;
    } else {
        const currTempC = getTempC(data);
        currTempDiv.textContent = `${currTempC}°C`;
    }
    mainCell.appendChild(currTempDiv);
    mainCell.classList.add('mainTemp');
    return "jello";
}