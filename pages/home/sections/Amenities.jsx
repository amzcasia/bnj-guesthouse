import React from 'react'
import amenitiesImg from '../../../assets/amenities.png'
import flower from '../../../assets/flower.png'
import plant from '../../../assets/plant.png'
import amenities from  '../../../helpers/amenitiesList'  //assets/amenitiesList'

export default function Amenities() {

    const amenityMap = amenities.map( (amenity, index) =>{
        return(
            <div key={index} className='flex items-center py-3 lg:py-4 gap-x-2 lg:gap-x-3'>
                <img className='h-[40px] lg:h-[60px] lg:w-[60px]' key={index+20} src={amenity.image} alt="img1" />
                <p className='lg:text-xl' key={index+40}>{amenity.text}</p>
            </div>
        )
    })

    return (
    <section className='mt-20'>
        <div className='w-full lg:pl-[12%]'>
            <div className='bg-[#FFF1CC] grid lg:flex items-center py-5 px-[5%] lg:pl-0 lg:pr-16 justify-end gap-x-10 relative'>
                <div className='absolute top-0 left-0 translate-y-[-80%] translate-x-[-15%] hidden lg:block'>
                    <div className='flex place-items-end translate-x-[-80px] gap-x-2'>
                        <img className='w-[80px]' src={flower} alt="flower" />
                        <span className='text-3xl'>QUICK LOOK</span>
                    </div>
                    <h1 className='font-bold lg:text-6xl text-primary'>AMENITIES</h1>
                </div>
                <div className='relative mx-auto lg:hidden w-max'>
                    <img className=' h-[65px] absolute top-0 left-0 translate-x-[calc(-101%+20px)]' src={flower} alt="flower" />
                    <div className='pl-5'>
                        <p className='text-2xl'>QUICK LOOK</p>
                        <p className='text-3xl font-bold'>AMENITIES</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-1 gap-x-2'>
                    {amenityMap}
                </div>
                <div className='relative grid justify-items-center'>
                    <img className='lg:max-w-[600px]' src={amenitiesImg} alt="Amenities Image" />
                    <a href="#"><p className='pt-4 text-lg font-semibold underline lg:text-2xl'>Look at FULL List of Amenities</p></a>
                    <img className='absolute bottom-0 right-0 lg:translate-y-0 translate-y-[-50%] lg:translate-x-[20%] lg:h-[138px] aspect-square h-[80px]' src={plant} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}
