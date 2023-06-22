import React from 'react'
import faq from '../helpers/faq.js'
import house from '../assets/house.png'
import caret from '../assets/caret.png'

export default function FAQ() {
    const faqMap = faq.map( (question,index) =>{
        return(
            <div key={index} className='flex items-center justify-between py-4 gap-x-2 border-b-2 border-[#64330F]'>
                <div key={index+10} className='flex items-center gap-x-2 lg:gap-x-4  text-[#FFF5F5]'>
                    <img className='w-[40px] lg:w-[50px]' key={index+20} src={house} alt="house" />
                    <span className='text-lg lg:text-2xl' key={index+30}>{question.question}</span>
                    <span key={index+40} className='hidden'>{question.answer}</span>
                </div>
                <button className='w-[30px]' key={index+50}>
                    <img className='w-full' key={index+60} src={caret} alt="caret" />
                </button>
            </div>
        )
    })

    return (
    <section className='bg-primary px-[5%] lg:px-[7%] py-14 mt-16'>
        <h1 className='text-3xl lg:text-5xl text-accent'>Frequently Asked Questions</h1>
        <div className='pt-5 pb-10'>
            {faqMap}
        </div>
        <button className='px-8 py-3 text-2xl font-bold rounded-full lg:text-3xl text-primary bg-accent'>Read More</button>
    </section>
  )
}
