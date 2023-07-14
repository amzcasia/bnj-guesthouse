import React from 'react'

import breakfastIcon from '../../../assets/breakfast.png'

export default function AddOns() {
  return (
    <div className='bg-primary lg:px-[15%]'>
        <div className='flex justify-center pt-10'>
            <p className='text-2xl font-semibold tracking-widest text-center lg:text-3xl'>
                <span className='text-white'>COMPLETE YOUR STAY WITH&nbsp;</span>
                <span className='text-accent'>ADD-ONS</span>
            </p>
        </div>
        <ul className='grid pt-10 text-xl text-white lg:grid-cols-3 gap-y-4'>
            <li className='grid justify-items-center'>
                <div>
                    <img src={breakfastIcon} alt="breakfast Icon" />
                </div>
                <p>
                    Filipino Breakfast
                </p>
            </li>
            <li className='grid justify-items-center'>
                <div>
                    <img src={breakfastIcon} alt="breakfast Icon" />
                </div>
                <p>
                    Airport & Pier Transfers
                </p>
            </li>
            <li className='grid justify-items-center'>
                <div>
                    <img src={breakfastIcon} alt="breakfast Icon" />
                </div>
                <p>
                    Pre-Planned Tours
                </p>
            </li>
        </ul>
        <ul className='grid pt-10 text-xl text-white lg:grid-cols-2 lg:px-[10%] gap-y-4'>
            <li className='grid justify-items-center'>
                <div>
                    <img src={breakfastIcon} alt="breakfast Icon" />
                </div>
                <p>
                    Venues
                </p>
            </li>
            <li className='grid justify-items-center'>
                <div>
                    <img src={breakfastIcon} alt="breakfast Icon" />
                </div>
                <p>
                    Car Rentals
                </p>
            </li>
        </ul>
        <div className='h-[500px]'></div>
    </div>
  )
}
