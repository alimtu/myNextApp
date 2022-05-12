import React from "react";
import {
  Skeleton,
  Switch,
  Card,
  Avatar,
  Typography,
  Space,
  Col,
  Divider,
} from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const { Text, Title } = Typography;

const OpenSourceCard = () => {
  return (
    <Card style={{ width: 200, backgroundColor: "violet" }}>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Col>
          <Text>Card Title</Text>
        </Col>
        <Col style={{ marginLeft: "10px" }}>
          <Text>Card Text</Text>
        </Col>
        <Divider style={{ margin: 0 }} />
        <Col>
          <Space
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Col>
              <Space size={"middle"}>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
              </Space>
            </Col>
            <Col>2</Col>
          </Space>
        </Col>
      </Space>
    </Card>
  );
};

export default OpenSourceCard;
