import {
  Button,
  Card,
  Col,
  Row,
  Space,
  Typography,
  Image,
  Divider,
} from "antd";
import React from "react";
import ScrollAnim, { Parallax } from "rc-scroll-anim";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";

const { Text, Title } = Typography;

const ProgrammingCardMobile = ({ cardData, icon, inx, darkMode }) => {
  return (
    <Card
      style={{
        borderRadius: "10px",
        backgroundColor: darkMode ? "#001529" : "white",
        borderColor: darkMode ? "#001529" : "white",
        minHeight: "55vh",
      }}
      className={
        icon
          ? inx % 2 === 0
            ? "MobileProgrammingCard1"
            : "MobileProgrammingCard2"
          : "MobileProgrammingCard3"
      }
    >
      <Col xs={24}>
        <Parallax
          animation={[
            {
              backgroundColor: "#003a8c",
              playScale: [0.1, 0.5],
            },
            {
              backgroundColor: "#1890ff",
              playScale: [0.5, 0.8],
            },
          ]}
          style={{
            filter: "blur(0px)",
            color: "#fff",
            borderRadius: 5,
            padding: 20,
          }}
        >
          {inx === 0 ? (
            <Fade bottom>
              <Space direction="vertical" className="center">
                <Title
                  level={2}
                  style={{ margin: 0, color: "white" }}
                  className="ParagraphFour"
                >{`What is ${cardData.name} ?`}</Title>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    textAlign: "center",
                    display: "flex",
                    fontWeight: "normal",
                  }}
                  className="ParagraphOne"
                >
                  {cardData.data[0].whatText}
                </Text>
                <Roll left delay={500}>
                  <a
                    href={cardData.data[1].whatLink}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <Button
                      type="primary"
                      style={{
                        marginTop: 10,
                        backgroundColor: "purple",
                        borderColor: "purple",
                        borderRadius: "5px",
                      }}
                      size="large"
                    >
                      <Text
                        className="ParagraphThree"
                        style={{ color: "white" }}
                      >
                        Learn More
                      </Text>
                    </Button>
                  </a>
                </Roll>
              </Space>
            </Fade>
          ) : (
            <Space direction="vertical" className="center">
              <Title
                level={2}
                style={{ margin: 0, color: "white" }}
                className="ParagraphFour"
              >{`What is ${cardData.name} ?`}</Title>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  textAlign: "center",
                  display: "flex",
                  fontWeight: "normal",
                }}
                className="ParagraphOne"
              >
                {cardData.data[0].whatText}
              </Text>
              <Roll left delay={500}>
                <a
                  href={cardData.data[1].whatLink}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Button
                    type="primary"
                    style={{
                      marginTop: 10,
                      backgroundColor: "purple",
                      borderColor: "purple",
                      borderRadius: "5px",
                    }}
                    size="large"
                  >
                    <Text className="ParagraphThree" style={{ color: "white" }}>
                      Learn More
                    </Text>
                  </Button>
                </a>
              </Roll>
            </Space>
          )}
        </Parallax>
      </Col>
    </Card>
  );
};

export default ProgrammingCardMobile;
