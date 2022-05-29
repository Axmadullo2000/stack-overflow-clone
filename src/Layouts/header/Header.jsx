import { Link } from "react-router-dom";
import { useState } from "react";
import "./style/Header.css";
import "./style/Header.css.map";
import "./style/Header.scss";

const Header = () => {
  const [shop, setShop] = useState(false);
  return (
    <nav className="navbar">
      <div className="container-xl px-2 flex-nowrap">
        <div
          className="sidebar-left position-relative me-2"
          onClick={() => setShop(!shop)}
        >
          <div className="sidebar-icon">
            <span></span>
          </div>
        </div>
        {shop ? (
          <div className="sidebar border pt-3 position-absolute">
            <Link to="#" className="nav-link fw-bold sidebar-header">
              Home
            </Link>
            <ul className="sidebar-nav">
              <li className="mb-1">PUBLIC</li>
              <li>
                <Link to="/" className="nav-link ps-0">
                  <svg
                    aria-hidden="true"
                    fill="#838c95"
                    className="me-1 svg-icon iconGlobe"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"></path>
                  </svg>
                  Questios
                </Link>
              </li>
              <li>
                <Link to="" className="nav-link">
                  Tags
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link">
                  Users
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link">
                  Companies
                </Link>
              </li>
            </ul>
          </div>
        ) : null}

        <Link to="/" className="navbar-brand d-flex align-items-center">
          <svg
            className="mb-1"
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M26 33V24H30V37H0V24H4V33H26Z" fill="#BCBBBB" />
            <path
              d="M23.0908 25.9902L23.7844 23.041L7.67993 19.687L7 23L23.0908 25.9902ZM9.1 15.2L24.1 22.2L25.5 19.2L10.5 12.2L9.1 15.2ZM13.3 7.8L26 18.4L28.1 15.9L15.4 5.3L13.3 7.8ZM21.5 0L18.8 2L28.7 15.3L31.4 13.3L21.5 0ZM7 30H23V27H7V30Z"
              fill="#F48024"
            />
          </svg>
          <span>
            stack <strong>overflow</strong>
          </span>
        </Link>
        <ul className="navbar-nav align-items-center d-flex flex-row me-auto mb-lg-0">
          <li className="nav-item" style={{ "margin-right": "10px" }}>
            <Link to="#" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item" style={{ "margin-right": "10px" }}>
            <Link to="#" className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item" style={{ "margin-right": "10px" }}>
            <Link to="#" className="nav-link">
              For Teams
            </Link>
          </li>
        </ul>
        <div className="input-group flex-nowrap align-items-center px-2 form-control">
          <svg aria-hidden="true" width="22" height="18" viewBox="0 0 18 18">
            <path
              fill="#BCBBBB"
              d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"
            ></path>
          </svg>
          <input
            type="text"
            className="w-75 border-0 px-1 text-secondary"
            name=""
            id=""
            placeholder="Search..."
          />
        </div>
        <div className="register ps-2">
          <Link
            to="/login"
            className="text-dark d-inline-block text-decoration-none sign"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="text-light d-inline-block text-decoration-none sign sign--blue"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { Header };
