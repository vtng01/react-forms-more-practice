import { useState } from "react";

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [signUp, setSignUp] = useState(false);

  return (
    <section className="registration-form">
      <form>
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
