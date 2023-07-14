import React from 'react'

import RoomCard from './sections/RoomCard'
import AddOns from './sections/AddOns'

import heroBackground from '../../assets/hero-background-image.png'
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
        <p className='py-8 text-lg font-medium text-center lg:text-xl lg:py-10'>Simple stays for every traveller</p>
        <div className='bg-[#FFF5EE] pt-10'>
            <div className='relative flex justify-center lg:mx-[15%]'>
                <div className='absolute w-full top-1/2 h-[2px] bg-primary-light'></div>
                <span className='z-[1] px-3 text-2xl font-medium bg-[#FFF5EE] lg:text-3xl text-primary'>
                    STANDARD ROOMS
                </span>
            </div>
            <div className='lg:mx-[15%] mt-5 grid gap-y-8'>
                {roomTypesMap[0]}
                {roomTypesMap[1]}
            </div>
        </div>

        <div className='bg-[#FFF5EE] pt-10'>
            <div className='relative flex justify-center lg:mx-[15%]'>
                <div className='absolute w-full top-1/2 h-[2px] bg-primary-light'></div>
                <span className='z-[1] px-3 text-2xl font-medium bg-[#FFF5EE] lg:text-3xl text-primary'>
                    DELUXE ROOMS
                    </span>
            </div>
            <div className='lg:mx-[15%] mt-5 grid gap-y-8'>
                {roomTypesMap[2]}
                {roomTypesMap[3]}
            </div>
        </div>

        <div className='bg-[#FFF5EE] pt-10'>
            <div className='relative flex justify-center lg:mx-[15%]'>
                <div className='absolute w-full top-1/2 h-[2px] bg-primary-light'></div>
                <span className='z-[1] px-3 text-2xl font-medium bg-[#FFF5EE] lg:text-3xl text-primary'>
                    FAMILY ROOMS
                </span>
            </div>
            <div className='lg:mx-[15%] mt-5 grid gap-y-8'>
                {roomTypesMap[4]}
                {roomTypesMap[5]}
            </div>
        </div>

        <div className='bg-[#FFF5EE] pt-10'>
            <div className='relative flex justify-center lg:mx-[15%]'>
                <div className='absolute w-full top-1/2 h-[2px] bg-primary-light'></div>
                <span className='z-[1] px-3 text-2xl font-medium bg-[#FFF5EE] lg:text-3xl text-primary'>
                    DORM ROOMS
                </span>
            </div>
            <div className='lg:mx-[15%] mt-5 grid gap-y-8'>
                {roomTypesMap[6]}
                {roomTypesMap[7]}
                {roomTypesMap[8]}
            </div>
        </div>
        <AddOns />
    </main>
    )
}
