import React, { useContext } from "react";
import styles from "./presentation.module.css";
import {GlobalLanguageState} from "../../assets/GlobalStates/globalStates.tsx";

const urlPdf: string =
  "https://docs.google.com/document/d/1sL9xL-pYGjmSTp3GCIJDP5vN90EkAUqR/edit?usp=sharing&ouid=112890987113970473117&rtpof=true&sd=true";
const urlPdfEnglish: string =
  "https://docs.google.com/document/d/1LkqivdIoy0TjAufJMU6Ij3x7obKgSOec/edit?usp=sharing&ouid=112890987113970473117&rtpof=true&sd=true";

const Presentation: React.FC = () => {
  const { Language } = useContext(GlobalLanguageState)!;

  return (
    <div className={styles.box}>
      <section  id="Presentation">
      {Language === "English" ? (
        <p className={styles.p1}>Hi, my name is</p>
      ) : (
        <p className={styles.p1}>Hola, mi nombre es</p>
      )}
      <p className={styles.p2}>Santiago Acuña</p>
      {Language === "English" ? (
        <p className={styles.p3}>I'm a Full Stack Developer</p>
      ) : (
        <p className={styles.p3}>Soy Full Stack Developer</p>
      )}
      {Language === "English" ? (
        <p className={styles.p4}>
          with the ability to build and optimize end-user-oriented web sites and
          applications in a scalable and modularized manner I love to
          investigate, solve problems, learn from others and teach, that is why
          in me you will find a developer with conflict resolution skills,
          willing to listen to ideas and contribute all my knowledge to achieve
          the proposed objectives.I have experience in JavaScript language,
          HTML, CSS and also in technologies like Node.js, Express, Sequelize,
          PostgreSQL, React.js, Redux...
        </p>
      ) : (
        <p className={styles.p4}>
          con la capacidad de construir y optimizar end-user-oriented web sites
          y aplicaciones de manera escalable y modularizada Me encanta
          investigar, resolver problemas, aprender de los demás y enseñar, es
          por eso que en mí encontrarás un desarrollador con habilidades de
          resolución de conflictos, dispuesto a escuchar ideas y aportar todo mi
          conocimiento para lograr las objetivos propuestos. Tengo experiencia
          en lenguaje JavaScript, HTML, CSS y también en tecnologías como
          Node.js, Express, Sequelize, PostgreSQL, React.js, Redux...
        </p>
      )}
      <a
        className={styles.a1}
        href={Language === "English" ? urlPdfEnglish : urlPdf}
        target="_blank"
        rel="noopener noreferrer nofollow external"
      >
        <button className={styles.btn}>
          {Language === "English"
            ? "Check out my resume!"
            : " Mira mi curriculum !"}
        </button>
      </a>
      </section>
    </div>
  );
};

export default Presentation;