import React from "react";
import styles from "./projects.module.css";
import recipes from "../Images/Home.jpg";
import githubIcon from "../Images/github.png";
import githubIconRosa from "../Images/github rosa.png";
import redirectButtonWhite from "../Images/redirect button white.png";
import redirectButtonRose from "../Images/redirect button rose.png";
import hype from "../Images/hype shop.jpg";

const urlRecipesGithub ="https://github.com/Santiago-Acuna/Recipes";
const urlRecipes = "https://pi-food-vercel.vercel.app/";
const urlHypeGithub = "https://github.com/Santiago-Acuna/Hype-Shop";
const urlHype = "https://hype-kappa.vercel.app/";

export default function Projects({ Language }) {
  const ImgLink = ({ img1, img2, url }) => {
    return (
      <a className={styles.a1} href={url} target="_blank">
        <img
          className={styles.image}
          src={img1}
          onMouseOver={(e) => (e.currentTarget.src = `${img2}`)}
          onMouseOut={(e) => (e.currentTarget.src = `${img1}`)}
        />
      </a>
    );
  };

  return (
    <div className={styles.box}>
      <section class="projects" id="projects">
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
        <div>
          <p className={styles.proyectTitle}>Recipes App</p>
          <div className={styles.mainContent}>
            <img className={styles.img1} src={recipes} alt="project 1 img" />
            <div className={styles.description}>
              <div className={styles.summary}>
                {Language === "English" ? (
                  <p className="">
                    A SPA that consumes data from an external API, and allows
                    general and detailed information of more than 5.000 recipes,
                    among the functionalities it allows recipes and ordering
                    recipes by different variables such as healthscore, diets,
                    name.
                  </p>
                ) : (
                  <p className="">
                    Un SPA que consume datos de una API externa, y permite
                    información general y detallada de más de 5.000 recetas,
                    entre las funcionalidades permite recetas y ordenar recetas
                    por diferentes variables como salud, dietas, nombre.
                  </p>
                )}
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
            ></ImgLink>
            <ImgLink
              img1={redirectButtonWhite}
              img2={redirectButtonRose}
              url={urlRecipes}
            ></ImgLink>
          </div>
        </div>

        <div>
          <p className={styles.proyectTitle}>Hype Shop</p>
          <div className={styles.mainContent}>
            <img className={styles.img1}  style={{height: "100%"}} src={hype} alt="project 2 img" />
            <div className={styles.description}>
              <div className={styles.summary}>
                {Language === "English" ? (
                  <p className="">
                    Development of an E-commerce that I carried out together
                    with a team of developers. The application consists of the
                    innate characteristics of an e-commerce (CRUD of products,
                    authentication, catalogue, checkout, etc...). Payment
                    gateway integration with Stripe. Sending transactional
                    emails with NodeMailer. Management of shopping cart and
                    product orders. User administration and password management.
                    For project decision making, we opted for agile
                    methodologies with weekly sprints (SCRUM).
                  </p>
                ) : (
                  <p className="">
                    Desarrollo de un E-commerce que realicé en conjunto a un
                    equipo de desarrolladores. La aplicación consta de las
                    características innatas de un e-commerce (CRUD de productos,
                    autenticación, catálogo, checkout, etc…). Integración de
                    pasarela de pagos con Stripe. Envío de emails
                    transaccionales con NodeMailer. Administración de carrito de
                    compras y órdenes de productos. Administración de usuarios y
                    gestión de claves. Para la toma de decisiones del proyecto
                    optamos por metodologías ágiles con sprints semanales
                    (SCRUM)..{" "}
                  </p>
                )}
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
            ></ImgLink>
            <ImgLink
              img1={redirectButtonWhite}
              img2={redirectButtonRose}
              url={urlHype}
            ></ImgLink>
          </div>
        </div>
      </section>
    </div>
  );
}
