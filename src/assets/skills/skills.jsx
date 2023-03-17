import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './skills.module.css';
import HTML from '../Images/html.png';
import CSS from '../Images/css.png';
import JAVASCRIPT from '../Images/javascript.png';
import REACT from '../Images/react.png';
import NODE from '../Images/node.png';
import GIT from '../Images/git.png';
import PROSTGRESQL from '../Images/postgresql.png';

export default function Skills(){

 const SkillsIcons = (skill)=>{
 
skill = skill.skill

  return(
    <div className={styles.skills}>
        <img className={styles.image} src={skill} alt= {`${skill.toString().slice(19, -4).toUpperCase()} icon`} />
        <p>{skill.toString().slice(19, -4).toUpperCase()}</p>
      </div>
  )
 } 

  return(
    <div className={styles.box}>
      <SkillsIcons skill={HTML}></SkillsIcons>
      <SkillsIcons skill={CSS}></SkillsIcons>
      <SkillsIcons skill={JAVASCRIPT}></SkillsIcons>
      <SkillsIcons skill={REACT}></SkillsIcons>
      <SkillsIcons skill={NODE}></SkillsIcons>
      <SkillsIcons skill={GIT}></SkillsIcons>
      <SkillsIcons skill={PROSTGRESQL}></SkillsIcons>
      {/* <SkillsIcons skill={HTML}></SkillsIcons> */}


    </div>

    

    )


  }