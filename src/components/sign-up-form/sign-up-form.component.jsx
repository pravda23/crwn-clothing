import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  console.log(formFields);
  return (
    <div>
      <h1>Sign up with email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          type="text"
          placeholder="Display Name"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
