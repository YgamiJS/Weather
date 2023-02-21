import { Servise } from "./Servise";
import "../scss/style.scss";

const weather = document.querySelector(".weather");
const input = document.querySelector("#input");

Servise.get("Moscow").then((data) => console.log(data));

const markup = (data) => {
    return `
        <div class="weather__info">
            <h1 class="weather__h1">${data.location.name}</h1>
            <h2 class="weather__c">${data.current.temp_c}<h2>
                <div class="weather__options">
                    <p class="weather__speed">${data.current.wind_kph}</p>
                    <p class="weather__humidity">${data.current.humidity}</p>
                </div>
        </div>
    `;
};

const updateComponent = (data) => {
    weather.innerHTML = markup(data);
};

Servise.get("Moscow").then((data) => updateComponent(data));

input.addEventListener("change", () => {
    Servise.get(input.value).then((data) => updateComponent(data));
});
