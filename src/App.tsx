import { useState } from "react";
import styles from "./App.module.css";
import Navbar from "./Components/navbar/navbar";
import Presentation from "./Components/presentation/presentation";
import About from "./Components/about/about.tsx";
import Skills from "./Components/skills/skills";
import Contact from "./Components/contact/contact";
import Footer from "./Components/footer/footer";
import LeftSideBar from "./Components/left sidebar/left sidebar";
import RightSideBar from "./Components/right sidebar/right sidebar";
import Projects from "./Components/projects/projects";
import Certificates from "./Components/certificates/certificates.tsx"

function App() {
  const [Language, setLanguage] = useState<string>("English");

  return (
    <div className={styles.app}>
       <Navbar Language={Language} setLanguage={setLanguage} />
      <div className={styles.mainContent}>
       <Presentation  Language={Language} /> 
        <About Language={Language} />
        <Skills Language={Language} />
        <Certificates Language={Language} />
        <Projects Language={Language} />*
        <Contact Language={Language} />
      </div>
      <Footer Language={Language} />
      <LeftSideBar Language={Language} />
      <RightSideBar /> 
    </div>
  );
}

export default App;
