import React from "react";
import "./App.css";
import Header from './components/Header';
import BodyHome from './components/BodyHome';
import Footer from './components/Footer';
import Places from './pages/Places';
import Eat from './pages/Eat';
import Reviews from './pages/Reviews';
import Roteiro from './pages/Roteiro';
import Contactos from './pages/Contactos';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<BodyHome />} />
          <Route path="/places" element={<Places />} />
          <Route path="/wheretoeat" element={<Eat />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/roteiro" element={<Roteiro />} />
          <Route path="/contactos" element={<Contactos />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
