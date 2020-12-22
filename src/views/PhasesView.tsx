import React, { useState } from 'react';
import { useGetPhases } from '../api/hooks/use-queries'
import { Layout, Row, Col, Card, Skeleton, Typography } from 'antd'
import "./styles/PhasesView.css"

function PhasesView() {
  const { phases, loading } = useGetPhases()
  const { Title } = Typography

  const columns: any = [
    {
      title: 'Phase',
      dataIndex: 'phase',
      width: '16.66%'
    },
    {
      title: 'Candidates',
      dataIndex: 'candidates',
      width: '16.66%'
    }
  ]

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