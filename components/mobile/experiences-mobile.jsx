import { Col, Row, Card, Typography, Space } from "antd";
import React, { memo } from "react";
import Words from "../../resources/words";
import CertificateImage from "../../assets/images/certificate.PNG";
import Profile from "../../assets/images/profile.jpg";
import Seentra from "../../assets/images/seentra.PNG";
import Accounting from "../../assets/images/accounting.jpg";
import onlineTest from "../../assets/images/onlineTest.jpg";
import ScrollAnim from "rc-scroll-anim";
import ExperienceCardMobile from "./inner-component/experience-card-mobile";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Lazy, EffectFade } from "swiper";
import Zoom from "react-reveal/Zoom";
import LottieFile from "../common/lottie";
import programming from "../../assets/lotties/programming.json";
import Slide from "react-reveal/Slide";
import { usePageContext } from "../contexts/page-context";
import { CgArrowsShrinkH } from "react-icons/cg";
import Bounce from "react-reveal/Bounce";

const { Title } = Typography;

const experienceCardData = [
  {
    image: CertificateImage,
    bgColor: "#FFE0C7",
    title: "Certification",
    text: "In this system, users can design their desired forms as they wish. The system is completely dynamic.It has 2 separate panels as well as a validation page",
    finishedDate: "2021/09",
    startedDate: "2021/06",
    timeDate: "1 month",
  },
  {
    image: Profile,
    bgColor: "#FFE0ED",
    title: "Profile",
    text: "The profile system is for university faculty members, which includes 2 separate panels for the admin and the user, as well as the system site itself",
    finishedDate: "2021/12",
    startedDate: "2021/10",
    timeDate: "2 month",
  },
  {
    image: Seentra,
    bgColor: "#CED4DE",
    title: "Seentra",
    text: "Sintra project is related to Shirgah steel factory in Mazandaran province, which is a comprehensive and complete system for that factory ",
    finishedDate: "-",
    startedDate: "2021/09",
    timeDate: "3 month",
  },
  {
    image: onlineTest,
    bgColor: "#23d1ae",
    title: "NCD",
    text: "This system is designed in 3 panels. In this system, students can participate in an exam designed for them by each professor in each semester.",
    finishedDate: "2022/04",
    startedDate: "2022/03",
    timeDate: "3 month",
  },
  {
    image: Accounting,
    bgColor: "#FEFBF3",
    title: "Accounting",
    text: "It is a comprehensive system that can provide various EPIs to other systems or organizations. Designed in two panels",
    finishedDate: "2021/07",
    startedDate: "2021/04",
    timeDate: "3 month",
  },
];

const ExperiencesMobile = () => {
  const { darkMode } = usePageContext();

  return (
    <>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
        gutter={[0, 10]}
      >
        <Col xs={24}>
          <LottieFile animationData={programming} width={350} loop="false" />
        </Col>

        <Col xs={24} className="center">
          <Title style={{ color: darkMode ? "white" : "#141414", margin: 0 }}>
            <Slide left duration={1000} cascade>
              {Words.experiences_title}
            </Slide>
          </Title>
        </Col>

        <Col xs={24} className="center">
          <Bounce top duration={1000} cascade>
            <Space align="center">
              <Title
                style={{ color: darkMode ? "#FFE300" : "#5902EC" }}
                className="ParagraphEight"
              >
                Swipe
              </Title>
              <CgArrowsShrinkH
                fontSize={60}
                style={{
                  color: darkMode ? "#FFE300" : "#5902EC",
                  paddingBottom: 10,
                }}
              />
            </Space>
          </Bounce>
        </Col>

        <Col xs={24}>
          <Zoom top>
            <Row align="middle" justify="center">
              <Swiper
                centeredSlides={true}
                loop={true}
                grabCursor={true}
                lazy={true}
                slidesPerView={1}
                cubeEffect={{
                  shadow: false,
                  slideShadows: false,
                }}
                fadeEffect={{
                  duration: 5000,
                }}
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                effect={"fade"}
                modules={[Lazy, Autoplay, Pagination, EffectFade]}
                className="mobileSwiper2"
              >
                {experienceCardData.map((t, inx) => (
                  <SwiperSlide className="swiper-slide" key={inx + 1}>
                    <Col xs={24} key={inx} className="center">
                      <ExperienceCardMobile
                        image={t.image}
                        bgColor={t.bgColor}
                        title={t.title}
                        text={t.text}
                        finishedDate={t.finishedDate}
                        startedDate={t.startedDate}
                        timeDate={t.timeDate}
                        index={inx}
                      />
                    </Col>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Row>
          </Zoom>
        </Col>
      </Row>
    </>
  );
};

export default memo(ExperiencesMobile);
