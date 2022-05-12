import React from "react";
import { Row, Col, Typography } from "antd";
import LottieFile from "../../common/lottie";
import Image from "next/image";

const { Title, Text } = Typography;

const AboutMeCardMobile = ({ logo, title, text, size, darkMode }) => {
  return (
    <Col xs={24}>
      {/* style={{ maxWidth: size ? 500 : 400 }} */}
      <Row
        style={{
          width: "100%",
          flexDirection: "column",
          display: "flex",
        }}
        gutter={[0, 20]}
      >
        <Col xs={24} style={{ marginLeft: 20 }}>
          <Title
            level={2}
            style={{ margin: 0, color: darkMode ? "white" : "#141414" }}
            className="TitleFontThree"
          >
            {title}
          </Title>
        </Col>

        <Col xs={24} className="center">
          {size ? (
            <LottieFile animationData={logo} width={200} height={200} />
          ) : (
            <Image alt="picture" src={logo} width={200} height={200} />
          )}
        </Col>

        <Col
          xs={20}
          className="center"
          style={{
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{ fontSize: 30, color: darkMode ? "white" : "#141414" }}
            className="ParagraphEight"
          >
            {text}
          </Text>
        </Col>
      </Row>
    </Col>
  );
};

export default AboutMeCardMobile;
