
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx'; // Adjust the path based on your project structure
import About from './pages/About.jsx'; // Adjust the path based on your project structure

function App() {
  return (
    <BrowserRouter>
        <header>
          <Link className='site-logo' to="/">#VANLIFE</Link>
          <nav>
            <Link to="/about">About</Link>
          </nav>
        </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;