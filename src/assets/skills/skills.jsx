import React from 'react';
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

export default function Skills({ Language }){

 const SkillsIcons = (skill)=>{
 
skill = skill.skill

const skillName = skill.toString().slice(19, -4).toUpperCase()
let learning = "(learning)"
let aprendiendo = "(aprendiendo)"
  return(
    <div className={styles.skills}>
        <img className={styles.image} src={skill} alt= {`${skill.toString().slice(19, -4).toUpperCase()} icon`} />
        {Language === "English" ? <p>{skillName === 'TYPESCRIPT' ? skillName + " " + learning: skillName}</p>:
        <p>{skillName === 'TYPESCRIPT' ? skillName + " " + aprendiendo : skillName}</p>}
      </div>
  )
 } 

  return(
    <div className={styles.box}>
      <section class="skills" id="skills">
      {Language === "English" ? <div className={styles.divTitle}><p className={styles.title}>Skills</p></div> : 
       <div className={styles.divTitleE}><p className={styles.title}>Tecnologías</p></div>}
      {Language === "English" ? <p className={styles.p1}>// These are the technologies I've worked with</p>:
      <p className={styles.p1}>// Estas son las tecnologías con las que he trabajado</p>}

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