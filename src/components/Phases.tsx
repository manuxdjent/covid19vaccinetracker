import React from 'react';
import { useGetPhases } from '../api/hooks/use-queries'
import { Row, Col, Card, Typography } from 'antd'
import { LineChartOutlined } from '@ant-design/icons'
import "./styles/Phases.css"
import CountUp from 'react-countup';
import { count } from 'console';

function Phases() {
  const { phases } = useGetPhases()
  const { Title, Text } = Typography

  return (
    <>
      <Row>
        <Col>
          <Title level={2} className="title">
          <LineChartOutlined />
            Phases candidates
          </Title>        
        </Col>
      </Row>
      <Row>
        { phases?.map((phase) => (
          <Col key={`${phase.name}col`} xs={24} md={12} lg={4} >
              <Card title size="small" key={`${phase.name}card`} className={`phaseCard ${phase.cssClass}`} >
                <CountUp end={Number(phase.candidates)} delay={0} duration={3}>
                  {({countUpRef}) => (
                    <h1 ref={countUpRef}></h1>
                    )}
                </CountUp>
                {/* <Title>{ phase.candidates }</Title> */}
                <Text type="secondary">{ phase.name }</Text>
              </Card>
          </Col>
        )) }
      </Row>
    </>
  );
}

export default Phases;