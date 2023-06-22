import React from 'react'
import locations from '../helpers/locationsList.js'


export default function Location() {
    const location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.3993828329376!2d123.86880297494179!3d9.646874390441214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa4dccd6ba591d%3A0x5c7b9076564f0b1b!2sB%26J%20Guesthouse%20and%20Tours!5e0!3m2!1sen!2sph!4v1687451158685!5m2!1sen!2sph";

    const locationMap = locations.map( (place,index) =>{
        return(
            <div key={index} className=''>
                <img key={index+10} className='' src={place.image} alt="church" />
                <h3 key={index+20} className='font-bold lg:text-xl'>{place.title}</h3>
                <p key={index+30} className='lg:text-xl '>{place.text}</p>
            </div>
        )
    })

  return (
    <section className='mt-16 px-[5%]'>
        <div className='grid grid-cols-2 pb-4 lg:pb-0'>
            <h1 className='text-3xl font-bold text-primary lg:text-5xl lg:w-[600px] lg:mx-auto '>LOCATION</h1>
        </div>
        
        <div className='grid lg:grid-cols-2 gap-y-4'>
            <div className='flex items-center'>
                <iframe src={location} className='mx-auto border-0 w-[300px] h-[300px] lg:w-[600px] lg:h-[450px]' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
                <h2 className='text-2xl lg:text-3xl'>We are conveniently located near . . .</h2>
                <div className='grid grid-cols-2 pt-5 gap-x-2 gap-y-2'>
                    {locationMap}
                </div>
            </div>
        </div>
    </section>
  )
}
