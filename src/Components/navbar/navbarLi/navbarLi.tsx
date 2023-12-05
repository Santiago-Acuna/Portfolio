import React, { useContext } from "react";
import styles from "./navbarLi.module.css";
import TranslateText from "../../../assets/TranslateText/translateText.tsx";
import { IsComponentVisibleState } from "../../../assets/GlobalStates/globalStates.tsx";

interface NavBarLiProps {
  English: string;
  Spanish: string;
  id: string;
  closeMenu: React.MouseEventHandler<HTMLElement>;
}

const NavbarLi: React.FC<NavBarLiProps> = ({
  English,
  Spanish,
  id,
  closeMenu,
}) => {
  const idNavbarLi = id + " idNavbarLi";
  const { IsVisible, setIsVisible } = useContext(IsComponentVisibleState)!;
  const IsNoVisible: React.MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    setIsVisible({ ...IsVisible, id, component: "no" });
    closeMenu(e);
  };

  return (
    <li className={styles.NavbarLi} id={`${idNavbarLi}`}>
      <p className={`${styles.pointer}`} onClick={(e) => IsNoVisible(e)}>
        <TranslateText English={English} Spanish={Spanish} />
      </p>
    </li>
  );
};

export default NavbarLi;
