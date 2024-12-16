import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const Contact = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cz8ugvh", "template_gx6f7lu", form.current, {
        publicKey: "TgJAk2TpmMyPK53XR",
      })
      .then(
        () => {
          setShowPopup(true); // Show popup on success
          setTimeout(() => setShowPopup(false), 3000);
          form.current.reset(); // Clear the form inputs

          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="form-container">
      <div className="main">
        <h1>Contact Me</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required/>
          <label>Email</label>
          <input type="email" name="user_email" required/>
          <label>Message</label>
          <textarea name="message" required />
          <input type="submit" value="Send" />
        </form>
      </div>
      {showPopup && <div className="popup">Message Sent Successfully!</div>}
    </div>
  );
};

export default Contact;
