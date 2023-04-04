import React, { useState, useRef } from 'react'
//import { Dialog } from 'primereact/dialog'
//import { Button } from 'primereact/button'
import './ProPic.css'
import img from './nisit.jpg'
import Imageupload from './imageupload.js'

function ProPic() {
    const [dialogs, setdialogs] = useState(false);
    return (

        <div>
            <text className='head_Propic_AdminEditbook'>ข้อมูลการสั่งจอง</text>
            <div className="profile_img_propic_AdminEditbook">
                {/* <div>
                    <Imageupload/>
                </div> */}
                <div className="div_propic_AdminEditbook">

                    <Imageupload/>
                    {/* <img style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: 'cover',
                        objectFit: 'cover',
                        alignItems: 'center',
                        justifyItems: 'center',
                        
                    }}
                    src={img} 
                    alt=""
                    /> */}
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
            <div className="name_propic_AdminEditbook">
                <text>Supharoek Srisurat</text>
            </div>
        </div>
  
  )
}

export default ProPic