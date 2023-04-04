import React, { useState, useRef } from 'react'
//import { Dialog } from 'primereact/dialog'
//import { Button } from 'primereact/button'
import './ProPic.css'
import img from './nisit.jpg'
import ImageUpload from './imageupload';

function ProPic() {
    const [dialogs, setdialogs] = useState(false);
    const [data,setdata] = useState(null);
    const [print,setprint] = useState(false);

    const handleClick = () => {
        console.log('แก้ไขข้อมูล!!!')
    }
    return (
        // dddd
        <div>
            <div className="layer1">
                <text className='head_propic_AdminEditCusinfo'>ข้อมูลส่วนตัว</text>
                <div className="profile_img_propic_AdminEditCusinfo">
                    <div className="div_propic_AdminEditCusinfo">
                        <ImageUpload/>
                    </div>
                    
                    
                </div>
                <div className="name_propic_AdminEditCusinfo">
                    <text>Supharoek Srisurat</text>
                </div>
                {/* <div className="Button_edit_AdminEditCusinfo">
                    <button className='Button1_edit_AdminEditCusinfo' onClick={handleClick}>แก้ไขข้อมูลส่วนตัว</button>
                    <button className='Button2_edit_AdminEditCusinfo' onClick={handleClick}>ตรวจสอบข้อมูลการสั่งจอง</button>
                </div> */}
            </div>

            <div className="layer2">
                <div className="Id_Pic_">

                </div>

            </div>
            
        </div>
            
  
  )
}

export default ProPic