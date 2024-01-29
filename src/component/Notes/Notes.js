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
                height: "56vh",
                width: "27vw",
                position: "relative",
                borderRadius: "12px",
                padding: "6px",
            }}
        >
            <p style={{ color: "black", fontSize: "2rem" }}>All notes</p>
            <textarea
                style={{
                    width: "27vw",
                    height: "55vh",
                    margin: "auto",
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    textDecoration:"none"
                }}
                value={notesData}
                onChange={handleSaveNotes}
            />
        </div>
    );
};

export default Notes;