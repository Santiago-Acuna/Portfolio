import React from "react";
import TranslateText from "../../../assets/TranslateText/translateText.js";
import { Link } from "react-scroll";
interface NavBarLiProps {
  English: string;
  Spanish: string;
  section: string;
}

const NavbarLi: React.FC<NavBarLiProps> = ({ English, Spanish, section }) => {
  return (
    <li>
      <Link to={section} spy={true} smooth={true} offset={50} duration={500}>
        <TranslateText English={English} Spanish={Spanish} />
      </Link>
    </li>
  );
};

export default NavbarLi;
