import { Parallax } from "rc-scroll-anim";
import React, { useState } from "react";
import { usePageContext, useResetContext } from "../contexts/page-context";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { Col, Divider, Popover, Row, Space, Tooltip, Typography } from "antd";
import Words from "../../resources/words";
import LottieFile from "../common/lottie";
import websiteLottie from "../../assets/lotties/website.json";
import {
  MdColorLens,
  MdOutlineSpeed,
  MdFormatSize,
  MdImagesearchRoller,
} from "react-icons/md";
import { FaStar, FaCircle } from "react-icons/fa";
import { SiZendframework } from "react-icons/si";
import { BiReset } from "react-icons/bi";
import {
  BsFillBarChartFill,
  BsPauseCircleFill,
  BsPlayCircleFill,
} from "react-icons/bs";
import { CirclePicker } from "react-color";
import Zoom from "react-reveal/Zoom";
import arrowImage from "../../assets/images/arrow.png";
import Image from "next/image";

const { Title, Text } = Typography;

const textsAraay = [
  "This website is designed with the latest version of React Library. The Next library has also been used.",
  "This site uses Lazy Loading Technology. So do not worry if the images open ( render ) a little late for you. Instead, the site speed is extremely high.",
  "You can use the other features of this site by using the button at the bottom right of the site.",
  "This site has the possibility that you can change the background of this site according to your opinion and design your desired background",
  "The design of this site is completely responsive.",
  "To order a project, you must first enter the contacts section and then place the desired switch on the project order and then register your order.",
];

