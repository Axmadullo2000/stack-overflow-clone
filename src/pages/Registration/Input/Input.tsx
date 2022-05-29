// STYLES
import "./Input.css";

// REACT
import React from "react";

// REACT ROUTER DOM
import { Link } from "react-router-dom";

interface pageProps {
  type: string;
  name?: string;
  value: string;
  valueError: boolean;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  passErrorLength?: boolean;
  passtip?: boolean;
}

const Input = ({
  type,
  value,
  valueError,
  setValue,
  name,
  passErrorLength,
  passtip,
}: pageProps) => {
  return (
    <div className={`input__form-box ${type}`}>
      <div>
        <p>{name}</p>
        {type === "password" && (
          <Link to="/account-recovery" className="input__form-forgetPass">
            Forgot Password?
          </Link>
        )}
      </div>
      <input
        type={type}
        className={`input__form-input ${valueError && "error"}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p className={`input__form-error ${valueError && "active"}`}>
        {name} cannot be empty!
      </p>

      {passtip && (
        <p className="signup__form-tip">
          Passwords must contain at least eight characters, including at least 1
          letter and 1 number.
        </p>
      )}

      {passErrorLength && (
        <p className="input__form-error active">
          Password must be 8-16 characters.
        </p>
      )}
    </div>
  );
};

export default Input;
