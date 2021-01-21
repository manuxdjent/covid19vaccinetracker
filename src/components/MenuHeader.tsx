import React, { useEffect, useState } from 'react';
import { Row, Col, Typography, Layout, Menu } from 'antd'
import { Link } from 'react-router-dom';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive'

function MenuHeader() {
    const { Title } = Typography
    const { Header } = Layout
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 480px)'
      })

    return (
        <Header className="header">
            <Row justify="space-between">
                <Col style={{ display: 'flex', alignItems: 'center' }}>
                    <Title level={isDesktopOrLaptop ? 2 : 4} className="MenuHeaderTitle">
                        <Link to="/">
                            <span>COVID-19</span>
                            <span>VaccineTracker</span> 
                        </Link>
                    </Title> 
                </Col>
                <Col>
                    <Link to="/about">
                        <QuestionCircleOutlined style={{ fontSize: '20px', color: 'white' }}/>
                    </Link>
                </Col>
            </Row>
        </Header>
    );
}

export default MenuHeader;
