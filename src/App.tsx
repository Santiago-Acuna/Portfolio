import { useState } from "react";
import styles from "./App.module.css";
import Navbar from "./Components/navbar/navbar";
import LeftSideBar from "./Components/left sidebar/left sidebar";
import RightSideBar from "./Components/right sidebar/right sidebar";
import InfitiScroll from "./infinity scroll/infinityScroll.tsx";
import GlobalLanguage from "./GlobalLanguage/globalLanguage.tsx";

const App: React.FC = () => {
  const [Language, setLanguage] = useState<string>("English");

  return (
    <div className={styles.app}>
      <GlobalLanguage.Provider value={{ Language, setLanguage }}>
        <Navbar />
        <div className={styles.mainContent}>
          <InfitiScroll />
        </div>
        <LeftSideBar />
        <RightSideBar />
      </GlobalLanguage.Provider>
    </div>
  );
};

export default App;
