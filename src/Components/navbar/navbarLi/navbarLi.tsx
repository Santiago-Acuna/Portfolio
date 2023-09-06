import React, { useContext } from "react";
import styles from "./navbarLi.module.css"
import TranslateText from "../../../assets/TranslateText/translateText.tsx";
import { IsComponentVisibleState } from "../../../assets/GlobalStates/globalStates.tsx";

interface NavBarLiProps {
  English: string;
  Spanish: string;
  id: string;
}

const NavbarLi: React.FC<NavBarLiProps> = ({ English, Spanish, id }) => {
  const { IsVisible, setIsVisible } = useContext(IsComponentVisibleState)!;

  const idNavbarLi = id + " idNavbarLi";

  const IsNoVisible = () => {
    setIsVisible({ ...IsVisible, id, component: "no" });
  };

  return (
    <li id={`${idNavbarLi}`}>
      <p  className={styles.pointer} onClick={() => IsNoVisible()}>
        <TranslateText English={English} Spanish={Spanish} />
      </p>
    </li>
  );
};

export default NavbarLi;
