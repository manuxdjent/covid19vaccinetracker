import React from 'react'
import { useGetPhases } from '../../api/hooks/use-queries'
import { Row, Col, Card, Typography } from 'antd'
import { LineChartOutlined } from '@ant-design/icons'
import "./phases.css"
import CountUp from 'react-countup'

function Phases() {
  const { phases } = useGetPhases()
  const { Title, Text } = Typography

  return (
    <>
      <Row className="sectionTitle">
        <Col>
          <Title level={2} className="title">
          <LineChartOutlined />
            Phases
          </Title>        
        </Col>
      </Row>
      <Row className="phasesRow">
        { phases?.map((phase) => (
          <Col key={`${phase.name}col`} xs={11} md={7} lg={3} >
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
  )
}

export default Phases