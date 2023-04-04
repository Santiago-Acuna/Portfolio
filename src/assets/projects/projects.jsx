import React from 'react';
import styles from './projects.module.css'
import recipes from '../Images/Home.jpg'
import githubIcon from '../Images/github.png'
import githubIconRosa from '../Images/github rosa.png'
import redirectButtonWhite from '../Images/redirect button white.png'
import redirectButtonRose from '../Images/redirect button rose.png'



export default function Projects(){


  return(
  <div className={styles.box}>
<div className={styles.divTitle}><p className={styles.title}>Projects</p></div>
<p className={styles.p1}>// Check out some of my recent work</p>
<div>
  <p className={styles.proyectTitle}>Repices App</p>
  <div className={styles.mainContent}>
    <img className={styles.img1} src = {recipes} alt="project 1 img" />
    <div className={styles.description}>
      <div className={styles.summary}>
        <p className="">A SPA that consumes data from an external API, and allows general and detailed information of more than 500,000 video games to be displayed, among the functionalities it allows filtering and ordering video games by different variables such as genre, platforms, name, rating.</p>
      </div>
      <p className={styles.p2}>React Redux Styled Components Express PostgreSQL Rawg.io API</p>
      <div>
      <a className={styles.a1} href="https://github.com/Santiago-Acuna" target="_blank">
         <img className={styles.image}  src={githubIcon} alt="githubIcon"/>
         <img className={styles.image}  src={githubIconRosa} alt="githubIconRosa"/>    
      </a>
      <a className={styles.a1} href="https://github.com/Santiago-Acuna" target="_blank">
         <img className={styles.image}  src={redirectButtonWhite} alt="githubIcon"/>
         <img className={styles.image}  src={redirectButtonRose} alt="githubIconRosa"/>    
      </a>

      </div>
   </div>
  </div>
  
</div>
  </div>
   
     )


}