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
            <div className="car_AdminBookinfo">
                <text className='text_AdminBookinfo'>รุ่นรถ</text> 
                <input className='Input_AdminBookinfo' type="text"/>
                    
            </div>
            <div className="color_AdminBookinfo">
                <text className='text_AdminBookinfo'>สีรถ</text>
                    <input className='Input_AdminBookinfo' type="text"/>
            </div>
            <div className="kilo_AdminBookinfo">
                <text className='text_AdminBookinfo'>ระยะทางรวม</text>
                    <input className='Input_AdminBookinfo' type="text"/>
            </div>
            <div className="time_AdminBookinfo">
                <text className='text_AdminBookinfo'>ระยะเวลา</text>
                    <input className='Input_AdminBookinfo' type="text"/>
            </div>
            <div className="bill_AdminBookinfo">
                <text className='text_AdminBookinfo'>ค่าบริการรายเดือน</text>
                    <input className='Input_AdminBookinfo' type="text"/>
            </div>
            <div className="center_AdminBookinfo">
                <text className='text_AdminBookinfo'>ศูนย์ที่เลือกรับรถ</text>
                    <input className='Input_AdminBookinfo' type="text"/>
            </div>
            
            {/* <div className="ButtonRow_AdminBookinfo">
                <button className='Button_AdminBookinfo' onClick={handleClick}>ยืนยัน</button>
                <button className='Button_AdminBookinfo' onClick={handleClick}>ยกเลิก</button>

            </div> */}
        </div>
  
  )
}

export default TextIn