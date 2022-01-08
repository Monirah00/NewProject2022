
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import Features from './Components/Features';



function App() {
  return (
    <div>
    <Routes>
      
      <Route exact path="/" element={<Home />} />
      <Route path="/Features" element={<Features />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  
    </div>
  );
}

export default App;
