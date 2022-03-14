import React from 'react'

import Styles from '../Styles/Nav.module.css'
import { Layout, Menu, Dropdown,Row,Col } from 'antd';
import Logo from '../Images/Logo.png'

import {HomeTwoTone,
    FolderOpenTwoTone,
    MedicineBoxTwoTone,
    PlusCircleTwoTone,
    FireTwoTone ,
    MailTwoTone,
    PhoneFilled,
    MailFilled,
   
    } from '@ant-design/icons'

function Nav() {
  const menu = (
    <Menu>
          
          <a href="/vaccination">  <Menu.Item key="1">Covid Dose</Menu.Item></a>
          <a href="/vaccination">   <Menu.Item key="2">Covid Booster</Menu.Item></a>
            <a href="/vaccination"> <Menu.Item key="3">Polio Vaccine</Menu.Item></a>
          <a href="/vaccination">   <Menu.Item key="4">Chicken pox Vaccine</Menu.Item></a>
      </Menu>
  )
const patients = (
  <Menu>   
         <a href="secondopinion"> <Menu.Item key="1">Second Opinion</Menu.Item></a>
         <a target="_blank" href="https://pharmeasy.in/?isSEM=true&&utm_source=google&utm_medium=cpc&utm_campaign=GSNB_Medical_New_Structure_v2&utm_adgroup=Medicine&gclid=Cj0KCQjwz7uRBhDRARIsAFqjulk0SPgklXOQCo2AGcp4FKvYxVOrylTp9CLnbBh0yEgHDwhtsSNE0RoaAlElEALw_wcB"><Menu.Item key="2">Medicines</Menu.Item></a>
          <a href="symptoms"><Menu.Item key="3">Symptoms</Menu.Item></a>
          <a href="/bookappointment"> <Menu.Item key="4">Book an Appointment</Menu.Item></a>
          <a href="bmicalculator"><Menu.Item key="5">BMI Calculator</Menu.Item></a>
          
    </Menu>
    
  )
 
  const { Header} = Layout;
    return (
        
      <Layout>
        <p className={Styles.line}>...</p>
        <div className={Styles.head} >
            <Row gutters={[16,16]}>
              <Col md={{span:2}} lg={{span:1}}>
              <div className="logo">
              <img src={Logo} alt="Logo" widht={50} height={50}/>
            </div>
              </Col>
              <Col md={{span:6}} lg={{span:4}}>
              <h1>KM HOSPITAL</h1>
              </Col>
              <Col md={{span:8}} lg={{span:16}}></Col>
              <Col md={{span:5}} lg={{span:3}}>
              <div className={Styles.contactHead}>
                <p style={{color:'black'}}><PhoneFilled  style= {{ fontSize: '20px',color: '#1890ff'  }} />&nbsp;+91 95009 77257</p>
                <p><a href="mailto:infokmh@gmail.com"><MailFilled style= {{ fontSize: '20px',color: '#1890ff'  }} />&nbsp;infokmh@gmail.com</a></p>
               </div>
              </Col>
            </Row>
        </div>
        
       
        
      <Header className="header">
      <div className="menubar">
        <Menu style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
           
        }} theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
     <a href="/">
          <Menu.Item key="7"><HomeTwoTone style={{fontSize:20}}/>&nbsp;Home</Menu.Item>
     </a>
     <a href="/aboutus">
          <Menu.Item key="2"><FolderOpenTwoTone style={{fontSize:20}}/>&nbsp;About Us</Menu.Item>
     </a>
     <a href="/hospitals">
          <Menu.Item key="3"><MedicineBoxTwoTone style={{fontSize:20}}/>&nbsp;Hospitals</Menu.Item>
     </a>
     <a href="/specialities">
          <Menu.Item key="4"><PlusCircleTwoTone style={{fontSize:20}}/>&nbsp;Specialities</Menu.Item>
     </a>
     <a href="/contactus">
          <Menu.Item  key="6"> <MailTwoTone style={{fontSize:20}}/>&nbsp;Contact Us</Menu.Item>
     </a>
          <Dropdown  overlay={patients} placement="topCenter">
              <Menu.Item key="5"><FireTwoTone style={{fontSize:20}}/>&nbsp;For patients</Menu.Item>
          </Dropdown>
         
          <Menu.Item key="1">
          <Dropdown  overlay={menu} placement="topCenter">
                    <Menu.Item>Vaccination</Menu.Item>
          </Dropdown>
          </Menu.Item>
     
         
        </Menu>  </div>
      </Header>

          
        </Layout>

        
    )
}

export default Nav
