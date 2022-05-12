import { Col, Row, Typography, Space } from "antd";
import React, { memo, useRef } from "react";
import educationLogo from "../../assets/images/education.png";
import Words from "../../resources/words";
import AboutMeCard from "../common/about-me-card";
import { Navigation, Pagination, Autoplay, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProgressSkill from "../common/progress-skill";
import ReactLottie from "../../assets/lotties/react-logo.json";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ScrollAnim from "rc-scroll-anim";
import { usePageContext } from "../contexts/page-context";
import Slide from "react-reveal/Slide";
import { Parallax } from "rc-scroll-anim";
import Fade from "react-reveal/Fade";
import { CgArrowsShrinkH } from "react-icons/cg";

const { Title, Text } = Typography;
var ScrollOverPack = ScrollAnim.OverPack;

const AboutMe = () => {
  const { darkMode } = usePageContext();

  return (
    <Parallax
      style={{
        marginRight: 150,
        marginLeft: 150,
        borderRadius: 25,
        transition: "all 0.6s ease-in",
        boxShadow: darkMode ? "#030852 0px 5px " : "#FFF56D 0px 5px ",
      }}
      always={false}
    >
      <div>
        <Fade left duration={1000}>
          <Row
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 60,
            }}
          >
            <Col md={24}>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Col>
                  <Title style={{ color: darkMode ? "white" : "#141414" }}>
                    <Slide left duration={1000} cascade>
                      {Words.about_me_title}
                    </Slide>
                  </Title>
                </Col>
                <Col>
                  <Slide left duration={1000} cascade>
                    <Space align="center">
                      <CgArrowsShrinkH
                        fontSize={60}
                        style={{ color: "white", paddingBottom: 10 }}
                      />
                      <Title
                        style={{ color: darkMode ? "white" : "#141414" }}
                        className="ParagraphEight"
                      >
                        Swipe
                      </Title>
                    </Space>
                  </Slide>
                </Col>
              </Row>
            </Col>
            <Col md={24}>
              <Row justify="center">
                <Col className="center">
                  <Swiper
                    centeredSlides={true}
                    loop={true}
                    spaceBetween={10}
                    lazy={true}
                    slidesPerView={1}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Lazy, Pagination, Navigation]}
                    className="mySwiper cursorGrab"
                  >
                    <SwiperSlide>
                      <ProgressSkill />
                    </SwiperSlide>
                    <SwiperSlide>
                      <AboutMeCard
                        text={Words.greeting_text}
                        title={"My knowledge"}
                        logo={ReactLottie}
                        size={true}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <AboutMeCard
                        text={Words.education_text}
                        title={"Education"}
                        logo={educationLogo}
                      />
                    </SwiperSlide>
                  </Swiper>
                </Col>
              </Row>
            </Col>
          </Row>
        </Fade>
      </div>
    </Parallax>
  );
};

export default AboutMe;
