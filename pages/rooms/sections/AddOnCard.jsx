import React from 'react'
// import addOnImage from '../../../assets/addOnImage.png'
// import addOnImage2 from '../../../assets/addOnImage2.png'
// import addOnImage3 from '../../../assets/addOnImage3.png'
// import addOnImage4 from '../../../assets/addOnImage4.png'
// import addOnImage5 from '../../../assets/addOnImage5.png'


export default function AddOnCard({addOnName,image}) {
  return (
    <li className='w-[260px] bg-cover h-[371px] flex justify-center items-center' 
    style={{backgroundImage:`url('${image}')`}}
    >
        <p className='text-center text-2xl font-semibold text-white drop-shadow-[2px_2px_5px_rgba(0,0,0,0.75)]'>{addOnName}</p>
    </li>
  )
}
