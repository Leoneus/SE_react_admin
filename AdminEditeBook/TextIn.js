import React, { useState, useRef } from 'react'
//import { Dialog } from 'primereact/dialog'
//import { Button } from 'primereact/button'
import './TextIn.css'
import img from './nisit.jpg'

function TextIn() {
    const [dialogs, setdialogs] = useState(false);
    const [data,setdata] = useState(null);
    const [print,setprint] = useState(false);

    const handleClick = () => {
        console.log('ยืนยัน!!!')
    }
    return (

        <div>   
            <div className="car_AdminEditbook">
                <text className='text_AdminEditbook'>รุ่นรถ</text> 
                <input className='Input_AdminEditbook' type="text"/>
                    
            </div>
            <div className="color_AdminEditbook">
                <text className='text_AdminEditbook'>สีรถ</text>
                    <input className='Input_AdminEditbook' type="text"/>
            </div>
            <div className="kilo_AdminEditbook">
                <text className='text_AdminEditbook'>ระยะทางรวม</text>
                    <input className='Input_AdminEditbook' type="text"/>
            </div>
            <div className="time_AdminEditbook">
                <text className='text_AdminEditbook'>ระยะเวลา</text>
                    <input className='Input_AdminEditbook' type="text"/>
            </div>
            <div className="bill_AdminEditbook">
                <text className='text_AdminEditbook'>ค่าบริการรายเดือน</text>
                    <input className='Input_AdminEditbook' type="text"/>
            </div>
            <div className="center_AdminEditbook">
                <text className='text_AdminEditbook'>ศูนย์ที่เลือกรับรถ</text>
                    <input className='Input_AdminEditbook' type="text"/>
            </div>
            
            <div className="ButtonRow_AdminEditbook">
                <button className='Button_AdminEditbook' onClick={handleClick}>ยืนยัน</button>
                <button className='Button_AdminEditbook' onClick={handleClick}>ยกเลิก</button>

            </div>
        </div>
  
  )
}

export default TextIn