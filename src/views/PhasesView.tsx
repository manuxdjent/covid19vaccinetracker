import React from 'react';
import { useGetPhases } from '../api/hooks/use-queries'
import { Row, Col, Card, Skeleton, Typography } from 'antd'
import "./styles/PhasesView.css"

function PhasesView() {
  const { phases, loading } = useGetPhases()
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
            <Skeleton loading={loading} active></Skeleton>
          </Card>
        </Col>
        )) }
      </Row>
    </>
  );
}

export default PhasesView;