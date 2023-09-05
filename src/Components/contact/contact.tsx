import React, { useRef, useState, useContext } from "react";
import styles from "./contact.module.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {GlobalLanguageState} from "../../assets/GlobalStates/globalStates.tsx";

const Contact: React.FC = () => {
  const { Language } = useContext(GlobalLanguageState)!;
  const form = useRef<HTMLFormElement | null>(null);
  const [input, setInput] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [disabled, setDisabled] = useState(true);

  const validate = (inputData: typeof input) => {
    setDisabled(false);
    const newErrors: { [key: string]: string } = {};

    if (!inputData.user_name) {
      newErrors.user_name = "Username is required";
      setDisabled(true);
    }

    if (!inputData.user_email) {
      newErrors.user_email = "Email is required";
      setDisabled(true);
    }

    if (!inputData.message) {
      newErrors.message = "Message is required";
      setDisabled(true);
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedInput = {
      ...input,
      [name]: value,
    };
    setInput(updatedInput);
    setErrors(validate(updatedInput));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE as string,
          import.meta.env.VITE_TEMPLATE as string,
          form.current,
          import.meta.env.VITE_KEY as string
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log(form.current);
          },
          (error) => {
            console.log(error.text);
          }
        );
      form.current.reset();
    }
  };

  const notify = () => {
    toast.success(" The message was sent!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className={styles.box}>
      <section className="contact" id="Contact">
        {Language === "English" ? (
          <div className={styles.divTitle}>
            <p className={styles.title}>Contact</p>
          </div>
        ) : (
          <div className={styles.divTitleE}>
            <p className={styles.title}>Contacto</p>
          </div>
        )}
        <p className={styles.p2}>
          {Language === "English"
            ? "// Submit the form below or shoot me an email"
            : "Envíame un mensaje o un correo electrónico"}{" "}
          - santiagoacu1990@gmail.com
        </p>

        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.divForm}>
            <input
              className={styles.inputBox}
              type="text"
              name="user_name"
              placeholder="Name"
              autoComplete="off"
              onChange={handleChange}
            />
            {errors.user_name && (
              <p className={styles.danger}>{errors.user_name}</p>
            )}
            <input
              className={styles.inputBox}
              type="email"
              name="user_email"
              placeholder="Email"
              autoComplete="off"
              onChange={handleChange}
            />
            {errors.user_email && (
              <p className={styles.danger}>{errors.user_email}</p>
            )}
            <textarea
              className={styles.textTareaBox}
              maxLength={1000}
              name="message"
              placeholder="Message..."
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className={styles.danger}>{errors.message}</p>
            )}
            <div className={styles.btnDiv}>
              <button
                disabled={disabled}
                onClick={notify}
                className={styles.btn}
                type="submit"
                value="Send"
              >
                {Language === "English" ? "Send" : "Enviar"}
              </button>
            </div>
          </div>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </section>
    </div>
  );
};

export default Contact;
