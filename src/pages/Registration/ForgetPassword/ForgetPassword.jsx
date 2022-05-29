// STYLES
import "./ForgetPassword.css";

// HOOKS
import { useState } from "react";

// COMPONENTS
import Input from "../Input/Input.tsx";
import { Header } from "../../../Layouts/Header";

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
      <Header />
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
            <Input
              name="Email"
              type="email"
              value={email}
              setValue={setEmail}
              valueError={emailError}
            />
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
