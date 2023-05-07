import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div>
      {/* Start Page Banner Area */}
      <div className="page-banner-area bg-color-f8f8f8">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="page-banner-heading">
                <h1>Services</h1>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Services</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="page-banner-img">
                <img
                  className="page-banner-img"
                  src="assets/images/page-banner-img.png"
                  alt="page-banner-img"
                />
              </div>
            </div>
          </div>
        </div>
        {/* shape images */}
        <img
          className="page-shape-1"
          src="assets/images/shape/page-shape-1.png"
          alt="Shape-pic"
        />
        <img
          className="page-shape-2 bounce"
          src="assets/images/shape/page-shape-2.png"
          alt="Shape-pic"
        />
        <img
          className="page-shape-3"
          src="assets/images/shape/page-shape-3.png"
          alt="Shape-pic"
        />
        <img
          className="page-shape-4"
          src="assets/images/shape/page-shape-4.png"
          alt="Shape-pic"
        />
      </div>
      {/* End Page Banner Area */}
      {/* Start Our Best Services Area */}
      <div className="best-service-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="subtitle">Our Best Services</span>
            <h2>Our Awesome Best Service</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6" data-cues="slideInLeft">
              <div
                className="awesome-card"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "0ms",
                  animationDirection: "normal",
                  animationFillMode: "both",
                }}
              >
                <div className="awesome-image">
                  <img src="assets/images/svg/awesome-1.svg" alt="pic" />
                </div>
                <h4>Qualitative Research</h4>
                <p>
                  It uses a dictionary of ovLatin words, combined witmodel
                  sentence struterates tandard there are still many reviews
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-cues="slideInLeft">
              <div
                className="awesome-card two"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "0ms",
                  animationDirection: "normal",
                  animationFillMode: "both",
                }}
              >
                <div className="awesome-image">
                  <img src="assets/images/svg/awesome-2.svg" alt="pic" />
                </div>
                <h4>Social Marketing</h4>
                <p>
                  It uses a dictionary of ovLatin words, combined witmodel
                  sentence struterates tandard there are still many reviews
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-cues="slideInLeft">
              <div
                className="awesome-card three"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "0ms",
                  animationDirection: "normal",
                  animationFillMode: "both",
                }}
              >
                <div className="awesome-image">
                  <img src="assets/images/svg/awesome-3.svg" alt="pic" />
                </div>
                <h4>Development</h4>
                <p>
                  It uses a dictionary of ovLatin words, combined witmodel
                  sentence struterates tandard there are still many reviews
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-cues="slideInLeft">
              <div
                className="awesome-card four"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "0ms",
                  animationDirection: "normal",
                  animationFillMode: "both",
                }}
              >
                <div className="awesome-image">
                  <img src="assets/images/svg/awesome-4.svg" alt="pic" />
                </div>
                <h4>Graphic Design</h4>
                <p>
                  It uses a dictionary of ovLatin words, combined witmodel
                  sentence struterates tandard there are still many reviews
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-cues="slideInLeft">
              <div
                className="awesome-card five"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "0ms",
                  animationDirection: "normal",
                  animationFillMode: "both",
                }}
              >
                <div className="awesome-image">
                  <img src="assets/images/svg/awesome-5.svg" alt="pic" />
                </div>
                <h4>Easy Solutions</h4>
                <p>
                  It uses a dictionary of ovLatin words, combined witmodel
                  sentence struterates tandard there are still many reviews
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-cues="slideInLeft">
              <div
                className="awesome-card six"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "0ms",
                  animationDirection: "normal",
                  animationFillMode: "both",
                }}
              >
                <div className="awesome-image">
                  <img src="assets/images/svg/awesome-6.svg" alt="pic" />
                </div>
                <h4>Creative Ideas</h4>
                <p>
                  It uses a dictionary of ovLatin words, combined witmodel
                  sentence struterates tandard there are still many reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Our Best Services Area */}
      {/* Start Boost Your Business */}
      <div className="experience-area pt-100 pb-70 bg-color-f9f9f9">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5" data-cues="zoomIn">
              <div
                className="experience-image"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "0ms",
                  animationDirection: "normal",
                  animationFillMode: "both",
                }}
              >
                <img
                  className="experience-img"
                  src="assets/images/experience-img.png"
                  alt="pic"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="business-experience">
                <div className="section-heading">
                  <span className="subtitle">Boost Your Business</span>
                  <h2>Enjoy Build Your Business Experience</h2>
                  <p>
                    Nor again is there anyone who loves or pursues or desires to
                    obtain pain of itself because it is pain, but because
                    occasionally circumstances occur
                  </p>
                </div>
                <div className="row">
                  <div
                    className="col-lg-6 col-md-6 col-xl-6"
                    data-cues="slideInLeft"
                  >
                    <div
                      className="experience-card"
                      style={{
                        animationName: "fadeIn",
                        animationDuration: "600ms",
                        animationTimingFunction: "ease",
                        animationDelay: "0ms",
                        animationDirection: "normal",
                        animationFillMode: "both",
                      }}
                    >
                      <div className="heading align-items-center">
                        <div className="business-img">
                          <img
                            src="assets/images/svg/business-1.svg"
                            alt="pic"
                          />
                        </div>
                        <h4>Business Solutions</h4>
                      </div>
                      <p>
                        Which is the same as saying through shrinking from toil
                        Ipain
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-md-6 col-xl-6"
                    data-cues="slideInLeft"
                  >
                    <div
                      className="experience-card"
                      style={{
                        animationName: "fadeIn",
                        animationDuration: "600ms",
                        animationTimingFunction: "ease",
                        animationDelay: "0ms",
                        animationDirection: "normal",
                        animationFillMode: "both",
                      }}
                    >
                      <div className="heading align-items-center">
                        <div className="business-img">
                          <img
                            src="assets/images/svg/business-2.svg"
                            alt="pic"
                          />
                        </div>
                        <h4>Market Strategy</h4>
                      </div>
                      <p>
                        Which is the same as saying through shrinking from toil
                        Ipain
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Boost Your Business */}
      {/* Start Work Process Area */}
      <div className="process-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="subtitle">Work Process</span>
            <h2>Do Your Business The Easy Way</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="process-card">
                <div className="process-img">
                  <img
                    className="process-1"
                    src="assets/images/svg/process-1.svg"
                    alt="pic"
                  />
                </div>
                <h4>Setup Workframe</h4>
                <p>
                  Nor again is there anyone who loves or pues or desires to
                  obtain pain of itself, because it is pain, but because
                  occasionally
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="process-card">
                <div className="process-img">
                  <img
                    className="process-1"
                    src="assets/images/svg/process-2.svg"
                    alt="pic"
                  />
                </div>
                <h4>Download &amp; install</h4>
                <p>
                  Nor again is there anyone who loves or pues or desires to
                  obtain pain of itself, because it is pain, but because
                  occasionally
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="process-card">
                <div className="process-img">
                  <img
                    className="process-1"
                    src="assets/images/svg/process-3.svg"
                    alt="pic"
                  />
                </div>
                <h4>Payment &amp; Boost</h4>
                <p>
                  Nor again is there anyone who loves or pues or desires to
                  obtain pain of itself, because it is pain, but because
                  occasionally
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* shape-images */}
        <div data-cues="slideInLeft">
          <img
            className="process-shape-1"
            src="assets/images/shape/process-shape-1.png"
            alt="process-shape"
          />
        </div>
        <div data-cues="slideInLeft">
          <img
            className="process-shape-2"
            src="assets/images/shape/process-shape-2.png"
            alt="process-shape"
          />
        </div>
      </div>
      {/* End Work Process Area */}
    </div>
  );
};

export default Service;
