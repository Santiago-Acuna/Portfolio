import React from "react";
import styles from "./projects.module.css";
import recipes from "../../Images/Home.jpg";
import hype from "../../Images/hype shop.jpg";
import TranslateText from "../../assets/TranslateText/translateText.js";
import ProjectsMold from "./projectsUtils.tsx";
import { recipesSumary, recipesSumarySpanish, hypeShopSumary, hypeShopSumarySpanish  } from "./projectsResume.ts";
import Title from "../../assets/title/title.tsx";

const urlRecipesGithub = "https://github.com/Santiago-Acuna/Recipes";
const urlRecipes = "https://pi-food-vercel.vercel.app/";
const urlHypeGithub = "https://github.com/Santiago-Acuna/Hype-Shop";
const urlHype = "https://hype-kappa.vercel.app/";
const proyectsTechnologiesProjectRecipes=["HTML", "CSS", "JAVASCRIPT","NODE", "REACT", "REDUX",  "Express", "Sequelize.js","PostgreSQL", "SQL"]

const proyectsTechnologiesProjectHypeShop=["HTML", "CSS", "JAVASCRIPT","NODE", "REACT", "REDUX", "Express", "Sequelize.js","PostgreSQL", "SQL","GIT"]


const Projects: React.FC = () => {
  return (
    <div className={styles.box}>
      <section className="projects" id="Projects">
        <Title English={"Projects"} Spanish={"Proyectos"} />
        <p className={styles.p1}>
          <TranslateText
            English={"// Check out some of my recent work"}
            Spanish={"// Mira algunos de mis proyectos más recientes"}
          />
          
        </p>
        <ProjectsMold
          name={"Recipes"}
          imgPrime={recipes}
          urlGithub={urlRecipesGithub}
          urlDeploy={urlRecipes}
          projectSumaryEnglish={recipesSumary}
          projectSumaryEspanish={recipesSumarySpanish}
          proyectsTechnologies={proyectsTechnologiesProjectRecipes}
        />

        <ProjectsMold
          name={"Hype Shop"}
          imgPrime={hype}
          urlGithub={urlHypeGithub}
          urlDeploy={urlHype}
          projectSumaryEnglish={hypeShopSumary}
          projectSumaryEspanish={hypeShopSumarySpanish}
          proyectsTechnologies={proyectsTechnologiesProjectHypeShop}
        />
      </section>
    </div>
  );
};

export default Projects;
