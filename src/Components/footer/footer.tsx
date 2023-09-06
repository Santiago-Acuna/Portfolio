import React,{useContext } from "react";
import styles from "./footer.module.css";
import linkedinIcon from "../../Images/linkedin logo ph.png";
import linkedinIconRosa from "../../Images/linkedin logo rosa .png";
import githubIcon from "../../Images/github.png";
import githubIconRosa from "../../Images/github rosa.png";
import pdfIcon from "../../Images/pdf logo.png";
import pdfIconRosa from "../../Images/pdf logo rosa .png";
import {GlobalLanguageState} from "../../assets/GlobalStates/globalStates.tsx";

const Footer: React.FC = () => {
  const { Language } = useContext(GlobalLanguageState)!;
  const ImgLink: React.FC<{ img1: string; img2: string; url: string }> = ({
    img1,
    img2,
    url,
  }) => {
    return (
      <a
        className={styles.a1}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={styles.image}
          src={img1}
          onMouseOver={(e) => (e.currentTarget.src = img2)}
          onMouseOut={(e) => (e.currentTarget.src = img1)}
          alt="icon"
        />
      </a>
    );
  };

  const urlLinkedin =
    "https://www.linkedin.com/in/santiago-acu%C3%B1a-894ba9256/";
  const urlGithub = "https://github.com/Santiago-Acuna";
  const urlPdf =
    "https://docs.google.com/document/d/1sL9xL-pYGjmSTp3GCIJDP5vN90EkAUqR/edit?usp=sharing&ouid=112890987113970473117&rtpof=true&sd=true";
  const urlPdfEnglish =
    "https://docs.google.com/document/d/1LkqivdIoy0TjAufJMU6Ij3x7obKgSOec/edit?usp=sharing&ouid=112890987113970473117&rtpof=true&sd=true";

  return (
    <div className={styles.box}>
      <div className={styles.logoBox}>
        <ImgLink
          img1={linkedinIcon}
          img2={linkedinIconRosa}
          url={urlLinkedin}
        ></ImgLink>
        <ImgLink
          img1={githubIcon}
          img2={githubIconRosa}
          url={urlGithub}
        ></ImgLink>
        <ImgLink
          img1={pdfIcon}
          img2={pdfIconRosa}
          url={Language === "English" ? urlPdfEnglish : urlPdf}
        ></ImgLink>
      </div>

      <p className={styles.p1}>
        {Language === "English"
          ? "Built by Santiago Acuña"
          : "Hecho por Santiago Acuña"}
      </p>
    </div>
  );
};

export default Footer;
