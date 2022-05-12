import { Col } from "antd";
import React from "react";
import { ImPhone } from "react-icons/im";

const CallButton = ({ open }) => {
  return (
    <Col
      className={
        open
          ? "icon-item-hide center callIconStyle"
          : "icon-item center callIconStyle"
      }
      style={{
        borderRadius: 50,
        marginBottom: 15,
        minWidth: 55,
        minHeight: 55,
      }}
      onClick={() => window.open(`tel:${"+989333730037"}`)}
    >
      <ImPhone
        style={{
          fontSize: 30,
        }}
      />
    </Col>
  );
};
export default CallButton;
