import { useState } from "react";
import styles from "./App.module.css";
import Navbar from "./Components/navbar/navbar.jsx";
import Presentation from "./Components/presentation/presentation.jsx";
import About from "./Components/about/about.jsx";
import Skills from "./Components/skills/skills.jsx";
import Contact from "./Components/contact/contact.jsx";
import Footer from "./Components/footer/footer.jsx";
import LeftSideBar from "./Components/left sidebar/left sidebar.jsx";
import RightSideBar from "./Components/right sidebar/right sidebar.jsx";
import Projects from "./Components/projects/projects.jsx";
import Certificates from "./Components/certificates/certificates";

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
