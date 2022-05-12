import { Col, Divider, Row } from "antd";
import React from "react";
import zipLogo from "../../assets/lotties/zip-logo.json";
import zipGreenLogo from "../../assets/lotties/zip-green-logo.json";
import LottieFile from "./lottie";

const ProjectPopOver = () => {
  return (
    <Row style={{ position: "relative" }}>
      <Col md={24}>
        <Row style={{ minWidth: 150 }} className="center">
          <Col md={10} className="center">
            UI
          </Col>
          <Divider
            type="vertical"
            style={{
              backgroundColor: "#DAD5B5",
              position: "absolute",
              top: 0,
              height: 80,
            }}
          />
          <Col md={10} className="center">
            API
          </Col>
        </Row>
      </Col>
      <Divider
        style={{ backgroundColor: "#DAD5B5", height: "auto", margin: 0 }}
      />
      <Col md={24} style={{ position: "relative" }}>
        <Row style={{ minWidth: 150 }} className="center">
          <Col md={10} className="center">
            <LottieFile animationData={zipLogo} height={60} width={60} />
          </Col>
          {/* <Divider
            type="vertical"
            style={{
              backgroundColor: "black",
              height: "auto",
            }}
          /> */}
          <Col md={10} className="center">
            <LottieFile animationData={zipGreenLogo} height={60} width={60} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProjectPopOver;
