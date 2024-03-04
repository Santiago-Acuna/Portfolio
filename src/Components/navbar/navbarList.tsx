import { useContext } from "react";
import NavbarLi from "./navbarLi/navbarLi.tsx";
import styles from "./navbar.module.css";
import { GlobalLanguageState, CurrentSectionState } from "../../assets/GlobalStates/globalStates.tsx";
import close from "../../Images/close-icon-white.png";
import closeYellow from "../../Images/close-icon-yellow.png";

interface ComputerNavBarProps {
  menuType: string;
  closeMenu: React.MouseEventHandler<HTMLElement>;
}
const NavbarList = ({ menuType, closeMenu }: ComputerNavBarProps) => {
  const { setLanguage } = useContext(GlobalLanguageState)!;
  const { CurrentSection } = useContext(CurrentSectionState)!;

  return (
    <ul className={styles[menuType + "Menu"]}>
      <li>
        {menuType === "phone" && (
          <img
            src={close}
            className={styles.closeMenuImg}
            onClick={closeMenu}
            alt="close menu"
            onMouseOver={(e) => (e.currentTarget.src = closeYellow)}
            onMouseOut={(e) => (e.currentTarget.src = close)}
          />
        )}
      </li>
      <NavbarLi
        English="Home"
        Spanish="Inicio"
        id="Presentation"
        closeMenu={closeMenu}
        currentSection={CurrentSection}
      />
      <NavbarLi
        English="About"
        Spanish="Sobre mi"
        id="About"
        closeMenu={closeMenu}
        currentSection={CurrentSection}
      />
       <NavbarLi
        English="Experience"
        Spanish="Experiencia"
        id="Experience"
        closeMenu={closeMenu}
        currentSection={CurrentSection}
      />
      <NavbarLi
        English="Technologies"
        Spanish="Tecnologías"
        id="Technologies"
        closeMenu={closeMenu}
        currentSection={CurrentSection}
      />
      <NavbarLi
        English="Projects"
        Spanish="Proyectos"
        id="Projects"
        closeMenu={closeMenu}
        currentSection={CurrentSection}
      />
      <NavbarLi
        English="Certificates"
        Spanish="Certificados"
        id="Certificates"
        closeMenu={closeMenu}
        currentSection={CurrentSection}
      />
      <NavbarLi
        English="Contact"
        Spanish="Contacto"
        id="Contact"
        closeMenu={closeMenu}
        currentSection={CurrentSection}
      />
      {/*   <li>
    Sun
  </li> */}
      <li className={styles.NavbarLi}>
        <p className={styles.p1} onClick={() => setLanguage("English")}>
          En
        </p>
      </li>
      <li className={styles.NavbarLi}>
        <p className={styles.p1} onClick={() => setLanguage("Español")}>
          Es
        </p>
      </li>
    </ul>
  );
};

export default NavbarList;
