
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'; // Adjust the path based on your project structure
import About from './pages/About.jsx'; // Adjust the path based on your project structure

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;