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
import GlobalLanguage from "../../GlobalLanguage/globalLanguage.tsx";

const Skills: React.FC = () => {
  const { Language } = useContext(GlobalLanguage)!;
  const SkillsIcons: React.FC<{ skill: string; name: string }> = ({
    skill,
    name,
  }) => {
    const skillName = name.toUpperCase();
    const learning = "(learning)";
    const aprendiendo = "(aprendiendo)";
    return (
      <div className={styles.skills}>
        <img
          className={styles.image}
          src={skill}
          alt={`${skill.toString().slice(19, -4).toUpperCase()} icon`}
        />
        <p>
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
      <section className="skills" id="skills">
        {Language === "English" ? (
          <div className={styles.divTitle}>
            <p className={styles.title}>Skills</p>
          </div>
        ) : (
          <div className={styles.divTitleE}>
            <p className={styles.title}>Tecnologías</p>
          </div>
        )}
        {Language === "English" ? (
          <p className={styles.p1}>
            // These are the technologies I've worked with
          </p>
        ) : (
          <p className={styles.p1}>
            // Estas son las tecnologías con las que he trabajado
          </p>
        )}

        <div className={styles.skillsBox}>
          <SkillsIcons skill={HTML} name={"HTML"} />
          <SkillsIcons skill={CSS} name={"CSS"} />
          <SkillsIcons skill={JAVASCRIPT} name={"JAVASCRIPT"} />
          <SkillsIcons skill={REACT} name={"REACT"} />
          <SkillsIcons skill={NODE} name={"NODE"} />
          <SkillsIcons skill={GIT} name={"GIT"} />
          <SkillsIcons skill={POSTGRESQL} name={"POSTGRESQL"} />
          <SkillsIcons skill={Redux} name={"Redux"} />
          <SkillsIcons skill={TypeScript} name={"TypeScript"} />
        </div>
      </section>
    </div>
  );
};

export default Skills;
