import {
  Col,
  Row,
  Image,
  Typography,
  Avatar,
  Space,
  Button,
  Timeline,
} from "antd";
import React, { memo, useState } from "react";
import rocketLottie from "../../assets/lotties/rocket-logo.json";
import Words from "../../resources/words";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaSass,
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
import { DiAndroid } from "react-icons/di";
import LottieFile from "../common/lottie";
//-----
import ScrollAnim, { Parallax } from "rc-scroll-anim";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Roll from "react-reveal/Roll";
import { usePageContext } from "../contexts/page-context";

const { Text, Title } = Typography;

const socialMedias = [
  { icon: FaReact, color: "#096dd9" },
  { icon: FaNodeJs, color: "#a0d911" },
  { icon: FaHtml5, color: "#ff7a45" },
  { icon: FaCss3Alt, color: "#096dd9" },
  { icon: FaSass, color: "#ff85c0" },
  { icon: FaGitAlt, color: "#fa541c" },
  { icon: SiNextdotjs, color: "#87e8de" },
  { icon: SiPwa, color: "#722ed1" },
  { icon: SiXamarin, color: "#adc6ff" },
  { icon: SiJavascript, color: "#ffd666" },
  { icon: SiMicrosoftsqlserver, color: "#f5222d" },
  { icon: SiApple, color: "#fadb14" },
  { icon: DiAndroid, color: "#d3f261" },
];

