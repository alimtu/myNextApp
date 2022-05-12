import { Col, Row, Card, Avatar, Divider, Typography } from "antd";
import React, { memo } from "react";
import ExperienceCard from "../common/experience-card";
import Words from "../../resources/words";
import CertificateImage from "../../assets/images/certificate.PNG";
import Profile from "../../assets/images/profile.jpg";
import Seentra from "../../assets/images/seentra.PNG";
import Accounting from "../../assets/images/accounting.jpg";
import onlineTest from "../../assets/images/onlineTest.jpg";
import ScrollAnim, { Parallax } from "rc-scroll-anim";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import handShakeImage from "../../assets/images/handShake.png";
//------------------------------
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Lazy } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { usePageContext } from "../contexts/page-context";
import Image from "next/image";

//------------------------------

var ScrollOverPack = ScrollAnim.OverPack;

const { Title, Text } = Typography;

const experienceCardData = [
  {
    image: CertificateImage,
    bgColor: "#FFE0C7",
    title: "Certification",
    text: "In this system, users can design their desired forms as they wish. The system is completely dynamic.It has 2 separate panels as well as a validation page",
    finishedDate: "2021/09",
    startedDate: "2021/06",
    timeDate: "3 month",
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
    timeDate: "7 month",
  },
  {
    image: Accounting,
    bgColor: "#FEFBF3",
    title: "Accounting",
    text: "This is a comprehensive system that can provide different APIs to other systems. Designed in two panels.",
    finishedDate: "2021/07",
    startedDate: "2021/04",
    timeDate: "3 month",
  },
  {
    image: onlineTest,
    bgColor: "#23d1ae",
    title: "NCD",
    text: "This system is designed in 3 panels. In this system, students can participate in an exam designed for them by each professor in each semester.",
    finishedDate: "2022/04",
    startedDate: "2022/03",
    timeDate: "1 month",
  },
];

const Experiences = () => {
  const { darkMode } = usePageContext();

  return (
    <>
      <Parallax
        style={{
          marginRight: 90,
          marginLeft: 90,
          borderRadius: 15,
          transition: "all 0.6s linear",
          boxShadow: !darkMode && "#87e8de 0px 25px 50px -12px",
        }}
        always={false}
        className="experienceBoxShadow"
      >
        <div style={{ minHeight: "80vh" }}>
          <Row
            style={{
              padding: 60,
              paddingBottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Col md={24}>
              <Row>
                <Col md={12}>
                  <Title
                    style={{ color: darkMode ? "white" : "#141414", margin: 0 }}
                  >
                    <Slide left duration={1000} cascade>
                      {Words.experiences_title}
                    </Slide>
                  </Title>
                </Col>
                <Col
                  md={12}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    position: "absolute",
                    right: -40,
                    zIndex: 3,
                    bottom: -100,
                  }}
                >
                  <Fade bottom delay={1000}>
                    <Image
                      alt="picture"
                      src={handShakeImage}
                      width={330}
                      height={200}
                      quality={100}
                    />
                  </Fade>
                </Col>
              </Row>
            </Col>
            <Col md={24} style={{ marginTop: 15 }}>
              <Text
                style={{
                  color: darkMode ? "white" : "#141414",
                  fontSize: 20,
                  display: "flex",
                  fontWeight: "normal",
                }}
                className="ParagraphOne"
              >
                All parts of these projects and other projects in the resume,
                including the DataBase, the Front-End and Back-End have been
                designed and developed by myself.
              </Text>
            </Col>
            <Col
              md={24}
              style={{ marginTop: 40, zIndex: 3 }}
              className="center"
            >
              <Row align="middle" justify="center">
                <Slide bottom duration={1500}>
                  <div>
                    <Swiper
                      effect={"coverflow"}
                      grabCursor={true}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      spaceBetween={50}
                      centeredSlides={true}
                      slidesPerView={3}
                      coverflowEffect={{
                        rotate: 35,
                        stretch: 0,
                        depth: 150,
                        modifier: 1,
                      }}
                      lazy={true}
                      loop={true}
                      pagination={true}
                      modules={[EffectCoverflow, Pagination, Autoplay, Lazy]}
                      className="Exswiper"
                    >
                      {experienceCardData.map((t, inx) => (
                        <SwiperSlide className="Exswiper-slide" key={inx}>
                          <ExperienceCard
                            image={t.image}
                            bgColor={t.bgColor}
                            title={t.title}
                            text={t.text}
                            finishedDate={t.finishedDate}
                            startedDate={t.startedDate}
                            timeDate={t.timeDate}
                            index={inx}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </Slide>
              </Row>
            </Col>
          </Row>
        </div>
      </Parallax>
    </>
  );
};

export default Experiences;
