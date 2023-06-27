import React, {useState, useRef, useEffect} from 'react'
import RoomCard from './RoomCard'
import roomTypes from '../../../helpers/roomTypes'

export default function Rooms() {
    const [cardIndex, setCardIndex] = useState(3)
    const [clientWidth, setClientWidth] = useState(window.innerWidth);
    let allowMove = useRef(true)

    useEffect(()=>{
        const handleResize = () => {
            setClientWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[])

    const roomTypesMap = roomTypes.map ( (room,index) =>{
        return(
            <RoomCard 
                key={index}
                image={room.image}
                type={room.type}
                adults={room.adults}
                beds={room.beds}
            />
        )
    })

    let duration=0;
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
            transform: `translateX(${cardIndex * -400}px)`, 
            transitionDuration: `${duration}ms`
        }
    }else{
        translateXClass = {
            transform: `translateX(${cardIndex * -300}px)`, 
            transitionDuration: `${duration}ms`
        }
    }
    function incrementCardIndex(increment){
        const MAX_INDEX = 8
        const MIN_INDEX = 1
        if(cardIndex + increment >= MAX_INDEX){
            setCardIndex(8)
            setTimeout(() => {
                setCardIndex(()=>{
                    allowMove.current = false;
                    return(2)
                })
            }, 301);
        }else if( cardIndex + increment <= MIN_INDEX){
            setCardIndex(1)
            setTimeout(() => {
                setCardIndex(()=>{
                    allowMove.current = false;
                    return(7)
                })
            }, 301);
        }else{
            setCardIndex( ()=>{ 
                allowMove.current = true;
                return(cardIndex + increment)} )
        }
    }

    return (
    <section className='grid pt-10 justify-items-center'> 
        <div className='grid w-full pt-5 justify-items-center bg-primary z-[2]'>
            <h1 className='text-3xl font-bold lg:text-4xl lg:translate-y-[10px]'>
                <span className='text-white'>OUR </span>
                <span className='text-accent'>ROOMS</span>
            </h1>
            <p className='text-white  lg:translate-y-[10px]'>Comfort, simple, and well-maintained spaces.</p>
        </div>
        <div className='w-full h-[50px] z-[1]'>
            <div className='w-full h-[100px] bg-primary rounded-bl-[20px] lg:hidden translate-y-[-50%]' 
            style={{borderBottomLeftRadius: "100% 75%",borderBottomRightRadius: "100% 75%"}}></div>
            <div className='hidden lg:block w-full h-[100px] bg-primary rounded-bl-[20px] translate-y-[-50%]' 
            style={{borderBottomLeftRadius: "100% 100%",borderBottomRightRadius: "100% 100%"}}></div>
        </div>
        <div className='w-full overflow-hidden translate-y-[-50px] relative'>
            <button 
                onClick={()=>incrementCardIndex(-1)}
                className='z-[9] w-10 h-10 rounded-full bg-primary-light absolute left-3 top-[50%] flex items-center justify-center text-white font-bold text-3xl'>
                <span>{'<'}</span>
            </button>
            <button 
                onClick={()=>incrementCardIndex(1)}
                className='z-[9] w-10 h-10 rounded-full absolute right-3 top-[50%] flex items-center justify-center text-white font-bold text-3xl bg-primary-light'>
                <span>{'>'}</span>
            </button>
            <div className='w-[300px] lg:w-[1200px] mx-auto' >
                <div className='flex' style={translateXClass}>
                    {roomTypesMap[3]}
                    {roomTypesMap[4]}
                    {roomTypesMap[5]}
                    {roomTypesMap}
                    {roomTypesMap[0]}
                    {roomTypesMap[1]}
                    {roomTypesMap[2]}
                </div>
            </div>
        </div>    
        <div className=''>
            <button className='translate-y-[-20px] px-8 py-3 text-2xl font-bold rounded-full bg-primary text-accent'>Book Now</button>
        </div>
    </section>
  )
}
