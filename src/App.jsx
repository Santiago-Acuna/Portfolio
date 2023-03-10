import { useState } from 'react'
import styles from'./App.module.css'
import Navbar from './assets/navbar/navbar.jsx'
import Presentation from './assets/presentation/presentation.jsx'
import About from './assets/about/about.jsx'
import Skills from './assets/skills/skills.jsx'


function App() {
  

  return (
    <div className={styles.app}>

      <Navbar className={styles.navbar}></Navbar>
      <Presentation></Presentation>
      <About></About>
      <Skills></Skills>

      

  </div>
  )
}

export default App
