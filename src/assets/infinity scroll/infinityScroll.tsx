import React, { useContext, useState, useEffect} from "react";
import styles from "./infinityScroll.module.css";
import {
  GlobalVisibleComponentsState,
  GlobalAllComponentsState,
} from "../GlobalStates/globalStates.tsx";
import InfinityScrollComponentsHandler from "./infinityScrollComponentsHandler.tsx";


const InfinityScrollComponent: React.FC = () => {
  const { setComponents, Components } = useContext(
    GlobalVisibleComponentsState
  )!;
  const { AllComponents} = useContext(
    GlobalAllComponentsState
  )!;
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

  useEffect(() => {
    setHasMore(AllComponents.length > 0);
  }, [AllComponents]);

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