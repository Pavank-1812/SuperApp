import axios from "axios";

export const getMovies = async (title) => {
    try {
        const reqUrl = ` https://www.omdbapi.com/?apikey=c5451c55&s=${title}`;
        // http://www.omdbapi.com/?apikey=55bc8bb6&s=[fiction,horror,drama]
        const response = await axios.get(reqUrl);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        alert("Something went wrong! Please try again after some time");
    }
};