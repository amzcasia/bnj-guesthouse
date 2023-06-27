import React, {useState, useEffect, useRef} from 'react'
import OfferCard from './SpecialsCard'
import special1 from '../../../assets/special-1.png'
import {offerCardContent} from '../../../helpers/offerCardContent.js'

export default function Specials() {
    const [translateX , setTranslateX] = useState({new:3})
    let isMoving = useRef(false)
    
    let translateXClass = ''

    useEffect( ()=>{
        console.log('invoke useEffect')
        translateXClass = `flex translate-x-[${translateX.new*(-400)}px]`
    },[])

    if( isMoving.current ){
        console.log("not animated")
        translateXClass = `flex lg:translate-x-[${translateX.new*(-400)}px] translate-x-[${translateX.new*(-300)}px]`
    }else{
        console.log("animated")
        translateXClass = `flex transition duration-300 lg:translate-x-[${translateX.new*(-400)}px] translate-x-[${translateX.new*(-300)}px]`
    }

    const MAX_INDEX = 8
    const MIN_INDEX = 1

    function incrementCardIndex(increment) {
        if (translateX.new + increment >= MAX_INDEX) {
            setTranslateX(prevTranslateX => ({ 
                ...prevTranslateX, 
                new: 8
            }));
            setTimeout(() => {
                isMoving.current = true;
                setTranslateX(prevTranslateX => ({ 
                    ...prevTranslateX, 
                    new: 2
                }));
            }, 301);
        } else if (translateX.new + increment <= MIN_INDEX) {
            setTranslateX(prevTranslateX => ({ 
                ...prevTranslateX, 
                new: 1
            }));
            setTimeout(() => {
                isMoving.current = true;
                setTranslateX(prevTranslateX => ({ 
                    ...prevTranslateX, 
                    new: 7
                }));
            }, 301);
        } else {
            isMoving.current = false;
            setTranslateX(prevTranslateX => ({ 
                ...prevTranslateX, 
                new: prevTranslateX.new + increment
            }));
        }
    }

    function incrementCardIndex2(increment) {
        translateXClass = `flex transition duration-300 translate-x-[${translateX.new*(-800)}px]`
    }
      
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
        <div className='relative w-full overflow-x-hidden'>
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
            <div className='w-[300px] lg:w-[1200px] mt-10 mx-auto'>
                <div className={translateXClass}>
                    {offerCardMap[3]}
                    {offerCardMap[4]}
                    {offerCardMap[5]}
                    {offerCardMap}
                    {offerCardMap[0]}
                    {offerCardMap[1]}
                    {offerCardMap[2]}
                </div> 
                <div className='hidden 
                    translate-x-[-300px] 
                    translate-x-[-400px]
                    translate-x-[-600px]
                    translate-x-[-800px]
                    translate-x-[-900px]
                    translate-x-[-1200px]
                    translate-x-[-1500px]
                    translate-x-[-1600px]
                    translate-x-[-1800px]
                    translate-x-[-2000px]
                    translate-x-[-2100px]
                    translate-x-[-2400px]
                    translate-x-[-2700px]
                    translate-x-[-2800px]
                    translate-x-[-3000px]
                    translate-x-[-3200px]
                    translate-x-[-3300px]
                    translate-x-[-3600px]
                    translate-x-[-3900px]
                    translate-x-[-4000px] 
                    translate-x-[0px]
                    translate-x-[300px]
                    translate-x-[400px]
                    translate-x-[600px]
                    translate-x-[800px]
                    translate-x-[900px]
                    translate-x-[1200px]
                    translate-x-[1500px]
                    translate-x-[1600px]
                    translate-x-[1800px]
                    translate-x-[2000px]
                    translate-x-[2100px]
                    translate-x-[2400px]
                    translate-x-[2700px]
                    translate-x-[2800px]
                    translate-x-[3000px]
                    translate-x-[3200px]
                    translate-x-[3300px]
                    translate-x-[3600px]
                    translate-x-[3900px]
                    translate-x-[4000px] 

                    lg:translate-x-[-300px] 
                    lg:translate-x-[-400px]
                    lg:translate-x-[-600px]
                    lg:translate-x-[-800px]
                    lg:translate-x-[-900px]
                    lg:translate-x-[-1200px]
                    lg:translate-x-[-1500px]
                    lg:translate-x-[-1600px]
                    lg:translate-x-[-1800px]
                    lg:translate-x-[-2000px]
                    lg:translate-x-[-2100px]
                    lg:translate-x-[-2400px]
                    lg:translate-x-[-2700px]
                    lg:translate-x-[-2800px]
                    lg:translate-x-[-3000px]
                    lg:translate-x-[-3200px]
                    lg:translate-x-[-3300px]
                    lg:translate-x-[-3600px]
                    lg:translate-x-[-3900px]
                    lg:translate-x-[-4000px] 
                    lg:translate-x-[0px]
                    lg:translate-x-[300px]
                    lg:translate-x-[400px]
                    lg:translate-x-[600px]
                    lg:translate-x-[800px]
                    lg:translate-x-[900px]
                    lg:translate-x-[1200px]
                    lg:translate-x-[1500px]
                    lg:translate-x-[1600px]
                    lg:translate-x-[1800px]
                    lg:translate-x-[2000px]
                    lg:translate-x-[2100px]
                    lg:translate-x-[2400px]
                    lg:translate-x-[2700px]
                    lg:translate-x-[2800px]
                    lg:translate-x-[3000px]
                    lg:translate-x-[3200px]
                    lg:translate-x-[3300px]
                    lg:translate-x-[3600px]
                    lg:translate-x-[3900px]
                    lg:translate-x-[4000px] 
                '></div>
            </div>
        </div>
    </section>
  )
}
