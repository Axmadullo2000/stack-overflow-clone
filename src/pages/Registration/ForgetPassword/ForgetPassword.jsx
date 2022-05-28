// STYLES
import "./ForgetPassword.css";
import "../LogIn/LogIn.css";

// HOOKS
import { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const checkError = (e) => {
    e.preventDefault();
    setEmailError(false);
    if (!emailError) {
      setEmailError(true);
    } else {
      recovery();
    }
  };

  const recovery = () => {
    alert("Email has sended");
  };

  return (
    <div className="forgetpassword">
      {/* HEADER */}
      <div className="forgetpassword__container">
        <div className="forgetpassword__box">
          <p>
            Forgot your account’s password or having trouble logging into your
            Team? Enter your email address and we’ll send you a recovery link.
          </p>

          {/* FORM */}
          <form
            action=""
            className="forgetpassword__form"
            onSubmit={checkError}
          >
            <div className="login__form-box email">
              <p>Email</p>
              <input
                type="email"
                className={`login__form-input ${emailError && "error"}`}
                maxLength="100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className={`login__form-error ${emailError && "active"}`}>
                Invalid Email!
              </p>
            </div>
            <button className="login__form-button" target="submit">
              Send recovery email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
