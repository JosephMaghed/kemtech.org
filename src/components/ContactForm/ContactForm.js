import { useState } from "react";
import ReactiveButton from "reactive-button";

//styles
import styles from "./ContactForm.module.sass";

export const ContactForm = () => {
  // form controller states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //Submit button state
  const [buttonState, setButtonState] = useState("idle");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setButtonState("loading");

    // generate payload for email
    const payload = {
      Name: name,
      Email: email,
      Message: message,
    };

    sendEmail(payload).then((isSent) => {
      if (isSent) {
        setTimeout(() => {
          setButtonState("success");
          // Clear form
          setName(() => " ");
          setEmail(() => " ");
          setMessage(() => " ");
        }, 2000);

        //Change button state to idle
        setTimeout(() => {
          setButtonState("idle");
        }, 4000);
      } else {
        setTimeout(() => {
          setButtonState("error");
        }, 2000);

        //Change button state to idle
        setTimeout(() => {
          setButtonState("idle");
        }, 4000);
      }
    });
  };

  const sendEmail = async (payload) => {
    const res = await fetch("/api/contactFormHandler", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return res.status === 500 ? false : true;
  };

  return (
    <section className={styles.contactSection}>
      <h2 className="sectionTitle">
        {`Love to hear from you,`}
        <br />
        {`Let's get in touch`}
      </h2>

      <form className={styles.contactForm} onSubmit={onSubmitHandler}>
        <div className={styles.fromItem}>
          <label htmlFor="Name">Name</label>
          <input
            name="Name"
            id="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>
        <div className={styles.fromItem}>
          <label htmlFor="Email">Email</label>
          <input
            name="Email"
            id="Email"
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.fromItem}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            placeholder="Hello kemtech, I want to ask about... "
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className={styles.button}>
          <ReactiveButton
            rounded
            outline={
              buttonState === "success"
                ? false
                : buttonState === "error"
                ? false
                : buttonState === "idle"
                ? true
                : true
            }
            color={
              buttonState === "success"
                ? "green"
                : buttonState === "error"
                ? "red"
                : "secondary"
            }
            type={"submit"}
            buttonState={buttonState}
            idleText="Submit"
            successText="Sent!"
            errorText="Something is wrong!"
            style={{
              borderColor: "#2E3D49",
              color: "#2E3D49",
            }}
            size="large"
          />
        </div>
      </form>
    </section>
  );
};
