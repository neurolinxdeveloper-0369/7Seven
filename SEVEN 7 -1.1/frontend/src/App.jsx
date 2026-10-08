import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Restaurant from './pages/Restaurant';
import Contact from './pages/Contact';
import BookRoom from './pages/BookRoom';

function App() {
  return (
    <Router>
      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              <img src="/images/sticar.jpg" alt="Inducution" style={{width: '100%'}} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/view/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/view/services" element={<Services />} />
        <Route path="/view/gallery" element={<Gallery />} />
        <Route path="/view/restaurant" element={<Restaurant />} />
        <Route path="/view/contact" element={<Contact />} />
        <Route path="/book-room" element={<BookRoom />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
