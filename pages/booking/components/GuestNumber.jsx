import {React, useState} from 'react'
import plusIMG from '../../../assets/plus.png'
import minusIMG from '../../../assets/minus.png'


export default function GuestNumber() {
    const [roomPickerVisible, setRoomPickerVisible] = useState(false)
    const [numRooms, setNumRooms] = useState([{adults:2, children:4, infants:5},{adults:2, children:4, infants:5}])

    const numRoomsMap = numRooms.map((room,index)=>{
        return(
            <RoomEntry adults={room.adults} children={room.children} infants={room.infants} key={index} index={index+1} />
        )
    })

    function RoomEntry({adults, children, infants, index}){
        return(
            <div className='grid grid-cols-4 gap-x-1'>
                <div className='flex items-center px-2'>
                    <p>Room {index}</p>
                </div>
                <div className='grid content-center grid-cols-3 text-center justify-items-center'>
                    <button className=''>
                        <img className='w-6 h-6 p-1 border border-black rounded-full' src={minusIMG} alt="plusIMG" />
                    </button>
                    <div className='w-8 py-1 border border-gray-300'>{adults}</div>
                    <button className=''>
                        <img className='w-6 h-6 p-1 border border-black rounded-full' src={plusIMG} alt="plusIMG" />
                    </button>
                </div>
                <div className='grid content-center grid-cols-3 text-center justify-items-center'>
                <button className=''>
                        <img className='w-6 h-6 p-1 border border-black rounded-full' src={minusIMG} alt="plusIMG" />
                    </button>
                    <div className='w-8 py-1 border border-gray-300'>{children}</div>
                    <button className=''>
                        <img className='w-6 h-6 p-1 border border-black rounded-full' src={plusIMG} alt="plusIMG" />
                    </button>
                </div>
                <div className='grid content-center grid-cols-3 text-center justify-items-center'>

                <button className=''>
                        <img className='w-6 h-6 p-1 border border-black rounded-full' src={minusIMG} alt="plusIMG" />
                    </button>
                    <div className='w-8 py-1 border border-gray-300'>{infants}</div>
                    <button className=''>
                        <img className='w-6 h-6 p-1 border border-black rounded-full' src={plusIMG} alt="plusIMG" />
                    </button>
                </div>
            </div>
        )
    }

    function GuestPicker (){
        return(
            <div className='absolute grid w-full p-1 bg-white border border-gray-400 rounded-md drop-shadow-xl top-16 gap-y-2'>
                <div className='grid gap-y-2'>
                    <div className='grid grid-cols-4 text-center'>
                        <div></div>
                        <div>Adults</div>
                        <div>Children</div>
                        <div>Infant</div>
                    </div>
                    {numRoomsMap}
                </div>
                <div className='grid grid-cols-2 gap-x-2'>
                    <button className='px-2 py-1 bg-white border-2 rounded-md border-accent'
                    onClick={()=>{
                        setNumRooms([...numRooms,{adults:2, children:4, infants:5}])
                            
                        
                    }}>
                        Add Room
                    </button>
                    <button className='px-2 py-1 border-2 rounded-md bg-accent border-accent' onClick={()=>{setRoomPickerVisible(false)}}>Done</button>
                </div>
                
            </div>
        )
    }

    return (
        <div className='relative'>
            <div className='flex items-center h-12 border border-black rounded-md hover:cursor-pointer' 
            onClick={()=>setRoomPickerVisible(!roomPickerVisible)}>
                
                <p className='absolute top-0 left-[10px] translate-y-[-50%] px-2 bg-white'>Select Room and Guests</p>
                <div className='relative px-4'>
                <p>2 Rooms, 4 Guests</p>
                
                </div>
            </div>
            { roomPickerVisible && <GuestPicker /> }
        </div>
    )
          



        
}
