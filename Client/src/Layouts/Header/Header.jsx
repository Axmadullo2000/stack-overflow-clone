import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

function Header(props) {
  const [show, setShow] = useState(false);
  return (
    <nav className="header-part-navbar text-dark">
      <div className="container">
        <div className="navbar d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <div
            className="d-flex align-items-center mb-2 mb-lg-0
            text-white text-decoration-none"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="close bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fillRule="currentColor"
                className="bi bi-justify"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            )}
          </div>``
          {show ? (
            <div className="sidebar border pt-3 position-absolute">
              <Link to="#" className="nav-link_active fw-bold sidebar-header">
                Home
              </Link>
              <ul className="sidebar-nav">
                <li className="mb-1 link-public fs-fine tt-uppercase ml8 mt16 mb4 fc-light">PUBLIC</li>
                <li>
                  <Link to="#" className="nav-link ps-0">
                  <svg aria-hidden="true" className="svg-icon iconGlobe" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"></path></svg>
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
          <Link to="#" className="navbar-brand d-flex align-items-center">
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
            <span className="brand">
              stack <strong>overflow</strong>
            </span>
          </Link>
          <ul className="nav col-12 col-md-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="#" className="nav-link_item px-2">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link_item px-2">
              Products
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link_item px-2">
              For Teams
              </Link>
            </li>
          </ul>

          <form className="search col-12 col-lg mb-3 mb-lg-0 me-lg-3 header__form">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="search-icon bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            <input
              type="search"
              className="s-input s-input__search js-search-field"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="btn text-end">
            <button type="button" className="btn-login  me-2">
              Login
            </button>
            <button type="button" className="btn ">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Header };
