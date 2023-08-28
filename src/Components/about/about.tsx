import React, { useContext } from "react";
import styles from "./about.module.css";
import GlobalLanguage from "../../GlobalLanguage/globalLanguage.tsx";
import { Title } from "../../assets/title.tsx";
// import { TranslateText } from "../../assets/translateText.tsx";

const About: React.FC = () => {
  const { Language } = useContext(GlobalLanguage)!;

  return (
    <div className={styles.box}> 
      <section className="about" id="about">
        {/* {Language === "English" ? (
          <div className={styles.divTitle}>
            <p className={styles.title}>About</p>
          </div>
        ) : (
          <div className={styles.divTitleE}>
            <p className={styles.title}>Sobre mí</p>
          </div>
        )} */}
        <div className={styles.divTitle}>
            <Title English="English" Spanish="Spanish"/>
          </div>
        {Language === "English" ? (
          <p className={styles.p1}>
            Hi, again. Nice to meet you. Please take a look around.
          </p>
        ) : (
          <p className={styles.p1}>Hola, mi nombre es</p>
        )}
        {Language === "English" ? (
          <p className={styles.p2}>
            I was born and raised in the city of Ciudad Autónoma de Buenos
            Aires, Argentina. Since I was little I was always a curious,
            dedicated and detailed person when it came to learning or doing
            homework. Today at 23 years old, and with the same spirit, I have
            the pleasure of focusing on what I am passionate about: developing
            and creating solutions for people. Thanks to this, throughout my
            life and experience as a developer, I am dedicated to increasing my
            skills for problem solving and teamwork, which has provided me with
            a great capacity for learning new tools, technologies and good
            communication skills.
          </p>
        ) : (
          <p className={styles.p2}>
            Nací y crecí en la ciudad de udad Autónoma de Buenos Aires,
            Argentina. Desde pequeño siempre fui una persona curiosa, dedicada y
            detallista a la hora de aprender o hacer tareas. Hoy con 23 años, y
            con el mismo espíritu, tengo el placer de enfocarme en lo que me
            apasiona: desarrollar y crear soluciones para las personas. Gracias
            a esto, a lo largo de mi vida y experiencia como desarrollador, me
            dedico a incrementar mis habilidades para la resolución de problemas
            y el trabajo en equipo, lo que me ha proporcionado tener una gran
            capacidad de aprendizaje de nuevas herramientas, tecnologías y
            buenas habilidades de comunicación.
          </p>
        )}
      </section>
    </div>
  );
};

export default About;
