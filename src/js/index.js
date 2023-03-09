import { Servise } from "./Servise";
import "../scss/style.scss";

const weather = document.querySelector(".weather");
const input = document.querySelector(".input");

const markup = (data) => {
    return `
        <div class="weather__info">
            <h1 class="weather__h1">${data.location.name}</h1>
            <h2 class="weather__c">${data.current.temp_c}<h2>
                <div class="weather__options">
                    <p class="weather__speed">${data.current.wind_kph} km/h</p>
                    <p class="weather__humidity">${data.current.humidity} h</p>
                    <p class="weather__wind-dir">${
                        data.current.wind_dir
                    } dir</p>
                    <p class="weather__is_day">${
                        data.current.is_day ? "Day" : "Nigth"
                    }</p>
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
