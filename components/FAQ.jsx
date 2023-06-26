import React, {useState, useRef} from 'react'
import faq from '../helpers/faq.js'
import house from '../assets/house.png'
import caret from '../assets/caret.png'

export default function FAQ() {
    function FAQCard ({question,answer}){
        const [showAnswer, setShowAnswer] = useState(false)

        function toggleShowAnswer(){
            setShowAnswer(!showAnswer)
        }
        
        const caretClass = 'w-[30px] h-auto transition duration-200' + ( showAnswer ? ' rotate-180' : '')

        const animateAccordion = showAnswer ? 'scale-y-100 max-h-[100px]' : 'scale-y-0 max-h-0'

        return(
            <div className='border-t-2 border-[#64330F]'>
                <div className='flex items-center justify-between py-4 '>
                    <div className='flex items-center gap-x-2 lg:gap-x-4  text-[#FFF5F5] w-full'>
                        <img className='w-[40px] lg:w-[50px]' src={house} alt="house" />
                        <span className='text-lg lg:text-2xl'>{question}</span>
                        <span className='hidden'>{question}</span>
                    </div>
                    <button onClick={toggleShowAnswer} className='w-[30px] grid justify-items-center'>
                        <img className={caretClass} src={caret} alt="caret" />
                    </button>
                </div>
                 <div className={`text-[#FFF5F5] text-base lg:text-2xl pl-[calc(40px+0.5rem)] lg:pl-[calc(50px+1rem)] font-extralight pb-4 transition-all duration-200 origin-top ${animateAccordion}`}>{answer}</div>
            </div>
        )
    }

    const faqMap = faq.map( (question,index) =>{
        return(
            <FAQCard key={index} question={question.question} answer={question.answer}/>
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
