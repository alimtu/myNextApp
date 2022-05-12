import { Col, Row, Space, Typography, Button } from "antd";
import React, { useState } from "react";
import Words from "../../resources/words";

import { FcViewDetails } from "react-icons/fc";
import skypeLogo from "../../assets/images/skype.png";
import gmailLogo from "../../assets/images/gmail.png";
import whatsappLogo from "../../assets/images/whatsapp.png";
import githubLogo from "../../assets/images/github.png";
import linkedinLogo from "../../assets/images/linkedin.png";
import twitterLogo from "../../assets/images/twitter.png";
import ScrollAnim, { Link } from "rc-scroll-anim";
import winning from "../../assets/lotties/winning.json";
import Slide from "react-reveal/Slide";
import LottieFile from "../common/lottie";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import magicLottie from "../../assets/lotties/confetti2.json";
import { usePageContext } from "../contexts/page-context";
import Image from "next/image";
import Texty from "rc-texty";

const { Text, Title } = Typography;

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
const ScrollOverPack = ScrollAnim.OverPack;

const GreetingMobile = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const { darkMode } = usePageContext();

  const handleShowConfetti = () => {
    if (showConfetti === false) {
      setTimeout(() => {
        setShowConfetti(true);
      }, 4000);
    } else {
      setShowConfetti(false);
    }
  };

  return (
    <div>
      <Slide
        bottom
        cascade
        duration={2000}
        onReveal={() => handleShowConfetti()}
      >
        <Row
          justify="center"
          align="middle"
          gutter={[0, 30]}
          style={{ zIndex: 6 }}
        >
          <ScrollOverPack playScale={0.9} always={false}>
            <Col
              xs={24}
              style={{
                position: "absolute",
                bottom: 300,
                left: 30,
              }}
            >
              <LottieFile
                animationData={magicLottie}
                width={330}
                loop="false"
              />
            </Col>
          </ScrollOverPack>

          <Col xs={24} className="center" style={{ zIndex: 6 }}>
            <LottieFile animationData={winning} width={340} height={320} />
          </Col>
          <Bounce bottom duration={2000}>
            <Col xs={24} className="center">
              <Space direction="vertical" align="center">
                <Col xs={24} className="center ">
                  <Text
                    style={{
                      color: darkMode ? "white" : "#141414",
                      fontSize: 25,
                      textAlign: "center",
                    }}
                    className="ParagraphSeven"
                  >
                    I`m
                  </Text>
                </Col>
                <Col xs={24} className="center">
                  <Title
                    style={{
                      color: darkMode ? "#95E1D3" : "#1d39c4",
                      fontSize: 50,
                      margin: 0,
                    }}
                    className="alimontazerion"
                  >
                    {/* <Texty duration={3000} mode="random" type="alpha"> */}
                    Ali Montazerion
                    {/* </Texty> */}
                  </Title>
                </Col>
                <Col xs={24} className="center" style={{ maxWidth: 250 }}>
                  <Text>
                    <Texty
                      delay={1000}
                      mode="smooth"
                      style={{
                        color: darkMode ? "white" : "#141414",
                        fontSize: 30,
                        textAlign: "center",
                      }}
                      className="ParagraphSeven"
                    >
                      {Words.mobile_greeting}
                    </Texty>
                  </Text>
                </Col>
              </Space>
            </Col>
          </Bounce>

          <Col xs={24} className="center">
            <Fade top duration={2000}>
              <div className="center">
                <Row
                  justify="center"
                  align="middle"
                  gutter={[0, 30]}
                  style={{
                    maxWidth: "90%",
                    alignSelf: "center",
                  }}
                >
                  {socialMedias.map((t, inx) => (
                    <Col
                      xs={8}
                      className="center socialImage"
                      key={`${inx + 1}-3`}
                      onClick={() => window.open(t.link)}
                    >
                      <Image
                        alt="picture"
                        key={inx}
                        width={40}
                        height={40}
                        src={t.icon}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </Fade>
          </Col>
          <Col xs={24} className="center">
            <Fade bottom delay={500} duration={2000}>
              <Space>
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
                    <Text className="ParagraphThree" style={{ color: "white" }}>
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
            </Fade>
          </Col>
        </Row>
      </Slide>
    </div>
  );
};

export default GreetingMobile;
