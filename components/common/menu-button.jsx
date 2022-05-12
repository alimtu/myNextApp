import { Col } from "antd";
import React from "react";
import { RiMenu5Line } from "react-icons/ri";
import { usePageContext } from "../contexts/page-context";

const MenuButton = ({ open }) => {
  const { menuModalOpen, setMenuModalOpen } = usePageContext();

  return (
    <Col
      className={
        open
          ? "icon-item-hide center fullScreenIconStyle"
          : "icon-item center fullScreenIconStyle"
      }
      style={{
        borderRadius: 50,
        marginBottom: 15,
        minWidth: 55,
        minHeight: 55,
      }}
      // onClick={() => window.open(`tel:${"+989333730037"}`)}
    >
      <RiMenu5Line
        style={{
          fontSize: 30,
        }}
        onClick={() => setMenuModalOpen(!menuModalOpen)}
      />
    </Col>
  );
};
export default MenuButton;
