import React, { useContext } from "react";
import styles from "./left sidebar.module.css";
import linkedinIcon from "../../Images/linkedin logo ph.png";
import linkedinIconRosa from "../../Images/linkedin logo rosa .png";
import githubIcon from "../../Images/github.png";
import githubIconRosa from "../../Images/github rosa.png";
import pdfIcon from "../../Images/pdf logo.png";
import pdfIconRosa from "../../Images/pdf logo rosa .png";
import GlobalLanguage from "../../GlobalLanguage/globalLanguage.tsx";

const urlLinkedin =
  "https://www.linkedin.com/in/santiago-acu%C3%B1a-894ba9256/";
const urlGithub = "https://github.com/Santiago-Acuna";
const urlPdf =
  "https://docs.google.com/document/d/1sL9xL-pYGjmSTp3GCIJDP5vN90EkAUqR/edit?usp=sharing&ouid=112890987113970473117&rtpof=true&sd=true";
const urlPdfEnglish =
  "https://docs.google.com/document/d/1LkqivdIoy0TjAufJMU6Ij3x7obKgSOec/edit?usp=sharing&ouid=112890987113970473117&rtpof=true&sd=true";

const LeftSideBar: React.FC = () => {
  const { Language } = useContext(GlobalLanguage)!;
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

  return (
    <div className={styles.box}>
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

      <div className={styles.verticalBar}></div>
    </div>
  );
};

export default LeftSideBar;
