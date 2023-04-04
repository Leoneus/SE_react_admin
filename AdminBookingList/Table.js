import React, { useState, useRef } from 'react'
import data from './data.json'
import './Table.css'


function Table() {
  return (
    <body>

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
              {data.map(item => (
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
    // {/* <div>
    //     <h1>555555</h1>
    // </div>
    //  */}
    

    
    )
}

export default Table