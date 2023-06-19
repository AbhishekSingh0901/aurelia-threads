import { useState, Fragment } from "react";
import Input from "../ui/input/input.component";
import "./sign-up-form.styles.scss";
import {
  createAuthUserWIthEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../ui/sign-button/sign.component";

const defaultformFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { displayName, email, password, confirmPassword } = formFields;
  // console.log(formFields);

  const restFormFields = () => {
    setFormFields(defaultformFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWIthEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocFromAuth(user, { displayName });
      restFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("user already exists");
      console.error("user creation encountered an erroor", error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Fragment>
      <p>signUp to your account to checkout, place and track your orders</p>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter your Name"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          required
        />
        <Input
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />
        <Input
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <Input
          type="password"
          placeholder="Confirm your password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <Button name="SignUp" />
      </form>
    </Fragment>
  );
};

export default SignUpForm;
