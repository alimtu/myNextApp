import { Col, Modal, Row, Typography } from "antd";
import React from "react";
import { usePageContext } from "../contexts/page-context";
import { AiFillCloseSquare } from "react-icons/ai";
import ScrollAnim from "rc-scroll-anim";

const { Text } = Typography;
const Link = ScrollAnim.Link;

const MenuModal = () => {
  const { menuModalOpen, setMenuModalOpen, darkMode } = usePageContext();
  const items = [
    "Welcome",
    "About WebSite",
    "Greeting",
    "What I do",
    "About Me",
    "Experiences",
    "About Programming",
    "Portfolio & CV",
    "Contacts",
  ];
  return (
    <Modal
      visible={menuModalOpen}
      onCancel={() => setMenuModalOpen(false)}
      footer={null}
      bodyStyle={{ backgroundColor: "#001529" }}
      closeIcon={
        <AiFillCloseSquare
          style={{ color: "red", fontSize: 30, marginTop: 20 }}
        />
      }
    >
      <Row className="center" gutter={[20, 20]} style={{ marginTop: 35 }}>
        {items.map((t, inx) => (
          <Col xs={12} key={inx}>
            <Link
              offsetTop={+100}
              to={t}
              ease="easeOutBack"
              duration={1500}
              onClick={() => setMenuModalOpen(false)}
            >
              <Text
                style={{ color: darkMode ? "white" : "#141414", fontSize: 20 }}
                className="ParagraphSix"
              >
                {t}
              </Text>
            </Link>
          </Col>
        ))}
      </Row>
    </Modal>
  );
};

export default MenuModal;
