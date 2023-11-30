import React from 'react';
import styles from './right sidebar.module.css';

const RightSideBar: React.FC = () => {
  return (
        <div className={styles.box}>
        <div className={styles.p1Box}>
          <span className={styles.p1}>santiagoacu1990@gmail.com</span>
        </div>
        <div className={styles.verticalBar}></div>
      </div>

  );
};

 export default RightSideBar;