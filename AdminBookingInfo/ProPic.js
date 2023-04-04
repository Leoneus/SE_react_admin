import React, { useState, useRef } from 'react'
//import { Dialog } from 'primereact/dialog'
//import { Button } from 'primereact/button'
import './ProPic.css'
import img from './nisit.jpg'

function ProPic() {
    const [dialogs, setdialogs] = useState(false);
    const [data,setdata] = useState(null);
    const [print,setprint] = useState(false);

    const handleClick = () => {
        console.log('แก้ไขข้อมูล!!!')
    }
    return (

        <div className="layer1_AdminBookinfo">
            <text className='head_propic_AdminBookinfo'>ข้อมูลการสั่งจอง</text>
            <div className="profile_img_AdminBookinfo">
                <div className="div_AdminBookinfo">
                    <img style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: 'cover',
                        objectFit: 'cover',
                        alignItems: 'center',
                        justifyItems: 'center',
                        
                    }}
                    src={img} 
                    alt=""
                    />
                    {/* <Dialog
                        visible={this.state.dialog}
                        header={() => (
                            <p htmlFor="" className="text-2x1 font-semibold textColor">
                                Update Profile
                            </p>
                        )}
                        onHide={() => setdialog(false)}
                    >
                        <div className="confirmation-content flex flex-column align-items-center">
                            <div className="flex flex-column align-items-center mt-5 w-12">
                                <div className="flex justify-content-around w-12 mt-4">
                                    <Button label="Save" icon="pi pi-check"/>
                                </div>
                            </div>
                        </div>    
                    </Dialog> */}
                </div>
                {/* <button className='Button_AdminBookinfo' onClick={handleClick}>ยืนยัน</button> */}
            </div>
            <div className="name_AdminBookinfo">
                <text>Supharoek Srisurat</text>
            </div>
            <div className="Button_edit_AdminBookInfo">
                    <button className='Button1_edit_AdminCusinfo' onClick={handleClick}>แก้ไขข้อมูลส่วนตัว</button>
                    <button className='Button2_edit_AdminCusinfo' onClick={handleClick}>ตรวจสอบข้อมูลการสั่งจอง</button>
            </div>
        </div>
  
  )
}

export default ProPic