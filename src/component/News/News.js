import { useEffect, useState } from "react";
import { getNewsDetails } from "../../apis/news";

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        const result = await getNewsDetails();
        setNews(result);
    };

    return (
        <div
            style={{
                height: "90vh",
                width: "30vw",
                position: "relative",
                borderRadius: "12px",
                padding: "6px",
                left:"2vw",
                // border:"2px solid red"
            }}
        >
            {/* <img
                src={news.urlToImage}
                style={{ height: "50vh", borderRadius: "12px", width: "29vw" }}
                alt="News cover"
            /> */}
            <div
                style={{
                    height: "40vh",
                    borderBottomLeftRadius:"12px",
                    borderBottomRightRadius:"12px",
                    width: "29vw",
                    background: "#fff",
                    fontSize: "1.4rem",
                    padding: "20px",
                    position:"absolute",
                    bottom:"2vh",
                    textAlign:"justify",
                    // border:"2px solid green"
                }}
            >
                {news.description}
            </div>
            <div
                style={{
                    position: "absolute",
                    width: "29vw",
                    height: "15vh",
                    background: "rgba(0, 0, 0, 0.74)",
                    top: "33vh",
                    padding: "25px",
                    boxSizing: "border-box",
                    overflow: "hidden",
                    textAlign:"center",
                    zIndex:"10",
                    // border:"2px solid green"
                }}
            >
                <p
                    style={{
                        color: "white",
                        fontSize: "1.2rem",
                        marginBottom: "10px",
                    }}
                >
                    {news.title}
                </p>
            </div>
        </div>
    );
};

export default News;