import React from 'react';
import styles from './navbar.module.css'

export default function NavBar(){


  return(
    
      <div className={styles.box}>
      <ul className={styles.list}>
        <li>
        <a href="#home">Home</a>
        </li>
    
        <li>
        <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
          
        </li>
        <li>
          Projects
        </li>
        <li>
        <a href="#contact">Contact</a>
        </li>
        {/* <li>
          Sun
        </li> */}
        <li>
          En
        </li>
        <li>
          Es
        </li>
        {/* </section> */}
      </ul>
      <section class="home" id="home">
      </section>
    </div>
      
    
  )


}