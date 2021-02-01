import React from 'react';
import { useGetPhases } from '../api/hooks/use-queries'
import { Row, Col, Card, Typography } from 'antd'
import "./styles/Phases.css"

function Phases() {
  const { phases } = useGetPhases()
  const { Title } = Typography

  return (
    <>
      <Row>
        <Col>
          <Title className="title">Phases candidates</Title>        
        </Col>
      </Row>
      <Row>
        { phases?.map((phase) => (
          <Col key={`${phase.name}col`} xs={24} md={12} lg={8} >
              <Card key={`${phase.name}card`} title={phase.candidates} className={`phaseCard ${phase.cssClass}`} >
                { phase.name }
              </Card>
          </Col>
        )) }
      </Row>
    </>
  );
}

export default Phases;