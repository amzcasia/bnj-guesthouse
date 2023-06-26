import React from 'react'
import OfferCard from './SpecialsCard'
import special1 from '../../../assets/special-1.png'
// import {offerCardContent} from '../../../helpers/offerCardContent.js'
import {offerCardContent} from '../../../helpers/offerCardContent.js'

export default function Specials() {

    const offerCardMap = offerCardContent.map ( (card,index)=>{
        return(
            <OfferCard 
                key={index}
                image={card.offerImage}
                heading={card.heading}
                text={card.text}
                buttonText={card.buttonText}
            />
        )
    })

    return (
    <section className='pt-20'>
        <div className='relative flex justify-center mx-auto w-max'>
            <h1 className='text-3xl font-bold text-center w-max lg:text-5xl'>SPECIAL OFFERS</h1>
            <div className='absolute bottom-0 w-full h-[10px] bg-accent z-[-1]'></div>
        </div>
        <div className='mt-10 overflow-hidden'>
            <div className='flex overflow-x-scroll'>
                {offerCardMap}
            </div>
        </div>
    </section>
  )
}
