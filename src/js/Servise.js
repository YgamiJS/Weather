import axios from "axios";

export class Servise {
    static async get(country) {
        const response = await axios.get(
            "https://api.weatherapi.com/v1/current.json?key=17320e5e6dd14d599e594403231502&aqi=no",
            {
                params: {
                    q: country,
                },
            }
        );

        return response.data;
    }
}
