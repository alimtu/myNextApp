import { Col, Row, Typography, Space, Button, Card, Spin } from "antd";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/greeting.png";
import Words from "../../resources/words";
import skypeLogo from "../../assets/images/skype.png";
import gmailLogo from "../../assets/images/gmail.png";
import whatsappLogo from "../../assets/images/whatsapp.png";
import githubLogo from "../../assets/images/github.png";
import linkedinLogo from "../../assets/images/linkedin.png";
import twitterLogo from "../../assets/images/twitter.png";
import Texty from "rc-texty";
import { FcViewDetails } from "react-icons/fc";
import CodesImage from "../../assets/images/codes.jpg";
import LottieFile from "../common/lottie";
import magicLottie from "../../assets/lotties/magic-logo.json";
import fireWorkLottie from "../../assets/lotties/surprize-logo.json";
// import { Link, Parallax } from "rc-scroll-anim";
import date from "date-and-time";
import { FcCalendar, FcFlashOn } from "react-icons/fc";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import { usePageContext } from "../contexts/page-context";
import Bounce from "react-reveal/Bounce";
import magicLottie2 from "../../assets/lotties/confetti2.json";
import Image from "next/image";
import { Link, Parallax } from "rc-scroll-anim";
import config from "react-reveal/globals";

config({ ssrFadeout: true });

const { Text, Title } = Typography;
const now = new Date();

const socialMedias = [
  {
    icon: linkedinLogo,
    link: "https://www.linkedin.com/in/ali-montazerion-37a939226",
  },
  {
    icon: githubLogo,
    link: "https://github.com/alimtu",
  },
  {
    icon: gmailLogo,
    link: "mailto:montazerion.21@gmail.com?subject=Subject&body=message%20goes%20here",
  },
  {
    icon: skypeLogo,
    link: "skype:montazerion21?userinfo",
  },
  {
    icon: twitterLogo,
    link: "http://twitter.com/montazerion",
  },
  {
    icon: whatsappLogo,
    link: "http://wasap.my/9333730037",
  },
];

