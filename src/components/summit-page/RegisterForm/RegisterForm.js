import { useState } from "react";
import styles from "./RegisterForm.module.sass";

import { registerUser } from "utils/summitRequests";

import { toast, ToastContainer } from "react-toastify";

import { useRouter } from "next/router";

export const RegistrationForm = () => {
  // User Data state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Request progress state
  const [isRequesting, setIsRequesting] = useState(false);

  // Router
  const router = useRouter();

  // Handel form submit
  let handelFormSubmit = async (e) => {
    e.preventDefault();

    setIsRequesting(true);

    let userData = { name, email, phone };

    let ticket = await toast.promise(SubmitSummitRegister(userData), {
      pending: "Registering ...",
      success: "Registered Successfully 👌",
      error: "Something went wrong on our side 🤯",
    });

    setIsRequesting(false);

    // setTimeout(() => {
      if (ticket) {
        router.push(`/kemtech-forum/tickets/${ticket.id}`);
      }
    // }, 1000);
  };

  // Send Register request
  let SubmitSummitRegister = async (userData) => {
    const ticketData = await registerUser(userData);

    if (ticketData) {
      return ticketData;
    } else return Promise.reject();
  };

  return (
    <div>
      <form
        className={styles.registrationForm}
        id="registrationForm"
        onSubmit={(e) => handelFormSubmit(e)}
      >
        <div className={styles.fromItem}>
          <label htmlFor="Name">Full Name</label>
          <input
            name="Name"
            id="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Mohamed Miligy Zaglogul"
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
          <label htmlFor="phone">Phone Number</label>
          <input
            name="phone"
            id="phone"
            type="phone"
            placeholder="01000000000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
      </form>

      <button
        type="submit"
        form="registrationForm"
        value="Submit"
        disabled={isRequesting}
        className={`${styles.submitButton} ${
          isRequesting === true && styles.disabledButton
        }`}
      >
        <b>Register Now</b>
      </button>
    </div>
  );
};
