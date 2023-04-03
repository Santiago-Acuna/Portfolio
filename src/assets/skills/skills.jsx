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
import Redux from '../Images/redux.png';
import TypeScript from '../Images/typescript.jpg';

export default function Skills(){

 const SkillsIcons = (skill)=>{
 
skill = skill.skill

const skillName = skill.toString().slice(19, -4).toUpperCase()
  return(
    <div className={styles.skills}>
        <img className={styles.image} src={skill} alt= {`${skill.toString().slice(19, -4).toUpperCase()} icon`} />
        <p>{skillName === 'TYPESCRIPT' ? skillName + " " +"(learning)" : skillName}</p>
      </div>
  )
 } 

  return(
    <div className={styles.box}>
      <section class="skills" id="skills">
      <div className={styles.divTitle}><p className={styles.title}>Skills</p></div>
      <p className={styles.p1}>// Submit the form below or shoot me an email - santiagoacu1990@gmail.com</p>

    <div className={styles.skillsBox}>
      <SkillsIcons skill={HTML}></SkillsIcons>
      <SkillsIcons skill={CSS}></SkillsIcons>
      <SkillsIcons skill={JAVASCRIPT}></SkillsIcons>
      <SkillsIcons skill={REACT}></SkillsIcons>
      <SkillsIcons skill={NODE}></SkillsIcons>
      <SkillsIcons skill={GIT}></SkillsIcons>
      <SkillsIcons skill={PROSTGRESQL}></SkillsIcons>
      <SkillsIcons skill={Redux}></SkillsIcons>
      <SkillsIcons skill={TypeScript}></SkillsIcons>
      {/* <SkillsIcons skill={HTML}></SkillsIcons> */}


    </div>
    </section>
    </div>

    

    )


  }