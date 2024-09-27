import './App.css';
import About from './component/About';
import Blog from './component/Blog';
import ContactUs from './component/ContactUs';
import Home from './component/Home';
import Intern from './component/Intern';
import Placement from './component/Placement';
import Reviews from './component/Reviews';
import AngularTraining from './component/AngularTraining';
import LMS from './component/LMS';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>  
      <Routes>
        <Route exact path="/"  element={<Home />} /> {/* Home page */}
        <Route exact path="/home"  element={<Home />} /> {/* Home page */}

        <Route path="/about" element={<About />} /> {/* About page */}
        <Route path="/contactus" element={<ContactUs />} /> {/* Contact page */}
        <Route path="/place" element={<Placement />} /> {/* Placement page */}
        <Route path="/intern" element={<Intern />} /> 
        <Route path="/Reviews" element={<Reviews />} /> {/* Reviews page */}
        <Route path="/Blog" element={<Blog/>} /> {/* Blog page */}
        <Route path="/AngularTraining" element={<AngularTraining/>} /> {/* AngularTraining page */}
        <Route path="/LMS" element={<LMS/>} /> {/* LMS page */}
        
      </Routes>
    </Router>
  );
}

export default App;
