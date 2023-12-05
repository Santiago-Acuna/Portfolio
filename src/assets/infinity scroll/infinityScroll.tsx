import React, { useContext, useState, useEffect} from "react";
import styles from "./infinityScroll.module.css";
import {
  GlobalVisibleComponentsState,
  GlobalAllComponentsState,
  IsComponentVisibleState
} from "../GlobalStates/globalStates.tsx";
import InfinityScrollComponentsHandler from "./infinityScrollComponentsHandler.tsx";


const InfinityScrollComponent: React.FC = () => {
  const { setComponents, Components } = useContext(
    GlobalVisibleComponentsState
  )!;
  const { AllComponents} = useContext(
    GlobalAllComponentsState
  )!;
  const { IsVisible, setIsVisible } = useContext(IsComponentVisibleState)!;
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    // Simulate fetching more data

      const newComponent = AllComponents && AllComponents.shift();
          newComponent &&
            setComponents((prevComponents) => [...prevComponents, newComponent])

    if(AllComponents.length === 0){
      setHasMore(false)
    }
  };

  const elementISNotVisible = () =>{
    const element = document.getElementById(IsVisible.id);
    element && setIsVisible({ ...IsVisible, component: "yes" });
    const scrollToElement = () => {
      element &&
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
    };
    element && setTimeout(scrollToElement, 300);
  
    if (IsVisible.component === "no" && !element) {
      const newComponent = AllComponents && AllComponents.shift();
      newComponent &&
        setComponents((prevComponents) => [...prevComponents, newComponent]);
    }
  }

  useEffect(() => {
    setHasMore(AllComponents.length > 0);
  }, [AllComponents]);

  useEffect(() => {
    IsVisible.component === "no" && elementISNotVisible();
  }, [IsVisible, Components])

  return (
    <div className={styles.container}>
      {Components.map((Component, index) => (
        <Component key={index} />
      ))}
      {hasMore === true && <InfinityScrollComponentsHandler fetchMore={fetchMoreData} hasMore={hasMore} loader={<p>Loading...</p>} />}
    </div>
  );
};

export default InfinityScrollComponent;