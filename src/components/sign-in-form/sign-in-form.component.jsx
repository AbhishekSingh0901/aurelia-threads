import { useState, Fragment } from "react";
import google from "../../assests/images/google.png";
import {
  signInWithGooglePopup,
  signInAuthUserWIthEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Input from "../ui/input/input.component";
import Button from "../ui/sign-button/sign.component";
import "./sign-in-form.styles.scss";

const defaultformFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { email, password } = formFields;
  // console.log(formFields);

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const restFormFields = () => {
    setFormFields(defaultformFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWIthEmailAndPassword(
        email,
        password
      );
      restFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password!");
          break;
        case "auth/user-not-found":
          alert("ivalid user");
          break;
        default:
          console.error(error);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <p>
          Log in to your account to checkout, place and track your orders
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
        </p>
        <Button name="Login" />
      </form>
      <div style={{ marginTop: "3rem", borderBottom: "solid 1.2px #ddd" }} />
      <p style={{ textAlign: "center", marginBottom: "1rem" }}>
        or log in with
      </p>
      <button type="button" className="google-button" onClick={logGoogleUser}>
        <img src={google} alt="" style={{ width: "2rem" }} />
        <span style={{ marginLeft: "10px", fontSize: "18px" }}>Google</span>
      </button>
    </Fragment>
  );
};

export default SignInForm;
