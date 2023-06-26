import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import UnderConstruction from './pages/UnderConstruction';

export default function App() {
  // const [currentPage, setCurrentPage] = useState({home:true, rooms:false})

  const [currentPath, setCurrentPath] = useState("App Component");

  function changePath(newPath){
    setCurrentPath(newPath)
  }

  return (
    <Router>
      <Header currentPath={currentPath} changePath={changePath}/>
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
