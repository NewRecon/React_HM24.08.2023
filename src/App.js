import './App.css';
import NavBar from './components/NavBar/NavBar'
import About from './pages/About';
import Galery from './pages/Galery';
import JavaDev from './pages/JavaDev';
import Spring from './pages/Spring';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

  return (
    <div className="App">
      <NavBar />

      <Router>
        <Routes>

          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/java-dev" element={<JavaDev />} />
          <Route path="/spring-dev" element={<Spring />} />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
