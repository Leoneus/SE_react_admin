
import './App.css';
import React, { useStyles, useRef, useState } from 'react'
import AdminEditBook from './AdminEditeBook/AdminEditBook';
import AdminBookInfo from './AdminBookingInfo/AdminBookInfo';
import AdminBookList from './AdminBookingList/AdminBookList';
import AdminConList from './AdminConList/AdminConList';
import AdminCusInfo from './AdminCusInfo/AdminCusInfo';
import AdminEditCusInfo from './AdminEditCusInfo/AdminEditCusInfo';
import Table from './AdminBookingList/Table';
import MyBar from './AdminEditCusInfo/MyBar';

import {Route, Routes} from 'react-router-dom';

const App = () => {
  const [dialogs, setdialogs] = useState(false);

  return (
    <div className="bg">


      {/* <MyBar/> */}
      
      <AdminEditBook/>
      {/* <AdminCusInfo/> */}
      {/* <AdminEditCusInfo/> */}
      {/* <AdminBookInfo/> */}
      {/* <AdminBookList/> */}
      {/* <AdminConList/> */}
      {/* <Table/> */}
        

    </div>
      
    

  );
}

export default App;
