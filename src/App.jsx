import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Weather from "./Pages/Weather";
import Store from "./Pages/Store";
import Recipe from "./Pages/Recipe";
import Movies from "./Pages/Movies";
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Weather" element={<Weather/>}/>
        <Route path="/Store" element={<Store/>}/>
        <Route path="/Recipe" element={<Recipe/>}/>
        <Route path="/Movies" element={<Movies/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
