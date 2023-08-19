import React from "react";
import styles from "./navbar.module.css";
import {Link} from "react-scroll"

interface NavBarProps {
  Language: string;
  setLanguage: (language: string) => void;

}

const NavBar: React.FC<NavBarProps> = ({ Language, setLanguage, }) => {
  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        <li>
          <Link to="home" spy={true} smooth={true} offset={50} duration={500} className={styles.a1}>
            {Language === "English" ? "Home" : "Inicio"}
          </Link>
        </li>

        <li>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500} className={styles.a1}>
            {Language === "English" ? "About" : "Sobre mi"}
          </Link>
        </li>

        <li>
          <Link to="skills" spy={true} smooth={true} offset={50} duration={500} className={styles.a1} href="#skills">
            {Language === "English" ? "Skills" : "Tecnologías"}
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} offset={50} duration={500}className={styles.a1}>
            {Language === "English" ? "Projects" : "Proyectos"}
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} offset={50} duration={1000}className={styles.a1}>
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
        {/* </section> */}
      </ul>
      <section className="home" id="home"></section>
    </div>
  );
};

export default NavBar;
