import React from 'react'
import heroBackground from '../../assets/hero-background-image.png'
import RoomCard from './sections/RoomCard'
import {allRooms} from '../../helpers/allRooms.js'

export default function Rooms() {
    const roomTypesMap = allRooms.map ( (room,index) =>{
        return(
            <RoomCard 
                key={index}
                roomImage={room.roomImage}
                roomType={room.roomType}
                capacity={room.capacity}
                beds={room.beds}
                floor={room.floor}
            />
        )
    })

    return (
    <main>
        <div className='h-[40vh] bg-cover bg-center flex items-center justify-center' 
            style={{backgroundImage: `url(${heroBackground})`}}>
            <p className='text-2xl font-bold lg:text-3xl text-primary'>ROOMS & ADD-ONS</p>
        </div>
        <p className='py-5 text-lg font-medium text-center lg:text-xl lg:py-10'>SIMPLE STAYS FOR EVERY TRAVELLER</p>
        <div className='bg-[#FFF5EE] pt-10'>
            <div className='relative flex justify-center lg:mx-[15%]'>
                <div className='absolute w-full top-1/2 h-[2px] bg-primary-light'></div>
                <span className='z-[1] px-3 text-2xl font-medium bg-[#FFF5EE] lg:text-3xl text-primary'>STANDARD ROOMS</span>
            </div>
            <div className='lg:mx-[15%] mt-5'>
            {roomTypesMap[0]}
            {roomTypesMap[1]}
            </div>
            
        </div>
        <div className='h-[1000px] bg-[#FFF5EE]'></div>

        

    </main>
    )
}
