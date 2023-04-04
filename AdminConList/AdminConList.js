import MyBar from './MyBar';
import React, { useStyles, useRef, useState } from 'react'
import Search from './Search';





const AdminConList = () => {
  const [dialogs, setdialogs] = useState(false);

  return (
    <div>
        <MyBar/>
        <Search/>
        
        
    </div>
      
    

  );
}

export default AdminConList;
