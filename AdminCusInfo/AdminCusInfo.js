import MyBar from './MyBar';
import React, { useStyles, useRef, useState } from 'react'
import ProPic from './ProPic';
import InfoCus from './InfoCus';



const AdminCusInfo = () => {
  const [dialogs, setdialogs] = useState(false);

  return (
    <div className="bg">
        <MyBar/>
        <ProPic/>
        <InfoCus/>
        
    </div>
      
    

  );
}

export default AdminCusInfo;
