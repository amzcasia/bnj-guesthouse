import React from 'react'
import instagram from '../assets/instagram.png'
import tiktok from '../assets/tik-tok.png'
import facebook from '../assets/facebook.png'
import bell from '../assets/bell.png'

export default function Connect() {
  return (
    <section className='bb px-[5%] grid lg:grid-cols-12 py-16 bg-gradient-to-t lg:from-[#F7BA0A] lg:via-15% lg:via-white lg:to-white'>
        <div className='grid content-center justify-items-center lg:col-span-3'>
            <div className='flex justify-center pb-4 gap-x-3'>
                <div><img src={instagram} alt="instagram" /></div>
                <div><img src={tiktok} alt="tiktok" /></div>
                <div><img src={facebook} alt="facebook" /></div>
            </div>
            <button className='px-8 py-2 min-w-[260px] text-lg font-bold rounded-full bg-accent text-primary lg:text-2xl'>LET'S CONNECT</button>
        </div>
        <div className='grid py-10 text-center lg:col-span-6 gap-y-2'>
            <h1 className='text-3xl font-bold lg:text-5xl text-primary'>B&J GUESTHOUSE</h1>
            <div className='flex justify-center'>
                <h2 className='text-xl text-[#64330F] font-semibold border-b-2 border-[#64330F] lg:text-3xl px-3'>Your stay made simple.</h2>
            </div>
            <div className='text-[#564D47] text-lg lg:text-xl'>
                <p>0409 Bantol Street, Dampas District, Tagbilaran City, Bohol</p>
                <p>Mobile # 0942-976-4512 /<br className='lg:hidden' /> 0956-956-0033</p>
                <p>Email: thebnjguesthouse@gmail.com</p>
                </div>
        </div>
        <div className='grid content-center justify-items-center lg:col-span-3'>
            <div className='pb-4'>
                <img src={bell} alt="bell" />
            </div>
            <div>
            <button className='px-8 py-2 min-w-[260px] text-lg font-bold rounded-full bg-accent text-primary lg:text-2xl'>BOOK NOW</button>
            </div>
        </div>
    </section>
  )
}
