import { useEffect, useState } from "react";
import { getWeatherDetails } from "../../apis/weather";

const Weather = () => {
    const [date, setDate] = useState("");
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        fetchWeatherDetails();
        console.log(weather);
    }, []);

    const fetchWeatherDetails = async () => {
        const result = await getWeatherDetails();
        setWeather(result.current);
        setDate(result.location.localtime);
    };

    return (
        <div
            style={{
                width: "33vw",
                minHeight: "20vh",
                background: "#101744",
                borderRadius: "12px",
                marginTop: "5px",
            }}
        >
            <div
                style={{
                    height: "7vh",
                    background: "#FF4ADE",
                    borderRadius: "12px",
                    color: "white",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    fontSize: "2rem",
                }}
            >
                <span>{date}</span>
            </div>
            <div>
                {weather ? (
                    <div
                        style={{
                            display: "flex",
                            color: "white",
                            alignItems: "center",
                            justifyContent: "space-around",

                        }}
                    >
                        {" "}
                        <div>
                            <img
                                src={weather?.condition?.icon}
                                style={{ width: "30px", height: "30px" }}
                                alt="condition icon"
                            />
                            <p>{weather?.condition?.text}</p>
                        </div>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            
                            <p
                                style={{
                                    marginBottom: "12px",
                                    fontSize: "2rem",
                                    marginTop: "10px",
                                }}
                            >
                                <span>{weather?.temp_c}</span>°C
                            </p>
                            <span>{weather?.pressure_mb} mbar</span>
                            <p>pressure</p>
                        </div>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <p
                                style={{
                                    marginBottom: "12px",
                                    fontSize: "18px",
                                    marginTop: "10px",
                                }}
                            >
                                <span style={{fontSize:"1.2rempx"}}>{weather?.wind_kph}kmph</span> wind
                            </p>
                            <span>{weather?.humidity}%</span>
                            <p
                                style={{
                                    marginBottom: "12px",
                                    fontSize: "18px",
                                    marginTop: "10px",
                                }}
                            >
                                humidity</p>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default Weather;