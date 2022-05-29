import React from "react";
import "./main.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import publicLogo from "../../assets/images/illo-public.svg";
import teamsLogo from "../../assets/images/illo-teams.svg";

const Main = () => {
  return (
    <div>
      <div className="wrapper-home">
        <div className="bgc-dark-gradient">
          <svg width="0" height="0">
            <defs>
              <clipPath id="myCurve" clipPathUnits="objectBoundingBox">
                <path
                  d="M 0,1
                        L 0,0
                        L 1,0
                        L 1,1
                        C .65 .8, .35 .8, 0 1
                        Z"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="box-wrapper">
            <img
              src="https://cdn.sstatic.net/Img/home/illo-code.svg?v=b7ee00fff9d8"
              alt=""
              className="img-left"
            />
            <img
              src="https://cdn.sstatic.net/Img/home/illo-code.svg?v=b7ee00fff9d8"
              alt=""
              className="img-right"
            />
            <div className="box">
              <div className="box-inner bgc-orange box-orange">
                <div className="svg-wrapper">
                  <svg
                    aria-hidden="true"
                    class="fc-orange-500 mb16 svg-spot spotSearch"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    className="fc-orange"
                  >
                    <path
                      opacity=".2"
                      d="M29.22 38.1a3.4 3.4 0 0 1 4.81-4.82l8.81 8.81a3.4 3.4 0 0 1-4.81 4.81l-8.81-8.8Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M18.5 5a1 1 0 1 0 0 2c.63 0 1.24.05 1.84.15a1 1 0 0 0 .32-1.98A13.6 13.6 0 0 0 18.5 5Zm7.02 1.97a1 1 0 1 0-1.04 1.7 11.5 11.5 0 0 1 5.44 8.45 1 1 0 0 0 1.98-.24 13.5 13.5 0 0 0-6.38-9.91ZM18.5 0a18.5 18.5 0 1 0 10.76 33.55c.16.57.46 1.12.9 1.57L40 44.94A3.5 3.5 0 1 0 44.94 40l-9.82-9.82c-.45-.45-1-.75-1.57-.9A18.5 18.5 0 0 0 18.5 0ZM2 18.5a16.5 16.5 0 1 1 33 0 16.5 16.5 0 0 1-33 0Zm29.58 15.2a1.5 1.5 0 1 1 2.12-2.12l9.83 9.83a1.5 1.5 0 1 1-2.12 2.12l-9.83-9.83Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h2>
                  Find the best answer to your technical question, help others
                  answer theirs
                </h2>
                <a href="#" className="orange-btn">
                  Join the community
                </a>
                <p className="box-paragrph">
                  or <a href="#">search content</a>
                </p>
              </div>
            </div>
            <div className="box">
              <div className="box-inner bgc-blue box-blue">
                <div className="svg-wrapper">
                  <svg
                    aria-hidden="true"
                    class="fc-blue-500 mb16 svg-spot spotLock"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    className="fc-blue"
                  >
                    <path
                      opacity=".2"
                      d="M12 22a2 2 0 0 0-2 2v19a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V26a4 4 0 0 0-4-4H12Zm6 7a5 5 0 1 1 7.67 4.23l.05.35c.15.84.36 1.8.61 2.86A2.06 2.06 0 0 1 24.35 39h-2.7a2.06 2.06 0 0 1-1.98-2.56c.29-1.2.52-2.3.66-3.2l-.19-.14A5 5 0 0 1 18 29Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M23 24a5 5 0 0 0-2.86 9.1l.2.13c-.15.91-.38 2-.67 3.21A2.06 2.06 0 0 0 21.65 39h2.7c1.32 0 2.3-1.26 1.98-2.56a46.74 46.74 0 0 1-.6-2.86l-.06-.35A5 5 0 0 0 23 24Zm0 2a3 3 0 0 1 1.76 5.43l-.16.11a2 2 0 0 0-.91 2c.16.98.4 2.12.7 3.37.01.05-.02.09-.04.09h-2.7c-.02 0-.05-.04-.04-.09.3-1.25.54-2.4.7-3.36a2 2 0 0 0-.78-1.92l-.13-.09A3 3 0 0 1 23 26ZM12 12.44V18H9a3 3 0 0 0-3 3v21a3 3 0 0 0 3 3h28a3 3 0 0 0 3-3V21a3 3 0 0 0-3-3h-3v-5.56C34 6.2 29.36 1 23 1S12 6.19 12 12.44ZM23 3c5.14 0 9 4.18 9 9.44V18H14v-5.56C14 7.18 17.86 3 23 3ZM9 20h28a1 1 0 0 1 1 1v21a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V21a1 1 0 0 1 1-1Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h2>
                  Want a secure, private space for your technical knowledge?
                </h2>
                <div className="divider">
                  <span className="border"></span>
                  <span className="divider-text">Get started</span>
                  <span className="border"></span>
                </div>
                <a href="#" className="blue-btn">
                  For large organizations{" "}
                  <svg
                    aria-hidden="true"
                    class="svg-icon iconIndustry"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="M10 16v-4H8v4H2V4c0-1.1.9-2 2-2h6c1.09 0 2 .91 2 2v2h2c1.09 0 2 .91 2 2v8h-6ZM4 4v2h2V4H4Zm0 4v2h2V8H4Zm4-4v2h2V4H8Zm0 4v2h2V8H8Zm-4 4v2h2v-2H4Zm8 0v2h2v-2h-2Zm0-4v2h2V8h-2Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <a href="#" className="blue-btn ml-8">
                  For small teams{" "}
                  <svg
                    aria-hidden="true"
                    class="svg-icon iconPeople"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="M17 14c0 .44-.45 1-1 1H9a1 1 0 0 1-1-1H2c-.54 0-1-.56-1-1 0-2.63 3-4 3-4s.23-.4 0-1c-.84-.62-1.06-.59-1-3 .06-2.42 1.37-3 2.5-3s2.44.58 2.5 3c.06 2.41-.16 2.38-1 3-.23.59 0 1 0 1s1.55.71 2.42 2.09c.78-.72 1.58-1.1 1.58-1.1s.23-.4 0-1c-.84-.61-1.06-.58-1-3 .06-2.41 1.37-3 2.5-3s2.44.59 2.5 3c.05 2.42-.16 2.39-1 3-.23.6 0 1 0 1s3 1.38 3 4Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="slider-wrapper">
            <h1>
              Every
              <Swiper
                direction={"vertical"}
                pagination={{
                  clickable: false,
                }}
                simulateTouch={false}
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
              >
                <SwiperSlide className="orange">developer</SwiperSlide>
                <SwiperSlide className="orange">data scientist</SwiperSlide>
                <SwiperSlide className="orange">system admin</SwiperSlide>
                <SwiperSlide className="orange">mobile developer</SwiperSlide>
                <SwiperSlide className="orange">game developer</SwiperSlide>
              </Swiper>
              has a<br /> tab open to Stack Overflow
            </h1>
          </div>
          <span className="main-divider"></span>
          <div className="statistics-wrapper">
            <div className="statistics-box">
              <h5>100+ million</h5>
              <p>monthly visitors to Stack Overflow & Stack Exchange</p>
            </div>
            <div className="statistics-box">
              <h5>45.1+ billion</h5>
              <p>Times a developer got help since 2008</p>
            </div>
            <div className="statistics-box">
              <h5>179% ROI</h5>
              <p>from companies using Stack Overflow for Teams</p>
            </div>
            <div className="statistics-box">
              <h5>5,000+</h5>
              <p>Stack Overflow for Teams instances active every day</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="cards-wrapper">
          <div className="card-item">
            <div className="cardd card-orange">
              <img src="" alt="" />
              <img src={publicLogo} alt="" />
              <h3>
                A public platform building the definitive collection of coding
                questions & answers
              </h3>
              <p className="cardd-text">
                A community-based space to find and contribute answers to
                technical challenges, and one of the most popular websites in
                the world.
              </p>
              <a href="#" className="orange-btn">
                Join the community
              </a>
              <p className="box-paragrph">
                or <a href="#">search content</a>
              </p>
            </div>
          </div>
          <div className="card-item">
            <div className="cardd card-blue">
              <img src="" alt="" />
              <img src={teamsLogo} alt="" />
              <h3>
                A public platform building the definitive collection of coding
                questions & answers
              </h3>
              <p className="cardd-text">
                A community-based space to find and contribute answers to
                technical challenges, and one of the most popular websites in
                the world.
              </p>
              <div className="divider">
                <span className="border"></span>
                <span className="divider-text">Get started</span>
                <span className="border"></span>
              </div>
              <a href="#" className="blue-btn">
                For large organizations{" "}
                <svg
                  aria-hidden="true"
                  class="svg-icon iconIndustry"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path
                    d="M10 16v-4H8v4H2V4c0-1.1.9-2 2-2h6c1.09 0 2 .91 2 2v2h2c1.09 0 2 .91 2 2v8h-6ZM4 4v2h2V4H4Zm0 4v2h2V8H4Zm4-4v2h2V4H8Zm0 4v2h2V8H8Zm-4 4v2h2v-2H4Zm8 0v2h2v-2h-2Zm0-4v2h2V8h-2Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a href="#" className="blue-btn ml-8">
                For small teams{" "}
                <svg
                  aria-hidden="true"
                  class="svg-icon iconPeople"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path
                    d="M17 14c0 .44-.45 1-1 1H9a1 1 0 0 1-1-1H2c-.54 0-1-.56-1-1 0-2.63 3-4 3-4s.23-.4 0-1c-.84-.62-1.06-.59-1-3 .06-2.42 1.37-3 2.5-3s2.44.58 2.5 3c.06 2.41-.16 2.38-1 3-.23.59 0 1 0 1s1.55.71 2.42 2.09c.78-.72 1.58-1.1 1.58-1.1s.23-.4 0-1c-.84-.61-1.06-.58-1-3 .06-2.41 1.37-3 2.5-3s2.44.59 2.5 3c.05 2.42-.16 2.39-1 3-.23.6 0 1 0 1s3 1.38 3 4Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
