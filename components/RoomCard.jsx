import React from 'react'

export default function RoomCard({image,type,adults,beds}) {
  return (
    <div className='w-[300px] lg:w-[400px]  shrink-0 px-[2px] relative'>
        <img className='w-full max-h-[500px]' src={image} alt="special offer" />

        <div className='bg-white rounded-[10px] grid justify-items-center absolute bottom-5 right-0 left-0 mx-auto max-w-[250px]'>
          <h2 className='text-2xl font-bold text-center underline lg:text-4xl text-primary'>Deluxe Room</h2>
          <p className='text-center'>MAX: 3 Adults</p>
          <p>BED: 1 Double & 1 Single</p>
        </div>
    </div>
  )
}
