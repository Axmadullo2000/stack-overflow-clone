//STYLE
import "./LogIn.css";

// HOOKS
import { useState } from "react";

// REACT ROUTER DOM
import { Link } from "react-router-dom";

// COMPONENTS
import SocialMedia from "../SocialMedias";
import Input from "../Input/Input.tsx";
import { Header } from "../../../Layouts/Header";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [passErrorLength, setPassErrorLength] = useState(false);

  const checkErrors = (e) => {
    e.preventDefault();
    setEmailError(false);
    setPassError(false);
    setPassErrorLength(false);
    if (!email && !password) {
      setEmailError(true);
      setPassError(true);
    } else if (!email) {
      setEmailError(true);
    } else if (!password) {
      setPassError(true);
    } else if (password.length < 8) {
      setPassErrorLength(true);
    } else {
      login();
    }
  };

  const login = () => {
    alert("LOGGED IN");
  };

  return (
    <div className="login">
      <Header />
      <div className="login__container">
        <div className="login__logo-box">
          <Link to="/">
            <svg
              aria-hidden="true"
              className="native svg-icon iconLogoGlyphMd"
              width="32"
              height="37"
              viewBox="0 0 32 37"
            >
              <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
              <path
                d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                fill="#F48024"
              ></path>
            </svg>
          </Link>
        </div>

        {/* Social Media Buttons */}
        <div style={{ maxWidth: "278px", width: "100%" }}>
          <SocialMedia type="Log in" />
        </div>

        {/* FORM */}
        <form className="login__form" action="" onSubmit={checkErrors}>
          <Input
            type="text"
            name="Name"
            value={email}
            valueError={emailError}
            setValue={setEmail}
          />

          <Input
            type="password"
            name="Password"
            value={password}
            valueError={passError}
            setValue={setPassword}
            passErrorLength={passErrorLength}
          />

          <button className="login__form-button" target="submit">
            Log in
          </button>
        </form>

        {/* Bottom section */}
        <div className="login__bottom">
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
          <p>
            Are you an employer?{" "}
            <Link to="/" target="_blank">
              Sign up on Talent{" "}
              <svg
                aria-hidden="true"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                style={{ fill: "#0074cc" }}
              >
                <path d="M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z"></path>
              </svg>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