const AboutWebSite = () => {
  const {
    darkMode,
    starColor,
    setStarColor,
    starSpeed,
    setStarSpeed,
    starSize,
    setStarSize,
    starExist,
    setStarExist,
    starShape,
    setStarShape,
    starCount,
    setStarCount,
    starPlay,
    setStarPlay,
  } = usePageContext();

  const [visiblePopover, setVisiblePopover] = useState(false);
  const resetContext = useResetContext();

  const handleChangeComplete = (color) => {
    setStarColor(color.hex);
  };

  const ColorContent = (
    <CirclePicker
      onChangeComplete={handleChangeComplete}
      color={starColor}
      fieldName="SkinColor"
      circleSize={40}
      colors={[
        "#fafafa",
        "#e91e63",
        "#9c27b0",
        "#673ab7",
        "#3f51b5",
        "#2196f3",
        "#03a9f4",
        "#00bcd4",
        "#009688",
        "#4caf50",
        "#8bc34a",
        "#cddc39",
        "#ffeb3b",
        "#ffc107",
        "#ff9800",
        "#ff5722",
        "#795548",
        "#607d8b",
        "red",
        "blue",
      ]}
    />
  );

  const handleColorOfNumbers = (inx) => {
    switch (inx + 1) {
      case 1:
        return "#516BEB";
        break;
      case 2:
        return "#28FFBF";
        break;
      case 3:
        return "#D18CE0";
        break;
      case 4:
        return "#FFE61B";
        break;
      case 5:
        return "#FF6363";
        break;
      case 6:
        return "#219F94";
        break;
    }
  };

  return (
    <div>
      <Fade left>
        <Row
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 60,
            boxShadow: darkMode ? "#030852 0px 5px " : "#FFF56D 0px 5px ",
            borderRadius: 25,
            transition: "all 0.6s ease-in",
            zIndex: 4,
            marginRight: 180,
            marginLeft: 180,
          }}
          gutter={[0, 40]}
        >
          <Col md={24}>
            <Title style={{ color: darkMode ? "white" : "#141414", margin: 0 }}>
              About WebSite
            </Title>
          </Col>
          <Col md={24}>
            <Row
              style={{
                display: "flex",
                alignItems: "center",
              }}
              align="middle"
            >
              <Col md={12}>
                <Slide bottom duration={1000}>
                  <Space direction="vertical">
                    {textsAraay.map((t, inx) => (
                      <React.Fragment key={inx}>
                        <Space align="center" key={inx} size="middle">
                          <Col
                            style={{
                              backgroundColor: handleColorOfNumbers(inx),
                              borderRadius: 50,
                              width: 50,
                              height: 50,
                              zIndex: 2,
                            }}
                            className="center"
                          >
                            <Text
                              style={{
                                color: darkMode ? "white" : "#141414",
                                fontSize: 40,
                              }}
                              className="ParagraphThree"
                            >
                              {inx + 1}
                            </Text>
                          </Col>
                          <Col>
                            <Text
                              style={{
                                color:
                                  inx === 5
                                    ? "#28DF99"
                                    : inx === 3 && darkMode
                                    ? "#FFE194"
                                    : darkMode
                                    ? "white"
                                    : "#141414",
                                fontSize: 25,
                              }}
                              className="ParagraphThree"
                            >
                              {t}
                            </Text>
                          </Col>
                        </Space>
                        {inx === 0 && (
                          <Col md={24} className="center">
                            <Space size={"large"}>
                              <Text
                                style={{ color: "#ffec3d", fontSize: 25 }}
                                className="ParagraphTwo"
                              >
                                <u> React v18</u>
                              </Text>
                              <Text
                                style={{ color: "#ffec3d", fontSize: 25 }}
                                className="ParagraphTwo"
                              >
                                <u>Next v12</u>
                              </Text>
                            </Space>
                          </Col>
                        )}
                      </React.Fragment>
                    ))}
                  </Space>
                </Slide>
              </Col>
              <Col
                md={12}
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 50,
                }}
              >
                <Row align="middle" justify="center">
                  <Col md={24} className="center">
                    <LottieFile
                      animationData={websiteLottie}
                      width={850}
                      height={500}
                    />
                  </Col>
                  <Col md={19} className="center" style={{ marginLeft: 50 }}>
                    <Zoom bottom cascade delay={500}>
                      <Space size={"large"}>
                        <Popover
                          content={ColorContent}
                          title="Choose your favorite color"
                          trigger="click"
                          visible={visiblePopover}
                          onVisibleChange={() =>
                            setVisiblePopover(!visiblePopover)
                          }
                        >
                          <Tooltip title="Stars Color">
                            <MdColorLens
                              style={{
                                fontSize: 50,
                                color: starColor,
                                cursor: "pointer",
                              }}
                            />
                          </Tooltip>
                        </Popover>
                        <Tooltip title="Stars Speed">
                          <SiZendframework
                            style={{
                              fontSize: 50,
                              color: "#EB5353",
                              cursor: "pointer",
                            }}
                            className="glowRed"
                            onClick={() =>
                              starSpeed === 1
                                ? setStarSpeed(5)
                                : setStarSpeed(1)
                            }
                          />
                        </Tooltip>
                        <Tooltip title="Stars Size">
                          <MdFormatSize
                            style={{
                              fontSize: 50,
                              color: "#F9D923",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              starSize === 1 ? setStarSize(5) : setStarSize(1)
                            }
                          />
                        </Tooltip>
                        <Tooltip title="Stars Exist">
                          <MdImagesearchRoller
                            style={{
                              fontSize: 50,
                              color: "#F32424",
                              cursor: "pointer",
                            }}
                            onClick={() => setStarExist(!starExist)}
                          />
                        </Tooltip>
                        <Tooltip title="Stars Shape">
                          {starShape === "circle" ? (
                            <FaStar
                              style={{
                                fontSize: 50,
                                color: "#7FB5FF",
                                cursor: "pointer",
                              }}
                              onClick={() => setStarShape("star")}
                            />
                          ) : (
                            <FaCircle
                              style={{
                                fontSize: 50,
                                color: "#B22727",
                                cursor: "pointer",
                              }}
                              onClick={() => setStarShape("circle")}
                            />
                          )}
                        </Tooltip>
                        <Tooltip title="Stars Count">
                          <BsFillBarChartFill
                            style={{
                              fontSize: 50,
                              color: "#A85CF9",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              starCount === 160
                                ? setStarCount(360)
                                : setStarCount(160)
                            }
                          />
                        </Tooltip>
                        <Tooltip title="Stars Move">
                          {starPlay ? (
                            <BsPauseCircleFill
                              style={{
                                fontSize: 50,
                                color: "#55D8C1",
                                cursor: "pointer",
                              }}
                              onClick={() => setStarPlay(false)}
                            />
                          ) : (
                            <BsPlayCircleFill
                              style={{
                                fontSize: 50,
                                color: "#40DFEF",
                                cursor: "pointer",
                              }}
                              onClick={() => setStarPlay(true)}
                            />
                          )}
                        </Tooltip>
                        <Tooltip title="Reset">
                          <BiReset
                            style={{
                              fontSize: 50,
                              color: "#1890ff",
                              cursor: "pointer",
                            }}
                            onClick={() => resetContext()}
                          />
                        </Tooltip>
                      </Space>
                      <Divider
                        style={{
                          backgroundColor: "#FEE2C5",
                          minHeight: 5,
                          margin: 0,
                          marginTop: 4,
                          marginBottom: 4,
                        }}
                      />
                      <Text
                        style={{ color: "#ffec3d", fontSize: 35 }}
                        className="ParagraphEight"
                      >
                        Design the way you want.
                      </Text>
                    </Zoom>
                  </Col>
                </Row>
              </Col>
              <Col
                md={24}
                style={{
                  position: "absolute",
                  right: 650,
                  bottom: 140,
                  transform: "rotateX(35deg)",
                }}
              >
                <Fade top delay={1000}>
                  <Image
                    src={arrowImage}
                    width={100}
                    height={100}
                    alt="picture"
                  />
                </Fade>
              </Col>
            </Row>
          </Col>
        </Row>
      </Fade>
    </div>
  );
};

export default AboutWebSite;
