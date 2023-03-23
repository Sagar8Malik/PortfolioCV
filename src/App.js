import "./App.css";
import Particle from "./config/Particle";
import Home from "./Screens/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Screens/Navbar/Navbar";
import About from "./Screens/About/About";
import Portfolio from "./Screens/Portfoilio/Portfolio";
import ContactMe from "./Screens/ContactMe/ContactMe";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <Particle />
      <BrowserRouter>
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/portfolio" exact element={<Portfolio />} />
            <Route path="/contactMe" exact element={<ContactMe />} />
          </Routes>
        </main>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
