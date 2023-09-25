import React, { useContext } from "react";
import styles from "./skills.module.css";
import HTML from "../../Images/html.png";
import CSS from "../../Images/css.png";
import JAVASCRIPT from "../../Images/javascript.png";
import REACT from "../../Images/react.png";
import NODE from "../../Images/node.png";
import GIT from "../../Images/git.png";
import POSTGRESQL from "../../Images/postgresql.png";
import Redux from "../../Images/redux.png";
import TypeScript from "../../Images/typescript.jpg";
import Sequalize from "../../Images/sequalize si.png";
import SQL from "../../Images/sql si.png";
import MongoDB from "../../Images/Mongodb si.png";
import Express from "../../Images/express si.png"
import { GlobalLanguageState } from "../../assets/GlobalStates/globalStates.tsx";
import TranslateText from "../../assets/TranslateText/translateText.js";
import Title from "../../assets/title/title.tsx";

const Technologies: React.FC = () => {
  const { Language } = useContext(GlobalLanguageState)!;
  const SkillsIcons: React.FC<{ skill: string; name: string }> = ({
    skill,
    name,
  }) => {
    const skillName = name.toUpperCase();
    const learning = "(learning)";
    const aprendiendo = "(aprendiendo)";
    return (
      <div className={styles.Technologies} id={`${name}`}>
         { name !== "Express" &&<img
          className={styles.image}
          src={skill}
          alt={`${skill.toString().slice(19, -4).toUpperCase()} icon`}
        />
  }
        { name == "Express" && <img
          className={styles.otherImage}
          src={skill}
          alt={`${skill.toString().slice(19, -4).toUpperCase()} icon`}
        />}
        <p className={styles.skillName}>
          {Language === "English"
            ? skillName === "TYPESCRIPT"
              ? skillName + " " + learning
              : skillName
            : skillName === "TYPESCRIPT"
            ? skillName + " " + aprendiendo
            : skillName}
        </p>
      </div>
    );
  };

  return (
    <div className={styles.box}>
      <section className="c" id="Technologies">
        <Title English={"Technologies"} Spanish={"Tecnologías"} />

        <p className={styles.p1}>
          <TranslateText
            English={"// These are the technologies I've worked with"}
            Spanish={"// Estas son las tecnologías con las que he trabajado"}
          />
        </p>

        <div className={styles.TechnologiesBox}>
          <SkillsIcons skill={HTML} name={"HTML"} />
          <SkillsIcons skill={CSS} name={"CSS"} />
          <SkillsIcons skill={JAVASCRIPT} name={"JAVASCRIPT"} />
          <SkillsIcons skill={REACT} name={"REACT"} />
          <SkillsIcons skill={NODE} name={"NODE"} />
          <SkillsIcons skill={GIT} name={"GIT"} />
          <SkillsIcons skill={POSTGRESQL} name={"POSTGRESQL"} />
          <SkillsIcons skill={Redux} name={"REDUX"} />
           <SkillsIcons skill={SQL} name={"SQL"} />
          <SkillsIcons skill={Express} name={"Express"} />
          <SkillsIcons skill={TypeScript} name={"TypeScript"} />
          <SkillsIcons skill={Sequalize} name={"Sequalize"} />
          <SkillsIcons skill={MongoDB} name={"MongoDB"} />
        </div>
      </section>
    </div>
  );
};

export default Technologies;
