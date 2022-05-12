import React, { useState } from "react";
import { Col, Row, Typography } from "antd";
import myCV from "../../../assets/images/myCV.PNG";
import myPhoto from "../../../assets/images/me.jpg";
import SurprizeLottie from "../../../assets/lotties/surprize-logo.json";
import LottieFile from "../../common/lottie";
import Zoom from "react-reveal/Zoom";
import Image from "next/image";
import ScrollAnim, { Parallax } from "rc-scroll-anim";

const { Text, Title } = Typography;
const ScrollOverPack = ScrollAnim.OverPack;

const MyCVMobile = ({ darkMode }) => {
  const [show2, setShow2] = useState(false);

  const handleShowLottie = () => {
    setTimeout(() => {
      setShow2(true);
    }, 3000);
  };

  return (
    <Row
      onClick={() => window.open("http://www.upsara.com/images/q779595_.pdf")}
      style={{ marginBottom: 50 }}
    >
      <Parallax
        animation={{ x: 0, opacity: 1, playScale: [0.2, 0.5] }}
        style={{
          opacity: 0,
        }}
        always={false}
      >
        <Zoom right>
          <Col
            style={{
              marginTop: 10,
              marginLeft: 20,
              borderRadius: 5,
              maxHeight: 358,
            }}
            className="cvMainImageMobile"
          >
            <Image
              src={myCV}
              alt="myCv"
              width={250}
              height={358}
              style={{ borderRadius: 5 }}
            />
          </Col>
        </Zoom>
      </Parallax>
      <Col
        style={{
          position: "absolute",
          bottom: 120,
          left: 10,
        }}
      >
        <Zoom top delay={1100} onReveal={() => handleShowLottie()}>
          <Image
            src={myPhoto}
            quality={100}
            alt="me"
            width={130}
            height={160}
            className="cvSecondImage"
            style={{ borderRadius: 10 }}
          />
        </Zoom>
      </Col>
      {show2 && (
        <>
          <Col
            style={{
              position: "absolute",
              zIndex: 1,
            }}
          >
            <LottieFile
              animationData={SurprizeLottie}
              loop="false"
              width={300}
              height={300}
            />
          </Col>
          <Col
            xs={24}
            style={{
              marginTop: 25,
              position: "absolute",
              bottom: 0,
              right: 0,
              left: 0,
            }}
          >
            <Title
              level={3}
              style={{ color: darkMode ? "white" : "#5902EC" }}
              className="ParagraphEight"
            >
              Download
            </Title>
          </Col>
        </>
      )}
    </Row>
  );
};

export default MyCVMobile;
