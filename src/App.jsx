import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PlantList from './pages/PlantList';
import PlantDetail from './pages/PlantDetail';
import VirtualTour from './pages/VirtualTour';
import Login from './Components/login';
import Signup from './Components/Signup';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<PlantList />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/Signup' element={<Signup/>}/>
        <Route path="/plants/:id" element={<PlantDetail />} />
        <Route path="/About" element={<About/>} />
        <Route path="/tour" element={<VirtualTour />} />
      </Routes>
    </Router>
  );
}

export default App;
