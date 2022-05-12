import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import { Autoplay, EffectCards, Lazy } from "swiper";
import picOne from "../../assets/pics/pic1.jpg";
import picTwo from "../../assets/pics/pic2.jpg";
import picThree from "../../assets/pics/pic3.jpg";
import picFour from "../../assets/pics/pic4.jpg";
import picFive from "../../assets/pics/pic5.jpg";
import picSix from "../../assets/pics/pic6.jpg";
import picSeven from "../../assets/pics/pic7.jpg";
import picEight from "../../assets/pics/pic8.jpg";
import picNine from "../../assets/pics/pic9.jpg";
import picTen from "../../assets/pics/pic10.jpg";
import picEleven from "../../assets/pics/pic11.jpg";
import picTwelve from "../../assets/pics/pic12.jpg";
import picThirteen from "../../assets/pics/pic13.jpg";
import picFourteen from "../../assets/pics/pic14.jpg";
import picFifteen from "../../assets/pics/pic15.jpg";
import picSixteen from "../../assets/pics/pic16.jpg";
import picSeventeen from "../../assets/pics/pic17.jpg";
import picEightteen from "../../assets/pics/pic18.jpg";
import picNineteen from "../../assets/pics/pic19.jpg";
import picTwenty from "../../assets/pics/pic20.jpg";
import picTwentyOne from "../../assets/pics/pic21.jpg";
import ScrollAnim from "rc-scroll-anim";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import { useState } from "react";
import { Col, Drawer, Row, Typography } from "antd";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";

const ScrollOverPack = ScrollAnim.OverPack;

const imageArray = [
  picNine,
  picTwo,
  picThree,
  picFour,
  picFive,
  picSix,
  picSeven,
  picEight,
  picNine,
  picTen,
  picEleven,
  picTwelve,
  picThirteen,
  picFourteen,
  picFifteen,
  picSixteen,
  picSeventeen,
  picEightteen,
  picNineteen,
  picTwenty,
  picTwentyOne,
];

const { Text } = Typography;

const OpenSourceSwiper = ({ darkMode }) => {
  const [index, setIndex] = useState(1);
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState("");

  const showDrawer = (index) => {
    setImage(imageArray.find((t, inx) => inx === index));
    setIndex(index);
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const handlePastIndex = () => {
    if (index === 0) {
      index = 20;
      setIndex(index);
    } else {
      index = index - 1;
      setIndex(index);
    }
    setImage(imageArray.find((t, inx) => inx === index));
  };
  const handleNextIndex = () => {
    if (index === 20) {
      index = 0;
      setIndex(index);
    } else {
      index = index + 1;
      setIndex(index);
    }
    setImage(imageArray.find((t, inx) => inx === index));
  };

  return (
    <div>
      <Fade delay={1000}>
        <Row>
          <Col md={24} className="center">
            <Swiper
              defaultValue={2}
              effect={"cards"}
              grabCursor={true}
              lazy={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[EffectCards, Autoplay, Lazy]}
              className="swiper2"
              style={{ marginTop: 20 }}
              loop={true}
            >
              {imageArray.map((t, inx) => (
                <SwiperSlide
                  className="swiper-slide2"
                  key={inx}
                  onClick={() => showDrawer(inx)}
                >
                  <Image alt="picture" src={t} layout="intrinsic" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col md={24} className="center" style={{ marginTop: 15 }}>
            <Text
              style={{
                color: darkMode ? "white" : "#141414",
                fontSize: 20,
                fontWeight: "normal",
              }}
              className="ParagraphSeven"
            >
              <u>Click on the Images</u>
            </Text>
          </Col>
        </Row>
      </Fade>
      <Drawer
        placement="right"
        width={"100%"}
        onClose={onClose}
        visible={visible}
        bodyStyle={{
          backgroundColor: "#333C83",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        closeIcon={<RiCloseCircleFill style={{ fontSize: 30, color: "red" }} />}
        headerStyle={{ backgroundColor: "#333C83" }}
      >
        <Row className="center" style={{ width: "100%" }}>
          <Col md={2}>
            <BsArrowLeftCircleFill
              style={{ fontSize: 50, color: "#F1D00A", cursor: "pointer" }}
              onClick={() => handlePastIndex()}
            />
          </Col>
          <Col md={20}>
            <Fade>
              <Image src={image} alt="picture" style={{ borderRadius: 5 }} />
            </Fade>
          </Col>
          <Col md={2}>
            <BsArrowRightCircleFill
              style={{ fontSize: 50, color: "#F1D00A", cursor: "pointer" }}
              onClick={() => handleNextIndex()}
            />
          </Col>
        </Row>
      </Drawer>
    </div>
  );
};

export default OpenSourceSwiper;
