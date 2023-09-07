import { MutableRefObject } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

interface sendEmailProps {
  e: React.FormEvent;
  form: MutableRefObject<HTMLFormElement | null>;
}

const sendEmail = ({ e, form }: sendEmailProps) => {
  e.preventDefault();
  form &&
    form.current &&
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
          form && console.log(form.current);
        },
        (error) => {
          console.log(error.text);
        }
      );
  form && form.current && form.current.reset();
};

export const notify = (
  e: React.FormEvent,
  form: MutableRefObject<HTMLFormElement | null>
) => {
  sendEmail({ e, form });
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

export const SentMessege = () => {
  return (
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
  );
};
