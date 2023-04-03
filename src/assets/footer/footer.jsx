import React from 'react';
import styles from './footer.module.css';
import linkedinIcon from '../Images/linkedin logo ph.png'
import linkedinIconRosa from '../Images/linkedin logo rosa .png'
import githubIcon from '../Images/github.png'
import githubIconRosa from '../Images/github rosa.png'
import pdfIcon from '../Images/pdf logo.png'
import pdfIconRosa from '../Images/pdf logo rosa .png'
import mailIcon from '../Images/mail blanco ph trasnparente.png'
import mailIconRosa from '../Images/sobre logo rosa ph.png'

export default function Footer(){

  return(
    <div className={styles.box}>
      <div className={styles.logoBox}>
      <a className={styles.a1} href="https://www.linkedin.com/in/santiago-acu%C3%B1a-894ba9256/" target="_blank">
         <img className={styles.image}  src={linkedinIcon} alt="linkedinIcon"/>
         <img className={styles.image}  src={linkedinIconRosa} alt="linkedinIconRosa"/>    
      </a>

      <a className={styles.a1} href="https://github.com/Santiago-Acuna" target="_blank">
         <img className={styles.image}  src={githubIcon} alt="githubIcon"/>
         <img className={styles.image}  src={githubIconRosa} alt="githubIconRosa"/>    
      </a>

      <a className={styles.a1} href="" target="_blank">
         <img className={styles.image}  src={pdfIcon} alt="githubIcon"/>
         <img className={styles.image}  src={pdfIconRosa} alt="githubIconRosa"/>    
      </a>

      <a className={styles.a1} href="" target="_blank">
         <img className={styles.image}  src={mailIcon} alt="githubIcon"/>
         <img className={styles.image}  src={mailIconRosa} alt="githubIconRosa"/>    
      </a>

      </div>
      <p className={styles.p1}>Built by Santiago Acuña</p>
    </div>
  )
}