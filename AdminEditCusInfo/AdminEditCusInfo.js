import MyBar from './MyBar';
import React, { useStyles, useRef, useState } from 'react'
import ProPic from './ProPic';
import InfoCus from './InfoCus';



const AdminEditCusInfo = () => {
  const [dialogs, setdialogs] = useState(false);

  return (
    <div className="bg">
        <MyBar/>
        <ProPic/>
        <InfoCus/>
        
    </div>
      
    

  );
}

export default AdminEditCusInfo;
