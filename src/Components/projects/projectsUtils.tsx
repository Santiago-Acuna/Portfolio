import githubIcon from "../../Images/github.png";
import githubIconRosa from "../../Images/github rosa.png";
import redirectButtonWhite from "../../Images/redirect button white.png";
import redirectButtonRose from "../../Images/redirect button rose.png";
import styles from "./projects.module.css";
import TranslateText from "../../assets/TranslateText/translateText.js";

interface ImgLinkProps {
  img1: string;
  img2: string;
  url: string;
}

interface ProjectsMold {
  name:string;
  urlGithub: string;
  urlDeploy: string;
  imgPrime: string;
  projectSumaryEnglish: string;
  projectSumaryEspanish: string;
}

const ImgLink: React.FC<ImgLinkProps> = ({ img1, img2, url }) => {
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
        onMouseOver={(e) => (e.currentTarget.src = `${img2}`)}
        onMouseOut={(e) => (e.currentTarget.src = `${img1}`)}
        alt="Link"
      />
    </a>
  );
};

const ProjectsMold: React.FC<ProjectsMold> = ({
  name,
  imgPrime,
  urlGithub,
  urlDeploy,
  projectSumaryEnglish,
  projectSumaryEspanish,
}) => {
  return (
    <div>
      <p className={styles.proyectTitle}>{`${name} App`}</p>
      <div className={styles.mainContent}>
        <img
          className={styles.img1}
          src={imgPrime}
          alt={`${projectSumaryEnglish} img`}
        />
        <div className={styles.description}>
          <div className={styles.summary}>
            <p className="">
              <TranslateText
                English={projectSumaryEnglish}
                Spanish={projectSumaryEspanish}
              />
            </p>
          </div>
          <p className={styles.p2}>
            React Redux Css Nodejs Express Sequelize.js PostgreSQL Spoonacular
            API
          </p>
          <div></div>
        </div>
      </div>
      <div className={styles.diva}>
        <ImgLink img1={githubIcon} img2={githubIconRosa} url={urlGithub} />
        <ImgLink
          img1={redirectButtonWhite}
          img2={redirectButtonRose}
          url={urlDeploy}
        />
      </div>
    </div>
  );
};

export default ProjectsMold;
