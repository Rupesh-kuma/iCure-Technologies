import React from "react";
import aboutBanner from '../assets/img/breadcrumb/01.jpg';
import testimonialArea1 from "../assets/img/testimonial/01.jpg";
import testimonialArea2 from "../assets/img/testimonial/02.jpg";
import testimonialArea3 from "../assets/img/testimonial/03.jpg";
import testimonialArea4 from "../assets/img/testimonial/04.jpg";
import testimonialArea5 from "../assets/img/testimonial/05.jpg";
import testimonialAreaIcon1 from "../assets/img/icon/quote.svg";
import about_section_team_1 from "../assets/img/about/manger.webp";
import about_section_team_2 from "../assets/img/about/manger2.webp";
// import teamArea4 from "../assets/img/team/04.jpg";
import faqArea1 from "../assets/img/faq/01.jpg";
// import about_section_team_3 from "../assets/img/blog/com-1.jpg";
// import about_section_team_4 from "../assets/img/blog/com-1.jpg";
import { Link } from "react-router-dom";
const AboutBanner = () => {
   const testimonialArea = [
          {
              image: testimonialArea1,
              name: "Sylvia H Green",
              description: "Clients",
              description2: "There are many variations of passages available but the majority have suffered alteration in some form by injected popularity belief believable.",
              icon: testimonialAreaIcon1,
              star: [
                  { icon: "fas fa-star" },
                  { icon: "fas fa-star" },
                  { icon: "fas fa-star" },
                  { icon: "fas fa-star" },
                  { icon: "fas fa-star" },
              ]
  
          },
          {
              image: testimonialArea2,
              name: "Gordo Novak",
              description: "Clients",
              description2: "There are many variations of passages available but the majority have suffered alteration in some form by injected popularity belief believable.",
              icon: testimonialAreaIcon1,
              star: [
                  { icon: "fas fa-star" },
                  { icon: "fas fa-star" },
                  { icon: "fas fa-star" },
                  { icon: "fas fa-star" },
                  { icon: "fas fa-star" },
              ]
  
          },
          {
              image: testimonialArea3,
              name: "Reid E Butt",
              description: "Clients",
              description2: "There are many variations of passages available but the majority have suffered alteration in some form by injected popularity belief believable.",
              icon: testimonialAreaIcon1,
              star: [
                  { icon: "fas fa-star" },
                  { icon: "fas fa-star" },
                  { icon: "fas fa-star" },
                  { icon: "fas fa-star" },
                  { icon: "fas fa-star" },
              ]
  
          },
          {
              image: testimonialArea4,
              name: "Parker Jimenez",
              description: "Clients",
              description2: "There are many variations of passages available but the majority have suffered alteration in some form by injected popularity belief believable.",
              icon: testimonialAreaIcon1,
              star: [
                  { icon: "fas fa-star" },
                  { icon: "fas fa-star" },
                  { icon: "fas fa-star" },
                  { icon: "fas fa-star" },
                  { icon: "fas fa-star" },
              ]
  
          },
          {
              image: testimonialArea5,
              name: "Heruli Nez",
              description: "Clients",
              description2: "There are many variations of passages available but the majority have suffered alteration in some form by injected popularity belief believable.",
              icon: testimonialAreaIcon1,
              star: [
                  { icon: "fas fa-star" },
                  { icon: "fas fa-star" },
                  { icon: "fas fa-star" },
                  { icon: "fas fa-star" },
                  { icon: "fas fa-star" },
              ]
  
          }
      ]
    // const details=[
    //     {title:"your name", descri:"lorem kdjfkdjfk", link:about_section_team_1 },
    //     {title:"your name", descri:"lorem kdjfkdjfk", link:about_section_team_1 },
    //     {title:"your name", descri:"lorem kdjfkdjfk", link:about_section_team_1 },
    //     {title:"your name", descri:"lorem kdjfkdjfk", link:about_section_team_1 },
    //     {title:"your name", descri:"lorem kdjfkdjfk", link:about_section_team_1 }
    // ]
    const faqArea = [
          {
              question: "Do you repair gaming consoles or their internal control boards?",
              answer: "Yes, at iCure Technologies we specialize in repairing internal control cards and PCBs, which are often found in gaming consoles and arcade machines. If your console is experiencing hardware-level issues, we may be able to assist.",
              icon: "far fa-question",
              headersid: "headingOne",
              descriptionid: "collapseOne",
  
          },
          {
              question: " Can you fix HDMI or display issues in gaming systems like PlayStation or Xbox?",
              answer: "We don’t offer direct repair for HDMI ports, but if the issue is related to internal display controller circuits or boards, our expert technicians can help evaluate and repair them.",
              icon: "far fa-question",
              headersid: "headingtwo",
              descriptionid: "collapsetwo",
          },
          {
              question: "Can VFD drives or PLCs be used in gaming setups?",
              answer: "While VFD drives and PLCs are typically used in industrial automation, they are also found in complex gaming or arcade machines. We offer repair services for both, ensuring your machine’s control logic functions smoothly.",
              icon: "far fa-question",
              headersid: "headingthree",
              descriptionid: "collapsethree",
          }
      ]
  return (
    <>

        <div className="site-breadcrumb" style={{ backgroundImage: `url(${aboutBanner})` }}>
            <div className="container">
                <h2 className="breadcrumb-title">About Us</h2>
                <ul className="breadcrumb-menu">
                    <li><Link to="/">Home</Link></li>
                    <li className="active">About Us</li>
                </ul>
            </div>
        </div>
         {/* breadcrumb end  */}

         <div className="choose-area py-80">
  <div className="container">
  <span className="site-title-tagline">
              <i className="fas fa-bring-forward" />Our Management Team
            </span>
            <h2 className="site-title">
            Management makes <span>work purposeful,</span> problems productive.
            </h2>
          
          
    <div className="row align-items-center g-4 my-3">
      <div className="col-lg-6">
      <img className="img-1 rounded" src={about_section_team_1} alt=""  />
      <h3 class="service-title text-center"><a href="#">Menejar Name</a></h3>
      <p className="my-2 about-text text-center">
            There are many variations of passages of Lorem Ipsum available but
            the randomised words which don't look even slightly believable.
          </p>
      </div>
      <div className="col-lg-6">
      <img className="img-2 rounded" src={about_section_team_2} alt="" />
      <h3 className="service-title text-center"><a href="#">Menejar Name</a></h3>
      <p className="my-2 about-text text-center">
            There are many variations of passages of Lorem Ipsum available but
            the randomised words which don't look even slightly believable.
          </p>
      </div>
    </div>
  </div>
  </div>

  {/* testimonial-area */}
  <div className="testimonial-area py-80">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-7 mx-auto wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay=".25s"
        >
          <div className="site-heading text-center">
            <span className="site-title-tagline">
              <i className="fas fa-bring-forward" /> Testimonials
            </span>
            <h2 className="site-title text-white">
              What Client <span>Say's</span> About Us
            </h2>
            <div className="heading-divider" />
          </div>
        </div>
      </div>
      <div
        className="testimonial-slider owl-carousel owl-theme wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".25s"
      >
       
        <div className="testimonial-single">
          <div className="testimonial-content">
            <div className="testimonial-author-img">
              <img src="assets/img/testimonial/02.jpg" alt="" />
            </div>
            <div className="testimonial-author-info">
              <h4>Gordo Novak</h4>
              <p>Clients</p>
            </div>
          </div>
          <div className="testimonial-quote">
            <p>
              There are many variations of passages available but the majority
              have suffered alteration in some form by injected popularity
              belief believable.
            </p>
            <div className="testimonial-quote-icon">
              <img src="assets/img/icon/quote.svg" alt="" />
            </div>
          </div>
          <div className="testimonial-rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>
        {Array.isArray(testimonialArea) &&
  testimonialArea.map((item, i) => (
    <div className="testimonial-single" key={i}>
      <div className="testimonial-content">
        <div className="testimonial-author-img">
          <img src={item.image} alt="" />
        </div>
        <div className="testimonial-author-info">
          <h4>{item.name}</h4>
          <p>{item.description}</p>
        </div>
      </div>
      <div className="testimonial-quote">
        <p>{item.description2}</p>
        <div className="testimonial-quote-icon">
          <img src={item.icon} alt="" />
        </div>
      </div>
      <div className="testimonial-rate">
        {Array.isArray(item.star) &&
          item.star.map((star, i) => (
            <i className={star.icon} key={i} />
          ))}
      </div>
    </div>
  ))}

        
      </div>
    </div>
  </div>
  {/* testimonial-area end */}
   {/* faq area */}
   <div className="faq-area py-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-left wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".25s">
                                <div className="faq-img">
                                    <img src={faqArea1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-right wow fadeInUp" data-wow-duration="1s" data-wow-delay=".25s">
                                <div className="site-heading mb-3">
                                    <span className="site-title-tagline"><i className="fas fa-bring-forward"></i> Faq's</span>
                                    <h2 className="site-title my-3">General <span>frequently</span> asked questions</h2>
                                </div>
                                <p className="about-text">At iCure Technologies, we’re committed to providing clear and helpful information to our customers. Below you'll find answers to some of the most commonly asked questions about our services, repair process, and support. If you don’t see your question listed here, feel free to reach out — we're always here to help.</p>
                                <div className="mt-4">
                                    <div className="accordion" id="accordionExample">
                                        {faqArea.map((faq, i) => (
                                            <div className="accordion-item" key={i}>
                                                <h2 className="accordion-header" id={faq.headersid}>
                                                    <button
                                                        className={`accordion-button ${i === 0 ? "" : "collapsed"}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${faq.descriptionid}`}
                                                        aria-expanded={i === 0 ? "true" : "false"}
                                                        aria-controls={faq.descriptionid}
                                                    >
                                                        <span><i className={faq.icon}></i></span> {faq.question}
                                                    </button>
                                                </h2>
                                                <div
                                                    id={faq.descriptionid}
                                                    className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                                                    aria-labelledby={faq.headersid}
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        {faq.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* faq area end  */}


    </>
  );
};

export default AboutBanner;
