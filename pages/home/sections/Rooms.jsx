import React from 'react'
import RoomCard from './RoomCard'
import roomTypes from '../../../helpers/roomTypes'

export default function Rooms() {
    const roomTypesMap = roomTypes.map ( (room,index) =>{
        return(
            <RoomCard 
                key={index}
                image={room.image}
                type={room.type}
                adults={room.adults}
                beds={room.beds}
            />
        )
    })

    return (
    <section className='grid pt-10 justify-items-center'> 
        <div className='grid w-full pt-5 justify-items-center bg-primary z-[2]'>
            <h1 className='text-3xl font-bold lg:text-4xl lg:translate-y-[10px]'>
                <span className='text-white'>OUR </span>
                <span className='text-accent'>ROOMS</span>
            </h1>
            <p className='text-white  lg:translate-y-[10px]'>Comfort, simple, and well-maintained spaces.</p>
        </div>
        <div className='w-full h-[50px] z-[1]'>
            <div className='w-full h-[100px] bg-primary rounded-bl-[20px] lg:hidden translate-y-[-50%]' 
            style={{borderBottomLeftRadius: "100% 75%",borderBottomRightRadius: "100% 75%"}}></div>
            <div className='hidden lg:block w-full h-[100px] bg-primary rounded-bl-[20px] translate-y-[-50%]' 
            style={{borderBottomLeftRadius: "100% 100%",borderBottomRightRadius: "100% 100%"}}></div>
            {/* style={{borderBottomLeftRadius: "100% 100%",borderBottomRightRadius: "100% 100%"}}></div> */}
        </div>
        <div className='w-full overflow-hidden translate-y-[-50px]' >
            <div className='flex overflow-x-scroll'>
                {roomTypesMap}
            </div>
        </div>
        <div className=''>
            <button className='translate-y-[-20px] px-8 py-3 text-2xl font-bold rounded-full bg-primary text-accent'>Book Now</button>
        </div>
    </section>
  )
}
