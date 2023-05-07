import React from "react";

const Contact = () => {
  return (
    <div>
      {/* Start Page Banner Area */}
      <div className="page-banner-area bg-color-f8f8f8">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="page-banner-heading">
                <h1>Contact</h1>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="page-banner-img">
                <img
                  className="page-banner-img"
                  src="assets/images/page-banner-img-2.png"
                  alt="page-banner-img"
                />
              </div>
            </div>
          </div>
        </div>
        {/* shape images */}
        <img
          className="page-shape-1"
          src="assets/images/shape/page-shape-6.png"
          alt="shape-image"
        />
        <img
          className="page-shape-2"
          src="assets/images/shape/page-shape-5.png"
          alt="shape-image"
        />
        <img
          className="page-shape-3"
          src="assets/images/shape/page-shape-3.png"
          alt="shape-image"
        />
        <img
          className="page-shape-4"
          src="assets/images/shape/page-shape-4.png"
          alt="shape-image"
        />
      </div>
      {/* End Page Banner Area */}
      {/* Start Contact Us Area */}
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="subtitle">Get in Touch</span>
            <h2>We’re Happy To Talk To You</h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="pel-address">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="flaticon-phone-call-1" />
                    </div>
                    <p>Phone:</p>
                    <a href="tel:018823456789">+018823456789</a>
                    <a href="tel:012345678956">+012345678956</a>
                  </li>
                </ul>
              </div>
              <div className="pel-address">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="flaticon-email" />
                    </div>
                    <p>Email:</p>
                    <a href="https://templates.hibotheme.com/cdn-cgi/l/email-protection#780b17090d381f15191114561b1715">
                      <span
                        className="__cf_email__"
                        data-cfemail="81f2eef0f4c1e6ece0e8edafe2eeec"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                    <a href="https://templates.hibotheme.com/cdn-cgi/l/email-protection#aec7c0c8c1ddc1dfdbeec9c3cfc7c280cdc1c3">
                      <span
                        className="__cf_email__"
                        data-cfemail="7b12151d1408140a0e3b1c161a121755181416"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pel-address">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="flaticon-pin" />
                    </div>
                    <p>Location:</p>
                    <span>
                      29 Street, Melbourne City 29 Street, Newyork City
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <form id="contactForm" className="contact-form">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-md-6 col-xl-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        required
                        data-error="Please enter your name"
                        placeholder="Name"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6 col-xl-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        required
                        data-error="Please enter your email"
                        placeholder="Email"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6 col-xl-6">
                    <div className="form-group">
                      <input
                        type="phone"
                        required
                        data-error="Please enter your number"
                        className="form-control"
                        placeholder="Phone"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6 col-xl-6">
                    <div className="form-group">
                      <input
                        type="text"
                        required
                        data-error="Please enter your subject"
                        className="form-control"
                        placeholder="Subject"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        className="form-control textarea"
                        cols={30}
                        rows={8}
                        required
                        data-error="Write your message"
                        placeholder="Message"
                        defaultValue={""}
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <button
                      className="book-btn"
                      type="submit"
                      style={{ pointerEvents: "all", cursor: "pointer" }}
                    >
                      Send Message
                    </button>
                    <div id="msgSubmit" className="h3 text-center hidden" />
                    <div className="clearfix" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Us Area */}
      {/* Start Map Area */}
      <div className="map-area">
        <div className="container-fluid p-0">
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190947.08622162053!2d-80.65181316885673!3d43.40602983589946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2f4b21b97b7b%3A0x87a6830532b2fcfc!2sCanada's%20Wonderland!5e0!3m2!1sen!2sbd!4v1664141402794!5m2!1sen!2sbd" />
          </div>
        </div>
      </div>
      {/* End Map Area */}
    </div>
  );
};

export default Contact;
