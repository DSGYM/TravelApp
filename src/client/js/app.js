const fetch = require("node-fetch");
import { dateDiffInDays } from "../js/datediff.js";
const geoURL = "http://api.geonames.org/searchJSON?q=";
const geoUser = "mylady17";
const weatherURL = "https://api.weatherbit.io/v2.0/forecast/daily?";
const weatherKEY = "572263d82ca443f69bbff78db51a3358";
const pixaURL = "https://pixabay.com/api/?key=";
const pixaKEY = "16173643-780305ef8f03c6c4b73f053c7";

// Variables

const date = document.getElementById("date");
const departure = document.getElementById("departure");
const destination = document.getElementById("destination");
const submit_trip = document.getElementById("submit_trip");
const trip = document.getElementById("result");
const start_plan = document.getElementById("start_plan");
const error = document.getElementById("error");

// Functions

const postData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

const cityInfo = async (url, destinaton, geoUser) => {
  const res = await fetch(`${url}${destinaton}&maxRows=10&username=${geoUser}`);
  try {
    const cityData = await res.json();
    return cityData.geonames[0];
  } catch (error) {
    console.log("error", error);
  }
};

const weatherInfo = async (url, lat, lon, API_KEY) => {
  const res = await fetch(`${url}lat=${lat}&lon=${lon}&key=${API_KEY}`);
  try {
    const weatherData = await res.json();
    // console.log(weatherData.data[0].weather.description);
    // return weatherData.data[0].weather.description;
    return weatherData.data;
  } catch (error) {
    console.log("error", error);
  }
};

const renderUI = async weather => {
  const res = await fetch(
    `${pixaURL}${pixaKEY}&q=${destination.value}+city&image_type=photo`
  );

  try {
    const pixaData = await res.json();
    const div = document.createElement("div");
    div.classList.add("result");
    div.id = "tripresult";
    div.innerHTML = `<div class="img">
      <img src="${pixaData.hits[0].webformatURL}" alt="No picture">
      </div>
    <div class="content" id="content>
      <p><i class="fas fa-map-marker-alt"></i>Your destination: ${weather.destination}</p>
      <p><i class="fas fa-calendar-day"></i>Start Date: ${date.value}</p>
      <p><i class="fas fa-clock"></i>Days to trip: ${weather.daysToTrip}</p>
      <p><i class="fas fa-cloud-sun"></i>The weather will likely be: ${weather.desc}</p>
      <p><i class="fas fa-thermometer-full"></i>Termpature: ${weather.temp} °C</p>
      <div id=trip_buttons>
      <button id="print_trip">Print trip</button>
      <button id="remove_trip">Remove Trip</button>
      </div>
    </div>`;
    trip.appendChild(div);
    trip.classList.remove("invisible");
    document.getElementById("print_trip").addEventListener("click", printtrip);
    document
      .getElementById("remove_trip")
      .addEventListener("click", removeTrip);
    trip.scrollIntoView({
      behavior: "smooth"
    });
  } catch (error) {
    console.log("error", error);
  }
};

const removeTrip = () => {
  document.getElementById("tripresult").remove();
  trip.classList.add("invisible");
};

const printtrip = () => {
  window.print();
};

start_plan.addEventListener("click", function() {
  const section_id = document.getElementById("trips");
  section_id.scrollIntoView({
    behavior: "smooth"
  });
});

submit_trip.addEventListener("click", function() {
  error.classList.remove("error");
  const content = document.getElementById("tripresult");
  if (content != null) {
    content.remove();
  }

  cityInfo(geoURL, destination.value, geoUser)
    .then(function(data) {
      const cityLng = data.lng;
      const cityLat = data.lat;
      const weather = weatherInfo(weatherURL, cityLat, cityLng, weatherKEY);
      return weather;
    })
    .catch(function(e) {
      error.classList.add("error");
    })
    .then(function(data) {
      const filtereddata = data.filter(function(item) {
        return item.datetime === date.value;
      });
      return filtereddata;
    })
    .catch(function(e) {
      error.classList.add("error");
    })
    .then(function(data) {
      const daysToTrip = dateDiffInDays(data[0].datetime);
      const tripdata = {
        departure: departure.value,
        destination: destination.value,
        temp: data[0].temp,
        desc: data[0].weather.description,
        daysToTrip
      };
      postData("http://localhost:8081/add", tripdata);
      return tripdata;
    })
    .catch(function(e) {
      error.classList.add("error");
    })
    .then(function(data) {
      renderUI(data);
    })
    .catch(function(e) {
      error.classList.add("error");
    });
});
