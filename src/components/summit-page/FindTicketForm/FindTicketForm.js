import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { findTicketByEmail } from "utils/summitRequests";
import styles from "./FindTicketForm.module.sass";


export const FindTicketForm = () => {
  const [email, setEmail] = useState("");
  
  // Request progress state
  const [isRequesting, setIsRequesting] = useState(false);

  // Router
  const router = useRouter();
  
  let handelFormSubmission = async (e) => {
    e.preventDefault();

    setIsRequesting(true);

    let ticketData = await toast.promise(getTicketByEmail(email), {
      pending: "Finding your invitation...",
      error: "This email is not registered",
    });

    setIsRequesting(false);


    if (ticketData) {
        router.push(`/kemtech-forum/tickets/${ticketData.id}`);
      }

    console.log(ticketData);
  };

  // Send Register request
  const getTicketByEmail = async (userEmail) => {
    const ticketData = await findTicketByEmail(userEmail);

    if (ticketData) {
      return ticketData;
    } else return Promise.reject();
  };

  return (
    <div>
      <form
        className={styles.findTicketForm}
        id="findInvitationForm"
        onSubmit={(e) => handelFormSubmission(e)}
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
