import { Servise } from "./Servise";

const weather = document.querySelector("#root .weather");
const input = document.querySelector("#input");

const markup = (data) => {
    return `
        <div>
            <h1>${data.location.name}</h1>
            <p>
            ${data.current.cloud}
            </p>
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
