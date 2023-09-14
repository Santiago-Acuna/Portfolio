import React, { useState } from "react";
import styles from "./navbar.module.css";
import hamburger from "../../Images/hamburger-icon ph 6.png";
import hamburgerYellow from "../../Images/yellow-hamburger-icon.png";
import NavbarList from "./navbarList";

const NavBar: React.FC = () => {
  const [menuType, setMenuType] = useState<string>("computer");

  const openMenu: React.MouseEventHandler<HTMLImageElement> = (e) => {
    e.preventDefault();
    setMenuType("phone");
  };

  const closeMenu: React.MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    setMenuType("computer");
  };
  return (
    <div className={styles.box}>

      {menuType === "computer" && 
        <NavbarList menuType={menuType} closeMenu={closeMenu} />
      }
      {menuType === "computer" &&

      <img
          src={hamburger}
          className={styles.openMenuImg}
          onClick={(e) => openMenu(e)}
          alt="abrir menú"
          aria-label="Open Menu"
      onMouseOver={(e) => (e.currentTarget.src = hamburgerYellow)}
        onMouseOut={(e) => (e.currentTarget.src = hamburger)}
        /> 
    }
      {menuType === "phone" && <NavbarList menuType={menuType} closeMenu={closeMenu} />}

      <section className="home" id="Home"></section>
    </div>
  );
};

export default NavBar;
