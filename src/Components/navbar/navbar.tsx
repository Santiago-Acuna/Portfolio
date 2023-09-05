import React, { useContext } from "react";
import styles from "./navbar.module.css";
import {GlobalLanguageState,} from "../../assets/GlobalStates/globalStates.tsx";
import NavbarLi from "./navbarLi/navbarLi";

const NavBar: React.FC = () => {
  const { setLanguage } = useContext(GlobalLanguageState)!;
  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        <NavbarLi English="Home" Spanish="Inicio" id="Home" />
        <NavbarLi English="About" Spanish="Sobre mi" id="About" />
        <NavbarLi English="Skills" Spanish="Tecnologías" id="Skills" />
        <NavbarLi English="Certificates" Spanish="Certificados" id="Certificates" />
        <NavbarLi English="Projects" Spanish="Proyectos" id="Projects" />
        <NavbarLi English="Contact" Spanish="Contacto" id="Contact" />
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
      <section className="home" id="Home"></section>
    </div>
  );
};

export default NavBar;
