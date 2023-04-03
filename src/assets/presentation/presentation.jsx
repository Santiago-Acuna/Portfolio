import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './presentation.module.css'

export default function Presentation(){


  return(
    <div className={styles.box}>
      
      <p className={styles.p1}>Hi, my name is</p>
      <p className={styles.p2}>Santiago Acuña</p>
      <p className={styles.p3}>I'm a Full Stack Developer</p>
      <p>Un poco de verdura</p>

      <button className={styles.btn}>Check out my resume!</button>
      
    </div>

    

    )


  }