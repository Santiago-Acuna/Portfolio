import React, { useRef, useState } from "react";
import styles from "./contact.module.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact({ Language }) {
  const form = useRef();
  const [input, setInput] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(true);

  const validate = (input) => {
    setDisabled(false);
    let errors = {};
    if (!input.user_name) {
      errors.user_name = "Username is required";
      setDisabled(true);
    }

    if (!input.user_email) {
      errors.user_email = "Email is required";
      setDisabled(true);
    }

    if (!input.message) {
      errors.message = "Message is required";
      setDisabled(true);
    }
    return errors;
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE,
        import.meta.env.VITE_TEMPLATE,
        form.current,
        import.meta.env.VITE_KEY
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
    e.target.reset();
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
      <section class="contact" id="contact">
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
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
            />
            {errors.user_email && (
              <p className={styles.danger}>{errors.user_email}</p>
            )}
            <textarea
              className={styles.textTareaBox}
              maxLength="1000"
              type="text"
              name="message"
              placeholder="Message..."
              onChange={(e) => handleChange(e)}
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
}
