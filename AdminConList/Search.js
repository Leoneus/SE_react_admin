import React, { useState, useRef } from 'react'
import './Search.css'
import data1 from './data.json'

function Search() {
  const [dialogs, setdialogs] = useState(false);
  const [data,setdata] = useState(null);
  const [print,setprint] = useState(false);

  const handleClick = () => {
    console.log('ยืนยัน!!!')
  }

  return (
    <div className="Layer1">
      <text className='head1_search_AdminConlist'>ข้อมูลการอนุมัติการจอง</text>
        <div className="search_search_AdminConlist">
      
            <text className="head2_search_AdminConlist">ชื่อ-นามสกุล / เลขบัตรประชาชน / เบอร์โทรศัพท์</text>
            <div className="box_but_search_AdminConlist">
              <input className='Input_search_AdminConlist' type="text"/>
              <button className='Button_search_AdminConlist' onClick={handleClick}>ยืนยัน</button>
            </div>
            
          
        </div>

      
      <text className='head3'>รายการขออนุมัติการจอง</text>

      <body className='Body_Search'>
        <div>
          <h1>Data Table</h1>
          <table>
            <thead>
              <tr>
                <th>เลขบัตรประชาชน</th>
                <th>ชื่อ</th>
                <th>นามสกุล</th>
                <th>หมายเลขโทรศัพท์</th>
                <th>รุ่นรถ</th>
                <th>รหัส</th>
              </tr>
            </thead>
            <tbody>
              {data1.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.lname}</td>
                  <td>{item.phone}</td>
                  <td>{item.model}</td>
                  <td><a href = "#" target="_blank">{item.code}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </body>

      
    </div>
  
  
  )
}

export default Search