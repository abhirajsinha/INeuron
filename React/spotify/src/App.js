import React from 'react';
import { Counter } from './features/counter/Counter';
import LeftSection from './Components/LeftSection';
import ImageSlider from './Components/ImageSlider';
import images from './images';
import "./Style.css"

function App() {
  return (
    <div className="app">
      <LeftSection/>
      <div className="main"><ImageSlider images={images}/></div>
    </div>
  );
}

export default App;
