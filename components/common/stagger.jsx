import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useState } from "react";
import { Parallax } from "rc-scroll-anim";
import FullScreenButton from "./full-screen";
import ScrollToTop from "./scroll-to-top";
import CallButton from "./call-button";
import { useRef, useEffect } from "react";
import { isMobile } from "react-device-detect";
import MenuButton from "./menu-button";
import { RiMagicFill } from "react-icons/ri";
import MagicButton from "./magic-button";

function useHover() {
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );
  return [ref, value];
}

const Stagger = () => {
  const [hoverRef, isHovered] = useHover();
  const [open, setOpen] = useState(true);
  const [firstShow, setFirstShow] = useState(false);

  useEffect(() => {
    if (isHovered) setFirstShow(true);
    if (isHovered) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isHovered]);

  return (
    <div className="top-to-btm" ref={hoverRef}>
      <BiDotsHorizontalRounded
        className="icon-position-stagger icon-style-stagger"
        fontSize={10}
        style={{ zIndex: 9 }}
      />
      {firstShow && (
        <Parallax
          always={false}
          className={"icon-position-buttons-in-stager"}
          style={{ display: "flex", flexDirection: "column", zIndex: 9 }}
        >
          <CallButton open={open} />
          {!isMobile ? (
            <FullScreenButton open={open} />
          ) : (
            <MenuButton open={open} />
          )}
          <ScrollToTop open={open} />
          <MagicButton open={open} />
        </Parallax>
      )}
    </div>
  );
};
export default Stagger;
