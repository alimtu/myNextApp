import React from "react";
import { Col, Row, Typography, Space, Alert, Progress, Tooltip } from "antd";
import logo from "../../../assets/images/gold-medal.png";
import QueueAnim from "rc-queue-anim";
import { BiHide } from "react-icons/bi";
import Bounce from "react-reveal/Bounce";
import Image from "next/image";
import { usePageContext } from "../../contexts/page-context";
import { BsArrowBarRight } from "react-icons/bs";

const { Title, Text } = Typography;
const skillsArray = [
  {
    percent: "85%",
    value: 85,
    text: "Third Party Services",
    oneColor: "#f7ff00",
    twoColor: "#db36a4",
  },

  {
    percent: "90%",
    value: 90,
    text: "UX Service",
    oneColor: "#00c3ff",
    twoColor: "#ffff1c",
  },
  {
    percent: "95%",
    value: 95,
    text: "UI Service",
    oneColor: "#FFC837",
    twoColor: "#FF8008",
  },
  {
    percent: "85%",
    value: 85,
    text: "Database",
    oneColor: "#FDFC47",
    twoColor: "#24FE41",
  },
];

const ProgressSkillMobile = ({ darkMode }) => {
  const handleLeftProgress = (inx) => {
    switch (inx + 1) {
      case 1:
        return 15;
        break;
      case 2:
        return 10;
        break;
      case 3:
        return 315;
        break;
      case 4:
        return 320;
        break;
    }
  };
  const handleBottomProgress = (inx) => {
    switch (inx + 1) {
      case 1:
        return -50;
        break;
      case 2:
        return 160;
        break;
      case 3:
        return 220;
        break;
      case 4:
        return -80;
        break;
    }
  };
  return (
    <Col xs={24} className="center">
      <Row
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        gutter={[0, 0]}
      >
        <Col
          xs={24}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            textAlign: "start",
            marginLeft: 15,
          }}
        >
          <Title
            level={2}
            style={{ color: darkMode ? "white" : "#141414", marign: 0 }}
            className="TitleFontThree"
          >
            Proficiency
          </Title>
        </Col>

        <Col
          style={{
            alignSelf: "flex-end",
            display: "flex",
            flexDirection: "column",
            marginRight: 35,
          }}
        >
          <Space align="center">
            <Text
              style={{
                fontSize: 22,
                color: darkMode ? "#F6F54D" : "#4D77FF",
                textAlign: "center",
                textDecoration: "underline",
              }}
              className="ParagraphTwo"
            >
              3 Slides
            </Text>
            <BsArrowBarRight
              style={{
                fontSize: 30,
                color: darkMode ? "#F6F54D" : "#4D77FF",
                marginTop: 5,
              }}
            />
          </Space>
        </Col>

        <Col xs={24} className="center">
          <Image
            alt="picture"
            src={logo}
            priority
            width={350}
            height={380}
            className="center"
          />
        </Col>

        <Col xs={24}>
          <Row align="middle" justify="center">
            <Col xs={24} style={{ padding: 20, paddingTop: 0 }}>
              <Row>
                <Bounce top cascade>
                  <div>
                    {skillsArray.map((t, inx) => (
                      <Col
                        xs={12}
                        style={{
                          position: "absolute",
                          left: handleLeftProgress(inx),
                          bottom: handleBottomProgress(inx),
                          zoom: "80%",
                        }}
                        key={inx + 1}
                      >
                        <Space
                          direction="vertical"
                          align="center"
                          size={"middle"}
                          key={`${inx + 1}-2`}
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
                            key={`${inx + 1}-3`}
                            type="circle"
                            strokeColor={{
                              "0%": t.oneColor,
                              "100%": t.twoColor,
                            }}
                            percent={t.value}
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
                        </Space>
                      </Col>
                    ))}
                  </div>
                </Bounce>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default ProgressSkillMobile;
