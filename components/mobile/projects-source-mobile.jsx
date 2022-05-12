import { Col, Row, Typography, Tabs } from "antd";
import React, { memo } from "react";
import { FcStackOfPhotos, FcDiploma2 } from "react-icons/fc";
import ScrollAnim from "rc-scroll-anim";
import OpenSourceSwiperMobile from "./inner-component/open-source-swiper-mobile";
import MyCVMobile from "./inner-component/my-cv-mobile";
import Fade from "react-reveal/Fade";
import { usePageContext } from "../contexts/page-context";

const { Title } = Typography;
const { TabPane } = Tabs;

const ProjectsSourseMobile = () => {
  const { darkMode } = usePageContext();

  return (
    <Row
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginBottom: 50,
      }}
    >
      <Col xs={24} className="center">
        <Title style={{ color: darkMode ? "white" : "#141414", margin: 0 }}>
          <Fade left duration={1000} cascade>
            Portfolio And CV
          </Fade>
        </Title>
      </Col>
      <Col
        xs={24}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          centered
          style={{
            color: darkMode ? "white" : "#141414",
            width: 340,
            paddingRight: 20,
            paddingLeft: 20,
          }}
          tabPosition={"top"}
          className="center ant-tabs-tab"
        >
          <TabPane
            tab={<FcDiploma2 fontSize={55} />}
            key={1}
            className="center"
          >
            <MyCVMobile darkMode={darkMode} />
          </TabPane>
          <TabPane
            tab={<FcStackOfPhotos fontSize={55} />}
            key={2}
            style={{ width: 340 }}
          >
            <OpenSourceSwiperMobile />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

export default memo(ProjectsSourseMobile);
