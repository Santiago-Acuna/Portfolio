import React, { useEffect, useRef, useCallback } from 'react';
import styles from "./infinityScroll.module.css";

interface InfinityScrollComponentsHandlerProps {
  fetchMore: () => void;
  hasMore: boolean;
  loader?: React.ReactNode;
}

const InfinityScrollComponentsHandler: React.FC<InfinityScrollComponentsHandlerProps> = ({
  fetchMore,
  hasMore,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection: IntersectionObserverCallback = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasMore) {
          fetchMore();
        }
      });
    },
    [fetchMore, hasMore]
  );

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    observerRef.current = observer;

    // Observe the container
    observerRef.current.observe(containerRef.current);

    return () => {
      // Disconnect the observer when the component unmounts
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersection, hasMore]);

  return (
      <div ref={containerRef} className={styles.observerDiv}></div>
  );
};

export default InfinityScrollComponentsHandler;
