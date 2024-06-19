"use strict";
(self["webpackChunkodinweather"] = self["webpackChunkodinweather"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weatherApiFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherApiFetch */ "./src/weatherApiFetch.js");


(0,_weatherApiFetch__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)('el paso');
// function component() {
//   const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.innerHTML = "hello world poochy!";
//   return element;


// }

// document.body.appendChild(component());

/***/ }),

/***/ "./src/weatherApiFetch.js":
/*!********************************!*\
  !*** ./src/weatherApiFetch.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)
/* harmony export */ });
async function getWeatherData(place) {
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7O0FBRW5ELGdFQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZE87QUFDUDtBQUNBLG1IQUFtSCxNQUFNLEtBQUssY0FBYztBQUM1STtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGlud2VhdGhlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGlud2VhdGhlci8uL3NyYy93ZWF0aGVyQXBpRmV0Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0V2VhdGhlckRhdGEgfSBmcm9tIFwiLi93ZWF0aGVyQXBpRmV0Y2hcIjtcblxuZ2V0V2VhdGhlckRhdGEoJ2VsIHBhc28nKTtcbi8vIGZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbi8vICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4vLyAgIC8vIExvZGFzaCwgY3VycmVudGx5IGluY2x1ZGVkIHZpYSBhIHNjcmlwdCwgaXMgcmVxdWlyZWQgZm9yIHRoaXMgbGluZSB0byB3b3JrXG4vLyAgIC8vZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd3ZWJwYWNrJ10sICcgJyk7XG4vLyAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJoZWxsbyB3b3JsZCBwb29jaHkhXCI7XG4vLyAgIHJldHVybiBlbGVtZW50O1xuXG5cbi8vIH1cblxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7IiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKHBsYWNlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3AgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT00NGQ3M2NhMDkyOTA0ZWExOGE4MTkxOTA1MjQxNDA1JnE9JHtwbGFjZX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICAgICAgICAvLyBjb25zdCB3aW5kTG9uZG9uID0gd2VhdGhlckRhdGEuY3VycmVudC53aW5kX21waDtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcC5zdGF0dXMgKyBcIiBpcyBteSBzdGF0dXMgY29kZVwiKTsvLzIwMCBmb3IgdmFsaWQgZW50cnlcbiAgICAgICAgLy8gY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh3aW5kTG9uZG9uICsgXCJtcGggd2luZCBpbiBFbCBQYXNvISEhIVwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5vIHN1Y2ggcGxhY2Ugb19PIFwiICsgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==