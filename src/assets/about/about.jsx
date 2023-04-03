import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './about.module.css'

export default function About(){


  return(
    <div className={styles.box}>
      <section class="about" id="about">
      <div className={styles.divTitle}><p className={styles.title}>About</p></div>
      <p className={styles.p1}>Hi, again. Nice to meet you. Please take a look around.</p>
      <p className={styles.p2}>Since my childhood I've always been interested in tech, loved playing videogames with friends, and try to discover new things on internet. I'm currently more than 3000km away from home, this had help me to discover and a whole new culture, to be more sociable, open-mind, and to learn how to work as a team with people with different thoughts and ideas.</p>

      <p className={styles.p2}>Fast-forward to today, I've had the privilege of working at a sismological observatory, an NGO (offering technology-based solutions for social problematics) and others works related to the Geography. Nowadays I'm looking forward to gain more experiencie working on tech bussiness.</p>
     </section>
    </div>

    

    )


  }