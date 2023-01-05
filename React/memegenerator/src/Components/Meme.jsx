import memesData from "../memesdata.js";
import React from "react";

export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState(
  //   "https://media.sproutsocial.com/uploads/meme-example.jpg"
  // );

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://media.sproutsocial.com/uploads/meme-example.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);
  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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
        <img src={meme.randomImage} className="meme--image"></img>
      </div>
    </main>
  );
}
