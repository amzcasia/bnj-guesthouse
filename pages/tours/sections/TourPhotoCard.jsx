import React from 'react'

export default function TourPhotoCard({photo,description}) {
  return (
    <div className='px-3 lg:w-1/3 shrink-0'>
        <img className='object-cover w-full' src={photo} alt={description} />
    </div>
  )
}
