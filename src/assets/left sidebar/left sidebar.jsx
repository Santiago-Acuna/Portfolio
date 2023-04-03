import React from 'react';
import styles from './left sidebar.module.css';
import linkedinIcon from '../Images/linkedin logo ph.png'
import linkedinIconRosa from '../Images/linkedin logo rosa .png'
import githubIcon from '../Images/github.png'
import githubIconRosa from '../Images/github rosa.png'
import pdfIcon from '../Images/pdf logo.png'
import pdfIconRosa from '../Images/pdf logo rosa .png'
import mailIcon from '../Images/mail blanco ph trasnparente.png'
import mailIconRosa from '../Images/sobre logo rosa ph.png'

export default function LeftSideBar(){

  

  return(
    <div className={styles.box}>

      <a className={styles.a1} href="https://www.linkedin.com/in/santiago-acu%C3%B1a-894ba9256/" target="_blank">
         <img className={styles.image}  src={linkedinIcon} alt="linkedinIcon"/>
         <img className={styles.image}  src={linkedinIconRosa} alt="linkedinIconRosa"/>    
      </a>

      <a className={styles.a1} href="https://github.com/Santiago-Acuna" target="_blank">
         <img className={styles.image}  src={githubIcon} alt="githubIcon"/>
         <img className={styles.image}  src={githubIconRosa} alt="githubIconRosa"/>    
      </a>

      <a className={styles.a1} href="" target="_blank">
         <img className={styles.image}  src={pdfIcon} alt="pdfIcon"/>
         <img className={styles.image}  src={pdfIconRosa} alt="pdfIconRosa"/>    
      </a>

      <a className={styles.a1} href="mailto:santiagoacu1990@gmail.com" target="_blank">
         <img className={styles.image}  src={mailIcon} alt="mailIcon"/>
         <img className={styles.image}  src={mailIconRosa} alt="mailIconRosa"/>    
      </a>    

      <div className={styles.verticalBar}></div>

      
      
    </div>
  )

}
