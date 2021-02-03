import React from 'react';
import { Col, Row } from 'antd';
import { Typography }  from 'antd';

function About() {
    const { Paragraph, Link } = Typography;
    return (
        <>
            <Row>
                <Col>
                    <Paragraph>
                        <blockquote>
                            <p className="developedBy">
                                Developed by Manuel Fernández de Ginzo
                                <span>•</span>
                                <Link href="https://github.com/manuxdjent/covid19vaccinetracker" target="_blank">
                                    GitHub
                                </Link>
                                <span>•</span>
                                <Link href="https://www.linkedin.com/in/manuelginzo/" target="_blank">
                                    LinkedIn
                                </Link>
                            </p>
                        </blockquote>
                    </Paragraph>
                </Col>
            </Row>
        </>
    );
}

export default About