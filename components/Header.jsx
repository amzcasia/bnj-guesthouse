import React, {useState} from 'react'
import menuIcon from '../assets/menu.png'
import {Link} from 'react-router-dom'

export default function Header(){
    const [showMiniNav, setShowMiniNav] = useState(false);

    function toggleNav(){
        setShowMiniNav(!showMiniNav)
    }

    const XButton = () => {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        )
    }

    function MiniNavBar(){
        return(
            <nav className='fixed top-[60px] bg-white w-full left-0 border-t-2 border-primary-light'>
                <ul className='px-[5%] pt-5 pb-10 grid gap-y-4 text-lg font-semibold'>
                    <li><Link onClick={toggleNav} to="/">HOME</Link></li>
                    <li><Link onClick={toggleNav} to="/rooms">ROOMS</Link></li>
                    <li><Link onClick={toggleNav} to="/rentals">RENTALS</Link></li>
                    <li><Link onClick={toggleNav} to="/tours">TOURS</Link></li>
                    <li><Link onClick={toggleNav} to="/venues">VENUES</Link></li>
                    <li><Link onClick={toggleNav} to="/location">LOCATION</Link></li>
                    <li><Link onClick={toggleNav} to="/gallery">GALLERY</Link></li>
                </ul>
            </nav>
        )
    }
    
    return(
        <>
        <header className="text-primary px-[5%] py-3 lg:py-0 lg:h-[85px] flex items-center lg:justify-center sticky top-0 z-[10] bg-white drop-shadow-md">
            <nav className="flex content-center justify-between w-full grid-cols-2 lg:grid lg:grid-cols-3">
                <ul className="hidden lg:flex items-center justify-between gap-x-[54px] text-primary-light text-lg">
                    <li><Link to="/rooms">ROOMS</Link></li>
                    <li><Link to="/rentals">RENTALS</Link></li>
                    <li><Link to="/tours">TOURS</Link></li>
                </ul>
                <span className="text-3xl font-bold lg:text-4xl lg:text-center">
                    <Link to="/">B&J Guesthouse</Link>
                </span>
                <ul className="hidden lg:flex items-center justify-between gap-x-[54px] text-primary-light text-lg">
                    <li><Link to="/venues">VENUES</Link></li>
                    <li><Link to="/location">LOCATION</Link></li>
                    <li><Link to="/gallery">GALLERY</Link></li>
                </ul>
                <div className='flex items-center justify-end lg:hidden'>
                    <button onClick={toggleNav}>
                        {!showMiniNav && <img className="w-6 h-6" src={menuIcon} alt="menu icon" />}
                        {showMiniNav && <XButton />}
                    </button>
                </div>
            </nav>
            {showMiniNav && <MiniNavBar />}

        </header>
        
        </>
    )
}