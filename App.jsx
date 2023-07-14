import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
// import Home from './pages/Home'
import Home from './pages/home/Home'
import Rooms from './pages/rooms/Rooms'
import Footer from './components/Footer'
import UnderConstruction from './pages/UnderConstruction';

export default function App() {
  // const [currentPage, setCurrentPage] = useState({home:true, rooms:false})

  

  function changePath(newPath){
    setCurrentPath(newPath)
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/offers" element={<UnderConstruction />} />
        <Route path="/amenities" element={<UnderConstruction />} />
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<UnderConstruction />} />
        <Route path="/infos" element={<UnderConstruction />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/tours" element={<UnderConstruction />} />
        <Route path="/venues" element={<UnderConstruction />} />
        <Route path="/rentals" element={<UnderConstruction />} />
      </Routes>
      <Footer />
    </Router>
  )
}
