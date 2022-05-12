import { Col, Typography, Space, Row } from "antd";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/greetingMobile.png";
import Words from "../../resources/words";
import LottieFile from "../common/lottie";
import arrowLottie from "../../assets/lotties/arrow-down.json";
import arrowTwoLottie from "../../assets/lotties/arrow-down2.json";
import sunLottie from "../../assets/lotties/sun.json";
import moonLottie from "../../assets/lotties/moon.json";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { Link, Parallax } from "rc-scroll-anim";
import Roll from "react-reveal/Roll";
import welcome from "../../assets/lotties/welcome.json";
import LightSpeed from "react-reveal/LightSpeed";
import { usePageContext } from "../contexts/page-context";
import Image from "next/image";
import handShakeImage from "../../assets/images/handShake.png";
import handsCellPhoneImage from "../../assets/images/hands-cellphone.png";

const { Text, Title } = Typography;

const WelcomeMobile = () => {
  const { darkMode } = usePageContext();

  const [show, setShow] = useState(false);
  // const [showTwo, setShowTwo] = useState(false);
  // const [showThree, setShowThree] = useState(false);
  // const [showTheme, setShowTheme] = useState(false);
  const [changeArrow, setChangeArrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChangeArrow(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [changeArrow]);

  const handleClickArrow = () => {
    setChangeArrow(true);
  };

  return (
    <Row>
      {show && (
        <Col
          xs={24}
          style={{ position: "absolute", left: 0, top: 0, right: 0 }}
        >
          <LottieFile
            animationData={welcome}
            speed={"0.2"}
            width={"auto"}
            loop="false"
          />
        </Col>
      )}

      {!darkMode && (
        <Col
          xs={24}
          style={{ position: "absolute", left: 220, top: 20, zIndex: 11 }}
        >
          <LottieFile
            animationData={sunLottie}
            loop="false"
            width={100}
            height={100}
          />
        </Col>
      )}

      <Col xs={24} style={{ zIndex: 3 }}>
        <Slide top duration={2000}>
          <Space
            direction="vertical"
            style={{
              minHeight: "95vh",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              zIndex: 6,
            }}
          >
            <Space
              direction="vertical"
              align="center"
              size={"middle"}
              style={{ zIndex: 6 }}
            >
              <Title
                level={2}
                style={{
                  color: darkMode ? "white" : "#219F94",
                  margin: 0,
                }}
                className="ParagraphSeven"
              >
                <Bounce left cascade delay={1000}>
                  Welcome To My WebSite
                </Bounce>
              </Title>

              <Text
                style={{
                  color: darkMode ? "#4EF037" : "#F900BF",
                  fontSize: 25,
                }}
                className="ParagraphFive"
              >
                <LightSpeed bottom cascade delay={2500}>
                  Let’s Think Big Savings
                </LightSpeed>
              </Text>
              <Fade bottom delay={3000}>
                <Image
                  alt="picture"
                  src={handShakeImage}
                  width={330}
                  height={200}
                  quality={100}
                  style={{ zIndex: 6 }}
                />
              </Fade>

              <div onClick={() => handleClickArrow()}>
                <Roll top delay={3500}>
                  <Link
                    offsetTop={50}
                    to={"Greeting"}
                    // onFocus={handleImage}
                    ease="easeOutBack"
                    duration={1500}
                    key={"key7"}
                  >
                    {changeArrow ? (
                      <LottieFile
                        animationData={arrowTwoLottie}
                        width={100}
                        height={100}
                      />
                    ) : (
                      <LottieFile
                        animationData={arrowLottie}
                        width={100}
                        height={100}
                      />
                    )}
                  </Link>
                </Roll>
              </div>
            </Space>

            {/* <div style={{ maxWidth: 300, maxHeight: 300 }}>
            <Spline scene="https://prod.spline.design/Q6IaQvd-QZHG270a/scene.spline" />
          </div> */}
          </Space>
        </Slide>
      </Col>
    </Row>
  );
};

export default WelcomeMobile;
