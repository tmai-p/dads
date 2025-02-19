import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Route path="/dads" element={<Homepage />} />
        <Route path="/dads/about" element={<About/>} />
        <Route path="/dads/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
