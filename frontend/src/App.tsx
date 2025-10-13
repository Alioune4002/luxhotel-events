import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';  
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Events from './pages/Events';
import Restaurant from './pages/Restaurant';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">  
        <Navbar />
        <main className="flex-grow">  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chambres" element={<Rooms />} />
            <Route path="/evenements" element={<Events />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reserver" element={<Booking />} />
          </Routes>
        </main>
        <Footer />  
      </div>
    </Router>
  );
}

export default App;