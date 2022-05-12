import Greeting from "./greeting";
import Skills from "./skills";
import AboutMe from "./about-me";
import Programming from "./programming";
import Experiences from "./experiences";
import ProjectsSourse from "./projects-source";
import Package from "./package";
import Contacts from "./contacts";

//-------------------------
import GreetingMobile from "../mobile/greeting-mobile";
import SkillsMobile from "../mobile/skills-mobile";
import AboutMeMobile from "../mobile/about-me-mobile";
import ProgrammingMobile from "../mobile/programming-mobile";
import ExperiencesMobile from "../mobile/experiences-mobile";
import ProjectsSourseMobile from "../mobile/projects-source-mobile";
import ContactsMobile from "../mobile/contacts-mobile";
import WelcomeMobile from "../mobile/welcome";
import ScrollAnim from "rc-scroll-anim";
import MetaComponent from "../common/meta";
import AboutWebSite from "./about-website";
import AboutWebSiteMobile from "../mobile/about-website";
import { isMobile } from "react-device-detect";

const Element = ScrollAnim.Element;
const ScrollOverPack = ScrollAnim.OverPack;

const MainComponent = ({ setImage }) => {
  const components = [
    { name: <Greeting />, id: "Greeting" },
    { name: <AboutWebSite />, id: "About WebSite" },
    { name: <Skills />, id: "What I do" },
    { name: <AboutMe />, id: "About Me" },
    { name: <Programming />, id: "About Programming" },
    { name: <Experiences />, id: "Experiences" },
    { name: <ProjectsSourse />, id: "Portfolio & CV" },
    { name: <Package />, id: "Packages" },
    { name: <Contacts />, id: "Contacts" },
  ];

  const mobileComponents = [
    { name: <WelcomeMobile />, id: "Welcome" },
    { name: <GreetingMobile />, id: "Greeting" },
    { name: <AboutWebSiteMobile />, id: "About WebSite" },
    { name: <SkillsMobile />, id: "What I do" },
    { name: <AboutMeMobile />, id: "About Me" },
    { name: <ExperiencesMobile />, id: "Experiences" },
    { name: <ProgrammingMobile />, id: "About Programming" },
    { name: <ProjectsSourseMobile />, id: "Portfolio & CV" },
    { name: <ContactsMobile />, id: "Contacts" },
  ];

  // const handleShowComponents = (data) => {
  //   const { mode, id } = data;

  //   if (window.scrollY <= 496) {
  //     setImage("Welcome");
  //   } else {
  //     switch (id) {
  //       case "Greeting":
  //         setImage("Greeting");
  //         break;
  //       case "What I do":
  //         setImage("What I do");
  //         break;
  //       case "About Me":
  //         setImage("About Me");
  //         break;
  //       case "About Programming":
  //         setImage("About Programming");
  //         break;
  //       case "Experiences":
  //         setImage("Experiences");
  //         break;
  //       case "Portfolio & CV":
  //         setImage("Portfolio & CV");
  //         break;
  //       case "Contacts":
  //         setImage("Contacts");
  //         break;
  //       default:
  //         setImage("Welcome");
  //     }
  //   }
  // };

  const handleShowMobileComponents = (data) => {
    const { mode, id } = data;

    if (window.scrollY <= 496) {
      setImage("Welcome");
    } else {
      switch (id) {
        case "Greeting":
          setImage("Greeting");
          break;
        case "What I do":
          setImage("What I do");
          break;
        case "About Me":
          setImage("About Me");
          break;
        case "About Programming":
          setImage("About Programming");
          break;
        case "Experiences":
          setImage("Experiences");
          break;
        case "Portfolio & CV":
          setImage("Portfolio & CV");
          break;
        case "Contacts":
          setImage("Contacts");
          break;
        default:
          setImage("Welcome");
      }
    }
  };

  const handleInx = (index) => {
    switch (index + 1) {
      case 1:
        return "100vh";
        break;
      case 2:
        return "100vh";
        break;
      case 3:
        return "40vh";
        break;
      case 4:
        return "40vh";
        break;
      case 5:
        return "30vh";
        break;
      case 6:
        return "85vh";
        break;
      case 7:
        return "100vh";
        break;
      case 8:
        return "90vh";
        break;
      case 9:
        return "40vh";
        break;
    }
  };

  return (
    <div>
      {/* <MetaComponent /> */}
      {isMobile ? (
        mobileComponents.map((t, inx) => (
          <div style={{ marginBottom: inx !== 8 && 30 }} key={inx}>
            <ScrollOverPack playScale={0.1} always={false}>
              <Element
                key={inx}
                id={t.id}
                playScale={1}
                style={{ padding: inx !== 2 || inx !== 3 ? 0 : 10 }}
                location={t.id}
                onChange={handleShowMobileComponents}
              >
                {t.name}
              </Element>
            </ScrollOverPack>
          </div>
        ))
      ) : (
        <>
          {components.map((t, inx) => (
            <div
              key={inx}
              style={{
                minHeight: handleInx(inx),
              }}
            >
              <ScrollOverPack playScale={0.1} always={false}>
                <Element key={inx} id={t.id}>
                  {t.name}
                </Element>
              </ScrollOverPack>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default MainComponent;
