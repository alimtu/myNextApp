import { Tabs, Space, Typography, Card, Row, Col } from "antd";
import React, { memo, useState } from "react";
import { MdOutlineAutoFixHigh, MdOutlineAutoFixOff } from "react-icons/md";
import ScrollAnim, { Parallax } from "rc-scroll-anim";
import ProgrammingCardMobile from "./inner-component/programming-card-mobile";
import RubberBand from "react-reveal/RubberBand";
import { usePageContext } from "../contexts/page-context";
import { VscArrowBoth } from "react-icons/vsc";

var ScrollOverPack = ScrollAnim.OverPack;

const { Text, Title } = Typography;
const { TabPane } = Tabs;

const frameWorks = ["React JS", "React Native", "Next JS", "Node JS", "SQL"];

const cardData = [
  {
    name: "React JS",
    data: [
      {
        whatText:
          "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
      },
      {
        whatLink: "https://beta.reactjs.org/",
      },
    ],
  },
  {
    name: "React Native",
    data: [
      {
        whatText:
          "React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.",
      },
      {
        whatLink: "https://reactnative.dev/",
      },
    ],
  },
  {
    name: "Next JS",
    data: [
      {
        whatText:
          "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",
      },
      {
        whatLink: "https://nextjs.org/",
      },
    ],
  },
  {
    name: "Node JS",
    data: [
      {
        whatText:
          "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.",
      },
      {
        whatLink: "https://nodejs.org/en/",
      },
    ],
  },
  {
    name: "SQL",
    data: [
      {
        whatText:
          "Structured Query Language (SQL) is a standardized programming language that is used to manage relational databases and perform various operations on the data in them.",
      },
      {
        whatLink: "https://www.microsoft.com/en-us/sql-server/sql-server-2019",
      },
    ],
  },
];

const ProgrammingMobile = () => {
  const [icon, setIcon] = useState(false);
  const { darkMode } = usePageContext();

  const TabText = (name) => {
    return (
      <Text
        style={{
          color: darkMode ? "white" : "#141414",
          padding: 38,
          fontSize: "larger",
          textAlign: "center",
        }}
        className="ParagraphThree"
      >
        {name}
      </Text>
    );
  };

  return (
    <Parallax
      animation={{ opacity: 1, playScale: [0.1, 0.6] }}
      style={{ opacity: 0, paddingTop: 40 }}
      className="tween-one"
      always={false}
    >
      <Col xs={24} style={{ minHeight: "60vh" }}>
        <Space
          direction="vertical"
          // className={inViewport && leaveCount === 0 && css(styles.fadeIn)}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Row align="middle" justify="center">
            <RubberBand top cascade delay={1000}>
              <Col
                xs={24}
                className="center"
                style={{
                  flexDirection: "column",
                  marginBottom: 15,
                }}
              >
                <Text
                  style={{
                    color: darkMode ? "#946DFF" : "#531dab",
                    fontSize: "larger",
                  }}
                  className="ParagraphTwo"
                >
                  Services
                </Text>
                <Title
                  level={1}
                  style={{
                    color: darkMode ? "white" : "#141414",
                    margin: 0,
                  }}
                >
                  About Programming
                </Title>
              </Col>
              <Col style={{ position: "absolute", right: 110, top: -3 }}>
                {icon ? (
                  <MdOutlineAutoFixOff
                    fontSize={35}
                    style={{ color: "red" }}
                    className="cursor"
                    onClick={() => setIcon(!icon)}
                  />
                ) : (
                  <MdOutlineAutoFixHigh
                    fontSize={35}
                    style={{ color: "#1CC25E" }}
                    className="cursor"
                    onClick={() => setIcon(!icon)}
                  />
                )}
              </Col>
            </RubberBand>
            <Col
              xs={24}
              className="center"
              style={{ position: "absolute", top: 80 }}
            >
              <VscArrowBoth style={{ fontSize: 40, color: "#F9D923" }} />
            </Col>
          </Row>
          <Tabs
            // defaultActiveKey="1"
            centered
            style={{
              color: darkMode ? "white" : "#141414",
              width: 330,
              textAlign: "center",
            }}
            tabPosition={"top"}
          >
            {frameWorks.map((t, inx) => (
              <TabPane
                tab={TabText(t)}
                key={inx + 1}
                className="center"
                style={{ textAlign: "center" }}
              >
                <ProgrammingCardMobile
                  cardData={cardData[inx]}
                  icon={icon}
                  inx={inx}
                  darkMode={darkMode}
                />
              </TabPane>
            ))}
          </Tabs>
        </Space>
      </Col>
    </Parallax>
  );
};

export default memo(ProgrammingMobile);
