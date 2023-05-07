import React, { useState } from "react";

import { Link, Outlet } from "react-router-dom";

const Home = () => {
  const [responsive, setResponsive] = useState(true);

  const handleResponsive = () => {
    setResponsive(!responsive);
  };

  return (
    <div>
      {/* <!-- Preloader --> */}
      <div id="preloader">
        <div id="ctn-preloader" className="ctn-preloader">
          <div className="pre">
            <span className="loader"></span>
          </div>
        </div>
      </div>
      {/* <!-- Preloader --> */}

      {/* <!-- Start Navbar Area --> */}
      <div className="navbar-area fixed-top navbar-area-3">
        <div className="mobile-responsive-nav">
          <div className="container">
            <div className="mobile-responsive-menu  mean-container">
              <div className="mean-bar">
                <a
                  href="#nav"
                  style={{ right: 0, left: "auto" }}
                  className="meanmenu-reveal"
                  onClick={() => handleResponsive()}
                >
                  <span>
                    <span>
                      <span></span>
                    </span>
                  </span>
                </a>
                <nav className="mean-nav">
                  <ul
                    className="navbar-nav ms-auto "
                    style={{ display: `${responsive ? "none" : "block"}` }}
                  >
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/service" className="nav-link">
                        Services
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/blog" className="nav-link">
                        Blog
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/contact" className="nav-link">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="logo">
                <Link className="navbar-brand" to="/">
                  <h3 className="fs-1 text">Rainbosoft</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="desktop-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" to="/">
                <h3 className="fs-1 text">Rainbosoft</h3>
              </Link>

              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/service" className="nav-link">
                      Services
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/blog" className="nav-link">
                      Blog
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* <!-- End Navbar Area --> */}

      <Outlet />

      {/* <!-- Start Footer Area --> */}
      <div className="footer-area ptb-100 bg-color-3d0660">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="widget">
                <Link className="navbar-brand" to="/">
                  <h3 className="fs-1 text">Rainbosoft</h3>
                </Link>
                <p>
                  There are many variations of Lorem Ipsum available, but the
                  majority have suffered alteration in some,{" "}
                </p>

                <ul>
                  <li>
                    <a
                      className="social"
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="social"
                      href="https://www.twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="social"
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="social"
                      href="https://www.google.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-google"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-md-4">
                  <div className="address">
                    <h4>Useful Link</h4>
                    <ul>
                      <li>
                        <i className="bx bx-right-arrow-alt"></i>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <i className="bx bx-right-arrow-alt"></i>
                        <a href="blog-details.html">Latest Blog</a>
                      </li>
                      <li>
                        <i className="bx bx-right-arrow-alt"></i>
                        <a href="team.html">Team</a>
                      </li>
                      <li>
                        <i className="bx bx-right-arrow-alt"></i>
                        <a href="contact.html">Contact Us</a>
                      </li>
                      <li>
                        <i className="bx bx-right-arrow-alt"></i>
                        <a href="service-details.html">Services</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6 col-md-4">
                  <div className="address">
                    <h4>Overview</h4>
                    <ul>
                      <li>
                        <i className="bx bx-right-arrow-alt"></i>
                        <a href="portfolio.html">Support</a>
                      </li>
                      <li>
                        <i className="bx bx-right-arrow-alt"></i>
                        <a href="portfolio-details.html">Proposals</a>
                      </li>
                      <li>
                        <i className="bx bx-right-arrow-alt"></i>
                        <a href="faq.html">Guides</a>
                      </li>
                      <li>
                        <i className="bx bx-right-arrow-alt"></i>
                        <a href="pricing.html">Payments</a>
                      </li>
                      <li>
                        <i className="bx bx-right-arrow-alt"></i>
                        <a href="services.html">Solutions</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4">
                  <div className="address">
                    <h4>Get In Touch</h4>
                    <ul className="location">
                      <li>
                        <i className="flaticon-phone-call"></i>
                        <a href="tel:8002162020">(800) 216 2020</a>
                      </li>
                      <li>
                        <i className="flaticon-email-1"></i>
                        <a href="https://templates.hibotheme.com/cdn-cgi/l/email-protection#432a2d252c03263b222e332f266d202c2e">
                          <span
                            className="__cf_email__"
                            data-cfemail="5c35323a331c39243d312c3039723f3331"
                          >
                            [email&#160;protected]
                          </span>
                        </a>
                      </li>
                      <li>
                        <i className="flaticon-placeholder-1"></i>
                        <span>
                          No. 12, Ribon Building, Walse street, Australia
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- shape image --> */}
        <img
          className="footer-shape"
          src="assets/images/shape/footer-shape.png"
          alt="sliderPhoto"
        />
      </div>
      {/* <!-- End Footer Area --> */}

      {/* <!-- Start Copy Area --> */}
      <div className="copy-area bg-color-3d0660">
        <div className="container">
          <div className="copy">
            <p>
              Copyright <span>Rainbosoft</span> is Proudly Created by{" "}
              <a href="https://rainbosoft.com/">Rainbosoft</a>
            </p>
          </div>
        </div>
      </div>
      {/* <!-- End Copy Area --> */}

      {/* <!-- Go top --> */}
      <div className="go-top">
        <i className="bx bxs-chevrons-up"></i>
      </div>
      {/* <!-- Go top --> */}
    </div>
  );
};

export default Home;
