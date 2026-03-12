# Climate App
A weather application built with vanilla JavaScript and bundled with Webpack. Users can search for any city and view current weather conditions, temperature, humidity, and general climate information. The project focuses on API integration, modular JavaScript, DOM manipulation, and clean UI updates.

---

## Features
- 	Search for weather by city name
- 	Fetches real‑time data from a weather API
- 	Displays temperature, humidity, and conditions
- 	Weather icons that match the current conditions
- 	Modular JavaScript structure
- 	Webpack bundling and asset management
- 	Responsive layout

## Tech Stack
- 	JavaScript (ES6 modules)
- 	Webpack (bundling, dev server, asset handling)
- 	CSS
- 	WeatherAPI
- 	HTML5

---

## Project Structure

```txt
src/
│
├── icons/
│   └── (weather icons)
│
├── index.html
├── index.js
├── searchEventListener.js
├── stylings.css
├── tempDOM.js
└── weatherApiFetch.js
│
webpack.config.js
package.json
README.md
```

---

## How It Works
-    `weatherApiFetch.js` handles API calls and returns structured weather data.
- 	 `tempDOM.js` updates the DOM with the fetched data.
- 	 `searchEventListener.js` listens for user input and triggers the fetch workflow.
- 	 `index.js` ties everything together and initializes the app.
- 	Webpack bundles all modules and assets into the `dist/` folder for deployment.

## What I Learned
- 	Setting up and configuring Webpack
- 	Using ES6 modules to organize code
- 	Handling asynchronous API calls with `async/await`
- 	Updating the DOM based on dynamic data
- 	Managing assets like icons through Webpack
- 	Structuring a small JavaScript application cleanly

## Installation

```bash
git clone https://github.com/carlDguez19/odinClimate.git
cd odinClimate
npm install
npm run build
npm run start
```
