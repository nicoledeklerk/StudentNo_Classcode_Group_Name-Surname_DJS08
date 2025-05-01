
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx'; // Adjust the path based on your project structure
import About from './pages/About.jsx'; // Adjust the path based on your project structure
import Vans from "./pages/Vans";
import VanDetail from './pages/VanDetail'; 
import Layout from "./Components/Layout" 

import "./server"

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;