import "./authentication.styles.scss";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { useState } from "react";

const Authentcation = () => {
  const [logIn, setLogIn] = useState(true);
  const handleLogIn = () => {
    setLogIn(true);
  };
  const handleSignUp = () => {
    setLogIn(false);
  };
  return (
    <div className="sign-in-page">
      <div className="card-container">
        {/* left div */}
        <div className="content">
          <div className="top-content">
            <button
              onClick={handleLogIn}
              className={`${logIn ? "active" : ""}`}
            >
              LogIn
            </button>
            <button
              onClick={handleSignUp}
              className={`${!logIn ? "active" : ""}`}
            >
              SignUp
            </button>
          </div>
          {logIn && <SignInForm />}
          {!logIn && <SignUpForm />}
        </div>
        <div
          className="sign-up-image"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80)",
          }}
        />
      </div>
    </div>
  );
};

export default Authentcation;
