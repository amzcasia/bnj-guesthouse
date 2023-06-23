import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import UnderConstruction from './pages/UnderConstruction';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/rooms" element={<UnderConstruction />} />
        <Route path="/rentals" element={<UnderConstruction />} />
        <Route path="/tours" element={<UnderConstruction />} />
        <Route path="/venues" element={<UnderConstruction />} />
        <Route path="/location" element={<UnderConstruction />} />
        <Route path="/gallery" element={<UnderConstruction />} />
        <Route element={<UnderConstruction />} />
      </Routes>
      <Footer />
    </Router>
  )
}
