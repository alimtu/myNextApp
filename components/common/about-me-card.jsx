import React from "react";
import { Row, Col, Space, Typography } from "antd";
import LottieFile from "./lottie";
import { usePageContext } from "../contexts/page-context";
import Image from "next/image";

const { Title, Text } = Typography;

const AboutMeCard = (props) => {
  const { logo, title, subTitle, text, size } = props;
  const { darkMode } = usePageContext();

  return (
    <Col md={24}>
      <Row justify={"center"} align="middle" gutter={size ? 0 : 50}>
        <Col>
          {size ? (
            <LottieFile animationData={logo} />
          ) : (
            <Image alt="picture" src={logo} width={400} height={400} />
          )}
        </Col>
        <Col>
          <Space direction="vertical" style={{ maxWidth: size ? 600 : 500 }}>
            <Title
              style={{ margin: 0, color: darkMode ? "white" : "#141414" }}
              className="ParagraphOne"
            >
              {title}
            </Title>
            {subTitle && (
              <Title
                level={3}
                style={{
                  textAlign: "center",
                  margin: 0,
                  color: darkMode ? "white" : "#141414",
                }}
                className="TitleFontThree"
              >
                {subTitle}
              </Title>
            )}
            <Text
              style={{ fontSize: 30, color: darkMode ? "white" : "#141414" }}
              className="ParagraphOne"
            >
              {text}
            </Text>
          </Space>
        </Col>
      </Row>
    </Col>
  );
};

export default AboutMeCard;
