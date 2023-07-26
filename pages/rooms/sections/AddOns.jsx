import React from 'react'

import breakfastIcon from '../../../assets/breakfast.png'
import carIcon from '../../../assets/car.png'
import mapPersonIcon from '../../../assets/map-person.png'
import balloonIcon from '../../../assets/balloon.png'
import carKeyIcon from '../../../assets/car-key.png'


export default function AddOns() {
  return (
    <section className='bg-primary lg:px-[15%]'>
        <div className='flex justify-center pt-10'>
            <p className='text-2xl font-semibold tracking-widest text-center lg:text-3xl'>
                <span className='text-white'>COMPLETE YOUR STAY WITH&nbsp;</span>
                <span className='text-accent'>ADD-ONS</span>
            </p>
        </div>
        <ul className='grid grid-cols-2 py-10 text-xl text-center text-white lg:grid-cols-6 gap-y-5'>
            <li className='grid justify-items-center gap-y-2 lg:col-span-2'>
                <div className='lg:max-w-none max-w-[100px]'>
                    <img src={breakfastIcon} alt="breakfast Icon" />
                </div>
                <p>Filipino Breakfast</p>
            </li>
            <li className='grid justify-items-center gap-y-2 lg:col-span-2'>
                <div className='lg:max-w-none max-w-[100px]'>
                    <img src={carIcon} alt="carIcon" />
                </div>
                <p>Airport & Pier Transfers</p>
            </li>
            <li className='grid justify-items-center gap-y-2 lg:col-span-2'>
                <div className='lg:max-w-none max-w-[100px]'>
                    <img src={mapPersonIcon} alt="mapPerson Icon" />
                </div>
                <p>Pre-Planned Tours</p>
            </li>
        {/* </ul>
        <ul className='grid pt-10 text-xl text-white lg:grid-cols-2 lg:px-[10%] gap-y-4'> */}
            <li className='grid justify-items-center gap-y-2 lg:col-span-3'>
                <div className='lg:max-w-none max-w-[100px]'>
                    <img src={balloonIcon} alt="balloon Icon" />
                </div>
                <p>Venues</p>
            </li>
            <li className='grid col-span-2 justify-items-center gap-y-2 lg:col-span-3'>
                <div className='lg:max-w-none max-w-[100px]'>
                    <img src={carKeyIcon} alt="carKey Icon" />
                </div>
                <p>Car Rentals</p>
            </li>
        </ul>
    </section>
  )
}
