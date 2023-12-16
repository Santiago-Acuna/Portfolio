import { useState } from "react";
import styles from "./App.module.css";
import Navbar from "./Components/navbar/navbar";
import About from "./Components/about/about.tsx";
import Technologies from "./Components/skills/skills.tsx";
import Contact from "./Components/contact/contact.tsx";
import Projects from "./Components/projects/projects.tsx";
import Certificates from "./Components/certificates/certificates.tsx";
import Footer from "./Components/footer/footer.tsx";
import LeftSideBar from "./Components/left sidebar/left sidebar";
import RightSideBar from "./Components/right sidebar/right sidebar";
import InfinityScrollComponent from "./assets/infinity scroll/infinityScroll.tsx";
import {
  GlobalLanguageState,
  GlobalAllComponentsState,
  GlobalVisibleComponentsState,
  IsComponentVisibleState,
  CurrentSectionState,
} from "./assets/GlobalStates/globalStates.tsx";
import Presentation from "./Components/presentation/presentation.tsx";
// import IntersectionObserverComponent from "./assets/SectionObserver/SectionObserver.tsx";
const App: React.FC = () => {
  const [Language, setLanguage] = useState<string>("English");
  const [Components, setComponents] = useState<Array<React.FC>>([Presentation]);
  const [IsVisible, setIsVisible] = useState<{ component: string; id: string }>(
    { component: "", id: "" }
  );
  const [AllComponents, setAllComponents] = useState<Array<React.FC>>([
    About,
    Technologies,
    Projects,
    Certificates,
    Contact,
    Footer,
  ]);
  const [CurrentSection, setCurrentSection] = useState<string>("");

  return (
    <div className={styles.app}>
      <GlobalLanguageState.Provider value={{ Language, setLanguage }}>
        <GlobalAllComponentsState.Provider
          value={{ AllComponents, setAllComponents }}
        >
          <GlobalVisibleComponentsState.Provider
            value={{ Components, setComponents }}
          >
            <IsComponentVisibleState.Provider
              value={{ IsVisible, setIsVisible }}
            >
              <CurrentSectionState.Provider value={{ CurrentSection, setCurrentSection }}>
                <Navbar />
                <div className={styles.mainContent}>
                  <InfinityScrollComponent />
                </div>
              </CurrentSectionState.Provider>
            </IsComponentVisibleState.Provider>
          </GlobalVisibleComponentsState.Provider>
        </GlobalAllComponentsState.Provider>
        <LeftSideBar />
        <RightSideBar />
      </GlobalLanguageState.Provider>
    </div>
  );
};

export default App;
