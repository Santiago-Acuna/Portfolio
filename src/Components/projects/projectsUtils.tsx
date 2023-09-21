import githubIcon from "../../Images/github.png";
import githubIconRosa from "../../Images/github rosa.png";
import redirectButtonWhite from "../../Images/redirect button white.png";
import redirectButtonRose from "../../Images/redirect button rose.png";
import styles from "./projects.module.css";
import TranslateText from "../../assets/TranslateText/translateText.js";
import { startRandomColorEffect } from "../../assets/RandomColor/randomColor";
import isElementVisibleOnScroll from "../../assets/IsOnScreen/IsOnScreen";

interface ImgLinkProps {
  img1: string;
  img2: string;
  url: string;
}

interface ProjectsMold {
  name: string;
  urlGithub: string;
  urlDeploy: string;
  imgPrime: string;
  projectSumaryEnglish: string;
  projectSumaryEspanish: string;
  proyectsTechnologies: Array<string>;
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

interface backgroundColorOnProps {
  proyectsTechnologies: Array<string>;
  name : string
}

const backgroundColorOn = async ({
  proyectsTechnologies,
   name
}: backgroundColorOnProps) => {
  const skillsGrid = document.getElementById("Technologies");
  const technologiesButton = document.getElementById("technologiesButtonOfProject" + name)
  skillsGrid &&
    skillsGrid.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });

  if (proyectsTechnologies) {
    for (const element of proyectsTechnologies) {
      const Technology = element && document.getElementById(element);
      if (Technology) {
        await new Promise((resolve) => {
          setTimeout(() => {
            isElementVisibleOnScroll(element).then((result) => {
              result.isElementVisible === false &&
                Technology.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "start",
                });
            });

            resolve(startRandomColorEffect(Technology));
          }, 1000);
        });
        
      }
    }
    technologiesButton && console.log("hola")
    await new Promise((resolve) => {
      technologiesButton && console.log("hola")
      setTimeout(() => {
        technologiesButton && console.log("hola")
        technologiesButton && resolve(technologiesButton.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "start",
        }));
      }, 1000);
    });
  }
};

const ProjectsMold: React.FC<ProjectsMold> = ({
  name,
  imgPrime,
  urlGithub,
  urlDeploy,
  projectSumaryEnglish,
  projectSumaryEspanish,
  proyectsTechnologies,
}) => {
  const backgroundColorOnHook: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    e.preventDefault();
    backgroundColorOn({ proyectsTechnologies, name });
  };
  return (
    <div className={styles.projectsMoldBox}>
      <p className={styles.proyectTitle}>{`${name} App`}</p>
      <div className={styles.imgAndProjectsUrls}>
        <img
          className={styles.img1}
          src={imgPrime}
          alt={`${projectSumaryEnglish} img`}
        />
        <div className={styles.divA}>
          <ImgLink img1={githubIcon} img2={githubIconRosa} url={urlGithub} />
          <ImgLink
            img1={redirectButtonWhite}
            img2={redirectButtonRose}
            url={urlDeploy}
          />
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.summary}>
          <p>
            <TranslateText
              English={projectSumaryEnglish}
              Spanish={projectSumaryEspanish}
            />
          </p>
        </div>
        <button className={styles.technologies} onClick={backgroundColorOnHook} id = {`technologiesButtonOfProject${name}`}>
          <TranslateText English={"Technologies"} Spanish={"Tecnologías"} />
        </button>
        {/* <p className={styles.p2}>
            React Redux Css Nodejs Express Sequelize.js PostgreSQL Spoonacular
            API
          </p> */}
      </div>
    </div>
  );
};

export default ProjectsMold;
