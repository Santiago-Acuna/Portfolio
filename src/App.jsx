import { useState } from 'react'
import styles from'./App.module.css'
import Navbar from './assets/navbar/navbar.jsx'
import Presentation from './assets/presentation/presentation.jsx'
import About from './assets/about/about.jsx'
import Skills from './assets/skills/skills.jsx'
import Contact from './assets/contact/contact.jsx'
import Footer from './assets/footer/footer.jsx'
import LeftSideBar from './assets/left sidebar/left sidebar.jsx'
import RightSideBar from './assets/right sidebar/right sidebar.jsx'


function App() {
  const [Language, setLanguage] = useState("English")

  const handleLanguage = (e)=>{

    let aux = "";
    Language === "English" ? aux = "Spanish" : aux = "English";
        
    setLanguage(aux)
  }

  return (
    <div className={styles.app}>
 <Navbar ></Navbar>
      <div className={styles.mainContent}>
      <Presentation className={styles.contentBox}></Presentation>
      <About></About>
       <Skills></Skills>
      <Contact></Contact>
      </div>
      <Footer></Footer>
      <LeftSideBar></LeftSideBar>
      <RightSideBar></RightSideBar>


      

  </div>
  )
}

export default App
