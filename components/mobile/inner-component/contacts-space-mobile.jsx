import { Col, Space, Typography } from "antd";
import React from "react";
import { usePageContext } from "../../contexts/page-context";

const { Text } = Typography;

const ContactsSpaceMobile = ({ Icon, text, color, mobile }) => {
  const { darkMode } = usePageContext();

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
  return (
    <Col xs={color === "#025DF4" ? 21 : 24}>
      <Space
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
        direction="vertical"
        onClick={() => handleMore(text)}
      >
        <Text
          style={{
            color: darkMode ? "white" : "#141414",
            fontSize: mobile ? 19 : color === "#025DF4" ? 23 : 20,
            textAlign: "center",
          }}
          className="ParagraphSeven"
        >
          {text}
        </Text>
      </Space>
    </Col>
  );
};

export default ContactsSpaceMobile;
