import React from "react";
import { Card, Steps, Typography, Col, Row } from "antd";
import { BiCodeBlock } from "react-icons/bi";
import { FaRegCalendarCheck, FaRegCalendarPlus } from "react-icons/fa";
import { Parallax } from "rc-scroll-anim";

import Image from "next/image";

const { Text, Title } = Typography;
const { Step } = Steps;

const ExperienceCard = (props) => {
  const {
    image,
    bgColor,
    title,
    text,
    finishedDate,
    startedDate,
    timeDate,
    index,
  } = props;
  return (
    <Card
      style={{
        borderRadius: 8,
        backgroundColor: bgColor,
        width: "100%",
        height: "100%",
      }}
      bordered={false}
      cover={
        <Parallax
          animation={{ y: 0, opacity: 1, playScale: [0, 0.2] }}
          style={{
            transform: "translateY(-200px)",
            opacity: 0,
            transition: "all 0.6s ease-in",
          }}
        >
          <Image
            alt={index}
            src={image}
            style={{
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
            }}
            width={450}
            height={200}
          />
        </Parallax>
      }
    >
      <Row justify="center" align="middle">
        <Col md={13}>
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0, 0.2] }}
            style={{
              transform: "translateX(-200px)",
              opacity: 0,
              transition: "all 0.6s ease-in",
            }}
            always={false}
          >
            <Title
              level={1}
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
                fontSize: 20,
                fontWeight: 900,
                textAlign: "left",
                display: "flex",
              }}
              className="ParagraphOne"
            >
              {text}
            </Text>
          </Parallax>
        </Col>
        <Col md={10} style={{ marginLeft: "15px" }}>
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0, 0.2] }}
            style={{
              transform: "translateX(200px)",
              opacity: 0,
              transition: "all 0.6s ease-in",
            }}
            always={false}
          >
            <Steps direction="vertical">
              <Step
                title={
                  <Text className="ParagraphOne" style={{ fontWeight: 600 }}>
                    Started
                  </Text>
                }
                description={
                  <Text className="ParagraphEight" style={{ fontSize: 17 }}>
                    {startedDate}
                  </Text>
                }
                icon={<FaRegCalendarPlus style={{ color: "#1a2a6c" }} />}
              />
              <Step
                title={
                  <Text className="ParagraphOne" style={{ fontWeight: 600 }}>
                    In Progress
                  </Text>
                }
                description={
                  <Text className="ParagraphEight" style={{ fontSize: 17 }}>
                    {timeDate}
                  </Text>
                }
                icon={<BiCodeBlock style={{ color: "#b21f1f" }} />}
              />
              <Step
                title={
                  <Text className="ParagraphOne" style={{ fontWeight: 600 }}>
                    Finished
                  </Text>
                }
                description={
                  <Text className="ParagraphEight" style={{ fontSize: 17 }}>
                    {finishedDate}
                  </Text>
                }
                icon={<FaRegCalendarCheck style={{ color: "#8e44ad" }} />}
              />
            </Steps>
          </Parallax>
        </Col>
      </Row>
    </Card>
  );
};

export default ExperienceCard;
