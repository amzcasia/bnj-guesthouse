import {React, useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function DatePickerContainer() {
    const [datePickerVisible, setShowDatePickerVisible] = useState(false)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        console.log(endDate)
    }

    return (
        <div className='relative hover:cursor-pointer' >

            <div className='relative flex items-center h-12 px-4 border border-black rounded-md' onClick={()=>{setShowDatePickerVisible(!datePickerVisible)}}>
                <p className='absolute top-0 left-[10px] translate-y-[-50%] px-2 bg-white'>Select Dates</p>
                <p>zz{startDate.getDay}zz</p>
            </div>
            { datePickerVisible && 
            <div className='absolute left-0 p-2 bg-white border rounded-md top-16'>
                <DatePicker 
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline />
                
                <div className='grid grid-cols-2 gap-x-2'>
                    <button className='px-2 py-1 border-2 rounded-md border-accent text-accent-dark'>Reset</button>
                    <button className='px-2 py-1 rounded-md bg-accent' onClick={()=>{setShowDatePickerVisible(false)}}>Save</button>
                </div>
            </div>}
        </div>
        
    )
}
