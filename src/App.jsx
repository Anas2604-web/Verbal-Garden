import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Plantlist from "./pages/PlantList";
import PlantDetails from "./pages/PlantDetails";
import Bookmarks from "./pages/Bookmarks";
import Tour from "./pages/VirtualTour";


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/plants" element={<Plantlist/>} />
        <Route path="/plants/:id" element={<PlantDetails/>} />
        <Route path="/bookmarks" element={<Bookmarks/>} />
        <Route path="/tour" element={<Tour/>} />
      </Routes>
    </Router>
  );
}

export default App;