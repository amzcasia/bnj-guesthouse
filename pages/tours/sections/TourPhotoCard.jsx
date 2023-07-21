import React from 'react'

export default function TourPhotoCard({photo,description}) {
  return (
    <div className='px-3 w-[300px] lg:w-[450px] shrink-0'>
        <img className='object-cover w-full' src={photo} alt={description} />
    </div>
  )
}
