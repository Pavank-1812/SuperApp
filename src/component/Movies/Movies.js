import Profile from "../../assets/images/profileSmall.png";
import { useNavigate } from "react-router-dom";
import { getMovies } from "../../apis/movies";
import { useEffect, useState } from "react";
import styles from '../../component/Movies/Movies.module.css'

// import styles from "../components/Movies/List.module.css";

const Movies = () => {
    const [moviesList, setMoviesList] = useState([]);
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/HomePage");
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    // useEffect(() => {
    //     let userDetails = localStorage.getItem("userData");

    //     if (userDetails) {
    //         userDetails = JSON.parse(userDetails);
    //         navigate("/register");
    //     }
    // }, []);

    const fetchMovies = async () => {
        const response = await getMovies('man');
        setMoviesList(response.Search);
    };

    return (
        <>
            <div
                style={{
                    width: "100vw",
                    minHeight: "100vh",
                    background: "black",
                    overflowX: "hidden",
                    maxHeight: "100vh",
                }}
            >
                <div onClick={navigateToHome}>
                    <img
                        src={Profile}
                        style={{
                            position: "absolute",
                            top: "2vh",
                            right: "3vw",
                            height: "60px",
                            width: "60px",
                            cursor:"pointer",
                            alt:"profile"
                        }}
                    />
                </div>
                <p
                    style={{
                        color: "#72DB73",
                        fontSize: "2.8rem",
                        margin: "2vw",
                        fontfamily: "Single Day"
                    }}
                    className={styles.heading}
                >
                    Super app
                </p>
                <p style={{ color: "white", fontSize: "2rem", margin: "2vw" }} className={styles.subheading}>
                    Entertainment according to your choice
                </p>
                <div style={{display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center"}}>
                    {moviesList.map((movie) => (
                        <div style={{ color: "white" }}>
                            <img style={{height:"70vh", width:"25vw", marginTop:"5vh", alt:"Poster" }} src={movie.Poster}></img>
                            <p style={{textAlign:"center", marginTop:"1vh"}}>{movie.Title}</p>
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    );
};

export default Movies;