import { Col, Space, Typography } from "antd";
import React from "react";
import { AiOutlineAntDesign, AiFillCodeSandboxCircle } from "react-icons/ai";

const { Title, Text } = Typography;

const PackageItem = ({ title, iconColor }) => {
  return (
    <Col md={8} className="center" style={{ borderRadius: "30px" }}>
      <Space
        className="center packCard"
        direction="vertical"
        style={{ width: "50%", borderRadius: "30px", padding: 20 }}
        size="large"
      >
        <Col
          style={{
            backgroundColor: iconColor,
            width: 100,
            height: 100,
            borderRadius: "50%",
          }}
          className="center "
        >
          {/* <Icon fontSize={60} /> */}
          <AiFillCodeSandboxCircle fontSize={60} />
        </Col>
        <Title style={{ color: "white" }} level={3}>
          {title}
        </Title>
      </Space>
    </Col>
  );
};

export default PackageItem;
