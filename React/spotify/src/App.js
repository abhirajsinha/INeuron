import React from "react";
import { Counter } from "./features/counter/Counter";
import LeftSection from "./Components/LeftSection";
import ImageSlider from "./Components/ImageSlider";
import MadeForYou from "./Components/MadeForYou";
import images from "./images";
import madeForYou from "./Madeforyou";
import "./Style.css";

function App() {
  return <ImageSlider images={images} />;
}

export default App;
