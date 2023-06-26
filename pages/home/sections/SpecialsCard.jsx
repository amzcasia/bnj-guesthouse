import React from 'react'

export default function SpecialsCard({image,heading,text,buttonText}) {
  return (
    <div className='w-[300px] lg:w-[400px] shrink-0 px-3 '>
        <img className='w-full' src={image} alt="special offer" />
        <div className='bg-[#FFF5EE] grid justify-items-center gap-y-8 pb-8 pt-8 px-[4%]'>
          <h2 className='text-2xl font-bold text-center lg:text-4xl'>{heading}</h2>
          <p className='text-center'>{text}</p>
          <button className='px-8 py-2 text-xl font-bold rounded-full bg-accent'>{buttonText}</button>
        </div>
    </div>
  )
}
