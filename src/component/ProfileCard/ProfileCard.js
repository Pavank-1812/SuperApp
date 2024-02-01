import Profile from "../../assets/images/profileBig.png";
const ProfileCard = () => {
    let userDetails = localStorage.getItem("userData");

    if (userDetails) {
        userDetails = JSON.parse(userDetails);
    }

    let genre = localStorage.getItem("genre");
    if (genre) {
        // Split the comma-separated string into an array
        genre = genre.split(',');
    }
    return (
        <div
            style={{
                width: "33vw",
                minHeight: "30vh",
                background: "#5746EA",
                borderRadius: "12px",
                padding: "6px",
                display: "flex",
                gap: "10px",
                marginBottom: "20px"
            }}
        >
            <div>
                <img
                    src={Profile}
                    style={{
                        height: "25vh",
                        width: "6vw",
                        position: "relative",
                        top: "2vh",
                    }}
                />
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    padding:"4px"
                }}
            >
                <p style={{ color: "white", fontSize: "1.5rem" }}>
                    {userDetails.name}
                </p>
                <p style={{ color: "white", fontSize: "1.5rem" }}>
                    {userDetails.email}
                </p>
                <p style={{ color: "white", fontSize: "1.5rem" }}>
                    {userDetails.userName}
                </p>
                <div>
                    {genre.map((genreItem) => (
                        <button style={{borderRadius:"12px", height:"30px", width:"70px", margin:"3px",backgroundColor:"#9F94FF", outline:"none", border:"none",color:"#ffffff"}} key={genreItem}>{genreItem}</button>
                    ))}

                </div>
            </div>
        </div>
    );
};

const Chips = ({ color, categories }) => {
    return (
        <div style={{ width: "20vw" }}>
            {categories.map((category) => (
                <button
                    style={{
                        background: `${color}`,
                        borderRadius: "12px",
                        width: "100px",
                        color: "white",
                        border: "none",
                        padding: "6px",
                        height: "30px",
                        flexShrink: 0,
                        margin: "10px",
                    }}
                >
                    {category}{" "}
                    <span style={{ color: "black", marginLeft: "4px" }}>X</span>
                </button>
            ))}
        </div>
    );
};

export default ProfileCard;