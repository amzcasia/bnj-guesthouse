import React from 'react'

export default function ImageCarousel({arrayToMap,CardComponent}) {
    const cardsToMap = arrayToMap.map ( (card,index)=>{
        return(
            <CardComponent key={index}/>
        )
    })

  return (
    <div>
        {cardsToMap}
    </div>
  )
}
