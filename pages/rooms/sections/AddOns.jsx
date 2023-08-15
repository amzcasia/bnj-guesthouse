import React from 'react'

import breakfastIcon from '../../../assets/breakfast.png'
import carIcon from '../../../assets/car.png'
import mapPersonIcon from '../../../assets/map-person.png'
import balloonIcon from '../../../assets/balloon.png'
import carKeyIcon from '../../../assets/car-key.png'
import AddOnCard from './AddOnCard'
import {addOns} from '../../../helpers/addOns'


export default function AddOns() {
// const addOns = ['Pre-Planned Tours','Rentals', 'Filipino Breakfast', 'Meetings and Events', 'Airport and Pier Transfers']

    const addOnsMap = addOns.map( (item)=>{
        return(
            <AddOnCard addOnName={item.addOn} image={item.addOnImage} key={item} />
        )
    })

  return (
    <section className='flex text-white bg-primary'>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='grid content-center col-span-1 lg:px-[15%] px-[5%] py-10 lg:col-span-5 gap-y-5'>
                <h1 className='grid text-2xl font-semibold tracking-widest lg:text-3xl gap-y-2'>
                    <p>COMPLETE YOUR STAY</p>
                    <p className='relative flex items-center'>
                        <span>WITH&nbsp;</span>
                        <span className='text-accent'>ADD - ONS</span>
                        <div className='w-[35%] h-[3px] bg-primary-light absolute right-0 translate-x-[40%]'></div>
                    </p>
                </h1>
                <p className='tracking-wide lg:text-lg'>It’s the smallest things that make a big difference. So, let us know if you fancy any and we’ll include it, ASAP.</p>
            </div>
            <div className='lg:col-span-7'>
                <div className='flex overflow-x-hidden'>
                    <ul className='flex text-gray-300 lg:animate-[rightToLeft_25s_linear_infinite]'>
                        {/* <li className='w-[300px] bw'>Pre-Planned Tours</li>
                        <li className='w-[300px] bw'>Rentals</li>
                        <li className='w-[300px] bw'>Filipino Breakfast</li>
                        <li className='w-[300px] bw'>Meetings & Events</li>
                        <li className='w-[300px] bw'>Airport & Pier Transfers</li> */}
                        {addOnsMap}
                        
                    </ul>
                    <ul className='flex text-gray-300 lg:animate-[rightToLeft_25s_linear_infinite]'>
                        {addOnsMap}
                    </ul>
                </div>
            </div>

        </div>
    </section>
  )
}
