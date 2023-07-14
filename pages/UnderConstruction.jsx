import React from 'react'
import constructionIcon from '../assets/work-in-progress.png'

export default function UnderConstruction() {
  return (
    <div className='flex justify-center w-full h-[500px] text-3xl text-center gap-x-5 items-center'>
      <span>This page is under construction</span>
      <div className='pb-8'>
        <img src={constructionIcon} alt="construction Icon" />
      </div>
    </div>
  )
}
