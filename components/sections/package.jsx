import React, { memo } from "react";
import { Col, Row, Space, Typography } from "antd";
import CardPackage from "../common/package-card";
import { AiOutlineAntDesign, AiFillCodeSandboxCircle } from "react-icons/ai";
import ScrollAnim, { Parallax } from "rc-scroll-anim";
import { usePageContext } from "../contexts/page-context";

const { Text, Title } = Typography;

const VcCodepackageData = [
  { title: "Visual Studio" },
  [
    {
      title: "NPM",
      iconColor: "red",
    },
    {
      title: " Project Manager",
      iconColor: "skyblue",
    },
    {
      title: "ESLint",
      iconColor: "orange",
    },
    {
      title: "Snippets",
      iconColor: "red",
    },
    {
      title: "Stylelint",
      iconColor: "skyblue",
    },
    {
      title: "Prettier",
      iconColor: "orange",
    },
    {
      title: "Polacode",
      iconColor: "red",
    },
    {
      title: "GitLens",
      iconColor: "skyblue",
    },
    {
      title: "Path Intellisense",
      iconColor: "orange",
    },
  ],
];

const ReactJspackageData = [
  { title: "React JS" },
  [
    {
      title: "Ant Design",
      iconColor: "#D18CE0",
    },
    {
      title: "React Router",
      iconColor: "#FAF1E6",
    },
    {
      title: "React Motion",
      iconColor: "#FFE61B",
    },
    {
      title: "React Hook Form",
      iconColor: "#D18CE0",
    },
    {
      title: "FABRICS React",
      iconColor: "#FAF1E6",
    },
    {
      title: "Styled Components",
      iconColor: "#FFE61B",
    },
    {
      title: "Next",
      iconColor: "#D18CE0",
    },
    {
      title: "react-lottie",
      iconColor: "#FAF1E6",
    },
    {
      title: "React Query",
      iconColor: "#FFE61B",
    },
  ],
];
const ReactNativepackageData = [
  { title: "React Native" },
  [
    {
      title: "NativeBase",
      iconColor: "red",
    },
    {
      title: "Lottie for React Native",
      iconColor: "skyblue",
    },
    {
      title: "React Native Vector Icons",
      iconColor: "orange",
    },
    {
      title: " React Native Mapview",
      iconColor: "red",
    },
    {
      title: "React Native Paper",
      iconColor: "skyblue",
    },
    {
      title: "Ignite CLI",
      iconColor: "orange",
    },
  ],
];

const Package = () => {
  const { darkMode } = usePageContext();

  return (
    <Parallax
      animation={[
        {
          backgroundColor: darkMode ? "#112F91" : "#B1E693",
          playScale: [0.1, 0.2],
        },
        {
          backgroundColor: darkMode ? "#5C33F6" : "#6ECB63",
          playScale: [0.2, 0.5],
        },
      ]}
      style={{
        marginRight: 250,
        marginLeft: 250,
        borderRadius: 25,
        padding: 50,
        transition: "all 0.6s linear",
        boxShadow: "#150E56 0px 15px 25px -12px",
      }}
      always={false}
    >
      <Row
        style={{
          padding: 60,
          paddingTop: 20,
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }}
        align="middle"
        justify="center"
        gutter={[0, 50]}
        // className={inViewport && leaveCount === 0 && css(styles.lightSpeedIn)}
      >
        <Col md={24}>
          <Title style={{ color: "white" }}>Packages</Title>
        </Col>
        <Space
          style={{ width: "100%", zIndex: 3 }}
          className="center"
          size={"large"}
        >
          <CardPackage inx={1} packageData={VcCodepackageData} />
          <CardPackage hover={true} packageData={ReactJspackageData} inx={2} />
          <CardPackage inx={3} packageData={ReactNativepackageData} />
        </Space>
      </Row>
    </Parallax>
  );
};

export default Package;
