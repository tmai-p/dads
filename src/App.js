import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer.js';
import Homepage from './components/Homepage.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import HorizontalBar from './components/HorizontalBar.js';

function App() {
  return (
    <Router>
      <HorizontalBar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
