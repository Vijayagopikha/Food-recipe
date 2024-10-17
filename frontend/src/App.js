
import './App.css';

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/login" element={<Recipes />} />
        <Route path="/signup" element={<Recipes />} />
      </Routes>
    </Router>
  );
}

export default App;