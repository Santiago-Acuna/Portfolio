import React from 'react';
import styles from './contact.module.css'

export default function Contact(){

  return(
    <div className={styles.box}>
      <section class="contact" id="contact">
       <div className={styles.divTitle}><p className={styles.title}>Contact</p></div>
      <p className={styles.p2}>// Submit the form below or shoot me an email - santiagoacu1990@gmail.com</p>
      <div className={styles.divForm}>
      <input
        className={styles.inputBox}
        type="text" 
        // value={input.healthScore}
        name="name"
        placeholder="Name"
        // onChange={e =>handleChange(e)}
    />

<input
        className={styles.inputBox}
        type="text" 
        // value={input.healthScore}
        name="email"
        placeholder="Email"
        // onChange={e =>handleChange(e)}
    />

<textarea 
  className={styles.textTareaBox}
  maxLength="1000"
  type="text" 
  // value={input.summary}
  name="summary"
  // onChange={e =>handleChange(e)}
  placeholder="Message..."
  >
  </textarea>
  <div className={styles.btnDiv}>

  <button className={styles.btn}>Submit</button>

  </div>

    </div>
    </section>

    </div>
  )

}