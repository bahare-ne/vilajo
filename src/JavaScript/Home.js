import '../Css/Header.css'
import '../Css/Hero.css'
import '../Css/Destinations.css'

import Header from"../jsx/Header";
import Hero from"../jsx/Hero";
import Destinations from"../jsx/Destinations";

function Home() {
  return (
      <div>
      <Header />
      <Hero />
      <Destinations />
    </div>
  );
}

export default Home;