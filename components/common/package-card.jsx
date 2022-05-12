import React, { memo, useEffect, useState } from "react";
import { Card, Space, Typography, Button, Col } from "antd";
import calenderIcon from "../../assets/images/3d-calender.png";
import Words from "../../resources/words";
import PackageDrawer from "../common/package-drawer";
import { usePageContext } from "../contexts/page-context";
import Image from "next/image";
import { SiVisualstudiocode, SiReact, SiReacttable } from "react-icons/si";

const { Title, Text } = Typography;

// const useHover = () => {
//   const [isHovering, setIsHovering] = React.useState(false);

//   const handleMouseOver = React.useCallback(() => setIsHovering(true), []);
//   const handleMouseOut = React.useCallback(() => setIsHovering(false), []);

//   const nodeRef = React.useRef();

//   const callbackRef = React.useCallback(
//     (node) => {
//       if (nodeRef.current) {
//         nodeRef.current.removeEventListener("mouseover", handleMouseOver);
//         nodeRef.current.removeEventListener("mouseout", handleMouseOut);
//       }

//       nodeRef.current = node;

//       if (nodeRef.current) {
//         nodeRef.current.addEventListener("mouseover", handleMouseOver);
//         nodeRef.current.addEventListener("mouseout", handleMouseOut);
//       }
//     },
//     [handleMouseOver, handleMouseOut]
//   );

//   return [callbackRef, isHovering];
// };

const CardPackage = ({ hover, packageData, inx }) => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("bottom");
  const { darkMode } = usePageContext();

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Card
        style={{
          width: 300,
          borderRadius: 20,
          marginRight: 60,
          backgroundColor: darkMode ? "#001E6C" : "white",
          borderColor: darkMode ? "#001529" : "white",
          // boxShadow: hover ? "2px 2px 2px 2px rgba(9, 169, 243, 0.842)" : "",
        }}
        className={
          darkMode
            ? hover
              ? "packCard1 packCard"
              : "packCard"
            : hover
            ? "packCard1Day packCardDay"
            : "packCardDay"
        }
        hoverable={false}
      >
        <Space direction="vertical" className="center" size={"middle"}>
          <Col
            style={{
              backgroundColor:
                inx === 1 ? "#FFFCDC" : inx === 2 ? "#B5DEFF" : "#FFFCDC",
              borderRadius: "50%",
              minWidth: 200,
              minHeight: 200,
            }}
            className="center"
          >
            {inx === 1 ? (
              <SiVisualstudiocode style={{ fontSize: 120, color: "#4B7BE5" }} />
            ) : inx === 2 ? (
              <SiReact style={{ fontSize: 120, color: "#4700D8" }} />
            ) : (
              <SiReacttable style={{ fontSize: 120, color: "#14279B" }} />
            )}
          </Col>
          <Title
            level={3}
            style={{ color: darkMode ? "white" : "#141414" }}
            className="ParagraphFour"
          >
            {inx === 1
              ? "Visual Studios Extensions"
              : inx === 2
              ? "React JS Packages"
              : "React Native Packages"}
          </Title>
          <Text
            style={{
              textAlign: "center",
              display: "flex",
              color: darkMode ? "white" : "#141414",
              fontSize: 20,
            }}
            className="ParagraphOne"
          >
            {inx === 1
              ? "This list shows you some of the best Visual Studios Extensions"
              : inx === 2
              ? "This list shows you some of the best React JS Library packages"
              : "This list shows you some of the best React Native Library packages"}
          </Text>
          <Button
            type="primary"
            size="large"
            style={{
              borderRadius: "20px",
              color: "white",
            }}
            onClick={showDrawer}
          >
            <Text style={{ color: "white" }} className="ParagraphThree">
              Find Out More
            </Text>
          </Button>
        </Space>
      </Card>
      <PackageDrawer
        visible={visible}
        onClose={onClose}
        placement={placement}
        packageData={packageData}
      />
    </>
  );
};

export default CardPackage;
