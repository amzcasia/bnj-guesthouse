import menuIcon from '../assets/menu.png'

export default function Header(){
    return(
        <header className="text-primary px-[5%] py-3 lg:py-0 lg:h-[85px] flex items-center lg:justify-center sticky top-0 z-[10] bg-white drop-shadow-md">
            <nav className="flex content-center justify-between w-full grid-cols-2 lg:grid lg:grid-cols-3">
                <ul className="hidden lg:flex items-center justify-between gap-x-[54px] text-primary-light text-lg">
                     <li><a href="#">ROOMS</a></li>
                     <li><a href="#">RENTALS</a></li>
                     <li><a href="#">TOURS</a></li>
                </ul>
                <span className="text-3xl font-bold lg:text-4xl lg:text-center"><a href="#">B&J Guesthouse</a></span>
                <ul className="hidden lg:flex items-center justify-between gap-x-[54px] text-primary-light text-lg">
                     <li><a href="#">VENUES</a></li>
                     <li><a href="#">LOCATION</a></li>
                     <li><a href="#">GALLERY</a></li>
                </ul>
                <div className='flex items-center justify-end lg:hidden'>
                    <button><img className="w-6 h-6" src={menuIcon} alt="menu icon" /></button>
                </div>
            </nav>

        </header>
    )
}