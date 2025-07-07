import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import BMICalculator from './Components/BMICalculator';
import Routine from './Pages/Routine';
import MoodPoses from './Components/MoodPoses';
import Poses from './Pages/Poses';
import Contact from './Pages/Contact';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="overflow-x-hidden">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/bmiCalculator" element={<BMICalculator />} />
        <Route path="/routine" element={<Routine />} />
        <Route path="/poses/:mood" element={<MoodPoses />} />
        <Route path="/poses" element={<Poses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
