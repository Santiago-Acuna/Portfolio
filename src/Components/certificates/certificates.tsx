import React from "react";
import styles from "./certificates.module.css";
import Carousel from "./carousel/carousel";
import HenryCertificate from "../../Images/Henry certificate.png";
import EFCertificate from "../../Images/EF certificate.png";
import Title from "../../assets/title/title.tsx";

const Certificates: React.FC = () => {
  const slides: string[] = [HenryCertificate, EFCertificate];

  return (
    <div className={styles.box}>
      <section id="Certificates">
       
      <Title English="Certificates" Spanish="Certificados" />
        <div className={styles.container}>
          <Carousel slides={slides} />
        </div>
      </section>
    </div>
  );
};

export default Certificates;
