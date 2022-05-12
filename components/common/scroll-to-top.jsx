import { Col } from "antd";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = ({ open }) => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Col
      className={
        open
          ? "icon-item-hide center scrollIconStyle"
          : "icon-item center scrollIconStyle"
      }
      style={{
        borderRadius: 50,
        marginBottom: 15,
        minWidth: 55,
        minHeight: 55,
      }}
    >
      <FaAngleUp
        onClick={goToTop}
        style={{
          fontSize: 40,
        }}
      />
    </Col>
  );
};
export default ScrollToTop;
