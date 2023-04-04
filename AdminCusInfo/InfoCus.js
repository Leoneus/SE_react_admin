import React, { useState, useRef } from 'react'
//import { Dialog } from 'primereact/dialog'
//import { Button } from 'primereact/button'
import './InfoCus.css'
import img from './nisit.jpg'

function InfoCus() {
    return (
        <div className="InfoCus_Page">
            <div className="layer1_InfoCus_AdminCusinfo">
                {/* <text className='head_propic_AdminCusinfo'>ข้อมูลส่วนตัว</text> */}
                <div className="profile_img_propic_AdminCusinfo">
                    <div className="div_propic_AdminCusinfo">
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
                </div>    

            </div>

            <text className="text1_InfoCus">ข้อมูลส่วนตัว</text>
            <div className="layer2_InfoCus_AdminCusinfo">
                
                {/* <text className='text_InfoCus_AdminCusinfo'>ศูนย์ที่เลือกรับรถ</text> */}
                <div className="layer2_InfoCus_row1_AdminCusinfo">
                    <input className='Input1_InfoCus_AdminCusinfo' type="text"/>
                    <input className='Input2_InfoCus_AdminCusinfo' type="text"/>
                    <input className='Input3_InfoCus_AdminCusinfo' type="text"/>
                </div>
                <div className='layer2_InfoCus_row2_AdminCusinfo'>
                    <input className='Input1_InfoCus_AdminCusinfo' type="text"/>
                    <input className='Input2_InfoCus_AdminCusinfo' type="text"/>
                    <input className='Input3_InfoCus_AdminCusinfo' type="text"/>
                </div>
                <div className='layer2_InfoCus_row3_AdminCusinfo'>
                    <input className='Input1_InfoCus_AdminCusinfo' type="text"/>
                    <input className='Input2_InfoCus_AdminCusinfo' type="text"/>
                    <input className='Input3_InfoCus_AdminCusinfo' type="text"/>
                </div>
                <div className='layer2_InfoCus_row4_AdminCusinfo'>
                    <input className='Input1_InfoCus_AdminCusinfo' type="text"/>
                    {/* <input className='Input2_InfoCus_AdminCusinfo' type="text"/>
                    <input className='Input3_InfoCus_AdminCusinfo' type="text"/> */}
                </div>
                <div className='layer2_InfoCus_row5_AdminCusinfo'>
                    <input className='Input1_InfoCus_AdminCusinfo' type="text"/>
                    {/* <input className='Input2_InfoCus_AdminCusinfo' type="text"/>
                    <input className='Input3_InfoCus_AdminCusinfo' type="text"/> */}
                </div>
                <div className='layer2_InfoCus_row6_AdminCusinfo'>
                    <input className='Input1_InfoCus_AdminCusinfo' type="text"/>
                    <input className='Input2_InfoCus_AdminCusinfo' type="text"/>
                    <input className='Input3_InfoCus_AdminCusinfo' type="text"/>
                </div>
                
                
            </div>

            <text className='text2_InfoCus'>ข้อมูลบริษัท</text>
            <div className='layer3_InfoCus_AdminCusinfo'>
                <div className='layer3_InfoCus_row1_AdminCusinfo'>
                    <input className='Input4_InfoCus_AdminCusinfo' type="text"/>
                    <input className='Input5_InfoCus_AdminCusinfo' type="text"/>
                </div>
                <div className='layer3_InfoCus_row2_AdminCusinfo'>
                    <input className='Input4_InfoCus_AdminCusinfo' type="text"/>
                    <input className='Input5_InfoCus_AdminCusinfo' type="text"/>
                </div>
                <div className='layer3_InfoCus_row3_AdminCusinfo'>
                    <input className='Input4_InfoCus_AdminCusinfo' type="text"/>
                    {/* <input className='Input5_InfoCus_AdminCusinfo' type="text"/> */}
                </div>
            </div>

        </div>
    
    )
  }
  
  export default InfoCus