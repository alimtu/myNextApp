import React, { useState } from "react";
import { Col, Row, Typography } from "antd";
import myCV from "../../assets/images/myCV.PNG";
import myPhoto from "../../assets/images/me.jpg";
import SurprizeLottie from "../../assets/lotties/surprize-logo.json";
import LottieFile from "./lottie";
import Zoom from "react-reveal/Zoom";
import Image from "next/image";

const { Text } = Typography;

const MyCV = ({ darkMode }) => {
  const [show2, setShow2] = useState(false);

  const handleShowLottie = () => {
    setTimeout(() => {
      setShow2(true);
    }, 4000);
  };

  return (
    <Row
      onClick={() => window.open("http://www.upsara.com/images/q779595_.pdf")}
    >
      <Zoom right>
        <Col
          style={{
            marginTop: 10,
            marginRight: 40,
            backgroundColor: "white",
            borderRadius: 5,
          }}
          className="cvMainImage"
        >
          <Image
            src={myCV}
            alt="myCv"
            width={420}
            height={540}
            style={{ borderRadius: 5 }}
          />
        </Col>
      </Zoom>
      <Col
        style={{
          position: "absolute",
          bottom: 95,
          left: 50,
        }}
      >
        <Zoom top delay={1000} onReveal={() => handleShowLottie()}>
          <Image
            alt="picture"
            src={myPhoto}
            width={150}
            height={180}
            className="cvSecondImage"
            style={{ borderRadius: 10 }}
          />
        </Zoom>
      </Col>

      {show2 && (
        <Col
          style={{
            position: "absolute",
            bottom: 100,
            right: 140,
            zIndex: 1000,
          }}
        >
          <LottieFile animationData={SurprizeLottie} loop="false" />
        </Col>
      )}
      <Col md={24} style={{ position: "absolute", bottom: -60, left: 170 }}>
        <Zoom bottom delay={1000} onReveal={() => handleShowLottie()}>
          <Text
            style={{
              color: darkMode ? "white" : "#141414",
              fontSize: 20,
              display: "flex",
              fontWeight: "normal",
            }}
            className="ParagraphSeven"
          >
            <u> Click To Download CV</u>
          </Text>
        </Zoom>
      </Col>
    </Row>
  );
};

export default MyCV;
