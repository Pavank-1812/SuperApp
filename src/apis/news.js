import axios from "axios";

export const getNewsDetails = async () => {
    try {
        const reqUrl = `https://newsapi.org/v2/everything?q=Apple&apiKey=${process.env.REACT_APP_API_KEY}`;
        const response = await axios.get(reqUrl);
        // console.log(response.data);
        const randomNumber = Math.floor(Math.random() * 10)+90;
        return response.data.articles[randomNumber];
    } catch (error) {
        console.log(error);
        // toast for error
        alert("Something went wrong! Please try again after some time");
    }
};