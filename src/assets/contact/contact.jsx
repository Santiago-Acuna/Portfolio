import React, { useRef, useState } from 'react';
import styles from './contact.module.css'
import emailjs from '@emailjs/browser';

export default function Contact({Language}){
  const form = useRef();
  const [input, setInput] = useState({
    user_name: "",
    email: "",
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
    } else if (!/^\b[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(input.user_name)) {
      errors.user_name = " The Username can only have letters and spaces";
      setDisabled(true);
    }

    if (!input.email) {
      errors.email = "email is required";
      setDisabled(true);
    }
    // } else if (!/\d{1,3}/.test(input.email)) {
    //   setDisabled(true);
    //   errors.email = "email algo";
    // } 

    if (!input.message) {
      errors.message = "Message is required";
      setDisabled(true);
    } else if (!/^\b[A-Za-zÑñÁáÉéÍíÓóÚúÜü.,\s]+$/.test(input.message)) {
      errors.message =
        " The summary can only have letters, spaces, dots and comas";
      setDisabled(true);
    }
    return errors;
  }

  const handleChange =(e) => {
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
  }
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4wri62s', 'template_60yqwvm', form.current, '0auGPaLkIRRFcAHRY')
    console.log("enviado")
    console.log(form)


      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return(
    <div className={styles.box}>
      <section class="contact" id="contact">
       {Language === "English" ? <div className={styles.divTitle}><p className={styles.title}>Contact</p></div>:
        <div className={styles.divTitleE}><p className={styles.title}>Contacto</p></div>}
      <p className={styles.p2}>{Language === "English" ? "// Submit the form below or shoot me an email" : "Envíame un mensaje o un correo electrónico"} - santiagoacu1990@gmail.com</p>


    
    <form ref={form} onSubmit={sendEmail} >
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
        name="email"
        placeholder="Email"
        autoComplete="off"
        onChange={(e) => handleChange(e)}
        
    />
    {errors.email && (
            <p className={styles.danger}>{errors.email}</p>
          )}
      <textarea 
  className={styles.textTareaBox}
  maxLength="1000"
  type="text" 
  name="message"
  placeholder="Message..."
  onChange={(e) => handleChange(e)}

  >
  </textarea>
  {errors.message && (
            <p className={styles.danger}>{errors.message}</p>
          )}
  <div className={styles.btnDiv}>
      <button disabled={disabled} className={styles.btn} type="submit" value="Send">{Language === "English" ? "Send" : "Enviar"}</button>
      </div>
      </div>
    </form>
    
    </section>

    </div>
  )

}