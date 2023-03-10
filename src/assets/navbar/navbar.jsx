import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './navbar.module.css'

export default function NavBar(){


  return(
    
      <div className={styles.box}>
      <ul className={styles.list}>
        <li>
          Home
        </li>
        <li>
          About
        </li>
        <li>
          Skills
        </li>
        <li>
          Projects
        </li>
        <li>
          Contact
        </li>
        <li>
          Sun
        </li>
        <li>
          En
        </li>
        <li>
          Es
        </li>
      </ul>
    </div>
      
    
  )


}