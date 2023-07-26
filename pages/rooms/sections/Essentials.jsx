import React from 'react'
import essentialsBg from '../../../assets/essentials-bg.png'

export default function Essentials() {
  return (
    <section className='w-full bg-cover px-[15%] py-10 grid gap-y-10 text-primary' 
    style={{backgroundImage:`url('${essentialsBg}')`}}>
        <div className='grid bg-white lg:grid-cols-2'>
            <h1 className='mx-auto text-2xl font-bold tracking-widest lg:col-span-2 lg:text-3xl translate-y-[-50%]'>ESSSENTIALS</h1>

            <div className='grid justify-items-center translate-y-[-0.75rem]'>
                <div className=''>
                    <p><span className='font-bold'>Check-in </span> 2:00pm</p>
                    <p><span className='font-bold'>Check-out</span>  12:00nn</p>
                </div>
            </div>
            <div className='grid justify-items-center translate-y-[-0.75rem]'>
                <p className='font-bold'>Daily Reception Hours</p>
                <p>5:30am - 11:30nn</p>
            </div>
            <div className='grid pb-1 lg:col-span-2'>
                <button className='px-4 py-1 mx-auto font-bold rounded-sm bg-accent'>KNOW MORE</button>
            </div>
        </div>
        <div className='grid lg:grid-cols-2 gap-x-4 gap-y-5'>
            <div className='grid bg-white'>
                <h1 className='mx-auto text-2xl font-bold tracking-widest lg:text-3xl translate-y-[-50%]'>ROOMS</h1>
                <div className='grid justify-items-center translate-y-[-1rem]'>
                    <ul className='w-auto'>
                        <li className=''>13 Guest Rooms</li>
                        <li>100% Non-Smoking Rooms</li>
                        <li>Complimentary WIFI</li>
                        <li>LED Smart TV</li>
                        <li>Air Conditioning</li>
                        <li>Private Bathrooms</li>
                        <li>Towels and Linen provided</li>
                        <li>Complimentary Toiletries</li>
                    </ul>
                </div>
                
                <div className='w-full h-[10px] bg-accent'></div>
            </div>
            <div className='grid bg-white'>
                <h1 className='mx-auto text-2xl font-bold tracking-widest lg:text-3xl translate-y-[-50%]'>PROPERTY</h1>
                <div className='grid justify-items-center translate-y-[-1rem]'>
                    <ul className='flex flex-col w-auto'>
                        <li>Communal Dining/Lounge Area</li>
                        <li>Guest laundry facilities</li>
                        <li>On-site Generator</li>
                        <li>Complimentary Water Dispenser</li>
                        <li>Complimentary Wifi</li>
                        <li>Free Luggage Storage</li>
                        <li>Free Ipad Use for Research</li>
                        <li>Food Delivery</li>
                    </ul>
                </div>
                <div className='w-full h-[10px] bg-accent'></div>
            </div>

        </div>
    </section>
  )
} 
