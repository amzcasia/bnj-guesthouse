import React from 'react'
import peopleInCar from '../assets/peopleInCar.png'
import pinMap from '../assets/pinMap.png'
import beetle from '../assets/beetle.png'

export default function Lost() {
  return (
    <section className='grid py-10 mt-16 lg:grid-cols-2 bg-primary px-[5%]'>
        <div className='relative grid content-center'>
            <img className='absolute right-0 lg:top-0 lg:left-0 w-[50px] lg:w-[70px] lg:block lg:translate-y-0 translate-y-[-20%]' src={pinMap} alt="pinMap" />
            <div className='grid content-center gap-y-6'>
                <h1 className='text-3xl font-bold lg:text-5xl text-accent'>Never get lost again</h1>
                <div className='text-xl text-white lg:text-2xl'>
                    <p>Roadtrips should be fun. Rent our</p>
                    <p>vehicle with our very trusted driver.</p>
                </div>
                <div className='flex'>
                    <div className='relative'>
                        <img className='lg:h-[80px] h-[60px] aspect-square absolute top-[-30%] lg:top-[-50%] lg:right-[-30%] right-[-25%]' src={beetle} alt="beetle" />
                        <button className='px-6 py-2 text-2xl font-bold rounded-full lg:text-3xl text-primary bg-accent w-max'>Read More</button>
                    </div>
                    
                </div>
                
            </div>
        </div>
        <div className='grid content-center pt-10 lg:pt-0'>
            <img src={peopleInCar} alt="peopleInCar" />
        </div>
    </section>
  )
}
