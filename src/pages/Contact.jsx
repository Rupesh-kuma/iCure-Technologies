import React from 'react'
import contentsimg from '../assets/img/breadcrumb/01.jpg'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <>
  {/* breadcrumb */}
  <div
    className="site-breadcrumb"
    style={{ background: `url(${contentsimg})` }}
  >
    <div className="container">
      <h2 className="breadcrumb-title">Contact Us</h2>
      <ul className="breadcrumb-menu">
        <li>
          <Link to="index-2.html">Home</Link>
        </li>
        <li className="active">Contact Us</li>
      </ul>
    </div>
  </div>
  {/* breadcrumb end */}
  {/* contact area */}
  <div className="contact-area py-120">
    <div className="container">
      <div className="contact-wrap">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-info-icon">
                  <i className="fal fa-location-dot" />
                </div>
                <div className="contact-info-content">
                  <h5>Office Address</h5>
                  <p>25/B Milford, New York, USA</p>
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-info-icon">
                  <i className="fal fa-phone-volume" />
                </div>
                <div className="contact-info-content">
                  <h5>Call Us</h5>
                  <p>+2 123 4565 789</p>
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-info-icon">
                  <i className="fal fa-envelope" />
                </div>
                <div className="contact-info-content">
                  <h5>Email Us</h5>
                  <p>
                    <Link
                      to="https://live.themewild.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="6a03040c052a0f120b071a060f44090507"
                    >
                      [email&nbsp;protected]
                    </Link>
                  </p>
                </div>
              </div>
              <div className="contact-info border-0">
                <div className="contact-info-icon">
                  <i className="fal fa-clock" />
                </div>
                <div className="contact-info-content">
                  <h5>Open Time</h5>
                  <p>Mon - Sat (10.00AM - 05.30PM)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="contact-form">
              <div className="contact-form-header">
                <h2>Get In Touch</h2>
                <p>
                We’re here to help you with all your industrial electronics repair and IoT automation needs. Whether you have a question about our services, need support, or want to request a quote—our team is ready to assist you.{" "}
                </p>
              </div>
              <form
                method="post"
                action="https://live.themewild.com/reparo/assets/php/contact.php"
                id="contact-form"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Your Subject"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    cols={30}
                    rows={5}
                    className="form-control"
                    placeholder="Write Your Message"
                    required=""
                    defaultValue={""}
                  />
                </div>
                <button type="submit" className="theme-btn">
                  Send Message <i className="far fa-paper-plane" />
                </button>
                <div className="col-md-12 mt-3">
                  <div className="form-messege text-success" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end contact area */}
  {/* map */}
  <div className="contact-map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14042.636639985349!2d77.32095495000002!3d28.36915255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1744050919887!5m2!1sen!2sin"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    />
  </div>
</>

    </>
  )
}

export default Contact;