const Greeting = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const [progress, setProgress] = useState(true);
  const pattern = date.compile("dddd, MMMM / D / YYYY");
  const [currentDate, setDate] = useState(date.format(now, pattern));
  const [showConfetti, setShowConfetti] = useState(false);
  const [timeShowConfetti, setTimeShowConfetti] = useState(false);

  const { darkMode } = usePageContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeShowConfetti(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fullScreen) {
      const timer = setTimeout(() => {
        setProgress(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [fullScreen]);

  return (
    <Row
      style={{
        paddingTop: 100,
        position: "relative",
        minHeight: "90vh",
        marginBottom: "10vh",
      }}
      align="middle"
      justify="center"
    >
      {!fullScreen ? (
        <>
          <Space>
            <Col
              md={24}
              style={{
                minHeight: "50vh",
                marginBottom: "150px",
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Slide left>
                <Card
                  style={{
                    background: darkMode
                      ? "linear-gradient(to left, #0f0c29, #302b63, #24243e)"
                      : "linear-gradient(to bottom, #CCF2F4, #A4EBF3)",
                    minHeight: "50vh",
                    display: "flex",
                    justifyContent: "center",
                    border: darkMode
                      ? "5px solid #24243e"
                      : "5px solid #79DAE8",
                    borderRadius: 5,
                  }}
                  // className="firstCard"
                  className={darkMode ? `firstCard` : "firstCardDay"}
                >
                  <Row
                    style={{
                      minWidth: "75vw",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Col>
                      <Space size={"middle"}>
                        <FcCalendar style={{ fontSize: 40 }} />
                        <Text
                          className="ParagraphThree"
                          style={{
                            color: darkMode ? "white" : "#141414",
                            fontSize: 22,
                          }}
                        >
                          {currentDate ? currentDate : ""}
                        </Text>
                      </Space>
                    </Col>
                    <Col>
                      <Title
                        level={1}
                        style={{
                          margin: 0,
                          color: darkMode ? "white" : "#141414",
                          marginRight: 75,
                        }}
                      >
                        <Zoom right cascade duration={1500}>
                          {Words.welcome}
                        </Zoom>
                      </Title>
                    </Col>
                    <Col onClick={() => setFullScreen(true)}>
                      <Space size={"small"}>
                        <FcFlashOn style={{ fontSize: 40 }} />
                        <Text
                          style={{
                            color: darkMode ? "white" : "#141414",
                            fontSize: 22,
                          }}
                          className="ParagraphThree cursor"
                        >
                          {Words.change_style}
                        </Text>
                      </Space>
                    </Col>
                  </Row>
                </Card>
              </Slide>
            </Col>
            <Col
              md={24}
              style={{
                minWidth: "75vw",
                minHeight: "57vh",
                maxWidth: "75vw",
                position: "absolute",
                bottom: 50,
                left: 230,
                alignSelf: "center",
                zIndex: 3,
              }}
              className="center"
            >
              <Bounce bottom delay={1000}>
                <Card
                  style={{
                    minHeight: "57vh",
                    background: darkMode
                      ? "linear-gradient(to bottom, #000428, #004e92)"
                      : "linear-gradient(to right, #42DEE1, #3FC5F0)",
                    border: darkMode ? "5px solid white" : "5px solid #3FC5F0",
                    borderRadius: 5,
                  }}
                  className={darkMode ? `secondCard` : "secondCardDay"}
                >
                  <Row style={{ marginTop: 25 }}>
                    <Col xs={15}>
                      <Space direction="vertical" size={"large"} align="center">
                        <Text
                          style={{
                            color: darkMode ? "white" : "#141414",
                            fontSize: 35,
                          }}
                          className="ParagraphThree"
                        >
                          {Words.hello}
                        </Text>

                        <Title
                          style={{
                            color: darkMode ? "#95E1D3" : "#1d39c4",
                            fontSize: 60,
                            margin: 0,
                            fontWeight: 600,
                          }}
                        >
                          <Texty duration={1000} mode="random" type="alpha">
                            {Words.iamali}
                          </Texty>
                        </Title>
                        <Col
                          style={{
                            maxWidth: "88%",
                            display: "flex",
                            alignSelf: "center",
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                            marginLeft: 55,
                          }}
                        >
                          <Texty
                            mode="smooth"
                            style={{
                              color: darkMode ? "white" : "#141414",
                              fontSize: 25,
                              textAlign: "center",
                            }}
                            className="ParagraphThree"
                          >
                            {Words.about_programmer}
                          </Texty>
                        </Col>
                        <Zoom top delay={8000} duration={3000}>
                          <Space direction="horizontal" size={"large"}>
                            {socialMedias.map((t, inx) => (
                              <Col className="socialImage" key={inx + 1}>
                                <Image
                                  alt="picture"
                                  key={inx}
                                  width={40}
                                  height={40}
                                  src={t.icon}
                                  onClick={() => window.open(t.link)}
                                />
                              </Col>
                            ))}
                          </Space>
                        </Zoom>
                        <Flip top delay={9000} duration={2000}>
                          <Space size={"large"}>
                            <Link
                              offsetTop={50}
                              to={"Contacts"}
                              // onFocus={handleImage}
                              ease="easeOutBack"
                              duration={1500}
                              key={"key7"}
                            >
                              <Button
                                type="primary"
                                size="large"
                                style={{
                                  borderRadius: 3,
                                  textAlign: "center",
                                }}
                              >
                                <Text
                                  className="ParagraphThree"
                                  style={{
                                    color: "white",
                                    fontSize: "larger",
                                    textAlign: "center",
                                  }}
                                >
                                  Contact Me
                                </Text>
                              </Button>
                            </Link>
                            <Link
                              offsetTop={50}
                              to={"Portfolio & CV"}
                              // onFocus={handleImage}
                              ease="easeOutBack"
                              duration={1500}
                              key={"key8"}
                            >
                              <Button type="link" size="large">
                                <Space className="center">
                                  <FcViewDetails fontSize={40} />
                                  <Text
                                    className="ParagraphThree"
                                    style={{
                                      color: darkMode ? "white" : "#141414",
                                    }}
                                  >
                                    See My Resume
                                  </Text>
                                </Space>
                              </Button>
                            </Link>
                          </Space>
                        </Flip>

                        <Col
                          style={{
                            position: "absolute",
                            bottom: 40,
                            left: 0,
                            right: 0,
                            opacity: !timeShowConfetti ? 1 : 0.1,
                          }}
                        >
                          {showConfetti && (
                            <LottieFile
                              animationData={magicLottie2}
                              width={640}
                              loop="false"
                            />
                          )}
                        </Col>
                      </Space>
                    </Col>
                    <Col
                      xs={9}
                      style={{
                        position: "absolute",
                        right: 40,
                        bottom: -120,
                      }}
                    >
                      <Zoom top delay={2000}>
                        <Image
                          alt="picture"
                          src={logo}
                          layout="fixed"
                          width={650}
                          height={650}
                          quality={100}
                        />
                      </Zoom>
                    </Col>
                  </Row>
                </Card>
              </Bounce>
            </Col>
            <Col
              style={{
                position: "absolute",
                left: 120,
                bottom: 95,
              }}
              className="scrollText"
            >
              <Text
                style={{
                  color: darkMode ? "white" : "#141414",
                  fontSize: 18,
                }}
                className="ParagraphThree"
              >
                <Zoom top cascade delay={3000}>
                  Scroll to see WebSite
                </Zoom>
              </Text>
            </Col>
          </Space>
        </>
      ) : (
        <Row justify="center" align="middle">
          <Col
            className="center"
            style={{ position: "absolute", left: 50, bottom: 200 }}
          >
            <LottieFile animationData={magicLottie2} />
          </Col>

          <Col
            md={22}
            style={{
              border: "5px solid #0050b3",
              boxShadow: "rgba(84, 42, 139, 0.678) 0px 25px 50px -12px",
              minWidth: "70vw",
              maxHeight: "70vh",
            }}
            className="center"
          >
            <Image
              alt="picture"
              src={CodesImage}
              layout="fixed"
              style={{
                position: "relative",
                filter: `blur(1px)`,
                opacity: 0.3,
              }}
              width={1340}
              height={620}
            />

            <Space
              direction="vertical"
              className={"center"}
              style={{
                maxWidth: "90%",
                position: "absolute",
                left: "5%",
                top: "10%",
              }}
              size={"large"}
            >
              <Text
                style={{
                  color: darkMode ? "white" : "#141414",
                  fontSize: 25,
                }}
                className="ParagraphThree"
              >
                {Words.hello}
              </Text>
              <Title
                style={{
                  color: darkMode ? "#95E1D3" : "#1d39c4",
                  fontSize: 90,
                  margin: 0,
                }}
              >
                <Texty duration={1200} mode="smooth" type="scale">
                  {Words.iamali}
                </Texty>
              </Title>
              <Text
                style={{
                  textAlign: "center",
                  display: "flex",
                  color: darkMode ? "white" : "#141414",
                  fontSize: 25,
                }}
                className="ParagraphThree"
              >
                {Words.greeting_text}
              </Text>
              <Space direction="horizontal" size={"large"}>
                {socialMedias.map((t, inx) => (
                  <Col className="socialImage" key={inx + 2}>
                    <Image
                      alt="picture"
                      key={inx}
                      width={40}
                      height={40}
                      src={t.icon}
                      onClick={() => window.open(t.link)}
                    />
                  </Col>
                ))}
              </Space>
              <Space size={"large"}>
                <Link
                  offsetTop={50}
                  to={"Contacts"}
                  // onFocus={handleImage}
                  ease="easeOutBack"
                  duration={1500}
                  key={"key7"}
                >
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      borderRadius: 3,
                    }}
                    className="center"
                  >
                    <Text
                      className="ParagraphThree"
                      style={{
                        color: "white",
                        fontSize: 20,
                      }}
                    >
                      Contact Me
                    </Text>
                  </Button>
                </Link>
                <Link
                  offsetTop={50}
                  to={"Portfolio & CV"}
                  // onFocus={handleImage}
                  ease="easeOutBack"
                  duration={1500}
                  key={"key8"}
                >
                  <Button type="link" size="large">
                    <Space className="center">
                      <FcViewDetails fontSize={40} />
                      <Text
                        className="ParagraphThree"
                        style={{ color: darkMode ? "white" : "#141414" }}
                      >
                        See My Resume
                      </Text>
                    </Space>
                  </Button>
                </Link>
              </Space>
              <Col
                className="cursor"
                style={{ minHeight: 140, marginRight: 25 }}
                onClick={() => setFullScreen(!fullScreen)}
              >
                <FcFlashOn style={{ fontSize: 40 }} />
              </Col>
            </Space>
          </Col>

          <Col
            className="center"
            style={{ position: "absolute", right: 50, bottom: 200 }}
          >
            <LottieFile animationData={magicLottie2} />
          </Col>
        </Row>
      )}
    </Row>
  );
};

export default Greeting;
