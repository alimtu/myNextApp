import { Layout, Typography, Row, Col, Space, Menu, Button } from "antd";
import { isMobile } from "react-device-detect";
import { usePageContext } from "../components/contexts/page-context";
//---------
// import codeIcon from "../assets/images/sider-pics/code.png";
// import cvIcon from "../assets/images/sider-pics/cv.png";
// import handsIcon from "../assets/images/sider-pics/hands.png";
// import homeIcon from "../assets/images/sider-pics/home.png";
// import medalIcon from "../assets/images/sider-pics/medal.png";
// import reactIcon from "../assets/images/sider-pics/react.png";
// import rocketIcon from "../assets/images/sider-pics/rocket.png";
// import supportIcon from "../assets/images/sider-pics/support.png";
import reactRotate from "../assets/lotties/react-rotate-logo.json";
import { BsMoonFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import ScrollAnim from "rc-scroll-anim";
import LottieFile from "../components/common/lottie";
import MainComponent from "../components/sections/main-component";
import Particle from "../components/common/particle";
// import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
// import { useFullScreen } from "react-browser-hooks";
// import ScrollToTop from "../components/common/scroll-to-top";
// import Image from "next/image";
// import FullScreenButton from "../components/common/full-screen";
import Stagger from "../components/common/stagger";
import MetaComponent from "../components/common/meta";
import MenuModal from "../components/common/menu-modal";
import { useEffect, useState } from "react";
import waitingLottie from "../assets/lotties/waiting2.json";
import { FaCopyright } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const { Header, Content, Footer } = Layout;
const { Text } = Typography;
const Link = ScrollAnim.Link;

const MainHeader = () => {
  const { image, darkMode, setDarkMode } = usePageContext();

  // const handleFocusLink = (data) => {
  //   const { to } = data;
  //   switch (to) {
  //     case "Greeting":
  //       setImage(<Image alt="picture" src={homeIcon} width={45} height={45} />);
  //       break;
  //     case "What I do":
  //       setImage(
  //         <Image alt="picture" src={rocketIcon} width={45} height={45} />
  //       );
  //       break;
  //     case "About Me":
  //       setImage(
  //         <Image alt="picture" src={medalIcon} width={45} height={45} />
  //       );
  //       break;
  //     case "About Programming":
  //       setImage(
  //         <Image alt="picture" src={reactIcon} width={45} height={45} />
  //       );
  //       break;
  //     case "Experiences":
  //       setImage(
  //         <Image alt="picture" src={handsIcon} width={45} height={45} />
  //       );
  //       break;
  //     case "Portfolio & CV":
  //       setImage(<Image alt="picture" src={cvIcon} width={45} height={45} />);
  //       break;
  //     case "Packages":
  //       setImage(<Image alt="picture" src={codeIcon} width={45} height={45} />);
  //       break;
  //     case "Contacts":
  //       setImage(
  //         <Image alt="picture" src={supportIcon} width={45} height={45} />
  //       );
  //       break;
  //   }
  // };

  const itemsForMenu = (name) => {
    return (
      <Link
        offsetTop={+100}
        to={name}
        // onFocus={handleFocusLink}
        ease="easeOutBack"
        duration={1500}
      >
        <Text
          className="ParagraphThree"
          style={{
            color: darkMode ? "white" : "#141414",
            fontSize: 20,
          }}
        >
          {name}
        </Text>
      </Link>
    );
  };

  const items = [
    {
      label: itemsForMenu("Greeting"),
    },
    {
      label: itemsForMenu("About WebSite"),
    },
    {
      label: itemsForMenu("What I do"),
    },
    {
      label: itemsForMenu("About Me"),
    },
    {
      label: itemsForMenu("About Programming"),
    },
    {
      label: itemsForMenu("Experiences"),
    },
    {
      label: itemsForMenu("Portfolio & CV"),
    },
    {
      label: itemsForMenu("Packages"),
    },
    {
      label: itemsForMenu("Contacts"),
    },
  ];

  return (
    <Header
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: "fixed",
        zIndex: 100,
        width: "100%",
        paddingBottom: 40,
        paddingTop: 50,
        backgroundColor: darkMode ? "#001529" : "white",
      }}
    >
      <MetaComponent />
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100vw",
          paddingRight: 10,
          paddingLeft: 10,
        }}
        align="middle"
      >
        <Col md={1}>
          <Space
            size={"middle"}
            style={{
              display: "flex",
            }}
          >
            <Col className="center">{image}</Col>
            <Col
              onClick={() => setDarkMode(!darkMode)}
              style={{ cursor: "pointer" }}
              className="center"
            >
              {darkMode ? (
                <FiSun
                  style={{
                    fontSize: 40,
                    color: "yellow",
                  }}
                />
              ) : (
                <BsMoonFill style={{ fontSize: 40, color: "#2f54eb" }} />
              )}
              {/* {<Image alt = "picture" src={menuIcon}  width={50} />} */}
            </Col>
          </Space>
        </Col>
        <Col md={18}>
          <Menu
            mode="horizontal"
            theme={darkMode ? "dark" : "light"}
            style={{
              display: "flex",
              justifyContent: "center",
              width: "70vw",
              alignSelf: "center",
            }}
            items={items}
          />
        </Col>
        <Col
          md={1}
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <LottieFile animationData={reactRotate} width={55} height={55} />
        </Col>
      </Row>
    </Header>
  );
};

