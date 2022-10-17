import { useState } from "react";
import styles from "./FindTicketForm.module.sass";
export const FindTicketForm = () => {
  const [email, setEmail] = useState("");

  let SubmitFindInvitation = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div>
      <form
        className={styles.findTicketForm}
        id="findInvitationForm"
        onSubmit={(e) => SubmitFindInvitation(e)}
      >
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
      </form>

      <button
        type="submit"
        form="findInvitationForm"
        value="Submit"
        className={styles.submitButton}
      >
        <b>Find My Invitation</b>
      </button>
    </div>
  );
};
