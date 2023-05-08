import { useState } from "react";
import styles from "./App.module.css";
import Navbar from "./assets/navbar/navbar.jsx";
import Presentation from "./assets/presentation/presentation.jsx";
import About from "./assets/about/about.jsx";
import Skills from "./assets/skills/skills.jsx";
import Contact from "./assets/contact/contact.jsx";
import Footer from "./assets/footer/footer.jsx";
import LeftSideBar from "./assets/left sidebar/left sidebar.jsx";
import RightSideBar from "./assets/right sidebar/right sidebar.jsx";
import Projects from "./assets/projects/projects.jsx";
import Certificates from "./assets/certificates/certificates";

function App() {
  const [Language, setLanguage] = useState("English");

  return (
    <div className={styles.app}>
      <Navbar Language={Language} setLanguage={setLanguage}></Navbar>
      <div className={styles.mainContent}>
        <Presentation
          className={styles.contentBox}
          Language={Language}
        ></Presentation>
        <About Language={Language}></About>
        <Skills Language={Language}></Skills>
        <Certificates Language={Language}></Certificates>
        <Projects Language={Language}></Projects>
        <Contact Language={Language}></Contact>
      </div>
      <Footer Language={Language}></Footer>
      <LeftSideBar Language={Language}></LeftSideBar>
      <RightSideBar></RightSideBar>
    </div>
  );
}

export default App;
