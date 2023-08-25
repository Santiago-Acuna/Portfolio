import React, { useState, useEffect } from "react";

import Presentation from "../Components/presentation/presentation.tsx";
import About from "../Components/about/about.tsx";
import Skills from "../Components/skills/skills.tsx";
import Contact from "../Components/contact/contact.tsx";
import Projects from "../Components/projects/projects.tsx";
import Certificates from "../Components/certificates/certificates.tsx";
import Footer from "../Components/footer/footer.tsx";
import styles from "./infinityScroll.module.css";

const InfiniteScrollComponent: React.FC<React.ComponentState> = () => {
  const componentsList: Array<React.FC<React.ComponentState>> = [
    About,
    Skills,
    Certificates,
    Projects,
    Contact,
    Footer,
  ];
  const [components, setComponents] = useState<Array<React.FC>>([Presentation]);
  console.log("window.innerHeight" + window.innerHeight);
  console.log("window.scrollY" + window.scrollY);
  console.log("document.body.scrollHeight" + document.body.scrollHeight);

  const fetchItems = () => {
    const newComponent = componentsList.shift();
    newComponent &&
      setComponents((prevComponents) => [...prevComponents, newComponent]);
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      fetchItems();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      {components.map((Component, index) => (
        <Component key={index}/>
      ))}
    </div>
  );
};

export default InfiniteScrollComponent;
