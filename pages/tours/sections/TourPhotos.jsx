import React from 'react'
import {tourPhotos} from '../../../helpers/tourPhotos.js'
import TourPhotoCard from './TourPhotoCard.jsx'
import ImageCarousel from '../../../components/ImageCarousel.jsx'
import TestComponent from '../../../components/TestComponent.jsx'

export default function TourPhotos() {
    const tourPhotosMap = tourPhotos.map( (card,index)=>{
        return(
            <TourPhotoCard photo={card.image} description={card.description} key={index} />
        )
    })

    const componentArguments = ['photo','description']
    return (
    <section className='pt-20 bg-offwhite px-[5%]'>
        <div className='flex'>
            <div className='relative grid text-3xl font-bold lg:text-4xl text-primary'>
                <div className='absolute left-0 bottom-0 translate-y-[20%] w-full h-1/2 bg-accent'></div>
                <p className='z-[1]'>BOHOL TOURS - Simple and Easy.</p>
            </div>
        </div>
        <div className='pt-10'>
            <div className='flex'>
                {tourPhotosMap}
                
            </div>
        </div>
        test
        <div className='py-5 bg-yellow-200'>
            
            {/* <ImageCarousel arrayToMap={tourPhotos} CardComponent={TestComponent} /> */}
            
        </div>
        test-end
    </section>
  )
}
