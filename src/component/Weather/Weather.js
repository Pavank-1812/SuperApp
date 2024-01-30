import { useEffect, useState } from "react";
import { getWeatherDetails } from "../../apis/weather";
import drop from '../../assets/icons/drop.svg'
import wind from '../../assets/icons/wind.svg'

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
                    height: "5vh",
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
                        <div style={{ width: "5vw", marginLeft: "12px" }}>
                            <img
                                src={weather?.condition?.icon}
                                style={{ width: "45px", height: "45px" }}
                                alt="condition icon"
                            />
                            <p>{weather?.condition?.text}</p>
                        </div>
                        <hr style={{ direction: "vertical", height: "50px" }} />

                        <div style={{ display: "flex", flexDirection: "column", width: "7vw", alignItems: "center" }}>

                            <p
                                style={{
                                    marginBottom: "6px",
                                    fontSize: "1.6rem",
                                    marginTop: "8px",
                                }}
                            >
                                <span>{weather?.temp_c}°C</span>
                            </p>
                            <p>Pressure-</p>
                            <span style={{ fontSize: "0.8rem", marginBottom: "10px" }}>{weather?.pressure_mb} mbar</span>
                        </div>
                        <hr style={{ direction: "vertical", height: "50px", width: "1px" }} />
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img
                                src={wind}
                                style={{ width: "15px", height: "15px", marginTop:"10px" }}
                                alt="condition icon"
                            />
                            <p
                                style={{
                                    marginBottom: "12px",
                                    fontSize: "0.9rem",
                                    marginTop: "10px",
                                }}
                            >
                                Wind Speed-<span style={{ fontSize: "0.8rem" }}>{weather?.wind_kph} kmph</span>
                            </p>

                            <img
                                src={drop}
                                style={{ width: "12px", height: "12px" }}
                                alt="condition icon"
                            />


                            <p
                                style={{
                                    marginBottom: "12px",
                                    fontSize: "0.9rem",
                                    marginTop: "10px",
                                    display: "inline"
                                }}
                            >
                                Humidity-<span style={{ fontSize: "0.8rem" }}>{weather?.humidity}%</span></p>
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