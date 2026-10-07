import logo from './logo.svg';
import './App.css';
import './component/Header/Header.css'
import './component/Hero/Hero.css'
import './component/Destinations/Destinations.css'

import Header from"./component/Header/Header";
import Hero from"./component/Hero/Hero";
import Destinations from"./component/Destinations/Destinations";
function App() {
  return (
      <div>
      <Header />
      <Hero />
      <Destinations />
    </div>
    
  );
}

export default App;
