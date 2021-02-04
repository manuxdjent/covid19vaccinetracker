import React from 'react';
import { Col, Row } from 'antd';
import { Typography }  from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

function About() {
    const { Paragraph, Link } = Typography;
    return (
        <>
            <Row>
                <Col>
                    <p className="developedBy">
                        <span>Developed by Manuel Fernández de Ginzo</span>
                        <Link href="https://github.com/manuxdjent/covid19vaccinetracker" target="_blank">
                            <GithubOutlined />
                        </Link>
                        <Link href="https://www.linkedin.com/in/manuelginzo/" target="_blank">
                            <LinkedinOutlined />
                        </Link>
                    </p>
                </Col>
            </Row>
        </>
    );
}

export default About