import MyBar from './MyBar';
import React, { useStyles, useRef, useState } from 'react'
import ProPic from './ProPic';
import './ProPic.css';
import TextIn from './TextIn';


const AdminEditBook = () => {
  const [dialogs, setdialogs] = useState(false);

  return (
    <div>
        <MyBar/>
        <ProPic/>
        <TextIn/>
    </div>
      
    

  );
}

export default AdminEditBook;
