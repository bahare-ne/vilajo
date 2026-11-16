import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./JavaScript/Home" ;
import Login from "./JavaScript/Login" ;
import Reservation from "./JavaScript/Reservation";
import Contact from "./JavaScript/Contact";

function App() {
  return (
      <BrowserRouter>

      <Routes>

        <Route path="/" element = {<Home />}> </Route>
        <Route path="/login" element = {<Login />}> </Route>
        <Route path="/reservation" element = {<Reservation />}> </Route>
        <Route path="/contact" element = {<Contact />}> </Route>
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
