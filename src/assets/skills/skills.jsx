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

 const SkillsIcon = (skill)=>{
 
skill = skill.skill
  console.log(skill.key);
  return(
    <div>
        <img src={skill} alt= {`${skill.toString()} icon`} />
        <p>{skill.toString()}</p>
      </div>
  )
 } 


  return(
    <div className={styles.box}>
      <SkillsIcon skill={HTML}></SkillsIcon>

{/* 
       <div>
         <img src={HTML} alt='html icon'/>
         <p>HTML</p>
       </div> */}
       {/* <div>
         <img src={CSS} alt='css icon'/>
         <p>CSS</p>
       </div>
       <div>
         <img src={JAVASCRIPT} alt='javascript icon'/>
         <p>JAVASCRIPT</p>
       </div>
       <div>
         <img src={REACT} alt='react icon'/>
         <p>REACT</p>
       </div>
       <div>
         <img src={NODE} alt='node icon'/>
         <p>NODE</p>
       </div>
       <div>
         <img src={GIT} alt='git icon'/>
         <p>GIT</p>
       </div> */}

    </div>

    

    )


  }