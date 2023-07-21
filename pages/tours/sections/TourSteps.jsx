import React, {useRef, useState, useEffect} from 'react'

import step1 from '../../../assets/step1-img.png'



export default function TourSteps() {
    
    const triangleContainer = useRef(null)
    const [height, setHeight] = useState(0)
    useEffect( ()=>{
        setHeight(triangleContainer.current.clientHeight/2)
        console.log(height)
    })

    return (
    <section ref={triangleContainer} className='bg-primary relative px-[5%] lg:pl-[5%] pt-10 lg:pt-16 pb-10'>
            {/* <div className={`absolute hidden lg:block bottom-0 left-0 h-1/2 w-[0px] border-l-[10vw] border-l-pink-400 border-t-[600px] 
            border-t-transparent`}
            ></div> */}
            <div className={`absolute hidden lg:block bottom-0 left-0 h-1/2 w-[0px] 
            border-l-[25vw] border-l-offwhite 
            border-t-transparent`} style={{borderTopWidth: `${height}px`}} onClick={()=>{
                setHeight(triangleContainer.current.clientHeight/2);
                }}></div>
            <div>
                <p className="text-2xl font-bold tracking-[0.2rem] text-accent lg:text-3xl">HOW TO GET STARTED?</p>
                <p className='text-xl text-white lg:text-2xl '>Folow these 3 easy steps. </p>
            </div>
            <ul className='grid pt-5 text-white gap-y-5'>
                <li className='grid w-full col-span-3 lg:grid-cols-3'>
                    <div className='grid content-center lg:col-span-1 justify-items-center'>
                        <p className='text-3xl font-bold lg:text-5xl text-accent'>1</p>
                        <p className='mt-2 text-2xl font-bold lg:text-3xl'>FILL-UP FORM</p>
                        <p className='mt-3 text-center'> Every tour package is customized, so we’d like to know more about you and you group. Here, you may also fill-up any requests for your trip.</p>
                        <button className='px-4 py-2 mt-3 bg-red-600 rounded-md'>GET A FREE QUOTATION</button>

                    </div>
                    <div className='col-span-3 lg:col-span-2'>
                        <img className='object-cover w-full max-h-[370px]' src={step1} alt="step1" />
                    </div>
                </li>
                <li className='grid w-full col-span-3 lg:grid-cols-2'>
                    <div className='grid content-center lg:col-span-1 justify-items-end'>
                        <div className='grid lg:w-[66%] justify-items-center'>
                            <p className='text-3xl font-bold lg:text-5xl text-accent'>2</p>
                            <p className='mt-2 text-2xl font-bold lg:text-3xl'>REVIEW QUOTATION</p>
                            <p className='mt-3 text-center'> Every tour package is customized, so we’d like to know more about you and you group. Here, you may also fill-up any requests for your trip.</p>
                            <button className='px-4 py-2 mt-3 bg-red-600 rounded-md'>GET A FREE QUOTATION</button>
                        </div>

                    </div>
                    <div className='col-span-3 lg:col-span-1'>
                        <img className='object-cover h-[370px]' src={step1} alt="step1" />
                    </div>
                </li>
                <li className='grid w-full col-span-3 lg:grid-cols-3'>
                    <div className='grid content-center lg:col-span-2 justify-items-end'>
                        <div className='grid lg:w-1/2 justify-items-center'>
                            <p className='text-3xl font-bold lg:text-5xl text-accent'>3</p>
                            <p className='mt-2 text-2xl font-bold lg:text-3xl'>FINALIZE</p>
                            <p className='mt-3 text-center'> Every tour package is customized, so we’d like to know more about you and you group. Here, you may also fill-up any requests for your trip.</p>
                            <button className='px-4 py-2 mt-3 bg-red-600 rounded-md'>GET A FREE QUOTATION</button>
                        </div>

                    </div>
                    <div className='col-span-3 lg:col-span-1'>
                        <img className='object-cover h-[370px]' src={step1} alt="step1" />
                    </div>
                </li>
            </ul>
        </section>
    )
}
