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
        id={item.id}
        title={item.title}
        description={item.description}
        price={item.price}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        openSpots={item.openSpots}
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
