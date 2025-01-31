import React, { useState } from "react";

const DialogueSearch = () => {
  const [movieName, setMovieName] = useState("");
  const [dialogue, setDialogue] = useState(""); 

  async function searchMovie() {
    if (movieName.trim() === "") {
      alert("Please enter a movie name");
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:8000/dialogue/${movieName}`);
      const data = await response.json();

      console.log("API Response:", data); 
      if (Array.isArray(data) && data.length > 0) { 
        console.log("Extracted Dialogue:", data[0].dialogue); 
        setDialogue(data[0].dialogue); 
      } else {
        alert("No dialogue found for this movie.");
        setDialogue("");
      }
    } catch (error) {
      console.error("Error fetching movie dialogue:", error);
      alert("Error fetching data. Please try again.");
    }
  }

  return (
    <div className="p-4">
      <p className="text-xl font-bold mb-2">Movie Search</p>
      <input
        type="text"
        className="border-2 border-gray-200 p-1 mr-2"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        placeholder="Enter movie name"
      />
      <button
        className="border-2 bg-blue-500 text-white px-4 py-1 ml-2"
        onClick={searchMovie}
      >
        Submit
      </button>

      <div className="mt-4">
        <p className="font-semibold">Movie: {movieName || "Not Entered"}</p>
        {dialogue ? (
          <p className="font-bold text-lg mt-2">"{dialogue}"</p>
        ) : (
          <p className="text-gray-500">No dialogue found</p>
        )}
      </div>
    </div>
  );
};

export default DialogueSearch;
