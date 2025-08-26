import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PlantList from './pages/PlantList';
import PlantDetail from './pages/PlantDetail';
import Bookmarks from './pages/Bookmarks';
import VirtualTour from './pages/VirtualTour';
import Login from './Components/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<PlantList />} />
        <Route path='/login' element={<Login/>} />
        <Route path="/plants/:id" element={<PlantDetail />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/tour" element={<VirtualTour />} />
      </Routes>
    </Router>
  );
}

export default App;
