import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { useFullScreen } from "react-browser-hooks";
import { Col } from "antd";

const FullScreenButton = ({ open }) => {
  const { toggle, fullScreen } = useFullScreen();

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
    >
      {fullScreen ? (
        <MdFullscreenExit
          onClick={toggle}
          style={{
            fontSize: 40,
          }}
        />
      ) : (
        <MdFullscreen
          onClick={toggle}
          style={{
            fontSize: 40,
          }}
        />
      )}
    </Col>
  );
};
export default FullScreenButton;
