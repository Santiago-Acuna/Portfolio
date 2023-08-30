import React from "react";
import TranslateText from "../TranslateText/translateText.js";
import styles from "./title.module.css";
interface TitleProps {
  English: string;
  Spanish: string;
}

const Title: React.FC<TitleProps> = ({ English, Spanish }) => {
  return (
    <div className={styles.underlined}>
      <span className={styles.text}>
        <TranslateText English={English} Spanish={Spanish} />
      </span>
    </div>
  );
};

export default Title;
