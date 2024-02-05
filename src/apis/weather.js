import axios from "axios";
const DEFAULT_LOCATION = "mumbai";

export const getWeatherDetails = async () => {
    try {
        const reqUrl = `https://api.weatherapi.com/v1/current.json?key=224a3bf507084b9698483846242901&q=${DEFAULT_LOCATION}`;
        const response = await axios.get(reqUrl);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        // toast for error
        alert("Something went wrong! Please try again after some time");
    }
};