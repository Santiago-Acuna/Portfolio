import React, { useContext } from "react";
import styles from "./navbarLi.module.css";
import TranslateText from "../../../assets/TranslateText/translateText.tsx";
import { IsComponentVisibleState } from "../../../assets/GlobalStates/globalStates.tsx";

interface NavBarLiProps {
  English: string;
  Spanish: string;
  id: string;
  closeMenu: React.MouseEventHandler<HTMLElement>;
  currentSection : string
}

const NavbarLi: React.FC<NavBarLiProps> = ({
  English,
  Spanish,
  id,
  closeMenu,
  currentSection
}) => {
  const idNavbarLi = id + " idNavbarLi";
  const { IsVisible, setIsVisible } = useContext(IsComponentVisibleState)!;
  const IsNoVisible: React.MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    setIsVisible({ ...IsVisible, id, component: "no" });
    closeMenu(e);
  };
  const pClass = `${styles.pointer} ${currentSection === id ? styles.active : ''}`;

  return (
    <li className={styles.NavbarLi} id={`${idNavbarLi}`}>
      <p className={pClass} onClick={(e) => IsNoVisible(e)}>
        <TranslateText English={English} Spanish={Spanish} />
      </p>
    </li>
  );
};

export default NavbarLi;
