import { Col, Space } from "antd";
import React from "react";
import { isMobile } from "react-device-detect";
import {
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsWhatsapp,
} from "react-icons/bs";

const SocialMedias = () => {
  const iconArray = [
    { icon: BsInstagram, link: "https://www.instagram.com/_ali.mtu/" },
    { icon: BsTwitter, link: "http://twitter.com/montazerion" },
    {
      icon: BsLinkedin,
      link: "https://www.linkedin.com/in/ali-montazerion-37a939226",
    },
    { icon: BsGithub, link: "https://github.com/alimtu" },
    { icon: BsWhatsapp, link: "http://wasap.my/9333730037" },
  ];

  const iconColorHandler = (name) => {
    switch (name) {
      case BsInstagram:
        return "#FF745A";
        break;
      case BsTwitter:
        return "#6193FF";
        break;
      case BsLinkedin:
        return "#4435FF";
        break;
      case BsGithub:
        return "#8E283B";
        break;
      case BsWhatsapp:
        return "#30BF78";
        break;
      default:
        return "white";
        break;
    }
  };
  return (
    <Space size={isMobile ? "small" : "middle"}>
      {iconArray.map((T, inx) => (
        <Col
          className="socialIcon"
          key={inx}
          onClick={() => window.open(T.link)}
        >
          <T.icon
            className="whiteIcon"
            key={inx}
            fontSize={"30px"}
            style={{ color: iconColorHandler(T.icon) }}
          />
        </Col>
      ))}
    </Space>
  );
};

export default SocialMedias;
