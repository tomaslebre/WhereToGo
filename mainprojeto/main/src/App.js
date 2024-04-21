import React from "react";
import "./App.css";
import Header from './components/Header';
import BodyHome from './components/BodyHome';
import Places from './pages/Places';
import Eat from './pages/Eat';
import Reviews from './pages/Reviews';
import Roteiro from './pages/Roteiro';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<BodyHome />} exact Component={BodyHome} ></Route>
          <Route path="/places" element={<Places />} exact Component={Places}></Route>
          <Route path="/wheretoeat" element={<Eat />} exact Component={Eat}></Route>
          <Route path="/reviews" element={<Reviews />} exact Component={Reviews}></Route>
          <Route path="/roteiro" element={<Roteiro />} exact Component={Roteiro}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
