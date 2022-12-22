import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import "./index";
import Hero from "./Components/Hero";
import Card from "./Components/Card";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img="Tommy.png"
        imgs="Star.png"
        rating="5.6"
        reviewCount={6}
        country="USA"
        title="Life Lessons with katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
