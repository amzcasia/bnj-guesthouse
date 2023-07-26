import React from 'react'

import breakfastIcon from '../../../assets/breakfast.png'
import carIcon from '../../../assets/car.png'
import mapPersonIcon from '../../../assets/map-person.png'
import balloonIcon from '../../../assets/balloon.png'
import carKeyIcon from '../../../assets/car-key.png'
import AddOnCard from './AddOnCard'


export default function AddOns() {
const addOns = ['Pre-Planned Tours','Rentals', 'Filipino Breakfast', 'Meetings and Events', 'Airport and Pier Transfers']

    const addOnsMap = addOns.map( (item)=>{
        return(
            <AddOnCard addOnName={item} key={item} />
        )
    })

  return (
    <section className='bg-primary lg:pl-[5%] flex text-white '>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='flex items-center col-span-1 lg:col-span-5'>
                <h1 className='px-3 text-2xl font-semibold tracking-wides lg:text-3xl'>
                    COMPLETE YOUR STAY <br />WITH <span className='text-accent'>ADD-ONS</span>
                </h1>
            </div>
            <div className='lg:col-span-7'>
                <div className='flex overflow-x-scroll'>
                    <ul className='flex text-gray-300'>
                        {/* <li className='w-[300px] bw'>Pre-Planned Tours</li>
                        <li className='w-[300px] bw'>Rentals</li>
                        <li className='w-[300px] bw'>Filipino Breakfast</li>
                        <li className='w-[300px] bw'>Meetings & Events</li>
                        <li className='w-[300px] bw'>Airport & Pier Transfers</li> */}
                        {addOnsMap}
                    </ul>
                </div>
            </div>

        </div>
    </section>
  )
}
