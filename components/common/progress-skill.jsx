import React from "react";
import { Col, Row, Typography, Space, Alert, Progress } from "antd";
import logo from "../../assets/images/gold-medal.png";
import { BiHide } from "react-icons/bi";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import Roll from "react-reveal/Roll";
import { usePageContext } from "../contexts/page-context";
import Image from "next/image";

const { Title, Text } = Typography;

const ProgressSkill = () => {
  const { darkMode } = usePageContext();

  const skillsArray = [
    {
      percent: "95%",
      value: 95,
      text: "UI Service",
      oneColor: darkMode ? "#FFC837" : "#E40017",
      twoColor: darkMode ? "#FF8008" : "#EA2C62",
    },
    {
      percent: "90%",
      value: 90,
      text: "UX Service",
      oneColor: darkMode ? "#00c3ff" : "#FD5D5D",
      twoColor: darkMode ? "#ffff1c" : "#FF8080",
    },
    {
      percent: "85%",
      value: 85,
      text: "Database",
      oneColor: darkMode ? "#FDFC47" : "#CE49BF",
      twoColor: darkMode ? "#24FE41" : "#AB46D2",
    },
    {
      percent: "85%",
      value: 85,
      text: "Third Party Services",
      oneColor: darkMode ? "#f7ff00" : "#BF1363",
      twoColor: darkMode ? "#db36a4" : "#B91646",
    },
  ];

  return (
    <Col md={24} className="center">
      <Zoom left>
        <Space size={"large"} style={{ marginRight: 50 }}>
          <Rotate left delay={1000}>
            <Col>
              <Image alt="picture" src={logo} width={500} height={500} />
            </Col>
          </Rotate>
          <Col>
            <Space direction="vertical">
              <Col md={24} style={{ display: "flex" }}>
                <Title
                  style={{ color: darkMode ? "white" : "#141414", marign: 0 }}
                  className="ParagraphOne"
                >
                  Proficiency
                </Title>
              </Col>

              <Alert
                message={
                  <Text className="ParagraphThree">
                    These numbers are the result of tests and final estimate of
                    various projects and may change over time
                  </Text>
                }
                type="info"
                closeText={<BiHide fontSize={20} />}
                style={{ marginBottom: 20 }}
              />
              <Row align="middle">
                <Col>
                  <Space
                    style={{
                      marginLeft: "10px",
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                    direction="vertical"
                    size={"large"}
                  >
                    <Col>
                      <div key="a">
                        <Space size={"large"}>
                          {skillsArray.map((t, inx) => (
                            <Space
                              direction="vertical"
                              align="center"
                              size={"middle"}
                              key={inx}
                            >
                              <Roll
                                right
                                cascade
                                delay={
                                  inx === 0
                                    ? 500
                                    : inx === 1
                                    ? 700
                                    : inx === 2
                                    ? 900
                                    : 1100
                                }
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                  }}
                                >
                                  <Progress
                                    format={() => (
                                      <div
                                        style={{
                                          color: darkMode ? "white" : "#141414",
                                        }}
                                        className="TitleFontThree"
                                      >
                                        {t.percent}
                                      </div>
                                    )}
                                    key={inx}
                                    type="circle"
                                    strokeColor={{
                                      "0%": t.oneColor,
                                      "100%": t.twoColor,
                                    }}
                                    percent={t.value}
                                    style={{ marginBottom: 7 }}
                                  />
                                  <Text
                                    className="ParagraphThree"
                                    style={{
                                      color: darkMode ? "white" : "#141414",
                                      fontSize: "larger",
                                    }}
                                  >
                                    {t.text}
                                  </Text>
                                </div>
                              </Roll>
                            </Space>
                          ))}
                        </Space>
                      </div>
                    </Col>
                  </Space>
                </Col>
              </Row>
            </Space>
          </Col>
        </Space>
      </Zoom>
    </Col>
  );
};

export default ProgressSkill;
