import {React, useEffect, useState} from 'react'
import DatePickerContainer from './components/DatePickerContainer';
import GuestNumber from './components/GuestNumber';
import discountIMG from '../../assets/discount.png'
import RoomTypeCard from './components/RoomTypeCard';


export default function BookingEngine() {
  const [availableRooms, setAvailableRooms] = useState([])

  const availableRoomsMap = availableRooms.map( (room,index)=> {
    return(
      <RoomTypeCard key={room.id} roomType={room.id} />
      
    )
  })

  useEffect( ()=>{
    const url = 'https://app-apac.thebookingbutton.com/api/v1/properties/%20BJGuesthous%20andToursdirect/rates.json?start_date=2023-09-01&end_date=2023-10-01'

    // async function fetchData() {
      fetch(url)
        .then(response => response.json())
        .then(data => {
            // Process the fetched data
            console.log(data[0].room_types);
            setAvailableRooms(data[0].room_types)
        })
        .catch(error => {
            // Handle errors
            console.error('Error fetching data:', error);
        });
      // }
  },[])

  return (
    <main>
      <div className='pt-10'>
        <h1 className=''></h1>
        <div className='grid lg:grid-cols-3 lg:gap-x-4 px-[5%]'>
          <DatePickerContainer />
          <GuestNumber />
          <div className='flex items-center px-4 gap-x-2'>
            <img className='w-5 h-5' src={discountIMG} alt="discountIMG" />
            <p>Have a Promo Code?</p>
          </div>
        </div>
      </div>
      <div className=''>
          { true && availableRoomsMap}
      </div>
    </main>
  )
}
