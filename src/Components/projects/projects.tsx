import React from "react";
import styles from "./projects.module.css";
import recipes from "../../Images/Home.jpg";
import hype from "../../Images/hype shop.jpg";
import TranslateText from "../../assets/TranslateText/translateText.js";
import ProjectsMold from "./projectsUtils.tsx";
import { recipesSumary, hypeShopSumary } from "./projectsResume.ts";

const urlRecipesGithub = "https://github.com/Santiago-Acuna/Recipes";
const urlRecipes = "https://pi-food-vercel.vercel.app/";
const urlHypeGithub = "https://github.com/Santiago-Acuna/Hype-Shop";
const urlHype = "https://hype-kappa.vercel.app/";

const Projects: React.FC = () => {
  return (
    <div className={styles.box}>
      <section className="projects" id="Projects">
        <p className={styles.title}>
          <TranslateText English={"Projects"} Spanish={"Proyectos"} />
        </p>
        <p className={styles.p1}>
          <TranslateText
            English={"// Check out some of my recent work"}
            Spanish={"// Mira algunos de mis proyectos más recientes"}
          />
        </p>
        <ProjectsMold
          imgPrime={recipes}
          urlGithub={urlRecipesGithub}
          urlDeploy={urlRecipes}
          projectSumaryEnglish={recipesSumary}
          projectSumaryEspanish={recipesSumary}
        />

        <ProjectsMold
          imgPrime={hype}
          urlGithub={urlHypeGithub}
          urlDeploy={urlHype}
          projectSumaryEnglish={hypeShopSumary}
          projectSumaryEspanish={hypeShopSumary}
        />
      </section>
    </div>
  );
};

export default Projects;
