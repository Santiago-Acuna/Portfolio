import React, { useContext } from "react";
import styles from "./navbar.module.css";
import GlobalLanguage from "../../GlobalLanguage/globalLanguage.tsx";
import NavbarLi from "./navbarLi/navbarLi";

const NavBar: React.FC = () => {
  const { setLanguage } = useContext(GlobalLanguage)!;
  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        <NavbarLi English="Home" Spanish="Inicio" section="home" />
        <NavbarLi English="About" Spanish="Sobre mi" section="about" />
        <NavbarLi English="Skills" Spanish="Tecnologías" section="skills" />
        <NavbarLi English="Projects" Spanish="Proyectos" section="projects" />
        <NavbarLi English="Contact" Spanish="Contacto" section="contact" />
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
      </ul>
      <section className="home" id="home"></section>
    </div>
  );
};

export default NavBar;
