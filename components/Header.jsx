import React, {useState} from 'react'
import menuIcon from '../assets/menu.png'
import {Link} from 'react-router-dom'

export default function Header({currentPath,changePath}){
    const HOME = 1;
    const [showMiniNav, setShowMiniNav] = useState(false);
    // const [currentPage, setCurrentPage] = useState(false);
    console.log(currentPath)
    // setCurrentPage(!currentPage);
    /*({
        home: false,
        rooms: false,
        rental: false,
        tours: false,
        venues: false,
        location: false,
        gallery: false,
    })*/
    const LG_SCREEN_SIZE = 1024

    function toggleNav(link){
        if(window.innerWidth < LG_SCREEN_SIZE){
            setShowMiniNav(!showMiniNav)
        }
        if(link == 'home' || link == 'rooms'){
            changePath(link)
        }
    }


    const XButton = () => {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        )
    }

    return(
        <>
        <div>Prod</div>
        <header className="text-primary px-[5%] py-3 lg:py-0 lg:h-[85px] flex items-center lg:justify-center sticky top-0 z-[10] bg-white drop-shadow-md">
            <nav className="flex content-center justify-between w-full grid-cols-2 bg-white lg:grid lg:grid-cols-3">
                <ul className="hidden lg:flex items-center justify-between gap-x-[54px] text-primary-light text-lg">
                    <li><Link className={true ? 'px-4 py-2 rounded-lg bg-accent' : ''}
                        onClick={''} to="/rooms">ROOMS
                    </Link></li>
                    <li><Link className='px-4 py-2 rounded-lg bg-accent' to="/rentals">RENTALS</Link></li>
                    <li><Link className='' onClick={ ()=>{toggleNav('home')}} to="/tours">TOURS</Link></li>
                </ul>
                <span className="text-3xl font-bold lg:text-4xl lg:text-center">
                    <Link onClick={ ()=> { if(showMiniNav){toggleNav('home')}}} to="/">B&J Guesthouse</Link>
                </span>
                <ul className="hidden lg:flex items-center justify-between gap-x-[54px] text-primary-light text-lg">
                    <li><Link className='' to="/venues">VENUES</Link></li>
                    <li><Link className='' to="/location">LOCATION</Link></li>
                    <li><Link className='' to="/gallery">GALLERY</Link></li>
                </ul>
                <div className='flex items-center justify-end lg:hidden'>
                    <button onClick={toggleNav}>
                        {!showMiniNav && <img className="w-6 h-6" src={menuIcon} alt="menu icon" />}
                        {showMiniNav && <XButton />}
                    </button>
                </div>
            </nav>
            {/* <MiniNavBar /> */}
            <nav className={`fixed top-[60px] bg-white w-full left-0 border-t-2 border-primary-light transition-transform origin-top duration-200  ${showMiniNav ? 'scale-y-100' : 'scale-y-0'}`}>
                <ul className='px-[5%] pt-5 pb-10 grid gap-y-4 text-lg font-semibold'>
                    <li><Link className='link-home' onClick={ ()=>{toggleNav('home')}} to="/">HOME</Link></li>
                    <li><Link className='link-rooms' onClick={ ()=>{toggleNav('rooms')}} to="/rooms">ROOMS</Link></li>
                    <li><Link className='link-rental' onClick={ ()=>{toggleNav('rental')}} to="/rentals">RENTALS</Link></li>
                    <li><Link className='link-tours' onClick={ ()=>{toggleNav('tours')}} to="/tours">TOURS</Link></li>
                    <li><Link className='link-venues' onClick={ ()=>{toggleNav('venues')}} to="/venues">VENUES</Link></li>
                    <li><Link className='link-location' onClick={ ()=>{toggleNav('location')}} to="/location">LOCATION</Link></li>
                    <li><Link className='link-gallery' onClick={ ()=>{toggleNav('gallery')}} to="/gallery">GALLERY</Link></li>
                </ul>
            </nav>

        </header>
        
        </>
    )
}