import React, {useState, useEffect, useRef} from 'react'
import {tourPhotos} from '../../../helpers/tourPhotos.js'
import TourPhotoCard from './TourPhotoCard.jsx'
import ImageCarousel from '../../../components/ImageCarousel.jsx'
import TestComponent from '../../../components/TestComponent.jsx'
import rightArrowBlack from '../../../assets/right-arrow-black.png'


export default function TourPhotos() {
    const [cardIndex, setCardIndex] = useState(3)
    const [clientWidth, setClientWidth] = useState(window.innerWidth);
    let allowMove = useRef(true)
    const tourPhotosMap = tourPhotos.map( (card,index)=>{
        return(
            <TourPhotoCard photo={card.image} description={card.description} key={index} />
        )
    })

    useEffect ( ()=>{
        const handleResize = () => {
            setClientWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[])

    let duration=300
    const MAX_INDEX = 8
    const MIN_INDEX = 1
    
    if(allowMove.current){
        duration = 300
    }
    else{
        duration = 0
    }

    let translateXClass = {
        transform: `translateX(${cardIndex * -300}px)`, 
        transitionDuration: `${duration}ms`
    }
    if (clientWidth > 1024){
        translateXClass = {
            transform: `translateX(${cardIndex * -450}px)`, 
            transitionDuration: `${duration}ms`
        }
    }else{
        translateXClass = {
            transform: `translateX(${cardIndex * -300}px)`, 
            transitionDuration: `${duration}ms`
        }
    }

    const changeIndex = (increment)=> {
        setCardIndex((prevCardIndex)=>{
            if(prevCardIndex + increment >= MAX_INDEX){
                console.log(prevCardIndex + increment)

                setTimeout(() => {
                    setCardIndex(()=>{
                        allowMove.current = false;
                        return(MIN_INDEX+1)
                    })
                }, duration+1);
                return(MAX_INDEX)
            }else if( prevCardIndex + increment <= MIN_INDEX){
                setTimeout(() => {
                    setCardIndex(()=>{
                        allowMove.current = false;
                        return(MAX_INDEX - 1)
                    })
                }, duration+1);
                return(MIN_INDEX)
            }else{
                allowMove.current = true;
                return(prevCardIndex + increment)
            }
        });
    }

    const componentArguments = ['photo','description']
    return (
    <section className='pt-20 bg-offwhite'>
        <div className='lg:flex px-[5%] gap-y-1 hidden'>
            <div className='relative flex text-2xl font-bold lg:w-auto lg:text-4xl text-primary'>
                <div className='absolute left-0 bottom-0 translate-y-[20%] w-full h-1/2 bg-accent'></div>
                <p className='z-[1] hidden lg:block'>BOHOL TOURS - Simple and Easy.</p>
                <p className='z-[1] lg:hidden'>BOHOL TOURS</p>
            </div>
            <div className='relative grid text-2xl font-bold lg:w-auto lg:text-4xl text-primary lg:hidden'>
                <div className='absolute left-0 bottom-0 translate-y-[20%] w-full h-1/2 bg-accent'></div>
                <p className='z-[1]'>Simple and Easy.</p>
            </div>
        </div>

        <div className='grid px-[5%] gap-y-1 lg:hidden'>
            <div className='flex text-2xl font-bold lg:w-auto lg:text-4xl text-primary'>
                
                <p className='relative'>
                    <span className='z-[1]'>BOHOL TOURS - </span>
                </p>
            </div>
            <div className='relative grid text-2xl font-bold lg:w-auto lg:text-4xl text-primary lg:hidden'>
                <p className='z-[1]'>Simple and Easy.</p>
            </div>
        </div>
        <div className='pt-10'>
            <div className='relative flex justify-center w-full overflow-hidden carousel_container'>
                <button className='absolute left-10 w-10 h-10 text-3xl font-bold rounded-full top-1/2 bg-accent hover:bg-accent-dark z-[1]' onClick={()=>{changeIndex(-1)}}>{'<'}</button>
                <button className='absolute right-10 w-10 h-10 text-3xl font-bold rounded-full top-1/2 bg-accent hover:bg-accent-dark z-[1]' onClick={()=>{changeIndex(1)}}>{'>'}</button>

                <div className='flex lg:w-[1350px] w-[300px] lg:translate-x-[-450px] translate-x-[-300px]' style={translateXClass}>
                    {tourPhotosMap[3]}
                    {tourPhotosMap[4]}
                    {tourPhotosMap[5]}
                    {tourPhotosMap}
                    {tourPhotosMap[0]}
                    {tourPhotosMap[1]}
                    {tourPhotosMap[2]}
                </div>
            </div>
            
        </div>
        <div className='grid justify-center py-5 justify-items-center lg:flex lg:items-center gap-x-5 gap-y-5'>
            <button className='flex items-center px-4 py-2 font-semibold tracking-widest rounded-sm bg-accent gap-x-2'>
                <img className='w-5 h-5' src={rightArrowBlack} alt="rightArrowBlack" />
                <span>LET'S START</span>
            </button>
            <button className='flex items-center px-4 py-2 font-semibold tracking-widest text-white rounded-sm bg-primary-light gap-x-2'>
                <img className='w-5 h-5' src={rightArrowBlack} alt="rightArrowBlack" />
                <span>MORE PHOTOS</span>
            </button>

        </div>

    </section>
  )
}
