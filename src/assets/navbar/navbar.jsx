import React from "react";
import styles from "./navbar.module.css";

export default function NavBar({Language, setLanguage}) {
  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        <li>
          <a className={styles.a1} href="#home">
            {Language === "English" ? "Home": "Inicio" }
          </a>
        </li>

        <li>
          <a className={styles.a1} href="#about">
          {Language === "English" ? "About": "Sobre mi" }
          </a>
        </li>

        <li>
          <a className={styles.a1} href="#skills">
          {Language === "English" ? "Skills": "Tecnologías" }
          </a>
        </li>
        <li>
          <a className={styles.a1} href="#projects">
          {Language === "English" ? "Projects": "Proyectos" }
          </a>
        </li>
        <li>
          <a className={styles.a1} href="#contact">
          {Language === "English" ? "Contact": "Contacto" }
          </a>
        </li>
        {/* <li>
          Sun
        </li> */}
        <li>
          <p className={styles.p1} onClick={() => setLanguage("English")}>
            En
          </p>
        </li>
        <li>
          <p className={styles.p1} onClick={() => setLanguage("Español")}>
            Es
          </p>
        </li>
        {/* </section> */}
      </ul>
      <section class="home" id="home"></section>
    </div>
  );
}
