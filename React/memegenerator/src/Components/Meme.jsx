import React from "react";
import memesData from "../memesData";

const Meme = () => {
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top Text" className="form--input" />
        <input type="text" placeholder="Bottom Text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme Image 🗺️
        </button>
      </div>
    </main>
  );
};

export default Meme;
