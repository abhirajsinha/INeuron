import memesData from "../memesdata.js";
import React from "react";
export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    // console.log(randomNumber);
    setMemeImage(memesArray[randomNumber].url);
  }
  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top Text"
        ></input>
        <input
          type="text"
          className="form--input"
          placeholder="Bottom Text"
        ></input>
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🚧
        </button>
        <img src={memeImage} className="meme--image"></img>
      </div>
    </main>
  );
}