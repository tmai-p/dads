import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Footer from './components/Footer.js';
import Homepage from './components/Homepage.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import HorizontalBar from './components/HorizontalBar.js';

function App() {
  return (
    <HashRouter>
      <HorizontalBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dads/about" element={<About />} />
        <Route path="/dads/contact" element={<Contact />} />
      </Routes>
    <Footer />
    </HashRouter>  
  );
}

export default App;
