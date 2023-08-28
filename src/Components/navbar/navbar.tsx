import React, { useContext } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-scroll";
import GlobalLanguage from "../../GlobalLanguage/globalLanguage.tsx";

const NavBar: React.FC = () => {
  const { Language, setLanguage } = useContext(GlobalLanguage)!;
  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={styles.a1}
          >
            {Language === "English" ? "Home" : "Inicio"}
          </Link>
        </li>

        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={styles.a1}
          >
            {Language === "English" ? "About" : "Sobre mi"}
          </Link>
        </li>

        <li>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={styles.a1}
            href="#skills"
          >
            {Language === "English" ? "Skills" : "Tecnologías"}
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={styles.a1}
          >
            {Language === "English" ? "Projects" : "Proyectos"}
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            className={styles.a1}
          >
            {Language === "English" ? "Contact" : "Contacto"}
          </Link>
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
      </ul>
      <section className="home" id="home"></section>
    </div>
  );
};

export default NavBar;
