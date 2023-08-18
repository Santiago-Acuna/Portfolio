import React from 'react';
import styles from './right sidebar.module.css';

const RightSideBar: React.FC = () => {
  return (
    <div>
      <div className={styles.box}>
        <div className={styles.p1Box}>
          <p className={styles.p1}>santiagoacu1990@gmail.com</p>
        </div>
        <div className={styles.verticalBar}></div>
      </div>
    </div>
  );
};

export default RightSideBar;
