import React from 'react'
import Styles from '../Styles/Footer.module.css'
import { Row, Col } from 'antd';
import {WhatsAppOutlined,
    InstagramOutlined,
    FacebookOutlined} from '@ant-design/icons'
function Footer() {
    return (
        <div  >
            <div className={Styles.footer}>
              
              
                <div className={Styles.footerContent}>
                    <div sm={1}  md={6} lg={8}  className={Styles.footerTitle}>
                        <h4>All Rights Reserved &copy;2022 by KM Hospital and Pharmacy</h4>
                    </div>
               

                <div className={Styles.maintain}>
                    <h2>Maintanence</h2>
                    <p>Kavinbharathi_Ananth</p>
                </div>
  
                <Row className={Styles.design} gutter={[34, 18]}>
                <Col xs={24} md={6}/>
                    <Col xs={24} md={6}>
                        <div>
                            <h2 className={Styles.headDecoration}>UI/UX & FrontEnd</h2>
                            <div className={Styles.decoration}>  
                                <p>Harshiny_Arumugachamy</p>
                                <p>Keerthana_Ravikumar</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} md={6}>
                        <div>
                        <h2 className={Styles.headDecoration}>BackEnd & Database</h2>
                            <div className={Styles.decoration}>
                                <p>Marimuthu_Ponnusamy</p>
                                <p>Madhan_Selvarasu</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} md={6}/>
                        <Col sm={{ span: 5, offset: 0 }} md={{ span: 5, offset: 0 }} lg={{ span: 6, offset:0  }}> </Col>
                </Row>

                
<hr/>


                <Row  className={Styles.social}>
                    <Col sm={{span:2}} md={{span:8}} lg={{span:8}}><WhatsAppOutlined style={{fontSize: '30px' }} /></Col>
                    <Col sm={{span:2}} md={{span:8}} lg={{span:8}}><InstagramOutlined style={{fontSize: '30px' }} /></Col>
                    <Col sm={{span:2}} md={{span:8}} lg={{span:8}}><FacebookOutlined style={{fontSize: '30px' }} /></Col>
                </Row>
            </div>
        </div>
        </div>
    )
}

export default Footer


