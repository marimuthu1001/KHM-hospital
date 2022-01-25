import React from 'react'
import Styles from '../Styles/ContactUs.module.css'
import { Card, Col, Row } from 'antd';
function ContactUs() {
    return (
        <div>
            <div className={Styles.title}>
                <h1>Contact</h1>
            </div>
            <div className="contact">
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                    <Col sm={{span:3}} md={{span:5}} lg={{span:8}} lg={{span:8}}>
                        <Card title="Card title" bordered={false}>
                        Card content
                        </Card>
                    </Col>
                    <Col sm={{span:3}} md={{span:5}} lg={{span:8}} lg={{span:8}}>
                        <Card title="Card title" bordered={false}>
                        Card content
                        </Card>
                    </Col>
                    <Col sm={{span:3}} md={{span:5}} lg={{span:8}}>
                        <Card title="Card title" bordered={false}>
                        Card content
                        </Card>
                    </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
