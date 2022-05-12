import { Button, Card, Col, Row, Space, Typography } from "antd";
import { Parallax } from "rc-scroll-anim";
import React from "react";
import { BsDot } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import Fade from "react-reveal/Fade";
import { usePageContext } from "../contexts/page-context";
import Image from "next/image";

const { Text, Title } = Typography;

const ProgrammingCard = ({ cardData, icon }) => {
  const { darkMode } = usePageContext();

  return (
    <Card
      style={{
        borderRadius: 10,
        marginTop: 20,
        width: 1150,
        backgroundColor: darkMode ? "#001529" : "white",
        borderColor: darkMode ? "#001529" : "white",
      }}
      className={
        darkMode
          ? icon
            ? "programmingCard"
            : "programmingCard2"
          : icon
          ? "programmingCardDay"
          : "programmingCard2Day"
      }
    >
      <Fade top>
        <Row style={{ width: "100%" }}>
          <Col md={8}>
            <Space direction="vertical" style={{ width: "80%" }}>
              <Title
                level={2}
                style={{ margin: 0, color: darkMode ? "white" : "#141414" }}
                className="ParagraphFour"
              >{`What is ${cardData.name} ?`}</Title>
              <Text
                style={{
                  color: darkMode ? "white" : "#141414",
                  fontSize: 20,
                  display: "flex",
                  fontWeight: "normal",
                }}
                className="ParagraphOne"
              >
                {cardData.data[0].whatText}
              </Text>
              <a
                href={cardData.data[1].whatLink}
                target={"_blank"}
                rel="noreferrer"
              >
                <Button
                  type="primary"
                  style={{
                    marginTop: "30px",
                    backgroundColor: "purple",
                    borderColor: "purple",
                    borderRadius: "5px",
                  }}
                  size="large"
                >
                  <Row align="middle">
                    <Text
                      style={{
                        color: "white",
                        marginRight: 5,
                      }}
                      className="ParagraphThree"
                    >
                      Learn More
                    </Text>
                    <HiArrowNarrowRight fontSize={20} />
                  </Row>
                </Button>
              </a>
            </Space>
          </Col>
          <Col md={9}>
            <Space direction="vertical">
              <Title
                className="ParagraphFour"
                level={2}
                style={{ margin: 0, color: darkMode ? "white" : "#141414" }}
              >{`Why ${cardData.name} ?`}</Title>

              {cardData.data[0].whyTexts.map((t, inx) => (
                <Row align="center" key={inx + 1}>
                  <Col md={1} style={{ marginRight: 10 }}>
                    <BsDot
                      fontSize={30}
                      style={{ color: darkMode ? "white" : "#141414" }}
                    />
                  </Col>
                  <Col md={22}>
                    <Text
                      style={{
                        color: darkMode ? "white" : "#141414",
                        fontSize: 20,
                        display: "flex",
                        fontWeight: "normal",
                        textAlign: "start",
                      }}
                      className="ParagraphOne"
                    >
                      {t}
                    </Text>
                  </Col>
                </Row>
              ))}
              <a
                href={cardData.data[1].whyLink}
                target={"_blank"}
                rel="noreferrer"
              >
                <Button
                  type="primary"
                  style={{
                    marginTop: "30px",
                    backgroundColor: "#7262fd",
                    borderColor: "#7262fd",
                    borderRadius: "5px",
                  }}
                  size="large"
                >
                  <Row align="middle">
                    <Text
                      style={{
                        color: "white",
                        marginRight: 5,
                      }}
                      className="ParagraphThree"
                    >
                      Learn More
                    </Text>
                    <HiArrowNarrowRight fontSize={20} />
                  </Row>
                </Button>
              </a>
            </Space>
          </Col>
          <Col md={7} style={{ display: "flex", alignSelf: "center" }}>
            <Fade left>
              <Image
                alt="picture"
                src={cardData.data[2].image}
                style={{ borderRadius: 25 }}
                width={300}
                height={230}
                className="programmingImage"
                layout="fixed"
              />
            </Fade>
          </Col>
        </Row>
      </Fade>
    </Card>
  );
};

export default ProgrammingCard;
