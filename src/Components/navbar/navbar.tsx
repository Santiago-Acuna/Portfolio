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

// import React, { useState } from "react";
// import  "./navbar.css";
// import hamburger from "../Images/hamburger-icon ph 6.png";
// import close from '../Images/close-icon.svg'

// export default function NavBar({Language, setLanguage}) {
//   const [menu, setMenu] = useState(false);

// //  let menuController = menu ? "menuOpened" :  "menu"

//  const mobileMenu = (e)=>{
// e.preventDefault();
// setMenu(true)
//  }

//  const computerMenu = (e)=>{
//   e.preventDefault();
//   setMenu(false)
//    }

//    const setLanguageEnMobile = (e)=>{
//     e.preventDefault();
//     setLanguage("English")
//     setMenu(false)
//    }
//    const setLanguageEsMobile = (e)=>{
//     e.preventDefault();
//     setLanguage("Español")
//     setMenu(false)
//    }

//   return (
//     <div className="box">
//               <button className="openMenu" onClick={(e)=>mobileMenu(e)}>
//           <img src={hamburger} className="openMenuImg" alt="abrir menú" aria-label="Open Menu"/>
//          </button>
//       {!menu &&<ul className="menu">
//       <button className="closeMenu" >
//             <img src={close} className="closeMenuImg"  alt="close menu" />
//           </button>
//         <li>
//           <a className="a1" href="#home">
//             {Language === "English" ? "Home": "Inicio" }
//           </a>
//         </li>

//         <li className="li1">
//           <a className="a1" href="#about">
//           {Language === "English" ? "About": "Sobre mi" }
//           </a>
//         </li>

//         <li>
//           <a className="a1" href="#skills">
//           {Language === "English" ? "Skills": "Tecnologías" }
//           </a>
//         </li>
//         <li>
//           <a className="a1" href="#projects">
//           {Language === "English" ? "Projects": "Proyectos" }
//           </a>
//         </li>
//         <li>
//           <a className="a1" href="#contact">
//           {Language === "English" ? "Contact": "Contacto" }
//           </a>
//         </li>
//         {/* <li>
//           Sun
//         </li> */}
//         <li>
//           <p className="p1" onClick={() => setLanguage("English")}>
//             En
//           </p>
//         </li>
//         <li>
//           <p className="p1" onClick={() => setLanguage("Español")}>
//             Es
//           </p>
//         </li>
//       </ul>}
//       {menu && <ul className="menuOpened ">
//       <button className="closeMenu" >
//             <img src={close} className="closeMenuImg" onClick={(e)=>computerMenu(e)} alt="close menu" />
//           </button>
//         <li>
//           <a className="a1" href="#home" onClick={(e)=>computerMenu(e)}>
//             {Language === "English" ? "Home": "Inicio" }
//           </a>
//         </li>

//         <li className="li1">
//           <a className="a1" href="#about" onClick={(e)=>computerMenu(e)}>
//           {Language === "English" ? "About": "Sobre mi" }
//           </a>
//         </li>

//         <li>
//           <a className="a1" href="#skills" onClick={(e)=>computerMenu(e)}>
//           {Language === "English" ? "Skills": "Tecnologías" }
//           </a>
//         </li>
//         <li>
//           <a className="a1" href="#projects" onClick={(e)=>computerMenu(e)}>
//           {Language === "English" ? "Projects": "Proyectos" }
//           </a>
//         </li>
//         <li>
//           <a className="a1" href="#contact" onClick={(e)=>computerMenu(e)}>
//           {Language === "English" ? "Contact": "Contacto" }
//           </a>
//         </li>
//         {/* <li>
//           Sun
//         </li> */}
//         <li>
//           <p className="p1" onClick={(e) => setLanguageEnMobile(e)} >
//             En
//           </p>
//         </li>
//         <li>
//           <p className="p1" onClick={(e) => setLanguageEsMobile(e)}>
//             Es
//           </p>
//         </li>
//       </ul>}

//     </div>
//   );
// }
