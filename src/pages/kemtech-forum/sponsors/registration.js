import { useState } from "react";
import ReactiveButton from "reactive-button";

//styles
import styles from "styles/SponsorsForm.module.sass";

export default function SponsorsRegistrationPage() {
  // form controller states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [company, setCompany] = useState("");
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
      company: company,
      number: number,
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
      <div className={styles.titleWrapper}>
        <div className={styles.titleTopWrapper}>
          <h1>
            Kemtech
            <br />
            <span>FORUM</span>
          </h1>
          <h2>
            20
            <br />
            22
          </h2>
        </div>
      </div>

      <h2 className="sectionTitle">
        Become part of the next big thing.
        <br />
        Let&apos;s get in touch
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
            placeholder="example@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.fromItem}>
          <label htmlFor="num">Phone number</label>
          <input
            name="num"
            id="num"
            type="text"
            placeholder="phone number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>

        <div className={styles.fromItem}>
          <label htmlFor="company">Company Name</label>
          <input
            name="company"
            id="company"
            type="text"
            placeholder="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>

        <div className={styles.fromItem}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            placeholder="Hello kemtech, ... "
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
            }}
            size="large"
          />
        </div>
      </form>
    </section>
  );
}
