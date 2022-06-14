import React from "react";
import { Row, Col, Typography, Layout } from "antd";
import { Link } from "react-router-dom";
import "./header.css";
import { Grid } from "antd";
const { useBreakpoint } = Grid;

function Header() {
  const { Title } = Typography;
  const { Header } = Layout;
  const screens = useBreakpoint();
  const isMobile = screens.xs;

  return (
    <Header className="header">
      <Row>
        <Col>
          <Title level={isMobile ? 4 : 2} className="menu-header-title">
            <Link to="/">
              <span>COVID-19 </span>
              <span>VaccineTracker</span>
            </Link>
          </Title>
        </Col>
      </Row>
    </Header>
  );
}

export default Header;
