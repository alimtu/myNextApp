import React from "react";
import { Card, Steps, Typography, Col, Row, Space } from "antd";
import { BiCodeBlock } from "react-icons/bi";
import { FaRegCalendarCheck, FaRegCalendarPlus } from "react-icons/fa";
import TweenOne from "rc-tween-one";
import { Parallax } from "rc-scroll-anim";
import Image from "next/image";
const { Text, Title } = Typography;
const { Step } = Steps;

const ExperienceCardMobile = ({
  image,
  bgColor,
  title,
  text,
  finishedDate,
  startedDate,
}) => {
  return (
    <Card
      style={{
        borderRadius: 5,
        backgroundColor: bgColor,
      }}
      bordered={false}
      cover={
        <Parallax
          animation={{ y: 0, opacity: 1, playScale: [0, 0.3] }}
          style={{
            transform: "translateY(-200px)",
            opacity: 0,
            transition: "all 0.6s ease-in",
          }}
        >
          <Image
            alt="picture"
            src={image}
            style={{
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
            height={150}
            width={320}
          />
        </Parallax>
      }
    >
      <Row style={{ width: "100%" }} align="middle" gutter={[0, 20]}>
        <Col xs={24}>
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0, 0.3] }}
            style={{
              transform: "translateX(-200px)",
              opacity: 0,
              transition: "all 0.6s ease-in",
            }}
            always={false}
          >
            <Title
              level={2}
              style={{
                alignSelf: "center",
                display: "flex",
                alignItems: "center",
              }}
              className="ParagraphFour"
            >
              {title}
            </Title>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 600,
                textAlign: "start",
                display: "flex",
              }}
              className="ParagraphOne"
            >
              {text}
            </Text>
          </Parallax>
        </Col>
        <Col xs={24}>
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0, 0.3] }}
            style={{
              transform: "translateX(200px)",
              opacity: 0,
              transition: "all 0.6s ease-in",
            }}
            always={false}
          >
            <Space size="large">
              <Space style={{ marginRight: 30 }}>
                <FaRegCalendarPlus style={{ color: "#1a2a6c", fontSize: 25 }} />
                <Space>
                  <Space direction="vertical">
                    <Text className="ParagraphOne" style={{ fontWeight: 600 }}>
                      Started
                    </Text>
                    <Text className="ParagraphOne" style={{ fontWeight: 600 }}>
                      {startedDate}
                    </Text>
                  </Space>
                </Space>
              </Space>
              <Space>
                <FaRegCalendarCheck
                  style={{ color: "#8e44ad", fontSize: 25 }}
                />
                <Space>
                  <Space direction="vertical">
                    <Text className="ParagraphOne" style={{ fontWeight: 600 }}>
                      Finished
                    </Text>
                    <Text className="ParagraphOne" style={{ fontWeight: 600 }}>
                      {finishedDate}
                    </Text>
                  </Space>
                </Space>
              </Space>
            </Space>
          </Parallax>
        </Col>
      </Row>
    </Card>
  );
};

export default ExperienceCardMobile;
