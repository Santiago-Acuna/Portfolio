import React from 'react';
import styles from './contact.module.css'

export default function Contact(){

  return(
    <div className={styles.box}>
      <p>Contact</p>
      <p>// Submit the form below or shoot me an email - hernandez.mario@correounivalle.edu.co</p>
      <input
        className={styles.subInput}
        type="text" 
        // value={input.healthScore}
        name="name"
        placeholder="Name"
        // onChange={e =>handleChange(e)}
    />

<input
        className={styles.subInput}
        type="text" 
        // value={input.healthScore}
        name="email"
        placeholder="Email"
        // onChange={e =>handleChange(e)}
    />

<textarea 
  className={styles.subTextBox}
  maxLength="1000"
  type="text" 
  // value={input.summary}
  name="summary"
  // onChange={e =>handleChange(e)}
  >
  </textarea>

  <button>Submit</button>

    </div>
  )

}