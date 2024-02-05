import axios from "axios";

export const getNewsDetails = async () => {
    try {
        const reqUrl = `https://newsapi.org/v2/everything?q=Apple&apiKey=af18686e24504d95b88d15c3c83a149f`;
        const response = await axios.get(reqUrl);
        console.log(response.data);
        const randomNumber = Math.floor(Math.random() * 10)+80;
        return response.data.articles[randomNumber];
    } catch (error) {
        console.log(error);
        // toast for error
        alert("Something went wrong! Please try again after some time");
    }
};