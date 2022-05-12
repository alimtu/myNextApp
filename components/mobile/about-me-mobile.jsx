import { Col, Row, Typography } from "antd";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Words from "../../resources/words";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay, Lazy, EffectCube } from "swiper";
import AboutMeCard from "../common/about-me-card";
import ProgressSkill from "../common/progress-skill";
import ReactLottie from "../../assets/lotties/react-logo.json";
import educationLogo from "../../assets/images/education.png";
import ProgressSkillMobile from "./inner-component/progress-skill-mobile";
import AboutMeCardMobile from "./inner-component/about-me-card";
import ScrollAnim from "rc-scroll-anim";
import { Parallax } from "rc-scroll-anim";
import Slide from "react-reveal/Slide";
import { usePageContext } from "../contexts/page-context";
import { useSwiperSlide } from "swiper/react";

var ScrollOverPack = ScrollAnim.OverPack;

const { Title, Text } = Typography;

const AboutMeMobile = () => {
  const { darkMode } = usePageContext();

  const [indexSwiper, setIndexSwiper] = useState(0);

  const handleSwiperSlideChange = (e) => {
    setIndexSwiper(e.activeIndex);
  };

  return (
    <Row justify="center" style={{ marginTop: 20 }} gutter={[0, 30]}>
      <Col
        xs={24}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 15,
        }}
      >
        <Title
          style={{
            color: darkMode ? "white" : "#141414",
            margin: 0,
          }}
        >
          <Slide left duration={1000} cascade>
            {Words.about_me_title}
          </Slide>
        </Title>
      </Col>
      <Col xs={24} style={{ zIndex: 6 }}>
        <Row justify="center">
          <Col xs={24}>
            <Parallax
              animation={[
                { x: 0, playScale: [0, 0.5] },
                { blur: "0px", playScale: [0.5, 1] },
              ]}
              style={{
                transform: "translateX(-200px)",
              }}
              always={false}
            >
              <Swiper
                centeredSlides={true}
                onSlideChange={(e) => handleSwiperSlideChange(e)}
                spaceBetween={30}
                grabCursor={true}
                lazy={true}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                modules={[Lazy, Autoplay, Pagination]}
                className={
                  indexSwiper !== 1 ? "mobileSwiper" : "mobileSwiperIndexed"
                }
              >
                <SwiperSlide className="swiper-slide">
                  <ProgressSkillMobile darkMode={darkMode} />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <AboutMeCardMobile
                    text={Words.about_programmer}
                    title={"My knowledge"}
                    logo={ReactLottie}
                    size={true}
                    darkMode={darkMode}
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <AboutMeCardMobile
                    text={Words.education_text}
                    title={"Education"}
                    logo={educationLogo}
                    darkMode={darkMode}
                  />
                </SwiperSlide>
              </Swiper>
            </Parallax>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AboutMeMobile;
