import { Row, Col, Typography } from "antd";
import React from "react";
import Words from "../../resources/words";
import LottieFile from "../common/lottie";

import OpenSourceSwiper from "../common/open-source-swiper";
import MyCV from "../common/my-cv";
import { usePageContext } from "../contexts/page-context";
import ScrollAnim, { Parallax } from "rc-scroll-anim";

import Slide from "react-reveal/Slide";
import winning from "../../assets/lotties/winning.json";

const { Title } = Typography;

const ProjectsSourse = () => {
  const { darkMode } = usePageContext();

  return (
    <Row
      style={{
        padding: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginBottom: 100,
      }}
    >
      <Col md={24} className="center">
        <Title style={{ color: "white" }}>
          <Slide left duration={1000} cascade>
            {Words.projects_source_title}
          </Slide>
        </Title>
      </Col>
      <Col md={24} style={{ marginTop: "15px", zIndex: 3 }}>
        <Row align="middle">
          <Col
            md={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <OpenSourceSwiper darkMode={darkMode} />
          </Col>

          <Col md={8}>
            <LottieFile animationData={winning} width={400} />
          </Col>

          <Col
            md={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MyCV darkMode={darkMode} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProjectsSourse;
