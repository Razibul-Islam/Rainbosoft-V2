import React from "react";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Autoplay, Pagination } from "swiper";

const Home = () => {
  return (
    <div>
      {/* <!-- Start Banner Area --> */}
      <div className="banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content">
                <span>Build Better Websites</span>
                <h1>Use Sass For Your Business</h1>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so guiled aitem demora lized by the charms
                  moment with righteous
                </p>
                <a className="banner-btn" href="contact.html">
                  Get Started
                </a>
                <a className="banner-btn-2" href="contact.html">
                  Try For Free
                </a>
                {/* <!-- shape images --> */}
                <img
                  className="banner-shape-7 rotate"
                  src="assets/images/shape/banner-shape-7.png"
                  alt="sliderPhoto"
                />
                <img
                  className="banner-shape-8 moveHorizontal"
                  src="assets/images/shape/banner-shape-8.png"
                  alt="sliderPhoto"
                />
                <img
                  className="banner-shape-9 moveVertical"
                  src="assets/images/shape/banner-shape-9.png"
                  alt="sliderPhoto"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-img">
                <img
                  className="banner-img-1"
                  src="assets/images/hero/banner-img-1.png"
                  alt="sliderPhoto"
                />
                {/* <!-- shape images --> */}
                <img
                  className="banner-shape-1 rotate"
                  src="assets/images/shape/banner-shape-1.png"
                  alt="sliderPhoto"
                />
                <img
                  className="banner-shape-5 bounce"
                  src="assets/images/shape/banner-shape-5.png"
                  alt="sliderPhoto"
                />
                <img
                  className="banner-shape-6 animationFramesTwo"
                  src="assets/images/shape/banner-shape-6.png"
                  alt="sliderPhoto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- shape images --> */}
        <img
          className="banner-shape-2 moveVertical"
          src="assets/images/shape/banner-shape-2.png"
          alt="sliderPhoto"
        />
        <img
          className="banner-shape-3 bounce"
          src="assets/images/shape/banner-shape-3.png"
          alt="sliderPhoto"
        />
        <img
          className="banner-shape-4 moveVertical"
          src="assets/images/shape/banner-shape-4.png"
          alt="sliderPhoto"
        />
      </div>
      {/* <!-- Ens Banner Area --> */}

      {/* <!-- Start Our Awesome Features Area --> */}
      <div className="features-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Awesome Features</span>
            <h2>Provide Excellent Features</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div
                className="features-card"
                data-cues="fadeIn"
                data-group="images"
                data-disabled="true"
              >
                <i
                  className="flaticon-diagram"
                  data-cue="fadeIn"
                  data-group="images"
                  data-show="true"
                  style={{
                    animationName: "fadeIn",
                    animationDuration: "600ms",
                    animationTimingFunction: "ease",
                    animationDelay: "0ms",
                    animationDirection: "normal",
                    animationFillMode: "both",
                  }}
                ></i>
                <div
                  className="features"
                  data-cue="fadeIn"
                  data-group="images"
                  data-show="true"
                  style={{
                    animationName: "fadeIn",
                    animationDuration: "600ms",
                    animationTimingFunction: "ease",
                    animationDelay: "180ms",
                    animationDirection: "normal",
                    animationFillMode: "both",
                  }}
                >
                  <h4>Powerful Analytics</h4>
                  <p>
                    Nusid quod maxie placeat fcere possimus, nis assumnda est,
                    omnis dolor
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div
                className="features-card two"
                data-cues="fadeIn"
                data-group="images"
              >
                <i
                  className="flaticon-problem-solving"
                  data-cue="fadeIn"
                  data-group="images"
                  data-show="true"
                  style={{
                    animationName: "fadeIn",
                    animationDuration: "600ms",
                    animationTimingFunction: "ease",
                    animationDelay: "0ms",
                    animationDirection: "normal",
                    animationFillMode: "both",
                  }}
                ></i>
                <div
                  className="features"
                  data-cue="fadeIn"
                  data-group="images"
                  data-show="true"
                  style={{
                    animationName: "fadeIn",
                    animationDuration: "600ms",
                    animationTimingFunction: "ease",
                    animationDelay: "180ms",
                    animationDirection: "normal",
                    animationFillMode: "both",
                  }}
                >
                  <h4>Digital Solutions</h4>
                  <p>
                    Nusid quod maxie placeat fcere possimus, nis assumnda est,
                    omnis dolor
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div
                className="features-card three"
                data-cues="fadeIn"
                data-group="images"
              >
                <i
                  className="flaticon-browser"
                  data-cue="fadeIn"
                  data-group="images"
                  data-show="true"
                  style={{
                    animationName: "fadeIn",
                    animationDuration: "600ms",
                    animationTimingFunction: "ease",
                    animationDelay: "0ms",
                    animationDirection: "normal",
                    animationFillMode: "both",
                  }}
                ></i>
                <div
                  className="features"
                  data-cue="fadeIn"
                  data-group="images"
                  data-show="true"
                  style={{
                    animationName: "fadeIn",
                    animationDuration: "600ms",
                    animationTimingFunction: "ease",
                    animationDelay: "180ms",
                    animationDirection: "normal",
                    animationFillMode: "both",
                  }}
                >
                  <h4>Creative Content</h4>
                  <p>
                    Nusid quod maxie placeat fcere possimus, nis assumnda est,
                    omnis dolor
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div
                className="features-card four"
                data-cues="fadeIn"
                data-group="images"
              >
                <i
                  className="flaticon-growth"
                  data-cue="fadeIn"
                  data-group="images"
                  data-show="true"
                  style={{
                    animationName: "fadeIn",
                    animationDuration: "600ms",
                    animationTimingFunction: "ease",
                    animationDelay: "0ms",
                    animationDirection: "normal",
                    animationFillMode: "both",
                  }}
                ></i>
                <div
                  className="features"
                  data-cue="fadeIn"
                  data-group="images"
                  data-show="true"
                  style={{
                    animationName: "fadeIn",
                    animationDuration: "600ms",
                    animationTimingFunction: "ease",
                    animationDelay: "180ms",
                    animationDirection: "normal",
                    animationFillMode: "both",
                  }}
                >
                  <h4>Project Analysis</h4>
                  <p>
                    Nusid quod maxie placeat fcere possimus, nis assumnda est,
                    omnis dolor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Our Awesome Features Area --> */}

      {/* <!-- Start Modern Graphics Area --> */}
      <div className="modern-graphic-area-one ptb-100 bg-color-f6f3f0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="modern-info">
                <div className="section-heading">
                  <span className="sub-title">Modern Graphics</span>
                  <h2>See Where Your Efforts Are Paying Your Strategy</h2>
                  <p>
                    Indignation and dislike men who are so beguiled andy the
                    charms of pleasure the moment, so blinded by desir that they
                    cannot foresee the pain and trouble
                  </p>
                </div>
                <ul>
                  <li>
                    <i className="flaticon-check"></i>Distinctively brand
                    adaptive innovation
                  </li>
                  <li>
                    <i className="flaticon-check"></i>You need to be sure there
                    isn't anything
                  </li>
                </ul>
                <a className="common-btn two" href="/">
                  Learn More
                </a>
                <img
                  className="graphic-shape-3 rotate"
                  src="assets/images/shape/graphic-shape-3.png"
                  alt="sliderPhoto"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="graphics-img">
                <img
                  className="paying-img"
                  src="assets/images/paying-img.png"
                  alt="paying-img"
                  data-cues="zoomIn"
                />
                <img
                  className="graphics-img-1"
                  src="assets/images/graphics-img-1.png"
                  alt="sliderPhoto"
                />
                {/* <!-- shape images --> */}
                <img
                  className="graphics-img-2 moveVertical"
                  src="assets/images/graphics-img-2.png"
                  alt="sliderPhoto"
                />
                <img
                  className="graphics-img-3 moveHorizontal"
                  src="assets/images/graphics-img-3.png"
                  alt="sliderPhoto"
                />
                <img
                  className="graphic-shape-1"
                  src="assets/images/shape/graphic-shape-1.png"
                  alt="sliderPhoto"
                />
                <img
                  className="graphic-shape-2 moveVertical"
                  src="assets/images/shape/graphic-shape-2.png"
                  alt="sliderPhoto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Modern Graphics Area --> */}

      {/* <!-- Start Our Awesome Services Area --> */}
      <div className="services-area one pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Awesome Services</span>
            <h2>Our Best Service & Facilities</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="services-card one">
                <i className="flaticon-software"></i>
                <div className="info">
                  <h4>
                    <a href="service-details.html">Project Analysis</a>
                  </h4>
                  <p>
                    Nusid quod maxie placeat fcere possimus, nis assumnda est,
                    omnis dolor
                  </p>
                </div>

                <img
                  className="service-shape-3 bounce"
                  src="assets/images/shape/service-shape-3.png"
                  alt="sliderPhoto"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="services-card two">
                <i className="flaticon-customer-service"></i>
                <div className="info">
                  <h4>
                    <a href="service-details.html">Support & Service</a>
                  </h4>
                  <p>
                    Nusid quod maxie placeat fcere possimus, nis assumnda est,
                    omnis dolor
                  </p>
                </div>

                <img
                  className="service-shape-2 bounce"
                  src="assets/images/shape/service-shape-2.png"
                  alt="sliderPhoto"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="services-card three">
                <i className="flaticon-layer"></i>
                <div className="info">
                  <h4>
                    <a href="service-details.html">Get Free Update</a>
                  </h4>
                  <p>
                    Nusid quod maxie placeat fcere possimus, nis assumnda est,
                    omnis dolor
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="services-card four">
                <i className="flaticon-united"></i>
                <div className="info">
                  <h4>
                    <a href="service-details.html">Smart Performance</a>
                  </h4>
                  <p>
                    Nusid quod maxie placeat fcere possimus, nis assumnda est,
                    omnis dolor
                  </p>
                </div>

                <img
                  className="service-shape-5 bounce"
                  src="assets/images/shape/service-shape-5.png"
                  alt="sliderPhoto"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="services-card five">
                <i className="flaticon-growth"></i>
                <div className="info">
                  <h4>
                    <a href="service-details.html">Project Analysis</a>
                  </h4>
                  <p>
                    Nusid quod maxie placeat fcere possimus, nis assumnda est,
                    omnis dolor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- shape images --> */}
        <img
          className="service-shape-1 rotate"
          src="assets/images/shape/service-shape-1.png"
          alt="sliderPhoto"
        />
        <img
          className="service-shape-4 rotate"
          src="assets/images/shape/service-shape-4.png"
          alt="sliderPhoto"
        />
      </div>
      {/* <!-- End Our Awesome Services Area --> */}

      {/* <!-- Start Workflow Integration Area --> */}
      <div className="workflow-integration-area ptb-100 bg-color-f6f3f0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="task-img">
                <img
                  className="task-img-1"
                  src="assets/images/task-img-1.png"
                  alt="sliderPhoto"
                />

                <img
                  className="task-shape-1"
                  src="assets/images/shape/task-shape-1.png"
                  alt="sliderPhoto"
                />
                <img
                  className="task-img-2 bounce"
                  src="assets/images/task-img-2.png"
                  alt="sliderPhoto"
                />
                <img
                  className="task-img-3 moveVertical"
                  src="assets/images/task-img-3.png"
                  alt="sliderPhoto"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="history">
                <div className="section-heading">
                  <span className="sub-title">Workflow Integration</span>
                  <h2>Complete Data Reports And Analysis history</h2>
                  <p>
                    Indignation and dislike men who are so beguiled andy the
                    charms of pleasure the moment, so blinded by desir that they
                    cannot foresee the pain and trouble
                  </p>
                </div>

                <div className="history-card d-flex align-items-center position-relative">
                  <img
                    className="flex-shrink-0 me-3"
                    src="assets/images/user/user-1.png"
                    alt="sliderPhoto"
                  />
                  <div className="warp">
                    <h4>Paige Turner</h4>
                    <p>
                      On the other hand, we denounce with righus indignan and
                      dislike men who are so beguiled and delized
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- shape images --> */}
        <img
          className="task-shape-2 rotate"
          src="assets/images/shape/task-shape-2.png"
          alt="sliderPhoto"
        />
        <img
          className="team-shape bounce"
          src="assets/images/shape/team-shape.png"
          alt="sliderPhoto"
        />
      </div>
      {/* <!-- End Workflow Integration Area --> */}

      {/* <!-- Start Counter Area --> */}
      <div className="counter-area pt-100 pb-70 bg-color-3d0660">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-3">
              <div className="count-info">
                <h3
                  className="odometer odometer-auto-theme ms-4"
                  data-count="100"
                >
                  <CountUp end={100} duration={5} enableScrollSpy />
                </h3>
                <span className="target">+</span>
                <p className="ms-2">Monthly Download</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3">
              <div className="count-info two">
                <h3
                  className="odometer odometer-auto-theme ms-4"
                  data-count="100"
                >
                  <CountUp end={100} duration={5} enableScrollSpy />
                </h3>
                <span className="target">+</span>
                <p className="ms-2">Country Coverage</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-3">
              <div className="count-info three">
                <h3
                  className="odometer odometer-auto-theme ms-4"
                  data-count="100"
                >
                  <CountUp end={100} duration={5} enableScrollSpy />
                </h3>
                <span className="target">+</span>
                <p className="ms-4">Active Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-3">
              <div className="count-info four">
                <h3
                  className="odometer odometer-auto-theme ms-4"
                  data-count="100"
                >
                  <CountUp end={100} duration={5} enableScrollSpy />
                </h3>
                <span className="target">+</span>
                <p className="ms-5">Member</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- shape image --> */}
        <img
          className="count-shape bounce"
          src="assets/images/shape/count-shape.png"
          alt="count-shape"
        />
      </div>
      {/* <!-- End Counter Area --> */}

      {/* <!-- Start Choose Your Pricing Plan Area --> */}
      <div className="pricing-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Pricing Plan</span>
            <h2>Choose Your Pricing Plan</h2>
          </div>
          <div className="pricing-content">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Monthly
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Yearly
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-4 col-md-6" data-cues="fadeIn">
                    <div
                      className="pricing-card"
                      data-cue="fadeIn"
                      data-group="images"
                      data-show="true"
                      style={{
                        animationName: "fadeIn",
                        animationDuration: "600ms",
                        animationTimingFunction: "ease",
                        animationDelay: "0ms",
                        animationDirection: "normal",
                        animationFillMode: "both",
                      }}
                    >
                      <div className="color">
                        <h4>Basic</h4>
                        <span>
                          $45
                          <p>/Monthly</p>
                        </span>
                      </div>

                      <ul>
                        <li>
                          <i className="bx bx-check"></i>Powerful Admin Panel
                        </li>
                        <li>
                          <i className="bx bx-check"></i>Support via E-mail and
                          Phone
                        </li>
                        <li>
                          <i className="bx bx-check"></i>Multi-Language Support
                        </li>
                        <li>
                          <i className="bx bx-x panel"></i>Support via E-mail
                          and Phone
                        </li>
                      </ul>

                      <a className="pricing-btn" href="pricing.html">
                        Buy Now
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6" data-cues="fadeIn">
                    <div
                      className="pricing-card"
                      data-cue="fadeIn"
                      data-group="images"
                      data-show="true"
                      style={{
                        animationName: "fadeIn",
                        animationDuration: "600ms",
                        animationTimingFunction: "ease",
                        animationDelay: "0ms",
                        animationDirection: "normal",
                        animationFillMode: "both",
                      }}
                    >
                      <div className="color">
                        <h4>Standard</h4>
                        <span>
                          $65
                          <p>/Monthly</p>
                        </span>
                      </div>

                      <ul>
                        <li>
                          <i className="bx bx-check"></i>Powerful Admin Panel
                        </li>
                        <li>
                          <i className="bx bx-check"></i>Support via E-mail and
                          Phone
                        </li>
                        <li>
                          <i className="bx bx-check"></i>Multi-Language Support
                        </li>
                        <li>
                          <i className="bx bx-check"></i>Support via E-mail and
                          Phone
                        </li>
                      </ul>

                      <a className="pricing-btn" href="pricing.html">
                        Buy Now
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6" data-cues="fadeIn">
                    <div
                      className="pricing-card"
                      data-cue="fadeIn"
                      data-group="images"
                      data-show="true"
                      style={{
                        animationName: "fadeIn",
                        animationDuration: "600ms",
                        animationTimingFunction: "ease",
                        animationDelay: "0ms",
                        animationDirection: "normal",
                        animationFillMode: "both",
                      }}
                    >
                      <div className="color">
                        <h4>Premium</h4>
                        <span>
                          $75
                          <p>/Monthly</p>
                        </span>
                      </div>

                      <ul>
                        <li>
                          <i className="bx bx-check"></i>Powerful Admin Panel
                        </li>
                        <li>
                          <i className="bx bx-check"></i>Support via E-mail and
                          Phone
                        </li>
                        <li>
                          <i className="bx bx-check"></i>Multi-Language Support
                        </li>
                        <li>
                          <i className="bx bx-check"></i>Support via E-mail and
                          Phone
                        </li>
                      </ul>

                      <a className="pricing-btn" href="pricing.html">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-4 col-md-6" data-cues="fadeIn">
                    <div className="pricing-card">
                      <div className="color">
                        <h4>Basic</h4>
                        <span>
                          $79
                          <p>/Monthly</p>
                        </span>
                      </div>

                      <ul>
                        <li>
                          <i className="bx bx-check"></i>Powerful Admin Panel
                        </li>
                        <li>
                          <i className="bx bx-check"></i>Support via E-mail and
                          Phone
                        </li>
                        <li>
                          <i className="bx bx-x panel"></i>Multi-Language
                          Support
                        </li>
                        <li>
                          <i className="bx bx-x panel"></i>Support via E-mail
                          and Phone
                        </li>
                      </ul>

                      <a className="pricing-btn" href="pricing.html">
                        Buy Now
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6" data-cues="fadeIn">
                    <div className="pricing-card">
                      <div className="color">
                        <h4>Standard</h4>
                        <span>
                          $89
                          <p>/Monthly</p>
                        </span>
                      </div>

                      <ul>
                        <li>
                          <i className="bx bx-check"></i>Powerful Admin Panel
                        </li>
                        <li>
                          <i className="bx bx-check"></i>Support via E-mail and
                          Phone
                        </li>
                        <li>
                          <i className="bx bx-check"></i>Multi-Language Support
                        </li>
                        <li>
                          <i className="bx bx-x panel"></i>Support via E-mail
                          and Phone
                        </li>
                      </ul>

                      <a className="pricing-btn" href="pricing.html">
                        Buy Now
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="pricing-card" data-cues="fadeIn">
                      <div className="color">
                        <h4>Premium</h4>
                        <span>
                          $99
                          <p>/Monthly</p>
                        </span>
                      </div>

                      <ul>
                        <li>
                          <i className="bx bx-check"></i>Powerful Admin Panel
                        </li>
                        <li>
                          <i className="bx bx-check"></i>Support via E-mail and
                          Phone
                        </li>
                        <li>
                          <i className="bx bx-check"></i>Multi-Language Support
                        </li>
                        <li>
                          <i className="bx bx-check"></i>Support via E-mail and
                          Phone
                        </li>
                      </ul>

                      <a className="pricing-btn" href="pricing.html">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Choose Your Pricing Plan Area --> */}

      {/* <!-- Start Meet Our Team Area --> */}
      <div className="team-area pt-100 pb-70 bg-color-f6f3f0">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Team Member</span>
            <h2>Meet Our Expert Team</h2>
          </div>

          <Swiper
            spaceBetween={5}
            loop={true}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="team-card">
                <div className="team-social">
                  <img src="assets/images/team/team-1.png" alt="sliderPhoto" />

                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.google.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="name">
                  <h4>Jimmy Changa</h4>
                  <p>Designer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-card">
                <div className="team-social">
                  <img src="assets/images/team/team-2.png" alt="sliderPhoto" />

                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.google.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="name">
                  <h4>Shonda Leer</h4>
                  <p>Developer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-card">
                <div className="team-social">
                  <img src="assets/images/team/team-3.png" alt="sliderPhoto" />

                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.google.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="name">
                  <h4>Holly Graham</h4>
                  <p>App Developer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-card">
                <div className="team-social">
                  <img src="assets/images/team/team-4.png" alt="sliderPhoto" />

                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.google.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="name">
                  <h4>Will Power</h4>
                  <p>Designer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-card">
                <div className="team-social">
                  <img src="assets/images/team/team-3.png" alt="sliderPhoto" />

                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.google.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="name">
                  <h4>Nikkita Stein</h4>
                  <p>Designer</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* <!-- End Meet Our Team Area --> */}

      {/* <!-- Start Why Choose Us Area --> */}
      <div className="why-choose-us-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="why-choose-us-content">
                <div className="section-heading">
                  <span className="sub-title">Why Choose Us</span>
                  <h2>Visual Appeal Based In The Strategic Experience</h2>
                  <p>
                    Indignation and dislike men who are so beguiled andy the
                    charms of pleasure the moment, so blinded by desir that they
                    cannot foresee the pain and trouble
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="report d-flex align-items-center position-relative">
                      <i className="flaticon-diagram"></i>
                      <div className="info">Reporting & Analysis</div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="report two d-flex align-items-center position-relative">
                      <i className="flaticon-diagram"></i>
                      <div className="info">Technical CEO Audit</div>
                    </div>
                  </div>
                </div>

                <a className="common-btn two" href="portfolio-details.html">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="choose-img">
                <img
                  className="choose-image"
                  src="assets/images/choose-image.png"
                  alt="choose-us"
                />
                <img
                  className="choose-img-1"
                  src="assets/images/choose-img-1.png"
                  alt="choose-img"
                />

                <img
                  className="choose-img-2 moveVertical"
                  src="assets/images/choose-img-2.png"
                  alt="choose-img"
                />
                <img
                  className="choose-img-3 moveHorizontal"
                  src="assets/images/choose-img-3.png"
                  alt="choose-img"
                />
                <img
                  className="choose-img-4 bounce"
                  src="assets/images/choose-img-4.png"
                  alt="choose-img"
                />
                <img
                  className="choose-shape-1"
                  src="assets/images/shape/choose-shape-1.png"
                  alt="choose-shape"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Why Choose Us Area --> */}

      {/* <!-- Start Testimonials Area --> */}
      <div className="testimonials-area pt-100 pb-70 bg-color-f6f3f0">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Testimonials</span>
            <h2>Our Client Feedback</h2>
          </div>

          <Swiper
            spaceBetween={5}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            pagination={{
              clickable: true,
            }}
            style={{
              "--swiper-pagination-color": "#fd7529",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-width": "20px",
              "--swiper-pagination-bullet-height": "10px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="testimonials-box">
                <div className="box d-flex position-relative align-items-center">
                  <img
                    src="assets/images/user/user-2.png"
                    className="flex-shrink-0 me-4"
                    alt="sliderPhoto"
                  />
                  <div className="name">
                    <h4>Donatella Nobatti</h4>
                    <p>CEO - Founder</p>
                  </div>
                </div>
                <p>
                  When our power of choice is untrammelled and when prevents our
                  being able to do what we like best, every pleasure is to be
                  welcomed and every pain avoided. Butcertain{" "}
                </p>

                <i className="flaticon-straight-quotes"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonials-box">
                <div className="box d-flex position-relative align-items-center">
                  <img
                    src="assets/images/user/user-3.png"
                    className="flex-shrink-0 me-4"
                    alt="sliderPhoto"
                  />
                  <div className="name">
                    <h4>Graham Cracker</h4>
                    <p>Designer</p>
                  </div>
                </div>
                <p>
                  When our power of choice is untrammelled and when prevents our
                  being able to do what we like best, every pleasure is to be
                  welcomed and every pain avoided. Butcertain{" "}
                </p>

                <i className="flaticon-straight-quotes"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonials-box">
                <div className="box d-flex position-relative align-items-center">
                  <img
                    src="assets/images/user/user-2.png"
                    className="flex-shrink-0 me-4"
                    alt="sliderPhoto"
                  />
                  <div className="name">
                    <h4>Donatella Nobatti</h4>
                    <p>CEO - Founder</p>
                  </div>
                </div>
                <p>
                  When our power of choice is untrammelled and when prevents our
                  being able to do what we like best, every pleasure is to be
                  welcomed and every pain avoided. Butcertain{" "}
                </p>

                <i className="flaticon-straight-quotes"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonials-box">
                <div className="box d-flex position-relative align-items-center">
                  <img
                    src="assets/images/user/user-3.png"
                    className="flex-shrink-0 me-4"
                    alt="sliderPhoto"
                  />
                  <div className="name">
                    <h4>Graham Cracker</h4>
                    <p>Designer</p>
                  </div>
                </div>
                <p>
                  When our power of choice is untrammelled and when prevents our
                  being able to do what we like best, every pleasure is to be
                  welcomed and every pain avoided. Butcertain{" "}
                </p>

                <i className="flaticon-straight-quotes"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonials-box">
                <div className="box d-flex position-relative align-items-center">
                  <img
                    src="assets/images/user/user-2.png"
                    className="flex-shrink-0 me-4"
                    alt="sliderPhoto"
                  />
                  <div className="name">
                    <h4>Donatella Nobatti</h4>
                    <p>CEO - Founder</p>
                  </div>
                </div>
                <p>
                  When our power of choice is untrammelled and when prevents our
                  being able to do what we like best, every pleasure is to be
                  welcomed and every pain avoided. Butcertain{" "}
                </p>

                <i className="flaticon-straight-quotes"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonials-box">
                <div className="box d-flex position-relative align-items-center">
                  <img
                    src="assets/images/user/user-3.png"
                    className="flex-shrink-0 me-4"
                    alt="sliderPhoto"
                  />
                  <div className="name">
                    <h4>Graham Cracker</h4>
                    <p>Designer</p>
                  </div>
                </div>
                <p>
                  When our power of choice is untrammelled and when prevents our
                  being able to do what we like best, every pleasure is to be
                  welcomed and every pain avoided. Butcertain{" "}
                </p>

                <i className="flaticon-straight-quotes"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonials-box">
                <div className="box d-flex position-relative align-items-center">
                  <img
                    src="assets/images/user/user-2.png"
                    className="flex-shrink-0 me-4"
                    alt="sliderPhoto"
                  />
                  <div className="name">
                    <h4>Donatella Nobatti</h4>
                    <p>CEO - Founder</p>
                  </div>
                </div>
                <p>
                  When our power of choice is untrammelled and when prevents our
                  being able to do what we like best, every pleasure is to be
                  welcomed and every pain avoided. Butcertain{" "}
                </p>

                <i className="flaticon-straight-quotes"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonials-box">
                <div className="box d-flex position-relative align-items-center">
                  <img
                    src="assets/images/user/user-3.png"
                    className="flex-shrink-0 me-4"
                    alt="sliderPhoto"
                  />
                  <div className="name">
                    <h4>Graham Cracker</h4>
                    <p>Designer</p>
                  </div>
                </div>
                <p>
                  When our power of choice is untrammelled and when prevents our
                  being able to do what we like best, every pleasure is to be
                  welcomed and every pain avoided. Butcertain{" "}
                </p>

                <i className="flaticon-straight-quotes"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonials-box">
                <div className="box d-flex position-relative align-items-center">
                  <img
                    src="assets/images/user/user-2.png"
                    className="flex-shrink-0 me-4"
                    alt="sliderPhoto"
                  />
                  <div className="name">
                    <h4>Donatella Nobatti</h4>
                    <p>CEO - Founder</p>
                  </div>
                </div>
                <p>
                  When our power of choice is untrammelled and when prevents our
                  being able to do what we like best, every pleasure is to be
                  welcomed and every pain avoided. Butcertain{" "}
                </p>

                <i className="flaticon-straight-quotes"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonials-box">
                <div className="box d-flex position-relative align-items-center">
                  <img
                    src="assets/images/user/user-3.png"
                    className="flex-shrink-0 me-4"
                    alt="sliderPhoto"
                  />
                  <div className="name">
                    <h4>Graham Cracker</h4>
                    <p>Designer</p>
                  </div>
                </div>
                <p>
                  When our power of choice is untrammelled and when prevents our
                  being able to do what we like best, every pleasure is to be
                  welcomed and every pain avoided. Butcertain{" "}
                </p>

                <i className="flaticon-straight-quotes"></i>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* <!-- End Testimonials Area --> */}

      {/* <!-- Start Blog Area --> */}
      <div className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-heading">
            <div className="row align-items-end">
              <div className="col-lg-6 col-md-7">
                <span className="sub-title">Our Blog</span>
                <h2>See Our Latest News</h2>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="blog-btn">
                  <a className="common-btn two" href="blog-details.html">
                    View All
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6" data-cues="fadeIn">
              <div
                className="blog-card"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "0ms",
                  animationDirection: "normal",
                  animationFillMode: "both",
                }}
              >
                <div className="single">
                  <div className="blog-img">
                    <a href="blog-details.html">
                      <img src="assets/images/blog/blog-1.jpg" alt="blog" />
                    </a>
                    <div className="date">22 July 2022</div>
                  </div>

                  <div className="blog-content">
                    <ul>
                      <li>
                        <img
                          src="assets/images/svg/svg-img-1.svg"
                          alt="svg-img"
                        />
                        By
                        <a href="blog-details.html">Admin</a>
                      </li>
                      <li>
                        <img
                          src="assets/images/svg/svg-img-2.svg"
                          alt="svg-img"
                        />
                        No Comment
                      </li>
                    </ul>
                    <h4>
                      <a href="blog-details.html">
                        All Powerful Design Feature In Soqu
                      </a>
                    </h4>
                    <p>
                      Uod maxime placeat facere possi voluptas assumenda est,
                      omnis dolor repelle
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-cues="fadeIn">
              <div
                className="blog-card"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "0ms",
                  animationDirection: "normal",
                  animationFillMode: "both",
                }}
              >
                <div className="single">
                  <div className="blog-img">
                    <a href="blog-details.html">
                      <img src="assets/images/blog/blog-2.jpg" alt="blog" />
                    </a>
                    <div className="date">24 July 2022</div>
                  </div>

                  <div className="blog-content">
                    <ul>
                      <li>
                        <img
                          src="assets/images/svg/svg-img-1.svg"
                          alt="svg-img"
                        />
                        By
                        <a href="blog-details.html">Admin</a>
                      </li>
                      <li>
                        <img
                          src="assets/images/svg/svg-img-2.svg"
                          alt="svg-img"
                        />
                        No Comment
                      </li>
                    </ul>
                    <h4>
                      <a href="blog-details.html">
                        Report About The Team’s Trip To The Road Show
                      </a>
                    </h4>
                    <p>
                      Uod maxime placeat facere possi voluptas assumenda est,
                      omnis dolor repelle
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-cues="fadeIn">
              <div
                className="di"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "0ms",
                  animationDirection: "normal",
                  animationFillMode: "both",
                }}
              >
                <div className="blog-card">
                  <div className="single">
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img src="assets/images/blog/blog-3.jpg" alt="blog" />
                      </a>
                      <div className="date">25 July 2022</div>
                    </div>

                    <div className="blog-content">
                      <ul>
                        <li>
                          <img
                            src="assets/images/svg/svg-img-1.svg"
                            alt="svg-img"
                          />
                          By
                          <a href="blog-details.html">Admin</a>
                        </li>
                        <li>
                          <img
                            src="assets/images/svg/svg-img-2.svg"
                            alt="svg-img"
                          />
                          No Comment
                        </li>
                      </ul>
                      <h4>
                        <a href="blog-details.html">
                          How To Build And Launch Powerful Responsive
                        </a>
                      </h4>
                      <p>
                        Uod maxime placeat facere possi voluptas assumenda est,
                        omnis dolor repelle
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Blog Area --> */}
    </div>
  );
};

export default Home;
