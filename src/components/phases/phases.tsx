import React from "react";
import { useGetPhases } from "../../api/hooks/use-queries";
import { Row, Col, Card, Typography, Skeleton } from "antd";
import { LineChartOutlined } from "@ant-design/icons";
import "./phases.css";
import CountUp from "react-countup";
import { Phase } from "../../models/common.model";

interface PhasesComponentProps {
  phaseClick: (phase: Phase) => void;
}

function Phases({ phaseClick }: PhasesComponentProps) {
  const { phases, loading } = useGetPhases();
  const { Title, Text } = Typography;

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
      <Row gutter={[0, 36]} justify="space-between">
        <Skeleton loading={loading} active round>
          {phases?.map((phase) => (
            <Col key={`${phase.name}col`} xs={11} md={7} lg={3}>
              <Card
                title
                size="small"
                hoverable
                key={`${phase.name}card`}
                className="phase-card"
                headStyle={{ backgroundColor: phase.color }}
                onClick={() => phaseClick(phase)}
              >
                <CountUp end={Number(phase.candidates)} delay={0} duration={3}>
                  {({ countUpRef }) => (
                    // eslint-disable-next-line jsx-a11y/heading-has-content
                    <h1 ref={countUpRef}></h1>
                  )}
                </CountUp>
                <Text type="secondary">{phase.name}</Text>
              </Card>
            </Col>
          ))}
        </Skeleton>
      </Row>
    </>
  );
}

export default Phases;
