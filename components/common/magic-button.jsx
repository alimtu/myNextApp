import { Col } from "antd";
import { RiMagicFill } from "react-icons/ri";

const MagicButton = ({ open }) => {
  const goToTop = () => {
    window.scrollTo({
      top: 2520,
      behavior: "smooth",
    });
  };
  return (
    <Col
      className={
        open
          ? "icon-item-hide center magicIconStyle"
          : "icon-item center magicIconStyle"
      }
      style={{
        borderRadius: 50,
        marginBottom: 15,
        minWidth: 55,
        minHeight: 55,
      }}
    >
      <RiMagicFill
        onClick={goToTop}
        style={{
          fontSize: 40,
        }}
      />
    </Col>
  );
};
export default MagicButton;
