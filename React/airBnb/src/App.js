import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import "./index";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import { data } from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
        // Spread Syntax to pass objects as props - {...item}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards--list">{cards}</section>
    </div>
  );
}

export default App;
