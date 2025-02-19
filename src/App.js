import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer.js';
import Homepage from './components/Homepage.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import HorizontalBar from './components/HorizontalBar.js';

function App() {
  return (
    <Router>
      <HorizontalBar/>
      <Switch>
        <Route exact path="/" Component={Homepage} />
        <Route path="/About" Component={About} />
        <Route path="/Contact" component={Contact} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
