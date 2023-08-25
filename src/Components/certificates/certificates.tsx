import React from "react";
import styles from "./certificates.module.css";
import Carousel from "./carousel/carousel";
import HenryCertificate from "../../Images/Henry certificate.png";
import EFCertificate from "../../Images/EF certificate ph.png";

const Certificates: React.FC<React.ComponentState> = ({ Language }) => {
  const slides: string[] = [HenryCertificate, EFCertificate];

  return (
    <div className={styles.box}>
      <div>
        {Language === "English" ? (
          <div className={styles.divTitle}>
            <p className={styles.title}>Certificates</p>
          </div>
        ) : (
          <div className={styles.divTitleE}>
            <p className={styles.title}>Certificados</p>
          </div>
        )}
      </div>
      <div className={styles.container}>
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default Certificates;
