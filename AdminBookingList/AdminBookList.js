import MyBar from './MyBar';
import React, { useStyles, useRef, useState } from 'react'
import Search from './Search';
import Table from './Table';





const AdminBookList = () => {
  const [dialogs, setdialogs] = useState(false);

  return (
    <div>
        <MyBar/>
        <Search/>
        {/* <Table/> */}

        
        
    </div>
      
    

  );
}

export default AdminBookList;
