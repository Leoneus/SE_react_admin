import React, { useState, useRef, useMemo } from 'react'
//import { Dialog } from 'primereact/dialog'
//import { Button } from 'primereact/button'
import './InfoCus.css'
import img from './nisit.jpg'
import ImageUpload from './imageupload';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

function InfoCus() {
    const [dialogs, setdialogs] = useState(false);
    const [data, setdata] = useState(null);
    const [print, setprint] = useState(false);

    const [selects, setselects] = useState();

    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedSubDistrict, setSelectedSubDistrict] = useState('');

    const [province, setProvince] = useState('');
    const [district, setDistrict] = useState('');
    const [subDistrict, setSubDistrict] = useState('');

    const [postalCode, setPostalCode] = useState('');

    const handleClick = () => {
        console.log('แก้ไขข้อมูล!!!')
    }

    const renderDropdown = (placeholder, items, itemSelect) => {
        const dropdownItems = items || [];

        const selectFunction = (item) => {
            switch (placeholder) {
                case 'กรุณาเลือกอำเภอ':
                    return findSubDistrict(item);
                case 'กรุณาเลือกเขต':
                    return setSelectedSubDistrict(item.name_th)
                default:
                    return findDistrict(item)
            }
        }

        return (
            <DropdownButton
                id="dropdown-basic-button"
                title={itemSelect || placeholder}
                className="dropdown-test my-dropdown-button"
                style={{ marginRight: 80 }}
            >
                <ScrollItem>
                    {dropdownItems.map(item => (
                        <Dropdown.Item
                            key={item.id}
                            onClick={() => selectFunction(item)}
                            style={{
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            {item.name_th}
                        </Dropdown.Item>
                    ))}
                </ScrollItem>

            </DropdownButton>

        );
    }
    const findDistrict = (selectedProvince) => {
        setSelectedProvince(selectedProvince.name_th)
        const filteredArray = province.filter((obj) => obj.id === selectedProvince.id);
        setDistrict(filteredArray[0].amphure);
        if (selectedDistrict !== '') {
            setSelectedDistrict('');
            setSelectedSubDistrict('');
        }
    }
    const findSubDistrict = (selectedDistrict) => {
        setSelectedDistrict(selectedDistrict.name_th)
        const filteredArray = district.filter((obj) => obj.id === selectedDistrict.id);
        setSubDistrict(filteredArray[0].tambon);
        if (selectedSubDistrict !== '') {
            setSelectedSubDistrict('')
        }
    }

    const fetchProvince = async () => {
        try {
            const response = await fetch("https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json");
            const jsonData = await response.json();
            setProvince(jsonData);
        } catch (err) {
            console.log(err)
        }
    }
    useMemo(() => {
        fetchProvince();
    }, []);

    return (
        <div className="InfoCus_Page">
            <div className="layer1_InfoCus_AdminEditCusinfo">
                {/* <text className='head_propic_AdminCusinfo'>ข้อมูลส่วนตัว</text> */}
                <div className="Info_img_AdminEditCusinfo">
                    <div className="div_Infopic_AdminEditCusinfo">
                        <ImageUpload />
                        <ImageUpload />
                        <ImageUpload />
                    </div>
                </div>

            </div>

            <text className="text1_InfoCus">ข้อมูลส่วนตัว</text>
            <div className="layer2_InfoCus_AdminEditCusinfo">

                {/* <text className='text_InfoCus_AdminCusinfo'>ศูนย์ที่เลือกรับรถ</text> */}
                <div className="layer2_InfoCus_row1_AdminEditCusinfo">
                    <select className='Drop1_InfoCus_AdminEditCusinfo' value={selects} onChange={e => setselects(e.target.value)}>
                        <option>นาย</option>
                        <option>นาง</option>
                        <option>นางสาว</option>

                    </select>
                    {/* <input className='Input1_InfoCus_AdminEditCusinfo' type="text"/> */}
                    <input className='Input2_InfoCus_AdminEditCusinfo' type="text" placeholder='ชื่อ' />
                    <input className='Input3_InfoCus_AdminEditCusinfo' type="text" placeholder='นามสกุล' />
                </div>
                <div className='layer2_InfoCus_row2_AdminEditCusinfo'>
                    <select className='Drop1_InfoCus_AdminEditCusinfo' value={selects} onChange={e => setselects(e.target.value)}>
                        <option>ไทย</option>
                        <option>ลาว</option>
                        <option>กัมพูชา</option>
                        <option>สิงคโปร์</option>
                        <option>จีน</option>
                        <option>อินโดนีเซีย</option>
                        <option>อื่นๆ</option>

                    </select>
                    <input className='Input2_InfoCus_AdminEditCusinfo' type="text" placeholder='เลขบัตรประชาชน'/>
                    <input className='Input3_InfoCus_AdminEditCusinfo' type="text" placeholder='เบอร์โทรศัพท์'/>
                </div>
                <div className='layer2_InfoCus_row3_AdminEditCusinfo'>
                    <input className='Input1_InfoCus_AdminEditCusinfo' type="text" placeholder='วันเกิด'/>
                    <select className='Drop1_InfoCus_AdminEditCusinfo' value={selects} placeholder='สถานภาพสมรส' onChange={e => setselects(e.target.value)}>
                        <option>โสด</option>
                        <option>สมรส</option>
                        <option>อย่าร้าง</option>


                    </select>
                    <input className='Input3_InfoCus_AdminEditCusinfo' type="text" placeholder='อีเมล'/>
                </div>
                <div className='layer2_InfoCus_row4_AdminEditCusinfo'>
                    <input className='Input1_InfoCus_AdminEditCusinfo' type="text" placeholder='หมายเลขใบขับขี่'/>
                    {/* <input className='Input2_InfoCus_AdminCusinfo' type="text"/>
                    <input className='Input3_InfoCus_AdminCusinfo' type="text"/> */}
                </div>
                <div className='layer2_InfoCus_row5_AdminEditCusinfo'>
                    <textarea className='Input1_InfoCus_AdminEditCusinfo' type="text" placeholder='ที่อยู่'></textarea>
                    {/* <input className='Input2_InfoCus_AdminCusinfo' type="text"/>
                    <input className='Input3_InfoCus_AdminCusinfo' type="text"/> */}
                </div>
                <DropdownContainer>
                    {renderDropdown('กรุณาเลือกจังหวัด', province, selectedProvince)}
                    {renderDropdown('กรุณาเลือกอำเภอ', district, selectedDistrict)}
                    {renderDropdown('กรุณาเลือกเขต', subDistrict, selectedSubDistrict)}
                    <input type="text" value={postalCode} onChange={(event) => setPostalCode(event.target.value)} placeholder='รหัสไปรษณีย์'/>
                </DropdownContainer>


            </div>

            <text className='text2_InfoCus'>ข้อมูลบริษัท</text>
            <div className='layer3_InfoCus_AdminEditCusinfo'>
                <div className='layer3_InfoCus_row1_AdminEditCusinfo'>
                    <input className='Input4_InfoCus_AdminEditCusinfo' type="text" placeholder='ชื่อบริษัท/ร้านค้า'/>
                    {/* <input className='Input5_InfoCus_AdminEditCusinfo' type="text" /> */}
                    <select className='Drop1_InfoCus_AdminEditCusinfo' value={selects} placeholder='' onChange={e => setselects(e.target.value)}>
                        <option>ธุรกิจแบบบุคคลธรรมดา</option>
                        <option>ธุรกิจแบบนิติบุคคล</option>


                    </select>
                </div>
                <div className='layer3_InfoCus_row2_AdminEditCusinfo'>
                    <input className='Input4_InfoCus_AdminEditCusinfo' type="text" placeholder='อีเมลบริษัท'/>
                    <input className='Input5_InfoCus_AdminEditCusinfo' type="text" placeholder='หมายเลขโทรศัพท์บริษัท'/>
                </div>
                <div className='layer3_InfoCus_row3_AdminEditCusinfo'>
                    <input className='Input4_InfoCus_AdminEditCusinfo' type="text" placeholder='รายได้ต่อเดือน'/>
                    {/* <input className='Input5_InfoCus_AdminCusinfo' type="text"/> */}
                </div>

            </div>
            <text className='text3_InfoCus'>เอกสารประกอบ</text>
            <div className='layer4_InfoCus_AdminEditCusinfo'>
                <div className='layer4_InfoCus_row1_AdminEditCusinfo'>
                    <div className="div_Infopic_AdminEditCusinfo">
                        <ImageUpload />
                        <ImageUpload />

                    </div>
                </div>
                <div className="Button_edit_AdminEditCusinfo">
                    <button className='Button1_edit_AdminEditCusinfo' onClick={handleClick}>ยืนยัน</button>
                    <button className='Button2_edit_AdminEditCusinfo' onClick={handleClick}>ยกเลิก</button>
                </div>

            </div>

        </div>

    )
}

export default InfoCus

const ScrollItem = styled.div`
    height: 200px;
    width: 190px;
    overflow-y: scroll;
`;

const DropdownContainer = styled.div`
    display: flex;
    margin: 50px 0 50px;
    align-items: center;
`;