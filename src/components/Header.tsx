import React from 'react';
import { Row, Col, Typography, Layout } from 'antd'
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

function MenuHeader() {
    const { Title } = Typography
    const { Header } = Layout
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 480px)'
      })

    return (
        <Header className="header">
            <Row>
                <Col>
                    <Title level={isDesktopOrLaptop ? 2 : 4} className="MenuHeaderTitle">
                        <Link to="/">
                            <span>COVID-19 </span>
                            <span>VaccineTracker</span> 
                        </Link>
                    </Title>
                </Col>
            </Row>
        </Header>
    );
}

export default MenuHeader;
