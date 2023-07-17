import React from 'react'
import chocolateHills from '../../../assets/chocolateHills.png'
import roundPin from '../../../assets/roundPin.png'
import rightArrowBlack from '../../../assets/right-arrow-black.png'


export default function TourCard({tourTitle}) {
    const destinationList = ['Blood Compact Shrine', 'Sevill hanging bridge', 'Loboc river Cruise', 'Tarsier Watching', 'Mirror of the World', 'Baclayon church', 'Chocolate Hills', 'Butterfly Garden', 'Man-made forest']

    const TourDestinations = ({destination}) => {
        return(
            <li className='flex items-center gap-x-1'>
                <img className='w-6 h-6' src={roundPin} alt="roundPin" />
                <span>{destination}</span>
            </li>
        )
    }
    
    const destinationMap = destinationList.map( (destinationItem) => {
        return(
            <TourDestinations key={destinationItem} destination={destinationItem} />
        )
    })

    return (
    <div className='bg-white rounded-2xl'>
        <div>
            <img className='' src={chocolateHills} alt="chocolateHills" />
        </div>
        <div className='grid px-4 justify-items-center gap-y-2'>
            <h3 className='text-xl font-bold lg:text-2xl'>
                {tourTitle}
            </h3>
            <p className='text-lg text-center'>
            The tour offers a unique combination of natural beauty, historical significance, and cultural immersion, making it a perfect destination for nature lovers, history buffs, or travelers looking for a relaxing getaway.
            </p>
        </div>
        <ul className='grid px-4 pt-2 text-lg lg:grid-cols-2 lg:gap-y-2'>
            {destinationMap}
            <li className='text-accent-dark pl-[1.75rem]'>
                And more!
            </li>
        </ul>
        <div className='flex justify-center py-3 mt-2 rounded-b-xl bg-primary'>
            <button className='flex items-center px-4 py-1 rounded-md bg-accent gap-x-2'>
                <img className='w-5 h-5' src={rightArrowBlack} alt="rightArrowBlack" />
                <span className='text-lg font-semibold'>INQUIRE NOW</span>
            </button>
        </div>
    </div>
  )
}
