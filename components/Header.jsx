import React, {useState} from 'react'
import menuIcon from '../assets/menu.png'
import {Link} from 'react-router-dom'

export default function Header(){
    const HOME = 1;
    const blankPath = { 
        home: false, 
        rooms:false, 
        tours:false,
        venues: false,
        rentals:false,
        offers:false,
        amenities:false,
        gallery: false,
        infos: false
        
    }
    const [showMiniNav, setShowMiniNav] = useState(false);
    const [currentPath, setCurrentPath] = useState( { ...blankPath, home:true });

    const LG_SCREEN_SIZE = 1024

    function toggleNav(link){
        if(window.innerWidth < LG_SCREEN_SIZE){
            setShowMiniNav(!showMiniNav)
        }
        setCurrentPath ( () =>{
            const newPath = {...blankPath, [link]:true}
            return newPath
        })
    }

    const XButton = () => {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        )
    }

     const initHighlight = 'py-2 px-4 border-y-4 border-t-white '
     const highlight = 'border-b-accent'

    return(
        
        <header className="text-primary px-[5%] lg:py-0 lg:h-[85px] flex items-center lg:justify-center sticky top-0 z-[10] bg-white drop-shadow-md">
            <nav className="relative flex items-center content-center justify-between w-full grid-cols-2 py-3 bg-white lg:py-0 lg:grid lg:grid-cols-3">
                <ul className="hidden grid-flow-col text-lg justify-items-center lg:grid text-primary-light">
                    <li ><Link className={initHighlight + (currentPath.offers ? highlight : 'border-b-white')}
                              onClick={ () => toggleNav('offers')} 
                              to="/offers">OFFERS
                    </Link></li>
                    <li><Link className={initHighlight + (currentPath.amenities ? highlight : 'border-b-white')} 
                              onClick={()=>toggleNav('amenities')} 
                              to="/amenities">AMENITIES
                    </Link></li>
                    {/* <li><Link className={initHighlight + (currentPath.tours ?highlight : 'border-b-white')} 
                              onClick={()=>toggleNav('tours')} 
                              to="/rentals">TOURS
                    </Link></li> */}
                </ul>
                <span className="flex items-center lg:h-[85px] text-3xl font-bold lg:text-4xl lg:justify-center">
                    <Link className={'flex items-center px-4 lg:border-y-4  lg:border-t-white ' + 
                                     (currentPath.home ? 'lg:border-b-accent' : 'lg:border-b-white')} 
                        onClick= { ()=> {
                            (showMiniNav && toggleNav('home')); 
                            setCurrentPath ( () => {
                                const newPath = {...blankPath, home:true};
                                return newPath;
                            })
                        }}
                        to="/">B&J&nbsp;Guesthouse</Link>
                </span>
                <ul className="items-center justify-between hidden text-lg lg:flex text-primary-light">
                    {/* <li><Link className={initHighlight + (currentPath.venues ? highlight : 'border-b-white')} 
                              onClick={()=>toggleNav('venues')} 
                              to="/venues">VENUES
                    </Link></li> */}
                    <li><Link className={initHighlight + (currentPath.gallery ? highlight : 'border-b-white')} 
                              onClick={()=>toggleNav('gallery')} 
                              to="/gallery">GALLERY
                    </Link></li>
                    <li><Link className={initHighlight + (currentPath.infos ? highlight : 'border-b-white')} 
                              onClick={()=>toggleNav('infos')} 
                              to="/infos">INFOS
                    </Link></li>
                </ul>
                <div className='absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] bg-accent rounded-t-xl lg:grid justify-items-center hidden'>
                    <div className='grid w-[48rem] grid-cols-4 text-lg font-medium text-center text-primary'>
                        <Link className={'w-48 py-1 rounded-tl-xl ' + (currentPath.rooms ? 'bg-primary text-white' : 'bg-accent text-primary')} 
                        onClick={()=>{toggleNav('rooms')}}
                        to="/rooms">
                            ROOMS
                        </Link>
                        <Link className={'w-48 py-1 relative ' + (currentPath.tours ? 'bg-primary text-white' : 'bg-accent text-primary')} 
                        onClick={()=>{toggleNav('tours')}}
                        to="/tours">
                            <div className='absolute left-0 top-[50%] translate-y-[-50%] w-[2px] h-[25px] bg-accent-dark translate-x-[-1px]'></div>
                            TOURS
                        </Link>
                        <Link className={'w-48 py-1 relative ' + (currentPath.venues ? 'bg-primary text-white' : 'bg-accent text-primary')} 
                        onClick={()=>{toggleNav('venues')}}
                        to="/venues">
                            <div className='absolute left-0 top-[50%] translate-y-[-50%] w-[2px] h-[25px] bg-accent-dark translate-x-[-1px]'></div>
                            VENUES
                        </Link>
                        <Link className={'w-48 py-1 rounded-tr-xl relative ' + (currentPath.rentals ? 'bg-primary text-white' : 'bg-accent text-primary')} 
                        onClick={()=>{toggleNav('rentals')}}
                        to="/rentals">
                            <div className='absolute left-0 top-[50%] translate-y-[-50%] w-[2px] h-[25px] bg-accent-dark translate-x-[-1px]'></div>
                            RENTALS
                        </Link>
                    </div>
                    {/* <div className='w-1 h-2 bg-primary'></div> */}
                </div>
                <div className='flex items-center justify-end lg:hidden'>
                    <button onClick={toggleNav}>
                        {!showMiniNav && <img className="w-6 h-6" src={menuIcon} alt="menu icon" />}
                        {showMiniNav && <XButton />}
                    </button>
                </div>
            </nav>
            {/* <MiniNavBar /> */}
            <nav className={`fixed top-[60px] bg-white w-full left-0 border-t-2 border-primary-light transition-transform origin-top duration-200  ${showMiniNav ? 'scale-y-100' : 'scale-y-0'}`}>
                <ul className='px-[5%] pt-5 pb-10 grid text-lg font-semibold'>
                    <li className='py-2'><Link className='' onClick={ ()=>{toggleNav('home')}}     to="/">         HOME     </Link></li>
                    <li className='py-2'><Link className='' onClick={ ()=>{toggleNav('rooms')}}    to="/rooms">    ROOMS    </Link></li>
                    <li className='py-2'><Link className='' onClick={ ()=>{toggleNav('rental')}}   to="/rentals">  RENTALS  </Link></li>
                    <li className='py-2'><Link className='' onClick={ ()=>{toggleNav('tours')}}    to="/tours">    TOURS    </Link></li>
                    <li className='py-2'><Link className='' onClick={ ()=>{toggleNav('venues')}}   to="/venues">   VENUES   </Link></li>
                    <li className='py-2'><Link className='' onClick={ ()=>{toggleNav('location')}} to="/location"> LOCATION </Link></li>
                    <li className='py-2'><Link className='' onClick={ ()=>{toggleNav('gallery')}}  to="/gallery">  GALLERY  </Link></li> 
                </ul>
            </nav>
        </header>
    )
}