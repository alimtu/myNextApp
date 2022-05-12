import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import picOne from "../../../assets/pics/pic1.jpg";
import picTwo from "../../../assets/pics/pic2.jpg";
import picThree from "../../../assets/pics/pic3.jpg";
import picFour from "../../../assets/pics/pic4.jpg";
import picFive from "../../../assets/pics/pic5.jpg";
import picSix from "../../../assets/pics/pic6.jpg";
import picSeven from "../../../assets/pics/pic7.jpg";
import picEight from "../../../assets/pics/pic8.jpg";
import picNine from "../../../assets/pics/pic9.jpg";
import picTen from "../../../assets/pics/pic10.jpg";
import picEleven from "../../../assets/pics/pic11.jpg";
import picTwelve from "../../../assets/pics/pic12.jpg";
import picThirteen from "../../../assets/pics/pic13.jpg";
import picFourteen from "../../../assets/pics/pic14.jpg";
import picFifteen from "../../../assets/pics/pic15.jpg";
import picSixteen from "../../../assets/pics/pic16.jpg";
import picSeventeen from "../../../assets/pics/pic17.jpg";
import picEightteen from "../../../assets/pics/pic18.jpg";
import picNineteen from "../../../assets/pics/pic19.jpg";
import picTwenty from "../../../assets/pics/pic20.jpg";
import picTwentyOne from "../../../assets/pics/pic21.jpg";
import { Parallax } from "rc-scroll-anim";
import Image from "next/image";
import { EffectCreative, Autoplay, Lazy, Navigation } from "swiper";
import { Col, Row, Space, Typography } from "antd";
import { Slide } from "react-reveal";
import { CgArrowsShrinkH } from "react-icons/cg";
import { usePageContext } from "../../contexts/page-context";
import Bounce from "react-reveal/Bounce";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import {
  RiZoomInFill,
  RiZoomOutFill,
  RiStopCircleFill,
  RiPlayCircleFill,
} from "react-icons/ri";
import { BiReset } from "react-icons/bi";
import { useState } from "react";

const { Text, Title } = Typography;
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

const OpenSourceSwiperMobile = () => {
  const { darkMode } = usePageContext();

  const [canPlay, setCanPlay] = useState(true);

  return (
    <Parallax
      animation={{ opacity: 1, playScale: [0.1, 0.6] }}
      style={{ opacity: 0, paddingTop: 10 }}
      always={false}
    >
      <Row gutter={[0, 10]}>
        <Col xs={24} className="center">
          <Bounce top duration={1000} cascade>
            <Space align="center">
              {/* <CgArrowsShrinkH
                fontSize={60}
                style={{
                  color: darkMode ? "#FFE300" : "#5902EC",
                  paddingBottom: 10,
                }}
              /> */}
              <Title
                style={{ color: darkMode ? "#FFE300" : "#5902EC" }}
                className="ParagraphEight"
              >
                {` Swipe OR Zoom`}
              </Title>
            </Space>
          </Bounce>
        </Col>
        <Col xs={24} style={{ zIndex: 0 }}>
          <TransformWrapper initialScale={1}>
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <React.Fragment>
                <Space
                  className="tools"
                  style={{ marginBottom: 20 }}
                  size="large"
                >
                  <RiZoomInFill
                    onClick={() => zoomIn()}
                    style={{ fontSize: 40, color: "#FCFFA6" }}
                  />
                  <RiZoomOutFill
                    onClick={() => zoomOut()}
                    style={{ fontSize: 40, color: "#C1FFD7" }}
                  />
                  <BiReset
                    onClick={() => resetTransform()}
                    style={{ fontSize: 40, color: "#B5DEFF" }}
                  />
                  {canPlay ? (
                    <RiStopCircleFill
                      onClick={() => setCanPlay(false)}
                      style={{ fontSize: 40, color: "#CAB8FF" }}
                    />
                  ) : (
                    <RiPlayCircleFill
                      onClick={() => setCanPlay(true)}
                      style={{ fontSize: 40 }}
                    />
                  )}
                </Space>
                <TransformComponent>
                  <Swiper
                    grabCursor={true}
                    effect={"creative"}
                    loop={true}
                    creativeEffect={{
                      prev: {
                        shadow: true,
                        translate: ["-120%", 0, -500],
                      },
                      next: {
                        shadow: true,
                        translate: ["120%", 0, -500],
                      },
                    }}
                    autoplay={
                      canPlay
                        ? {
                            delay: 2500,
                            disableOnInteraction: false,
                          }
                        : { delay: 20500, disableOnInteraction: false }
                    }
                    lazy={true}
                    modules={[EffectCreative, Autoplay, Lazy]}
                    className="cvSwiper"
                    style={{ marginLeft: 10 }}
                  >
                    {imageArray.map((t, inx) => (
                      <SwiperSlide className="cvSwiper-slide" key={inx}>
                        <Image alt="picture" src={t} layout="intrinsic" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </TransformComponent>
              </React.Fragment>
            )}
          </TransformWrapper>
        </Col>
      </Row>
    </Parallax>
  );
};

export default OpenSourceSwiperMobile;
