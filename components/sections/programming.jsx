import { Tabs, Space, Typography, Card, Row, Col } from "antd";
import React, { memo, useState } from "react";
import ProgrammingCard from "../common/programming-card";
import reactJsLogo from "../../assets/images/programming/react-js.jpg";
import reactNativeLogo from "../../assets/images/programming/react-native.jpg";
import nextJsLogo from "../../assets/images/programming/next-js.jpg";
import nodeJsLogo from "../../assets/images/programming/node-js.jpg";
import sqlLogo from "../../assets/images/programming/sql.jpg";
import { MdOutlineAutoFixHigh, MdOutlineAutoFixOff } from "react-icons/md";
import Slide from "react-reveal/Slide";
import { usePageContext } from "../contexts/page-context";

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
        whyTexts: [
          "React is Flexible",
          "React Has a Great Developer Experience",
          "React Has Facebook's Support/Resources",
          "React Has Great Performance",
        ],
      },
      {
        whatLink: "https://beta.reactjs.org/",
        whyLink: "https://www.monocubed.com/blog/why-use-react/",
      },
      {
        image: reactJsLogo,
      },
    ],
  },
  {
    name: "React Native",
    data: [
      {
        whatText:
          "React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.",
        whyTexts: [
          "React Native uses fundamental Android and iOS building blocks ",
          "On top of being responsive and providing an impressive user experience",
          "React Native apps are faster and agile",
        ],
      },
      {
        whatLink: "https://reactnative.dev/",
        whyLink:
          "https://www.geeksforgeeks.org/why-you-should-choose-react-native/",
      },
      {
        image: reactNativeLogo,
      },
    ],
  },
  {
    name: "Next JS",
    data: [
      {
        whatText:
          "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",

        whyTexts: [
          "Server Side Rendering (SSR) & Static Site Generation (SSG)",
          "Automatic code splitting",
          "Hot Module Replacement",
          "More indexable, SEO friendly applications",
        ],
      },
      {
        whatLink: "https://nextjs.org/",
        whyLink:
          "https://www.clock.co.uk/insight/next-js-what-is-it-and-why-do-we-use-it",
      },
      {
        image: nextJsLogo,
      },
    ],
  },
  {
    name: "Node JS",
    data: [
      {
        whatText:
          "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.",

        whyTexts: [
          "Node JS runs on various platforms",
          "provides cross-platform applications which run easily on any web",
          "Node JS has a set of built-in modules which can be used without any further installation",
          "Node JS is fast, lightweight and efficient",
        ],
      },
      {
        whatLink: "https://nodejs.org/en/",
        whyLink: "https://www.w3schools.com/nodejs/nodejs_intro.asp",
      },
      {
        image: nodeJsLogo,
      },
    ],
  },
  {
    name: "SQL",
    data: [
      {
        whatText:
          "Structured Query Language (SQL) is a standardized programming language that is used to manage relational databases and perform various operations on the data in them.",
        whyTexts: [
          "SQL is high performance & accessible",
          "SQL has great transactional support & security features",
          "SQL suits organizations of any size",
          "SQL is portable",
        ],
      },
      {
        whatLink: "https://www.microsoft.com/en-us/sql-server/sql-server-2019",
        whyLink: "https://www.w3schools.com/sql/sql_intro.asp",
      },
      {
        image: sqlLogo,
      },
    ],
  },
];

const Programming = () => {
  const [icon, setIcon] = useState(true);
  const { darkMode } = usePageContext();

  const TabText = (name) => {
    return (
      <Text
        style={{
          color: darkMode ? "white" : "#141414",
          padding: 30,
          fontSize: "larger",
        }}
        className="ParagraphTwo"
      >
        {name}
      </Text>
    );
  };

  return (
    <Space
      direction="vertical"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 120,
      }}
    >
      <Slide bottom cascade delay={300}>
        <Row align="middle" justify="center" gutter={40}>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ color: "#946DFF", fontSize: "larger" }}
              className="ParagraphTwo"
            >
              Services
            </Text>
            <Title
              level={1}
              style={{ color: darkMode ? "white" : "#141414", margin: 0 }}
            >
              <Slide left duration={1000} cascade delay={1000}>
                About Programming
              </Slide>
            </Title>
          </Col>
          <Col>
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
        </Row>
        <Tabs
          // defaultActiveKey="1"
          centered
          style={{ color: darkMode ? "white" : "#141414" }}
          tabBarGutter={175}
          tabBarStyle={{
            textAlign: "center",
          }}
        >
          {frameWorks.map((t, inx) => (
            <TabPane
              tab={TabText(t)}
              key={inx + 1}
              className="center"
              style={{ marginBottom: "15px" }}
            >
              <ProgrammingCard cardData={cardData[inx]} icon={icon} />
            </TabPane>
          ))}
        </Tabs>
      </Slide>
    </Space>
  );
};

export default Programming;
