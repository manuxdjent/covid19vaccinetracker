import React from 'react';
import { Col, Row } from 'antd';
import { Typography }  from 'antd';

function About() {
    const { Paragraph, Link, Title } = Typography;
    return (
        <>
            <Row>
                <Col>
                    <Title>About</Title>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Paragraph>
                        <blockquote>
                            <p>
                            COVID-19VaccineTracker uses an API that provides a big range of detailed information about multiple viruses. From COVID19 global data overviews to city/region specific mobility data, and data on the current outbreak of Influenza.  
                            </p>
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
                            <Link href="https://github.com/disease-sh/API" target="_blank">
                                Disease-sh API
                            </Link>
                        </blockquote>
                    </Paragraph>
                </Col>
            </Row>
        </>
    );
}

export default About