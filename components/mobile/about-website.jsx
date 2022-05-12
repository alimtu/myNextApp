import { Parallax } from "rc-scroll-anim";
import React, { useState } from "react";
import { usePageContext, useResetContext } from "../contexts/page-context";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { Col, Divider, Popover, Row, Space, Tooltip, Typography } from "antd";
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
// import cloudImage from "../../assets/images/cloud.png";
// import Image from "next/image";

const { Title, Text } = Typography;

const textsAraay = [
  "This website is designed with the latest version of React Library. The Next library has also been used",
  "For a better experience and more information, as well as ordering and registering a project, please refer to the web (desktop) version of this site",
  "This site uses Lazy Loading Technology . So do not worry if the images or animations open ( render ) a little late for you. Instead, the site speed is extremely high.",
  "You can use the other features of this site by using the button at the bottom right of the site",
  "The design of this site is completely responsive",
];

const AboutWebSiteMobile = () => {
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
  const [showMore, setShowMore] = useState(false);
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
    <Parallax
      style={{
        marginBottom: 50,
      }}
      always={false}
    >
      <Fade left duration={1000}>
        <Row
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: 40,
            borderRadius: 25,
            transition: "all 0.6s ease-in",
          }}
          gutter={[0, 20]}
        >
          <Col xs={24} className="center">
            <Title style={{ color: darkMode ? "white" : "#141414", margin: 0 }}>
              About WebSite
            </Title>
          </Col>
          <Col
            xs={24}
            className="center"
            style={{ zoom: "80%", marginLeft: 30 }}
          >
            <LottieFile
              animationData={websiteLottie}
              width={410}
              height={250}
            />
          </Col>
          <Col xs={24}>
            <Row
              style={{
                display: "flex",
                alignItems: "center",
              }}
              align="middle"
              justify="center"
            >
              <Col xs={24} className="center">
                <Slide bottom duration={1000}>
                  <Space
                    direction="vertical"
                    style={{ maxWidth: "80%" }}
                    size="large"
                  >
                    {textsAraay.slice(0, showMore ? 5 : 2).map((t, inx) => (
                      <React.Fragment key={inx}>
                        <Space
                          align="center"
                          key={inx}
                          size="middle"
                          direction="vertical"
                        >
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
                                fontSize: 35,
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
                                  inx === 1
                                    ? darkMode
                                      ? "#FBCAFF"
                                      : "#141414"
                                    : darkMode
                                    ? "white"
                                    : "#141414",
                                fontSize: 22,
                              }}
                              className="ParagraphThree"
                            >
                              {t}
                            </Text>
                          </Col>
                          {inx === 0 && (
                            <Col xs={24} className="center">
                              <Space size={"large"}>
                                <Text
                                  style={{ color: "#ffec3d", fontSize: 20 }}
                                  className="ParagraphTwo"
                                >
                                  React v18
                                </Text>
                                <Text
                                  style={{ color: "#ffec3d", fontSize: 20 }}
                                  className="ParagraphTwo"
                                >
                                  Next v12
                                </Text>
                              </Space>
                            </Col>
                          )}

                          {/* {inx === 1 && (
                            <Col
                              xs={24}
                              style={{
                                position: "absolute",
                                right: 20,
                                bottom: 100,
                              }}
                            >
                              <Image
                                src={cloudImage}
                                width={600}
                                height={450}
                              />
                            </Col>
                          )} */}
                        </Space>
                      </React.Fragment>
                    ))}
                    <Col
                      xs={24}
                      className="center"
                      style={{ marginBottom: 25 }}
                    >
                      <Title
                        level={4}
                        style={{
                          color: darkMode
                            ? showMore
                              ? "#cf1322"
                              : "#40DFEF"
                            : "#4D77FF",
                          margin: 0,
                        }}
                        className={
                          showMore
                            ? "ParagraphThree glowRed"
                            : "ParagraphThree glowBlue"
                        }
                        onClick={() => setShowMore(!showMore)}
                      >
                        {showMore ? "Show Less ..." : "Show More ..."}
                      </Title>
                    </Col>
                  </Space>
                </Slide>
              </Col>
              <div>
                <Zoom bottom cascade delay={500}>
                  <div className="center">
                    <Col
                      xs={22}
                      style={{
                        border: "2px solid #ffec3d",
                        padding: 20,
                        marginTop: 10,
                        borderRadius: 15,
                      }}
                      className="center"
                    >
                      <Row align="middle" justify="center">
                        <Col xs={24} className="center">
                          <div
                            className="center"
                            style={{ flexDirection: "column" }}
                          >
                            <Col xs={24} style={{ marginBottom: 30 }}>
                              <Text
                                style={{ color: "#ffec3d", fontSize: 32 }}
                                className="ParagraphEight"
                              >
                                Design the way you want
                              </Text>
                            </Col>

                            <Space
                              size={"large"}
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                maxWidth: "100%",
                              }}
                            >
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
                                    starSize === 1
                                      ? setStarSize(5)
                                      : setStarSize(1)
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
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </div>
                </Zoom>
              </div>
            </Row>
          </Col>
        </Row>
      </Fade>
    </Parallax>
  );
};

export default AboutWebSiteMobile;
