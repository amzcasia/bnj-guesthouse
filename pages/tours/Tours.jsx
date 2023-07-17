import React from 'react'
import toursHero from '../../assets/tours-hero.png'
import checkMark from '../../assets/check-mark-2.png'
import threePeople from '../../assets/ellipse-15.png'
import TourCard from './sections/TourCard'

import {tourList} from '../../helpers/tourList.js'


export default function Tours() {
    const inclusionList = [
        'Breakfast',
        'Welcome Drinks',
        'Accommodation',
        'Vehicle with Driver and Fuel',
        'Free Bottled Water during Tour',
        'Transfers (Airport or Tagbilaran Pier)'
    ]

    const InclusionItem = ({inclustionItem}) => {
        return(
            <li className='flex items-center gap-x-2'>
                <img className='w-5 h-5' src={checkMark} alt="checkMark" />
                <span>{inclustionItem}</span>
            </li>
        )
    }

    const inclusionMap = inclusionList.map( (inclusionItem)=>{
        return(
            <InclusionItem inclustionItem={inclusionItem} key={inclusionItem}/>
        )
    })

    const tourMap = tourList.map( (tourItem)=>{
        return(
            <TourCard key={tourItem.tourTitle} tourTitle={tourItem.tourTitle} />
        )
    })

  return (
    <main>
        <section className='relative h-[33vh] w-full flex items-center justify-center'>
            <img className='absolute top-0 left-0 lg:w-full w-auto h-[33vh] object-cover z-[-1]' src={toursHero} alt="toursHero" />
            <p className='text-2xl font-bold tracking-widest text-primary lg:text-4xl'>
                EXPLORE BOHOL
            </p>
        </section>
        <section>
            <div className='flex justify-center py-5 font-bold tracking-widest lg:text-2xl text-primary'>
                <p className='text-center'>
                    MAKE THE MOST OF YOUR STAY, WITH A
                    <span className='text-accent'>&nbsp;CUSTOMIZED&nbsp;</span>
                    BOHOL TOUR
                </p>
            </div>
            <div className='h-[40px] lg:h-[90px] w-[2px] mx-auto bg-primary'></div>
            <div className='grid py-5 lg:content-center lg:grid-cols-2 gap-x-6'>
                <div className='grid lg:justify-items-end justify-items-center'>
                    <img src={threePeople} alt="threePeople" />
                </div>
                <div className='grid text-lg lg:text-xl text-primary justify-items-center lg:justify-items-start'>
                    <p>Enjoy these inclusions in ALL packages</p>
                    <ul className='grid gap-y-0'>
                        {inclusionMap}
                    </ul>
                </div>
            </div>
        </section>
        <section className='bg-secondary lg:px-[15%]'>
            <div className='relative grid justify-center py-10'>
                {/* <div className='absolute bottom-0 left-0 w-full h-[10px] bg-secondary bb'></div> */}
                <h2 className='relative text-xl font-bold text-primary lg:text-2xl'>PLAN YOUR BOHOL TRIP</h2>
            </div>
            <div className='grid lg:grid-cols-2 lg:gap-x-10 gap-y-10'>
                {tourMap}
            </div>
            
        </section>

    </main>
  )
}
