import React from "react";
import styles from "./about.module.css";
import Title from "../../assets/title/title.tsx";
import TranslateText from "../../assets/TranslateText/translateText.js";
import {
  englishAbout,
  spanishAbout,
  textToIntroduceEnglish,
  textToIntroduceSpanish,
} from "./aboutText.ts";

const About: React.FC = () => {
  return (
    <div className={styles.box}>
      <section className="about" id="About">
        <Title English="About me" Spanish="Sobre mi" />
        <p className={styles.p1}>
          <TranslateText
            English={textToIntroduceEnglish}
            Spanish={textToIntroduceSpanish}
          />
        </p>
        <p className={styles.p2}>
          <TranslateText English={englishAbout} Spanish={spanishAbout} />
        </p>
      </section>
    </div>
  );
};

export default About;
