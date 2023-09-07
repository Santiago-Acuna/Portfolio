import React, {useContext} from "react";
import styles from "./presentation.module.css";
import TranslateText from "../../assets/TranslateText/translateText.js";
import {
  urlPdf,
  urlPdfEnglish,
  presentationEngish,
  presentationSpanish,
} from "./presentationTexts.tsx";
import { GlobalLanguageState } from "../../assets/GlobalStates/globalStates.tsx";

const Presentation: React.FC = () => {
  const { Language } = useContext(GlobalLanguageState)!;
  return (
    <div className={styles.box}>
      <section id="Presentation">
        <p className={styles.p1}>
          <TranslateText
            English={"Hi, my name is"}
            Spanish={"Hola, mi nombre es"}
          />
        </p>
        <p className={styles.p2}>Santiago Acuña</p>
        <p className={styles.p1}>
          <TranslateText
            English={"I'm a Full Stack Developer"}
            Spanish={"Hola, mi nombre es"}
          />
        </p>

        <p className={styles.p4}>
          <TranslateText
            English={presentationEngish}
            Spanish={presentationSpanish}
          />
        </p>

        <a
          className={styles.a1}
          href={Language === "English" ? urlPdfEnglish : urlPdf}
          target="_blank"
          rel="noopener noreferrer nofollow external"
        >
          <button className={styles.btn}>
            <TranslateText
              English={"Check out my resume!"}
              Spanish={"Mira mi curriculum"}
            />
          </button>
        </a>
      </section>
    </div>
  );
};

export default Presentation;
