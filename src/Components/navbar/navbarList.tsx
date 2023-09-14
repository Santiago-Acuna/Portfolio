import { useContext } from "react";
import NavbarLi from "./navbarLi/navbarLi.tsx";
import styles from "./navbar.module.css";
import { GlobalLanguageState } from "../../assets/GlobalStates/globalStates.tsx";
import close from "../../Images/close-icon-white.png";
import closeYellow from "../../Images/close-icon-yellow.png";

interface ComputerNavBarProps {
  menuType: string;
  closeMenu: React.MouseEventHandler<HTMLElement>;
}
// hacer navbar list
const NavbarList = ({ menuType, closeMenu }: ComputerNavBarProps) => {
  const { setLanguage } = useContext(GlobalLanguageState)!;
  return (
    <ul className={styles[menuType + "Menu"]}>
      <li>
        {
          menuType === "phone" && (
            <img
              src={close}
              className={styles.closeMenuImg}
              onClick={closeMenu}
              alt="close menu"
              onMouseOver={(e) => (e.currentTarget.src = closeYellow)}
              onMouseOut={(e) => (e.currentTarget.src = close)}
            />
          )
        }
      </li>
      <NavbarLi
        English="Home"
        Spanish="Inicio"
        id="Home"
        closeMenu={closeMenu}
      />
      <NavbarLi
        English="About"
        Spanish="Sobre mi"
        id="About"
        closeMenu={closeMenu}
      />
      <NavbarLi
        English="Skills"
        Spanish="Tecnologías"
        id="Skills"
        closeMenu={closeMenu}
      />
      <NavbarLi
        English="Certificates"
        Spanish="Certificados"
        id="Certificates"
        closeMenu={closeMenu}
      />
      <NavbarLi
        English="Projects"
        Spanish="Proyectos"
        id="Projects"
        closeMenu={closeMenu}
      />
      <NavbarLi
        English="Contact"
        Spanish="Contacto"
        id="Contact"
        closeMenu={closeMenu}
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
