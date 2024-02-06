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
                left: "2vw",
                // border:"2px solid red"
            }}
        >
            <div>
                {news && typeof news === 'object' && news.urlToImage ? (
                    <img
                        src={news.urlToImage}
                        style={{ height: "50vh", borderRadius: "12px", width: "29vw" }}
                        alt="News cover"
                    />
                ) : (
                    <p style={{color:"#ffffff"}}>Error: News image not available</p>
                )}
                <div
                    style={{
                        height: "40vh",
                        borderBottomLeftRadius: "12px",
                        borderBottomRightRadius: "12px",
                        width: "29vw",
                        background: "#fff",
                        fontSize: "1.4rem",
                        padding: "20px",
                        position: "absolute",
                        bottom: "2vh",
                        textAlign: "justify",
                        // border:"2px solid green"
                    }}
                >
                    {news && typeof news === 'object' && news.description ? (
                        news.description
                    ) : (
                        <p>Error: News description not available</p>
                    )}
                </div>
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
                    textAlign: "center",
                    zIndex: "10",
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
                    {/* {news.title} */}
                    {news && news.title ? news.title : "Title Not Available"}
                </p>
            </div>
        </div>
    );
};

export default News;