import { Col, Drawer, Row, Space, Typography, Divider, Alert } from "antd";
import React from "react";
import PackageItem from "./package-item";
import { AiFillCloseSquare } from "react-icons/ai";

const { Title } = Typography;

const PackageDrawer = ({ visible, onClose, placement, packageData }) => {
  return (
    <Drawer
      placement={placement}
      width={"100%"}
      height={"100%"}
      onClose={onClose}
      visible={visible}
      bodyStyle={{ backgroundColor: "#001529" }}
      headerStyle={{ backgroundColor: "#001529" }}
      closeIcon={<AiFillCloseSquare style={{ color: "red", fontSize: 30 }} />}
    >
      {packageData?.length > 0 && (
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col md={24} className="center">
            <Title level={4} style={{ color: "white" }}>
              {packageData[0]?.title}
            </Title>
          </Col>
          <Divider style={{ backgroundColor: "white" }} />
          <Col md={24}>
            <Row
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-start",
                marginTop: "30px",
              }}
              gutter={[0, 40]}
              align="middle"
            >
              {packageData[1]?.map((t, inx) => (
                <PackageItem
                  key={inx}
                  title={t.title}
                  text={t.text}
                  Icon={t.Icon}
                  iconColor={t.iconColor}
                />
              ))}
            </Row>
          </Col>
        </Row>
      )}
    </Drawer>
  );
};

export default PackageDrawer;
