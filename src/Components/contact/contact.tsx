import React from "react";
import styles from "./contact.module.css";
import "react-toastify/dist/ReactToastify.css";
import TranslateText from "../../assets/TranslateText/translateText.tsx";
import { SentMessege } from "./contactUtils.tsx";
import ContactForm from "./contactForm";

const Contact: React.FC = () => {

  return (
    <div className={styles.box}>
      <section className="contact" id="Contact">
          <div className={styles.divTitle}>
            <p className={styles.title}><TranslateText English={"Contact"} Spanish={"Contacto"} /></p>
          </div>
        <p className={styles.p2}>
          <TranslateText English={"// Submit the form below or shoot me an email"} Spanish={"Envíame un mensaje o un correo electrónico"} /> - santiagoacu1990@gmail.com
        </p>
        <ContactForm
          styles={styles}
        />
        <SentMessege />
      </section>
    </div>
  );
};

export default Contact;
