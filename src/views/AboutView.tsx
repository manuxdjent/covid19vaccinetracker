import React from 'react';
import { Col, Row } from 'antd';
import { Typography }  from 'antd';

function AboutView() {
    const { Paragraph, Link, Title } = Typography;
    return (
        <>
            <Row>
                <Col style={{ display: 'flex', alignItems: 'center' }}>
                    <Title className="title">About</Title>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Paragraph>
                        <blockquote>
                            COVID-19VaccineTracker uses an API that provides a big range of detailed information about multiple viruses. From COVID19 global data overviews to city/region specific mobility data, and data on the current outbreak of Influenza.
                        </blockquote>
                        <Link href="https://github.com/disease-sh/API" target="_blank">
                            Disease-sh API
                        </Link>
                    </Paragraph>
                </Col>
            </Row>
        </>
    );
}

export default AboutView