import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import EmailInput from "../emaiInput";
import ReactPlayer from "react-player";
import Footer from "../footer";

export default function Home() {
  return (
    <div className="home-wrapper">
      <section className="hero-section">
        <div className="layer" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="main-content">
                <div className="content-wrapper">
                  <div className="inner-content">
                    <img src="/logo.png" alt="Logo" className="logo" />
                    <h2 className="mainHeader">
                      Easy access to global style & culture
                    </h2>
                    <h3 className="subHeader">
                      Enter your email and get 20% off on lifestyle items, when
                      TheBomway launches, from SMBs of countries.
                    </h3>
                    <div>
                      <EmailInput />
                    </div>
                    <a href="#" className="already-text">
                      Already subscribed? Sign in, invite friends & win $$
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="video-wrapper">
                <ReactPlayer
                  url="https://youtu.be/y8LmpmVf0GQ"
                  controls
                  width="600px"
                  height="350px"
                  className="react-player"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
