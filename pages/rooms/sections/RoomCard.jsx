import {React, useState} from 'react'
import ViewDetails from './ViewDetails'
import ViewRoom from './ViewRoom'

import headsIcon from '../../../assets/capacity.png'
import bedIcon from '../../../assets/bed.png'
import stairsIcon from '../../../assets/stairs.png'
import rightArrow from '../../../assets/right-arrow.png'
import rightArrowBlack from '../../../assets/right-arrow-black.png'

export default function RoomCard({roomImage, roomType, capacity, beds, floor}) {

    const [showDetails,setShowDetails] = useState (false)
    const [showRoom, setShowRoom] = useState (false)

    function toggleShowDetails(){
        setShowDetails(!showDetails)
    }

    function toggleShowRoom(){
        setShowRoom((prevShowRoom)=>{
            return (!prevShowRoom)
        })
    }

    //links to videos need to be added to allRooms.js helper fie
    const videoLink="https://www.youtube-nocookie.com/embed/FDdtZfCui40"

    return (
    <div className='grid bg-white lg:grid-cols-10'>
        {showRoom && <ViewRoom toggleShowRoom={toggleShowRoom} videoLink={videoLink}/>}
        <div className='lg:col-span-6'>
            <img className='w-full' src={roomImage} alt="" />
        </div>
        <div className='grid content-center justify-items-center lg:col-span-4'>
            <div className=''>
                <div className='py-5'>
                    <p className='text-2xl font-bold'>{roomType}</p>
                </div>
                <div className='grid text-lg lg:py-5 lg:gap-y-3 gap-y-1'>
                    <div className='flex items-center'>
                        <div className='flex items-center justify-center w-10 h-10'>
                            <img className='' src={headsIcon} alt="headsIcon" />
                        </div>
                        <span className='pl-5'>Good for {capacity}</span>
                    </div>
                    <div  className='flex items-center'>
                        <div className='flex items-center justify-center w-10 h-10'>
                            <img className='' src={bedIcon} alt="bedIcon" />
                        </div>
                        <p className='pl-5'>{beds}</p>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex items-center justify-center w-10 h-10'>
                            <img className='w-10 h-10' src={stairsIcon} alt="stairsIcon" />
                        </div>
                        <p className='pl-5'>{floor}</p>
                    </div>
                </div>
                <div className='w-[11rem] py-5'>
                    <button className='flex items-center justify-between w-full px-4 py-1 text-xl font-semibold text-white rounded-md bg-primary-light gap-x-2' onClick={toggleShowRoom}>
                        <img className='w-4 h-4' src={rightArrow} alt="rightArrow" />
                        <span>VIEW ROOM</span>
                    </button>
                    <button className='flex items-center justify-between w-full px-4 py-1 mt-4 text-xl font-semibold rounded-md bg-accent gap-x-2'>
                        <img className='w-4 h-4' src={rightArrowBlack} alt="rightArrowBlack" />
                        <span>BOOK NOW</span>
                    </button>
                </div>
            </div>
        </div>
        <div className='px-5 py-2 lg:col-span-10'>
            <button className='flex items-center' onClick={toggleShowDetails}>
                <img className='w-4 h-4' src={rightArrowBlack} alt="rightArrowBlack" />
                <span className='pl-3 font-semibold text-primary'>VIEW DETAILS</span>
            </button>
        </div>
        {showDetails && <ViewDetails />}
        
    </div>
    )
}
