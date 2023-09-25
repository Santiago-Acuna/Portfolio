import React, { useContext } from "react";
import styles from "./certificates.module.css";
import Carousel from "./carousel/carousel";
import HenryCertificate from "../../Images/Henry certificate.png";
import EFCertificate from "../../Images/EF certificate.png";
import { GlobalLanguageState } from "../../assets/GlobalStates/globalStates.tsx";

const Certificates: React.FC = () => {
  const { Language } = useContext(GlobalLanguageState)!;
  const slides: string[] = [HenryCertificate, EFCertificate];

  return (
    <div className={styles.box}>
      <section id="Certificates">
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
      </section>
    </div>
  );
};

export default Certificates;
