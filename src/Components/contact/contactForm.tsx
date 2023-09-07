import { useState, useRef } from "react";
import { notify } from "./contactUtils";
import TranslateText from "../../assets/TranslateText/translateText.tsx";

interface ContactFormProps {
  styles: CSSModuleClasses;
}
interface validateProps {
  updatedInput: { user_name: string; user_email: string; message: string };
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactForm: React.FC<ContactFormProps> = ({ styles }) => {
  const form = useRef<HTMLFormElement | null>(null);
  const [input, setInput] = useState<{
    user_name: string;
    user_email: string;
    message: string;
  }>({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string | false }>({});
  const [disabled, setDisabled] = useState(true);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedInput: typeof input = {
      ...input,
      [name]: value,
    };
    setInput(updatedInput);
    setErrors(validate({ updatedInput, setDisabled }));
  };
  const validate = ({ updatedInput, setDisabled }: validateProps) => {
    const newErrors = {
      user_name: !updatedInput.user_name && "Username is required",
      user_email: !updatedInput.user_email && "Email is required",
      message: !updatedInput.message && "Message is required",
    };

    setDisabled(Object.values(newErrors).some((error) => !!error));

    return newErrors;
  };

  const sentForm = (e: React.FormEvent) => {
    notify(e, form);
  };

  return (
    <form ref={form}>
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
        {errors.message && <p className={styles.danger}>{errors.message}</p>}
        <div className={styles.btnDiv}>
          <button
            disabled={disabled}
            onClick={sentForm}
            className={styles.btn}
            type="submit"
            value="Send"
          >
            <TranslateText English={"Send"} Spanish={"Enviar"} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
