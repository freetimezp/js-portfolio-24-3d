import { Routes, Route } from "react-router-dom";

import Nav from './components/nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Work" element={<Work />} />
      </Routes>
    </>
  )
}

export default App;
