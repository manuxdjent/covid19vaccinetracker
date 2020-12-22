import React from 'react';
import { Row, Col, Typography, Layout, Menu } from 'antd'
import { Link } from 'react-router-dom';
import { QuestionCircleOutlined } from '@ant-design/icons';

function MenuHeader() {
    const { Title } = Typography
    const { Header } = Layout

    return (
        <Header className="header">
            <Row justify="space-between">
                <Col style={{ display: 'flex', alignItems: 'center' }}>
                    <Title level={2} className="MenuHeaderTitle">
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