const Skills = () => {
  const { darkMode } = usePageContext();

  const [showMore, setShowMore] = useState(false);

  return (
    <Row
      align="middle"
      justify="center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Col
        md={9}
        style={{
          justifyContent: "flex-start",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Parallax
          animation={{
            translateY: -60,
            translateX: -50,
            opacity: 1,
            ease: "linear",
            playScale: [0.2, 0.5],
            blur: "0px",
          }}
          style={{
            transform: "translateY(300px) translateX(-200px)",
            filter: "blur(1px)",
            transition: "all 0.1s linear",
          }}
          always={false}
        >
          <LottieFile animationData={rocketLottie} width={700} height={700} />
        </Parallax>
      </Col>
      <Col
        md={12}
        style={{
          justifyContent: "flex-start",
          display: "flex",
        }}
      >
        <Space direction="vertical" size={"large"}>
          <Title style={{ color: darkMode ? "white" : "#141414", margin: 0 }}>
            <Slide left duration={1000} cascade>
              {Words.skill_title}
            </Slide>
          </Title>
          <Text
            className="ParagraphSix"
            style={{
              color: darkMode ? "white" : "#141414",
              fontSize: 21,
            }}
          >
            <Roll bottom duration={1000} cascade>
              {Words.skill_text}
            </Roll>
          </Text>
          <Space direction="horizontal" size={"middle"}>
            <Zoom right cascade duration={1500}>
              <div>
                {socialMedias.map((Tq, inx) => (
                  <Tq.icon
                    fontSize={50}
                    color={Tq.color}
                    key={inx}
                    style={{ marginRight: 15 }}
                  />
                ))}
              </div>
            </Zoom>
          </Space>

          <Space size={"large"} direction="vertical">
            <Slide top cascade>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <Col style={{ marginBottom: 20 }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: darkMode ? "white" : "#141414",
                    }}
                    className="ParagraphThree"
                  >
                    ⚡ Develop highly interactive Front end / User Interfaces
                    for your web and mobile applications
                  </Text>
                </Col>
                <Col style={{ marginBottom: 20 }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: darkMode ? "white" : "#141414",
                    }}
                    className="ParagraphThree"
                  >
                    ⚡ Progressive Web Applications ( PWA ) in normal and SPA
                    Stacks
                  </Text>
                </Col>
                <Col style={{ marginBottom: 20 }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: darkMode ? "white" : "#141414",
                    }}
                    className="ParagraphThree"
                  >
                    ⚡ Integration of third party services such as Firebase/ AWS
                    / Digital Ocean
                  </Text>
                </Col>
                <Col style={{ marginBottom: 20 }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: darkMode ? "white" : "#141414",
                    }}
                    className="ParagraphThree"
                  >
                    ⚡ Supported of user acceptance testing and defect
                    remediation
                  </Text>
                </Col>
                <Col style={{ marginBottom: 20 }}>
                  <Row>
                    <Col md={1}>
                      <Text
                        style={{
                          fontSize: 25,
                          color: darkMode ? "white" : "#141414",
                        }}
                      >
                        ⚡
                      </Text>
                    </Col>
                    <Col md={20}>
                      <Text
                        style={{
                          fontSize: 25,
                          color: darkMode ? "white" : "#141414",
                          textAlign: "center",
                        }}
                        className="ParagraphThree"
                      >
                        New software solutions by analyzing system performance
                        standards Analyzed systems flow, data usage, and work
                        processes
                      </Text>
                    </Col>
                  </Row>
                </Col>

                {showMore ? (
                  <>
                    <Slide top cascade>
                      <div>
                        <Col style={{ marginBottom: 20 }}>
                          <Row>
                            <Col md={1}>
                              <Text
                                style={{
                                  fontSize: 25,
                                  color: darkMode ? "white" : "#141414",
                                }}
                              >
                                ⚡
                              </Text>
                            </Col>
                            <Col md={20}>
                              <Text
                                style={{
                                  fontSize: 25,
                                  color: darkMode ? "white" : "#141414",
                                  textAlign: "center",
                                }}
                                className="ParagraphThree"
                              >
                                Created and updated websites with a focus on
                                creating an exceptional user experience AND
                                Utilized and implemented attractive, responsive,
                                and mobile-friendly website contexts and
                                elements.
                              </Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col style={{ marginBottom: 20 }}>
                          <Row>
                            <Col md={1}>
                              <Text
                                style={{
                                  fontSize: 25,
                                  color: darkMode ? "white" : "#141414",
                                }}
                              >
                                ⚡
                              </Text>
                            </Col>
                            <Col md={20}>
                              <Text
                                style={{
                                  fontSize: 25,
                                  color: darkMode ? "white" : "#141414",
                                  textAlign: "center",
                                }}
                                className="ParagraphThree"
                              >
                                Developed and maintained front-ends focused on
                                user experience. • Wrote front-end code, and
                                back-end code, integrated with frameworks and
                                APIs, and utilized multiple CLI tools and
                                configuration GUIs.
                              </Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col style={{ marginBottom: 20 }}>
                          <Row>
                            <Col md={1}>
                              <Text
                                style={{
                                  fontSize: 25,
                                  color: darkMode ? "white" : "#141414",
                                }}
                              >
                                ⚡
                              </Text>
                            </Col>
                            <Col md={20}>
                              <Text
                                style={{
                                  fontSize: 25,
                                  color: darkMode ? "white" : "#141414",
                                  textAlign: "center",
                                }}
                                className="ParagraphThree"
                              >
                                Designed software artifacts based on
                                requirements, solution architecture, application
                                architecture, and development standards
                              </Text>
                            </Col>
                            <Col
                              md={24}
                              className="center"
                              style={{ marginTop: 20, textAlign: "center" }}
                            >
                              <Text
                                style={{
                                  fontSize: 25,
                                  color: darkMode ? "#FC4F4F" : "#141414",
                                  cursor: "pointer",
                                }}
                                className="ParagraphThree glowRed"
                                onClick={() => setShowMore(false)}
                              >
                                Show Less ...
                              </Text>
                            </Col>
                          </Row>
                        </Col>
                      </div>
                    </Slide>
                  </>
                ) : (
                  <Col
                    md={24}
                    className="center"
                    style={{ textAlign: "center" }}
                  >
                    <Text
                      style={{
                        fontSize: 25,
                        color: darkMode ? "#7FB5FF" : "#141414",
                        cursor: "pointer",
                      }}
                      className="ParagraphThree glowBlue"
                      onClick={() => setShowMore(true)}
                    >
                      Show More ...
                    </Text>
                  </Col>
                )}
              </div>
            </Slide>
          </Space>
        </Space>
      </Col>
    </Row>
  );
};

export default Skills;
