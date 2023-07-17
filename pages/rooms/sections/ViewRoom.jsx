import React from 'react'

export default function ViewRoom({toggleShowRoom,videoLink}) {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen z-[11]'>
        <div className='absolute top-0 left-0 w-screen h-screen bg-black opacity-50' onClick={toggleShowRoom}></div>
        <div className='relative w-full lg:w-1/2 bg-white lg:translate-x-[-50%] translate-y-[-50%] lg:left-1/2 top-1/2 aspect-video'>
            <button className='absolute top-0 right-0 w-5 h-5 font-semibold bg-white opacity-100' onClick={toggleShowRoom}>x</button>
            {/* "https://www.youtube-nocookie.com/embed/FDdtZfCui40" */}
            <iframe width="100%" height="100%" src={videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  )
}
