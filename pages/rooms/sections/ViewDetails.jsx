import React from 'react'
import airconIcon from '../../../assets/amenity1.png'
import checkMark from '../../../assets/check-mark.png'

export default function ViewDetails() {
  return (
    <div className='lg:col-span-10 bg-[#EFEFED] p-5'>
        <p className='text-xl'>
            All guests can enjoy the following room amenities
        </p>
        <ul className='grid px-5 py-5 lg:flex lg:justify-between lg:gap-x-5 gap-y-3 lg:gap-y-0 '>
            <li className='flex gap-x-4'>
                <div className='w-10 h-10'>
                    <img src={airconIcon} alt="aircon icon" />
                </div>
                <span className='font-semibold'>AIR CONDITONING</span>
            </li>
            <li className='flex gap-x-4'>
                <div className='w-10 h-10'>
                    <img src={airconIcon} alt="aircon icon" />
                </div>
                <span className='font-semibold'>LED TV</span>
            </li>
            <li className='flex gap-x-4'>
                <div className='w-10 h-10'>
                    <img src={airconIcon} alt="aircon icon" />
                </div>
                <span className='font-semibold'>HOT/COLD SHOWER</span>
            </li>
            <li className='flex gap-x-4'>
                <div className='w-10 h-10'>
                    <img src={airconIcon} alt="aircon icon" />
                </div>
                <span className='font-semibold'>COMPLIMENTARY WIFI</span>
            </li>
        </ul>
        <div className='h-[2px] bg-black w-full my-5'></div>
        <ul className='grid px-5 lg:grid-cols-3 gap-y-3'>
            <li className='flex items-center gap-x-3'>
                <div>
                    <img src={checkMark} alt="check-mark" />
                </div>
                <span>Private Toilets</span>
            </li>
            <li className='flex items-center gap-x-3'>
                <div>
                    <img src={checkMark} alt="check-mark" />
                </div>
                <span>Complimentary Toiletries</span>
            </li>
            <li className='flex items-center gap-x-3'>
                <div>
                    <img src={checkMark} alt="check-mark" />
                </div>
                <span>Workspace / Desk</span>
            </li>
            <li className='flex items-center gap-x-3'>
                <div>
                    <img src={checkMark} alt="check-mark" />
                </div>
                <span>Closet</span>
            </li>
            <li className='flex items-center gap-x-3'>
                <div>
                    <img src={checkMark} alt="check-mark" />
                </div>
                <span>Electric Kettle</span>
            </li>
            <li className='flex items-center gap-x-3'>
                <div>
                    <img src={checkMark} alt="check-mark" />
                </div>
                <span>Mugs, Saucers, Teaspoons</span>
            </li>
        </ul>
    </div>
  )
}