const MainHeaderMobile = ({ darkMode, setDarkMode }) => {
  const { image } = usePageContext();

  return (
    <Row
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        position: "fixed",
        zIndex: 10,
        width: "100%",
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: darkMode ? "#001529" : "white",
        justifyContent: "space-between",
      }}
    >
      {/* <MetaComponent /> */}
      {darkMode ? (
        <Fade top>
          {darkMode && (
            <Col style={{ marginLeft: 15 }}>
              <LottieFile animationData={reactRotate} width={50} height={50} />
            </Col>
          )}

          <Col style={!darkMode ? { marginLeft: 15 } : {}}>
            <Text
              style={{ color: darkMode ? "white" : "black", fontSize: 30 }}
              className="ParagraphFive"
            >
              {image}
            </Text>
          </Col>

          <Col
            style={{ marginRight: 15 }}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <FiSun style={{ fontSize: 30, color: "yellow" }} />
            ) : (
              <BsMoonFill style={{ fontSize: 30, color: "#2f54eb" }} />
            )}
          </Col>
        </Fade>
      ) : (
        <>
          {darkMode && (
            <Col style={{ marginLeft: 15 }}>
              <LottieFile animationData={reactRotate} width={50} height={50} />
            </Col>
          )}

          <Col style={!darkMode ? { marginLeft: 15 } : {}}>
            <Text
              style={{ color: darkMode ? "white" : "black", fontSize: 30 }}
              className="ParagraphFive"
            >
              {image}
            </Text>
          </Col>

          <Col
            style={{ marginRight: 15 }}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <FiSun style={{ fontSize: 30, color: "yellow" }} />
            ) : (
              <BsMoonFill style={{ fontSize: 30, color: "#2f54eb" }} />
            )}
          </Col>
        </>
      )}
    </Row>
  );
};

const HomePage = () => {
  const { darkMode, setDarkMode, starExist, setImage } = usePageContext();

  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWaiting(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (waiting) {
    return (
      <Row
        className="center"
        style={{ minHeight: "100vh", backgroundColor: "#001529" }}
      >
        <Space
          direction="vertical"
          align="center"
          style={{ position: "absolute", top: isMobile ? 100 : 250 }}
        >
          <Col xs={24} md={24} className="center" style={{}}>
            <LottieFile
              animationData={waitingLottie}
              width={320}
              height={320}
            />
          </Col>

          <Col
            xs={24}
            className="center"
            style={{
              position: "absolute",
              bottom: -30,
              left: 0,
              right: 0,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "normal",
              }}
              className="ParagraphOne"
            >
              <Fade delay={500} top cascade>
                Please Wait ...
              </Fade>
            </Text>
          </Col>
        </Space>
      </Row>
    );
  }
  return (
    <Layout style={{ maxWidth: "100vw" }}>
      <MetaComponent />

      {isMobile ? (
        <MainHeaderMobile darkMode={darkMode} setDarkMode={setDarkMode} />
      ) : (
        <MainHeader />
      )}

      <Content>
        <div
          id="app-container"
          className="site-layout-background"
          style={{
            marginTop: isMobile ? 40 : 0,
            backgroundColor: darkMode ? "#001529" : "white",
          }}
        >
          <MainComponent setImage={setImage} />
          <Stagger />
          <MenuModal />
          {starExist && <Particle />}
        </div>
      </Content>
      <Footer
        className="center"
        style={{
          backgroundColor: darkMode ? "#001529" : "white",
          borderTop: darkMode ? "2px solid white" : "2px solid black",
        }}
      >
        <Space align="center">
          <FaCopyright
            style={{
              color: darkMode ? "white" : "#141414",
              fontSize: 20,
              marginTop: 5,
            }}
          />
          <Text
            style={{
              color: darkMode ? "white" : "#141414",
              fontSize: 20,
            }}
            className="ParagraphThree"
          >
            {isMobile
              ? "Copyright 2022"
              : "Copyright 2022 Ali Montazerion , All Rights Reserved"}
          </Text>
        </Space>
      </Footer>
    </Layout>
  );
};

export default HomePage;
