import { useEffect, useState } from "react";
import validator from "validator";

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [signUp, setSignUp] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const errors = [];

    if (name.length === 0) errors.push("Please enter valid name");

    if (!validator.isEmail(email)) errors.push("Please enter valid email");

    if (phoneNumber.length && phoneNumber.length < 11)
      errors.push("Enter valid phone number");

    if (phoneNumber.length && phoneType === "")
      errors.push("Please provide phone type");

    setValidationErrors(errors);
  }, [name, email, phoneNumber, phoneType]);

  const onSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (validationErrors.length) return alert("Cannot Submit");

    const info = {
      name,
      email,
      phoneNumber,
      phoneType,
      role,
      bio,
      signUp,
      submittedOn: new Date(),
    };

    console.log(info);
    alert("Successful registered!");

    setName("");
    setEmail("");
    setPhoneNumber("");
    setPhoneType("");
    setRole("");
    setBio("");
    setSignUp(false);
    setValidationErrors([]);
    setHasSubmitted(false);
  };

  return (
    <section className="registration-form">
      <form onSubmit={onSubmit}>
        {hasSubmitted && validationErrors.length > 0 && (
          <section className="errors">
            <p>The following errors were found:</p>
            <ul>
              {validationErrors.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </section>
        )}
        <section>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="enter your name"
          />
        </section>
        <section>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="enter your email"
          />
        </section>
        <section>
          <label htmlFor="phoneNumber">Phone Number: </label>
          <input
            id="phoneNumber"
            type="text"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            placeholder="enter your phoneNumber"
            maxLength="11"
          />
          <select
            name="phoneType"
            onChange={(e) => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value="" disabled>
              Select a phone type
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </section>
        <section>
          <label>Select your role: </label>
          <input
            name="role"
            type="radio"
            id="staff"
            onChange={(e) => setRole(e.target.value)}
            value="staff"
          ></input>
          <label htmlFor="staff">Staff</label>
          <input
            name="role"
            type="radio"
            id="student"
            onChange={(e) => setRole(e.target.value)}
            value="student"
          ></input>
          <label htmlFor="student">Student</label>
        </section>
        <section>
          <label htmlFor="bio">Bio: </label>
          <textarea
            id="bio"
            name="bio"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            maxLength="280"
          ></textarea>
        </section>
        <section>
          <input
            type="checkbox"
            id="signUp"
            name="signUp"
            onChange={(e) => setSignUp(!signUp)}
            value={signUp}
          ></input>
          <label htmlFor="signUp">Sign up for email notifications</label>
        </section>
        <button>Submit</button>
      </form>
    </section>
  );
}
