import React from "react";
import styles from "./projects.module.css";
import recipes from "../../Images/Home.jpg";
import githubIcon from "../../Images/github.png";
import githubIconRosa from "../../Images/github rosa.png";
import redirectButtonWhite from "../../Images/redirect button white.png";
import redirectButtonRose from "../../Images/redirect button rose.png";
import hype from "../../Images/hype shop.jpg";

interface ImgLinkProps {
  img1: string;
  img2: string;
  url: string;
}

const urlRecipesGithub = "https://github.com/Santiago-Acuna/Recipes";
const urlRecipes = "https://pi-food-vercel.vercel.app/";
const urlHypeGithub = "https://github.com/Santiago-Acuna/Hype-Shop";
const urlHype = "https://hype-kappa.vercel.app/";

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

const Projects: React.FC<React.ComponentState> = ({ Language }) => {
  return (
    <div className={styles.box}>
      <section className="projects" id="projects">
        {Language === "English" ? (
          <div className={styles.divTitle}>
            <p className={styles.title}>Projects</p>
          </div>
        ) : (
          <div className={styles.divTitleE}>
            <p className={styles.title}>Proyectos</p>
          </div>
        )}
        <p className={styles.p1}>
          {Language === "English"
            ? "// Check out some of my recent work"
            : "// Mira algunos de mis proyectos más recientes"}
        </p>

        {/* Recipes App */}
        <div>
          <p className={styles.proyectTitle}>Recipes App</p>
          <div className={styles.mainContent}>
            <img className={styles.img1} src={recipes} alt="project 1 img" />
            <div className={styles.description}>
              <div className={styles.summary}>
                <p className="">
                  {Language === "English"
                    ? "A SPA that consumes data from an external API..."
                    : "Un SPA que consume datos de una API externa..."}
                </p>
              </div>
              <p className={styles.p2}>
                React Redux Css Nodejs Express Sequelize.js PostgreSQL
                Spoonacular API
              </p>
              <div></div>
            </div>
          </div>
          <div className={styles.diva}>
            <ImgLink
              img1={githubIcon}
              img2={githubIconRosa}
              url={urlRecipesGithub}
            />
            <ImgLink
              img1={redirectButtonWhite}
              img2={redirectButtonRose}
              url={urlRecipes}
            />
          </div>
        </div>

        {/* Hype Shop */}
        <div>
          <p className={styles.proyectTitle}>Hype Shop</p>
          <div className={styles.mainContent}>
            <img
              className={styles.img1}
              style={{ height: "100%" }}
              src={hype}
              alt="project 2 img"
            />
            <div className={styles.description}>
              <div className={styles.summary}>
                <p className="">
                  {Language === "English"
                    ? "Development of an E-commerce that I carried out together with a team of developers..."
                    : "Desarrollo de un E-commerce que realicé en conjunto a un equipo de desarrolladores..."}
                </p>
              </div>
              <p className={styles.p2}>
                React Redux Tailwind Express Node.js Sequelize.js SQL PostgreSQL
                NODEMAILER, Mercadolibre API
              </p>
              <div></div>
            </div>
          </div>
          <div className={styles.diva}>
            <ImgLink
              img1={githubIcon}
              img2={githubIconRosa}
              url={urlHypeGithub}
            />
            <ImgLink
              img1={redirectButtonWhite}
              img2={redirectButtonRose}
              url={urlHype}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
