import { Space, Typography } from "antd";
import React from "react";
import { usePageContext } from "../contexts/page-context";
import LottieFile from "./lottie";

const { Text } = Typography;

const handleMore = (text) => {
  switch (text) {
    case "+989333730037":
      return window.open(`tel:${"+989333730037"}`);
      break;
    case "montazerion@gmail.com":
      return window.open(`mailto:${"montazerion@gmail.com"}`);
      break;
    default:
      break;
  }
};

const ContactsSpace = ({ Icon, text, color }) => {
  const { darkMode } = usePageContext();
  return (
    <Space
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
      size={"middle"}
      onClick={() => handleMore(text)}
    >
      <Icon style={{ fontSize: "40px", color: color }} />
      <Text
        style={{ color: darkMode ? "white" : "#141414", fontSize: 20 }}
        className="ParagraphThree"
      >
        {text}
      </Text>
    </Space>
  );
};

export default ContactsSpace;
