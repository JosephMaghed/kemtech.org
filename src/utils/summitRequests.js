import { parseName } from "./utils";

const API_URI = process.env.API_URI;

// Register user invitation
export const registerUser = async (userData) => {
  let { name, email, phone } = userData;

  // parse name into firstName, middleName 8 LastName
  name = parseName(name);

  let payload = {
    firstName: name.firstName,
    middleName: name.middleName || "",
    lastName: name.lastName,
    email: email,
    phone: phone,
  };

  try {
    const res = await fetch(`http://localhost:5500/api/summit-tickets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const resBody = await res.json();
    return resBody;
  } catch (err) {
    return null;
  }
};
