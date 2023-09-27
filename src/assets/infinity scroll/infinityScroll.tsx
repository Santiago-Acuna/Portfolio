import React, { useContext, useEffect } from "react";
import styles from "./infinityScroll.module.css";
import {
  GlobalVisibleComponentsState,
  GlobalAllComponentsState,
  IsComponentVisibleState,
} from "../GlobalStates/globalStates.tsx";
import InfinityScrollComponentsHandler from "./infinityScrollComponentsHandler.tsx";

const InfinityScrollComponent: React.FC = () => {
  const { setComponents, Components } = useContext(
    GlobalVisibleComponentsState
  )!;
  const { AllComponents, setAllComponents } = useContext(
    GlobalAllComponentsState
  )!;
  const { IsVisible, setIsVisible } = useContext(IsComponentVisibleState)!;

  const handleScroll = () => {
    InfinityScrollComponentsHandler({
      AllComponents,
      setAllComponents,
      setComponents,
      IsVisible,
      setIsVisible,
    });
  };

  useEffect(() => {
    IsVisible.component === "no" && handleScroll();
  }, [IsVisible, Components]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      {Components.map((Component, index) => (
        <Component key={index} />
      ))}
    </div>
  );
};

export default InfinityScrollComponent;
