import React from 'react'
import Styles from '../Styles/Nav.module.css'
import Logo from '../Images/Logo.png'
import { Menu, Dropdown,Button } from 'antd'
import {HomeTwoTone,
    FolderOpenTwoTone,
    MedicineBoxTwoTone,
    PlusCircleTwoTone,
    FireTwoTone ,
    MailTwoTone,
    PhoneFilled,
    MailFilled,
    setTwoToneColor,
    } from '@ant-design/icons'
import Pic from '../Images/pic3.png'
function Nav() {
    const menu = (
        <Menu className={Styles.menucolor}>
          <Menu.Item key="0">
            <a href="https://www.antgroup.com">Covid Vaccine</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="https://www.aliyun.com">Covid Booster</a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="1">
            <a href="https://www.aliyun.com">Polio Vaccination</a>
          </Menu.Item>
        </Menu>
      );
    return (
        
        <div>
             <div className={Styles.title}>
                 <h1>KM Hospital</h1>
            </div>
             <div  className={Styles.logo}>
                 <img alt="Logo" src = {Logo} width={60} height={60} />
             </div>

             <div  className={Styles.vaccination}>
                <Dropdown  overlay={menu} placement="topCenter">
                    <Button><p>Vaccination</p></Button>
                </Dropdown>
             </div>
          

            <div className={Styles.contactHead}>
                <p style={{color:'black'}}><PhoneFilled  style= {{ fontSize: '20px',color: '#00cf23'  }} />&nbsp;+91 95009 77257</p>
                <p><a href="mailto:infokmh@gmail.com"><MailFilled style= {{ fontSize: '20px',color: '#00cf23'  }} />&nbsp;infokmh@gmail.com</a></p>
            </div>&nbsp;
                    <br/>          <br/>
          
                <div className={Styles.navbar}>
                  <div className={Styles.nav}>
                  <ul>
                    <li><HomeTwoTone  style= {{ fontSize: '20px',marginRight:'0px' }} />&nbsp;Home</li>
                    <li><FolderOpenTwoTone style= {{ fontSize: '20px',marginRight:'0px' }} />&nbsp;Abouts us</li>
                    <li><MedicineBoxTwoTone style= {{ fontSize: '20px',marginRight:'0px'  }} />&nbsp;Hospitals</li>
                    <li><PlusCircleTwoTone style= {{ fontSize: '20px',marginRight:'0px'  }} />&nbsp;Speaciality</li>
                    <li><FireTwoTone style= {{ fontSize: '20px',marginRight:'0px' }} />&nbsp;For Patients</li>
                    <li><MailTwoTone style= {{ fontSize: '20px',marginRight:'0px' }} />&nbsp;Contact us</li>
                </ul>
                  </div>
                </div>  
                <img alt="doc" src = {Pic} width="100%" height="500"/>  
                {setTwoToneColor('#00cf23')}
        </div>

        
    )
}

export default Nav
