import { useState, useEffect } from "react";

const Notes = () => {
    const [notesData, setNotesData] = useState("");

    const handleSaveNotes = (event) => {
        setNotesData(event.target.value);
        localStorage.setItem("notes", JSON.stringify(notesData));
    };

    useEffect(() => {
        const notes = localStorage.getItem("notes");

        if (notes) {
            setNotesData(JSON.parse(notes));
        }
    }, []);

    return (
        <div
            style={{
                color: "white",
                background: "#F1C75B",
                height: "54vh",
                width: "29vw",
                position: "relative",
                borderRadius: "12px",
                padding: "6px",
            }}
        >
            <p style={{ color: "black", fontSize: "2rem" }}>All notes</p>
            <textarea placeholder="Write your text here..."
                style={{
                    width: "28vw",
                    height: "45vh",
                    margin: "auto",
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    textDecoration:"none",
                    lineHeight:"1.4rem",
                    textAlign:"justify",
                    padding:"10px"
                }}
                value={notesData}
                onChange={handleSaveNotes}
            />
        </div>
    );
};

export default Notes;