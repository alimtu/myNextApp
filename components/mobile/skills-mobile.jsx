import { Col, Row, Typography, Space, Drawer, Divider } from "antd";
import React from "react";
import rocketLottie from "../../assets/lotties/rocket-logo.json";
import LottieFile from "../common/lottie";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiMicrosoftsqlserver,
  SiApple,
  SiPwa,
  SiXamarin,
} from "react-icons/si";
import Words from "../../resources/words";
import { DiAndroid } from "react-icons/di";
import { Parallax } from "rc-scroll-anim";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import { usePageContext } from "../contexts/page-context";
import { RiCloseCircleFill } from "react-icons/ri";
import { useState } from "react";
import okHand from "../../assets/images/ok.png";
import Image from "next/image";

const { Text, Title } = Typography;

const skillsArrayTexts = [
  "Created and updated websites with a focus on creating anexceptional user experience And Utilized and implemented attractive, responsive, and mobile-friendly website contexts and elements.",
  "Supported of user acceptance testing and defect remediation",
  "New software solutions by analyzing system performance standards Analyzed systems flow, data usage, and work processes",
  "Developed and maintained front-ends focused on user experience. • Wrote front-end code, and back-end code, integrated with frameworks and APIs, and utilized multiple CLI tools and configuration GUIs.",
  "Designed software artifacts based on requirements, solution architecture,application architecture, and developmentstandards",
];

const SkillsMobile = () => {
  const { darkMode } = usePageContext();
  const [visible, setVisible] = useState(false);

  const socialMedias = [
    { icon: FaReact, color: "#096dd9" },
    { icon: FaNodeJs, color: "#a0d911" },
    { icon: SiNextdotjs, color: "#87e8de" },
    { icon: SiMicrosoftsqlserver, color: "#f5222d" },
    { icon: SiJavascript, color: darkMode ? "#ffd666" : "#fadb14" },
    { icon: SiApple, color: "#fadb14" },
    { icon: DiAndroid, color: "#d3f261" },
    { icon: FaHtml5, color: "#ff7a45" },
    { icon: FaCss3Alt, color: "#096dd9" },
    { icon: FaGitAlt, color: "#fa541c" },
    { icon: SiPwa, color: "#722ed1" },
    { icon: SiXamarin, color: "#adc6ff" },
  ];
  const showDrawer = (index) => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <Row justify="center" gutter={[0, 25]}>
      <Col
        xs={24}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          zIndex: 6,
        }}
      >
        <Parallax
          animation={{
            translateY: 10,
            translateX: 0,
            opacity: 1,
            ease: "linear",
            playScale: [0, 0.5],
            blur: "0px",
            duration: 4000,
          }}
          style={{
            transform: "translateY(200px) translateX(-100px)",
            filter: "blur(3px)",
          }}
        >
          <LottieFile animationData={rocketLottie} width={350} height={350} />
        </Parallax>
      </Col>
      <Col xs={24} className="center">
        <Space
          direction="vertical"
          size={"large"}
          align="center"
          className="center"
          style={{ maxWidth: "80%" }}
        >
          <Title style={{ color: darkMode ? "white" : "#141414", margin: 0 }}>
            <Slide left duration={1000} cascade>
              {Words.skill_title}
            </Slide>
          </Title>

          <Row
            justify="center"
            align="middle"
            gutter={[30, 20]}
            className="center"
          >
            <Bounce
              left
              cascade
              // delay={(inx + 1) * 50}
              duration={1500}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  marginLeft: 10,
                }}
              >
                {socialMedias.map((Tq, inx) => (
                  <Col
                    key={inx + 1}
                    className="center"
                    style={{ marginBottom: 25, marginRight: 10 }}
                  >
                    <Tq.icon fontSize={40} color={Tq.color} key={inx} />
                  </Col>
                ))}
              </div>
            </Bounce>
          </Row>

          <Zoom bottom cascade duration={2000}>
            <div>
              <Col xs={24} style={{ marginBottom: 15 }}>
                <Text
                  style={{
                    fontSize: 22,
                    color: darkMode ? "white" : "#141414",
                    textAlign: "center",
                  }}
                  className="ParagraphEight center"
                >
                  ⚡ Develop highly interactive FrontEnd & BackEnd for your web
                  and mobile applications
                </Text>
              </Col>
              <Col xs={24} style={{ marginBottom: 15 }}>
                <Text
                  style={{
                    fontSize: 22,
                    color: darkMode ? "white" : "#141414",
                    textAlign: "center",
                  }}
                  className="ParagraphEight center"
                >
                  ⚡ PWA in normal and SPA Stacks
                </Text>
              </Col>
              <Col xs={24}>
                <Text
                  style={{
                    fontSize: 22,
                    color: darkMode ? "white" : "#141414",
                    textAlign: "center",
                    maxWidth: "90%",
                  }}
                  className="ParagraphEight center"
                >
                  ⚡ Integration of TPS such as Firebase / AWS
                </Text>
              </Col>
              <Col xs={24} className="center" style={{ marginTop: 25 }}>
                <Title
                  level={4}
                  style={{
                    color: darkMode ? "#40DFEF" : "#4D77FF",
                    margin: 0,
                  }}
                  className="ParagraphThree glowBlue"
                  onClick={showDrawer}
                >
                  Show More ...
                </Title>
              </Col>
            </div>
          </Zoom>
        </Space>
      </Col>
      <Col xs={24}>
        <Drawer
          placement="right"
          width={"100%"}
          onClose={onClose}
          visible={visible}
          bodyStyle={{
            backgroundColor: "#001529",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
          closeIcon={
            <RiCloseCircleFill style={{ fontSize: 30, color: "red" }} />
          }
          headerStyle={{ backgroundColor: "#001529" }}
        >
          <Row className="center">
            <Col xs={24} style={{ marginBottom: 20 }}>
              <Row>
                {skillsArrayTexts.map((t, inx) => (
                  <Col xs={24} key={inx}>
                    <Row>
                      <Col xs={24} className="center" style={{}}>
                        <Text
                          style={{
                            fontSize: 25,
                            color: darkMode ? "white" : "#141414",
                            textDecoration: "underline",
                          }}
                          className="ParagraphSix"
                        >
                          {inx + 4}
                        </Text>
                      </Col>
                      <Col xs={24}>
                        <Text
                          style={{
                            fontSize: 22,
                            color: darkMode ? "white" : "#141414",
                            textAlign: "center",
                          }}
                          className="ParagraphThree"
                        >
                          {t}
                        </Text>
                      </Col>
                      <Divider
                        style={{ backgroundColor: "#40DFEF", minHeight: 5 }}
                      />
                    </Row>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Drawer>
      </Col>
      <Col xs={24} className="center" style={{ zIndex: 6 }}>
        <Image
          alt="picture"
          src={okHand}
          width={330}
          height={200}
          quality={100}
        />
      </Col>
    </Row>
  );
};

export default SkillsMobile;
