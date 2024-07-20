//import { getWeatherData } from "./weatherApiFetch";
import { buttonEventListener } from "./searchEventListener";
import { preFillIcons } from "./tempDOM";
// eslint-disable-next-line no-unused-vars
import styles from "./stylings.css";


//const epWeather = getWeatherData('el paso');
//console.log(epWeather);
preFillIcons();
buttonEventListener();
// function component() {
//   const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.innerHTML = "hello world poochy!";
//   return element;


// }

// document.body.appendChild(component());