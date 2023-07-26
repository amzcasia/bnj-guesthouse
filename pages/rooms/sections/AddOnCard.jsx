import React from 'react'
import addOnImage from '../../../assets/addOnImage.png'

export default function AddOnCard({addOnName}) {
  return (
    <li className='w-[260px] bg-cover h-[371px]' 
    style={{backgroundImage:`url('${addOnImage}')`}}
    >
        <p className='text-2xl font-semibold text-white'>{addOnName}</p>
    </li>
  )
}
