import { useState, createContext, useContext } from "react";

const PageContext = createContext();

const usePageContext = () => useContext(PageContext);

const PageContextProvider = ({ children }) => {
  const [progress, setProgress] = useState(false);
  const [icon, setIcon] = useState("");
  const [image, setImage] = useState("");
  const [showProjectSource, setShowProjectSource] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [showGreetingMobile, setShowGreetingMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [hoverCard, setHoverCard] = useState(true);
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  //-------------------------
  const [starColor, setStarColor] = useState("#fafafa");
  const [starSpeed, setStarSpeed] = useState(1);
  const [starSize, setStarSize] = useState(1);
  const [starExist, setStarExist] = useState(true);
  const [starShape, setStarShape] = useState("circle");
  const [starCount, setStarCount] = useState(160);
  const [starPlay, setStarPlay] = useState(true);

  const contextValue = {
    progress,
    setProgress,
    icon,
    setIcon,
    image,
    setImage,
    showProjectSource,
    setShowProjectSource,
    showContacts,
    setShowContacts,
    showGreetingMobile,
    setShowGreetingMobile,
    darkMode,
    setDarkMode,
    hoverCard,
    setHoverCard,
    menuModalOpen,
    setMenuModalOpen,
    starColor,
    setStarColor,
    starSpeed,
    setStarSpeed,
    starSize,
    setStarSize,
    starExist,
    setStarExist,
    starShape,
    setStarShape,
    starCount,
    setStarCount,
    starPlay,
    setStarPlay,
  };

  return (
    <PageContext.Provider value={contextValue}>{children}</PageContext.Provider>
  );
};

const useResetContext = () => {
  const {
    setProgress,
    setStarColor,
    setStarSpeed,
    setStarSize,
    setStarExist,
    setStarShape,
    setStarCount,
    setStarPlay,
  } = usePageContext();

  const resetContext = () => {
    setProgress(false);
    setStarColor("#fafafa");
    setStarSpeed(1);
    setStarSize(1);
    setStarExist(true);
    setStarShape("circle");
    setStarCount(160);
    setStarPlay(true);
  };
  return resetContext;
};

export { PageContextProvider, usePageContext, useResetContext };
