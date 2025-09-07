import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import "owl.carousel/dist/assets/owl.theme.default.css";

import slider1 from "../assets/img/slider/slider-1.jpg";
import slider2 from "../assets/img/slider/slider-2.webp";
import slider4 from "../assets/img/slider/slider-4.webp";
// import featureIcon1 from "../assets/img/icon/repair.svg";
// import featureIcon2 from "../assets/img/icon/team.svg";
// import featureIcon3 from "../assets/img/icon/secure.svg";
import about1 from "../assets/img/about/01.jpg";
import about2 from "../assets/img/about/02.jpg";
// import shape1 from "../assets/img/shape/01.png";
import aboutIcon1 from "../assets/img/icon/money.svg";
import aboutIcon2 from "../assets/img/icon/trusted.svg";
import serviceIcon1 from "../assets/img/icon/tab.svg";
import serviceIcon2 from "../assets/img/icon/phone.svg";
import serviceIcon3 from "../assets/img/icon/gadget.svg";
import serviceIcon4 from "../assets/img/icon/laptop.svg";
import serviceIcon5 from "../assets/img/icon/recovery.svg";
import serviceIcon6 from "../assets/img/icon/recovery.svg";
import video1 from "../assets/img/video/01.jpg";
import chooseTeam1 from "../assets/img/icon/team-2.svg";
import chooseTeam2 from "../assets/img/icon/quality.svg";
import chooseTeam3 from "../assets/img/icon/trusted.svg";
import chooseTeam4 from "../assets/img/choose/01.jpg";
import chooseTeam5 from "../assets/img/choose/02.jpg";

import galleryArea1 from "../assets/img/gallery/03.jpg";
import galleryArea2 from "../assets/img/gallery/01.jpg";
import galleryArea3 from "../assets/img/gallery/02.jpg";
import galleryArea4 from "../assets/img/gallery/04.jpg";
import galleryArea5 from "../assets/img/gallery/05.jpg";


// import testimonialArea1 from "../assets/img/testimonial/01.jpg";
// import testimonialArea2 from "../assets/img/testimonial/02.jpg";
// import testimonialArea3 from "../assets/img/testimonial/03.jpg";
// import testimonialArea4 from "../assets/img/testimonial/04.jpg";
// import testimonialArea5 from "../assets/img/testimonial/05.jpg";
// import testimonialAreaIcon1 from "../assets/img/icon/quote.svg";
// import partnerArea1 from "../assets/img/partner/01.png";
// import partnerArea2 from "../assets/img/partner/02.png";
// import partnerArea3 from "../assets/img/partner/03.png";
// import partnerArea4 from "../assets/img/partner/04.png";
// import partnerArea5 from "../assets/img/partner/05.png";
// import partnerArea6 from "../assets/img/partner/06.png";
// import partnerArea7 from "../assets/img/partner/03.png";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openPopup = (img) => {
        setSelectedImage(img);
        setIsOpen(true);
    };

    const closePopup = () => {
        setSelectedImage(null);
        setIsOpen(false);
    };
    useEffect(() => {
        // Ensure jQuery is loaded properly
        if (typeof $.fn.owlCarousel === "undefined") {
            console.error("Owl Carousel is not loaded properly.");
            return;
        }

        $(".testimonial-slider").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1000: { items: 3 }
               
            }
        });
    }, []);
    const bannerData = [
        {
            id: 1,
            title: "AFTER MARKET SERVICES",
            subtitle1: "Industrial Cards",
            subtitle2: "Repair",
            subtitle3: "Services",
            // description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour or randomised.",
            // button1: "About More",
            // button2: "Learn More",
            image: slider1
        },
        {
            id: 2,
            title: "AFTER MARKET SERVICES",
            subtitle1: "Drives And PLC",
            subtitle2: "Repair",
            subtitle3: "Services",
            // description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour or randomised.",
            // button1: "About More",
            // button2: "Learn More",
            image: slider2
        },
        {
            id: 4,
            title: "AFTER MARKET SERVICES",
            subtitle1: "IOT Based Projects",
            subtitle2: "Repair",
            subtitle3: "Services",
            // description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour or randomised.",
            // button1: "About More",
            // button2: "Learn More",
            image: slider4
        }

    ];

    // const serviceData = [
    //     {
    //         type: "text",
    //         placeholder: "Enter Name",
    //     },
    //     {
    //         type: "email",
    //         placeholder: "Enter Email",
    //     },
    //     {
    //         type: "text",
    //         placeholder: "Enter phone",
    //     },
    //     {
    //         type: "select",
    //         placeholder: "Choose Service",
    //         options: [
    //             { value: "1", text: "Industrial Cards Repair" },
    //             { value: "2", text: "Drive Repair" },
    //             { value: "3", text: "PLC Repair" },
    //             // { value: "4", text: "Laptop & Desktop Repair" },
    //             // { value: "5", text: "Data Recovery" },
    //             // { value: "6", text: "Hardware Update" },
    //         ]
    //     },
    //     {
    //         type: "date",
    //         placeholder: "Enter Date",
    //     },
    //     {
    //         type: "submit",
    //         placeholder: "Get Service",
    //     }
    // ]
    // const featureArea = [
    //     {
    //         count: "01",
    //         icon: featureIcon1,
    //         title: "Best Electronics Repair Service",
    //         description: "It is a long established fact that a reader will be distracted by the readable content",
    //     },
    //     {
    //         count: "02",
    //         icon: featureIcon2,
    //         title: "Repair With Experience Team",
    //         description: "It is a long established fact that a reader will be distracted by the readable content",
    //     },
    //     {
    //         count: "03",
    //         icon: featureIcon3,
    //         title: "100% Secure Repair Service For You",
    //         description: "It is a long established fact that a reader will be distracted by the readable content",
    //     }
    // ]
    const aboutData = [
        {
            title: "VFD Drive Repair & Maintenance",
            description: "Improving motor control efficiency and reliability for optimal performance in industrial automation systems.",
            icon: aboutIcon1,
        },
        {
            title: "IoT-Based Projects ",
            description: "Advanced automation solutions for modern industries, enhancing efficiency, connectivity, and performance",
            icon: aboutIcon2,
        }
    ]
    const serviceArea = [
        {
            icon: serviceIcon1,
            title: "Industrial Card Repair",
            href: "/industrialcardrepair",
            description: "Expert industrial card repair services ensuring reliability, efficiency, and optimal performance.",
            href2: "/industrialcardrepair",
        },
        {
            icon: serviceIcon2,
            title: "Led / Lcd TV Repair",
            href: "/ledcdtvrepair",
            description: "We provide expert LED/LCD TV repair services, ensuring high-quality display performance and long-lasting reliability",
            href2: "/ledcdtvrepair",
        },
        {
            icon: serviceIcon3,
            title: " VFD Drives Repair",
            href: "/vfddrivesrepair",
            description: "We specialize in VFD drive repair and maintenance, ensuring smooth operation, energy efficiency.",
            href2: "/vfddrivesrepair",
        },
        {
            icon: serviceIcon4,
            title: "PLC Repair",
            href: "/plcrepair",
            description: "We offer professional PLC repair and maintenance services, ensuring smooth industrial automation.",
            href2: "/plcrepair",
        },
        {
            icon: serviceIcon5,
            title: "Control Cards Repair",
            href: "/Controlcardsrepair",
            description: "Expert control card repair services ensuring reliability, precision, and optimal industrial performance.",
            href2: "/Controlcardsrepair",
        },
        {
            icon: serviceIcon6,
            title: "IOT Automatic Service",
            href: "/iotautomaticservice",
            description: "Smart IoT-based automation services, enabling seamless connectivity and real-time monitoring.",
            href2: "/iotautomaticservice",
        },

    ]
    // const pricingArea = [
    //     {
    //         title: "Basic",
    //         price: "$59.66",
    //         description: "One Time Payment",
    //         features: [
    //             "Unlimited Data Recovery",
    //             "Data Security And Backup",
    //             "Operating System Installation",
    //             "Unlimited Support Tickets",
    //             "24/7 Customer Support",
    //         ],
    //         href: "#",
    //         button: "Get Started",

    //     },
    //     {
    //         title: "Enterprise",
    //         price: "$120.78",
    //         description: "One Time Payment",
    //         features: [
    //             "Unlimited Data Recovery",
    //             "Data Security And Backup",
    //             "Operating System Installation",
    //             "Unlimited Support Tickets",
    //             "24/7 Customer Support",
    //         ],
    //         href: "#",
    //         button: "Get Started",
    //     },
    //     {
    //         title: "Premium",
    //         price: "$150.96",
    //         description: "One Time Payment",
    //         features: [
    //             "Unlimited Data Recovery",
    //             "Data Security And Backup",
    //             "Operating System Installation",
    //             "Unlimited Support Tickets",
    //             "24/7 Customer Support",
    //         ],
    //         href: "#",
    //         button: "Get Started",

    //     }
    // ]
    const chooseArea = [
        {
            icon: chooseTeam1,
            title: "Experienced Professionals",
            description: "Skilled technicians with extensive experience, ensuring precise diagnostics, quality repairs, and efficient automation solutions.",
        },
        {
            icon: chooseTeam2,
            title: "Quick & Reliable Service",
            description: "Fast and dependable repair services, minimizing downtime and ensuring smooth operation for your industrial and automation systems.",
            choosearearr: "active",
        },
        {
            icon: chooseTeam3,
            title: "Advanced Technology",
            description: "Utilizing cutting-edge tools and innovative techniques to deliver precise, efficient, and high-quality repair and automation solutions."
        }
    ]
    // const counterArea = [
    //     {
    //         icon: counterArea1,
    //         count: "+",
    //         to: "1200",
    //         speed: "3000",
    //         title: "+ Projects Done",
    //     },
    //     {
    //         icon: counterArea2,
    //         count: "+",
    //         to: "1500",
    //         speed: "3000",
    //         title: "+ Happy Clients",
    //     },
    //     {
    //         icon: counterArea3,
    //         count: "+",
    //         to: "400",
    //         speed: "3000",
    //         title: "+ Experts Staffs",
    //     },
    //     {
    //         icon: counterArea4,
    //         count: "+",
    //         to: "50",
    //         speed: "3000",
    //         title: "+ Win Awards",
    //     }
    // ]
    const galleryArea = [
        {
            image: galleryArea1,
            categuary: "cat3 cat4 cat5",
        },
        {
            image: galleryArea2,
            categuary: "cat1 cat2",
        },
        {
            image: galleryArea3,
            categuary: "cat2 cat3",
        },
        {
            image: galleryArea4,
            categuary: "cat2 cat4",
        },
        {
            image: galleryArea5,
            categuary: "cat1 cat4 cat5",
        },
    ]
    // const teamArea = [
    //     {
    //         image: teamArea1,
    //         name: "Chad Smith",
    //         description: "Technician",
    //         social: [
    //             { icon: "fab fa-facebook-f", href: "#" },
    //             { icon: "fab fa-x-twitter", href: "#" },
    //             { icon: "fab fa-linkedin-in", href: "#" },
    //             { icon: "fab fa-youtube", href: "#" },
    //         ]
    //     },
    //     {
    //         image: teamArea2,
    //         name: "Arron Rodri",
    //         description: "CEO & Founder",
    //         social: [
    //             { icon: "fab fa-facebook-f", href: "#" },
    //             { icon: "fab fa-x-twitter", href: "#" },
    //             { icon: "fab fa-linkedin-in", href: "#" },
    //             { icon: "fab fa-youtube", href: "#" },
    //         ]
    //     },
    //     {
    //         image: teamArea3,
    //         name: "Malissa Fie",
    //         description: "Technician",
    //         social: [
    //             { icon: "fab fa-facebook-f", href: "#" },
    //             { icon: "fab fa-x-twitter", href: "#" },
    //             { icon: "fab fa-linkedin-in", href: "#" },
    //             { icon: "fab fa-youtube", href: "#" },
    //         ]
    //     },
    //     {
    //         image: teamArea4,
    //         name: "Tony Pinto",
    //         description: "Technician",
    //         social: [
    //             { icon: "fab fa-facebook-f", href: "#" },
    //             { icon: "fab fa-x-twitter", href: "#" },
    //             { icon: "fab fa-linkedin-in", href: "#" },
    //             { icon: "fab fa-youtube", href: "#" },
    //         ]
    //     },
    //]

    // const testimonialArea = [
    //     {
    //         image: testimonialArea1,
    //         name: "Sylvia H Green",
    //         description: "Clients",
    //         description2: "There are many variations of passages available but the majority have suffered alteration in some form by injected popularity belief believable.",
    //         icon: testimonialAreaIcon1,
    //         star: [
    //             { icon: "fas fa-star" },
    //             { icon: "fas fa-star" },
    //             { icon: "fas fa-star" },
    //             { icon: "fas fa-star" },
    //             { icon: "fas fa-star" },
    //         ]

    //     },
    //     {
    //         image: testimonialArea2,
    //         name: "Gordo Novak",
    //         description: "Clients",
    //         description2: "There are many variations of passages available but the majority have suffered alteration in some form by injected popularity belief believable.",
    //         icon: testimonialAreaIcon1,
    //         star: [
    //             { icon: "fas fa-star" },
    //             { icon: "fas fa-star" },
    //             { icon: "fas fa-star" },
    //             { icon: "fas fa-star" },
    //             { icon: "fas fa-star" },
    //         ]

    //     },
    //     {
    //         image: testimonialArea3,
    //         name: "Reid E Butt",
    //         description: "Clients",
    //         description2: "There are many variations of passages available but the majority have suffered alteration in some form by injected popularity belief believable.",
    //         icon: testimonialAreaIcon1,
    //         star: [
    //             { icon: "fas fa-star" },
    //             { icon: "fas fa-star" },
    //             { icon: "fas fa-star" },
    //             { icon: "fas fa-star" },
    //             { icon: "fas fa-star" },
    //         ]

    //     },
    //     {
    //         image: testimonialArea4,
    //         name: "Parker Jimenez",
    //         description: "Clients",
    //         description2: "There are many variations of passages available but the majority have suffered alteration in some form by injected popularity belief believable.",
    //         icon: testimonialAreaIcon1,
    //         star: [
    //             { icon: "fas fa-star" },
    //             { icon: "fas fa-star" },
    //             { icon: "fas fa-star" },
    //             { icon: "fas fa-star" },
    //             { icon: "fas fa-star" },
    //         ]

    //     },
    //     {
    //         image: testimonialArea5,
    //         name: "Heruli Nez",
    //         description: "Clients",
    //         description2: "There are many variations of passages available but the majority have suffered alteration in some form by injected popularity belief believable.",
    //         icon: testimonialAreaIcon1,
    //         star: [
    //             { icon: "fas fa-star" },
    //             { icon: "fas fa-star" },
    //             { icon: "fas fa-star" },
    //             { icon: "fas fa-star" },
    //             { icon: "fas fa-star" },
    //         ]

    //     }
    // ]
    // const blogArea = [
    //     {
    //         date: "Aug 16, 2024",
    //         image: blogArea1,
    //         title: "There are many variation of passage available suffer",
    //         titlelink: "/",
    //         user: "By Alicia Davis",
    //         userlink: "/",
    //         comment: "2.5k Comments",
    //         commentlink: "/",
    //         description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    //         readmore: "Read More",
    //         readmorelink: "/",
    //     },
    //     {
    //         date: "Aug 18, 2024",
    //         image: blogArea2,
    //         title: "It is a long established fact that will be distracted",
    //         titlelink: "/",
    //         user: "By Alicia Davis",
    //         userlink: "/",
    //         comment: "2.5k Comments",
    //         commentlink: "/",
    //         description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    //         readmore: "Read More",
    //         readmorelink: "/",
    //     },
    //     {
    //         date: " Aug 20, 2024",
    //         image: blogArea3,
    //         title: "All the generators on the tend to repeat predefined chunks",
    //         titlelink: "/",
    //         user: "By Alicia Davis",
    //         userlink: "/",
    //         comment: "2.5k Comments",
    //         commentlink: "/",
    //         description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    //         readmore: "Read More",
    //         readmorelink: "/",
    //     },
    // ]
    // const partnerArea = [
    //     { image: partnerArea1 },
    //     { image: partnerArea2 },
    //     { image: partnerArea3 },
    //     { image: partnerArea4 },
    //     { image: partnerArea5 },
    //     { image: partnerArea6 },
    //     { image: partnerArea7 },
    // ]
    return (
        <main className="main">
            {/* Hero Slider */}
            <div className="hero-section">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{ delay: 3000 }}
                    loop
                    className="hero-slider"
                >
                    {bannerData.map((banner) => (
                        <SwiperSlide key={banner.id}>
                            <div className="hero-single" style={{ backgroundImage: `url(${banner.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-7 col-lg-7">
                                            <div className="hero-content">
                                                <h6 className="hero-sub-title">{banner.title}</h6>
                                                <h1 className="hero-title">
                                                    {banner.subtitle1} <span>{banner.subtitle2}</span> {banner.subtitle3}
                                                </h1>
                                                {/* <p>{banner.description}</p> */}
                                                {/* <div className="hero-btn">
                                                    <Link to="/about" className="theme-btn">
                                                        {banner.button1} <i className="fas fa-arrow-right"></i>
                                                    </Link> 
                                                    <Link to="/learn" className="theme-btn theme-btn2">
                                                        {banner.button2} <i className="fas fa-arrow-right"></i>
                                                    </Link>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* appointment  */}
            {/* <div className="appointment">
                <div className="col-lg-8">
                    <div className="appointment-form">
                        <form action="#">
                            <div className="row">
                                {serviceData.map((service, i) => (
                                    <div className="col-lg-4" key={i}>
                                        <div className="form-group">
                                            {service.type === "text" && <input type={service.type} className="form-control" placeholder={service.placeholder} />}
                                            {service.type === "email" && <input type={service.type} className="form-control" placeholder={service.placeholder} />}
                                            {service.type === "phone" && <input type={service.type} className="form-control" placeholder={service.placeholder} />}
                                            {service.type === "select" && (
                                                <select className="form-select" name="service">
                                                    <option value="">{service.placeholder}</option>
                                                    {service.options.map((option, i) => (
                                                        <option key={i} value={option.value}>{option.text}</option>
                                                    ))}
                                                </select>
                                            )}
                                            {service.type === "date" && <input type={service.type} className="form-control" />}
                                            {service.type === "submit" && <button type="submit" className="theme-btn theme-btn2">{service.placeholder}</button>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}
            {/* appointment end  */}

            {/* feature area */}
            {/* <div className="feature-area pt-120">
                <div className="container">
                    <div className="row g-4">
                        {featureArea.map((feature, i) => (
                            <div className="col-md-6 col-lg-4" key={i}>
                                <div className="feature-item">
                                    <span className="count">{feature.count}</span>
                                    <div className="feature-icon">
                                        <img src={feature.icon} alt="" />
                                    </div>
                                    <div className="feature-content">
                                        <h4>{feature.title}</h4>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div> */}
            {/* feature area end  */}

            {/* about area */}
            <div className="about-area py-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-left wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".25s">
                                <div className="about-img">
                                    <div className="about-img-1">
                                        <img src={about1} alt="about service" />
                                    </div>
                                    <div className="about-img-2">
                                        <img src={about2} alt="about service" />
                                    </div>
                                </div>
                                {/* <div className="about-shape"><img src={shape1} alt="" /></div> */}
                                {/* <div className="about-experience">
                                    <h1>25+</h1>
                                     <div className="about-experience-text">
                                        Years Of <br /> Experience 
                                    </div>
                                </div>  */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-right wow fadeInUp" data-wow-duration="1s" data-wow-delay=".25s">
                                <div className="site-heading mb-3">
                                    <span className="site-title-tagline"><i className="fas fa-bring-forward"></i> About Us</span>
                                    <h2 className="site-title">
                                        iCure <span>Technologies </span>
                                    </h2>
                                </div>
                                <p className="about-text">
                                    At iCure Technologies, we are committed to providing top-notch solutions in the field of industrial automation and technology. With years of expertise, we specialize in offering comprehensive services such as VFD drive repairs, control card solutions, PLC repairs, and innovative IoT-based projects.
                                </p>
                                <div className="about-list-wrap">
                                    <ul className="about-list list-unstyled">
                                        {aboutData.map((about, i) => (
                                            <li key={i}>
                                                <div className="icon">
                                                    <img src={about.icon} alt="about service" />
                                                </div>
                                                <div className="content">
                                                    <h4>{about.title}</h4>
                                                    <p>{about.description}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* <Link to={"/"} className="theme-btn mt-4">Discover More <i
                                    className="fas fa-arrow-right"></i></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about area end */}

            {/* service-area */}
            <div className="service-area sa-bg pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <div className="site-heading">
                                <span className="site-title-tagline"><i className="fas fa-bring-forward"></i> Services</span>
                                <h2 className="site-title text-white">Reliable  <span>Industrial Card Repair</span> Solution</h2>
                                <p className="text-white">
                                    At iCure Technologies, we offer a wide range of industrial Card repair and services to keep your systems running efficiently.
                                    We are committed to delivering high-quality, cost-effective, and innovative solutions tailored to your industrial needs.
                                </p>
                            </div>
                        </div>
                        {serviceArea.map((service, i) => (
                            <div className="col-md-6 col-lg-3" key={i}>
                                <div className="service-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".25s">
                                    <div className="service-icon">
                                        <img src={service.icon} alt="" />
                                    </div>
                                    <div className="service-content">
                                        <h3 className="service-title">
                                            <Link to={service.href}>{service.title}</Link>
                                        </h3>
                                        <p className="service-text">
                                            {service.description}
                                        </p>
                                        <div className="service-arrow">
                                            <Link to={service.href2} className="service-btn"><i className="far fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* service-area  */}

            {/* video area  */}
            <div className="video-area py-100">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-4">
                            <div className="site-heading mb-0 wow fadeInLeft" data-wow-delay=".25s">
                                <span className="site-title-tagline"><i className="fas fa-bring-forward"></i> Latest Video</span>
                                <h2 className="site-title">What makes us <span>different</span> check our video</h2>
                                <p>
                                    There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words look even going to use a passage believable.
                                </p>
                                <Link to="/about" className="theme-btn mt-20">Learn More <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="video-content wow fadeInRight" data-wow-delay=".25s" style={{ backgroundImage: `url(${video1})` }}>
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <div className="video-wrap">
                                            <Link className="play-btn popup-youtube" to="https://www.youtube.com/watch?v=ckHzmP1evNU">
                                                <i className="fas fa-play"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* video area end  */}

            {/* pricing-area */}
            {/* <div className="pricing-area bg py-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto wow fadeInDown" data-wow-duration="1s" data-wow-delay=".25s">
                            <div className="site-heading text-center">
                                <span className="site-title-tagline"><i className="fas fa-bring-forward"></i> Pricing</span>
                                <h2 className="site-title">Our Pricing <span>Plan</span></h2>
                                <div className="heading-divider"></div>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {pricingArea.map((pricing, i) => (
                            <div className="col-md-6 col-lg-4" key={i}>
                                <div className="pricing-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".25s">
                                    <div className="pricing-header">
                                        <h4>{pricing.title}</h4>
                                        <div className="pricing-price">
                                            <h1 className="pricing-amount">{pricing.price}</h1>
                                            <p>{pricing.description}</p>
                                        </div>
                                    </div>
                                    <div className="pricing-feature">
                                        <ul>
                                            {pricing.features.map((feature, i) => (
                                                <li key={i}>{feature}</li>
                                            ))}
                                        </ul>
                                        <Link to={pricing.href} className="theme-btn">{pricing.button} <i className="fas fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
            {/* pricing-area end  */}

            {/* choose area */}
            <div className="choose-area py-120">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-lg-6">
                            <div className="choose-content wow fadeInUp" data-wow-duration="1s" data-wow-delay=".25s">
                                <div className="site-heading mb-3">
                                    <span className="site-title-tagline"><i className="fas fa-bring-forward"></i> Why Choose Us</span>
                                    <h2 className="site-title">
                                        Trusted Solutions for <span> Reliable Repairs</span> & Smart Automation
                                    </h2>
                                </div>
                                <p>
                                    At iCure Technologies, we are committed to providing top-quality repair and automation solutions with unmatched expertise and reliability.
                                </p>
                                <div className="choose-wrapper mt-4">
                                    {chooseArea.map((choose, i) => (
                                        <div className={`choose-item ${choose.choosearearr}`} key={i}>
                                            <div className="choose-icon">
                                                <img src={choose.icon} alt="" />
                                            </div>
                                            <div className="choose-item-content">
                                                <h4>{choose.title}</h4>
                                                <p>{choose.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="choose-img wow fadeInRight" data-wow-duration="1s" data-wow-delay=".25s">
                                <div className="row g-4">
                                    <div className="col-6">
                                        <img className="img-1" src={chooseTeam4} alt="" />
                                    </div>
                                    <div className="col-6">
                                        <img className="img-2" src={chooseTeam5} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* choose area end */}

            {/* cta-area */}
            <div className="cta-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto text-center">
                            <div className="cta-text">
                                <h1>We Provide <span>Quality</span> Services</h1>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when
                                    looking at its layout have suffered in some form by injected humour.
                                </p>
                            </div>
                            <div className="mb-20 mt-10">
                                <Link to="tel:+911236547898" className="cta-border-btn"><i className="fal fa-headset"></i> +2 123 654 7898</Link>
                            </div>
                            <Link to="/contact" className="theme-btn">Contact Now <i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* cta-area end */}

            {/* counter area */}
            {/* <div className="counter-area">
                <div className="container">
                    <div className="counter-wrap">
                        <div className="row">
                            {counterArea.map((counter, i) => (
                                <div className="col-lg-3 col-sm-6" key={i}>
                                    <div className="counter-box">
                                        <div className="icon">
                                            <img src={counter.icon} alt="" />
                                        </div>
                                        <div>
                                            <span className="counter" data-count={counter.count} data-to={counter.to} data-speed={counter.speed}>{counter.to}</span>
                                            <h6 className="title">{counter.title} </h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div> */}
            {/* counter area end */}

            {/* gallery-area */}
            <div className="gallery-area py-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="site-heading text-center wow fadeInDown" data-wow-duration="1s" data-wow-delay=".25s">
                                <span className="site-title-tagline"><i className="fas fa-bring-forward"></i> Photo Gallery</span>
                                <h2 className="site-title">Explore Photo <span>Gallery</span></h2>
                                <div className="heading-divider"></div>
                            </div>
                            <div className="filter-controls wow fadeInUp" data-wow-duration="1s" data-wow-delay=".50s">
                                <ul className="filter-btns">
                                    <li className="active" data-filter="*"><i className="far fa-computer-speaker"></i> All</li>
                                    <li data-filter=".cat1"><i class="fa-solid fa-industry"></i>Industrial Card</li>
                                    <li data-filter=".cat2"><i class="fa-solid fa-hard-drive"></i>VFD Drive</li>
                                    <li data-filter=".cat3"><i class="fa-solid fa-tv"></i> LED/LCD Tv</li>
                                    <li data-filter=".cat4"><i class="fa-solid fa-square-binary"></i> PLC</li>
                                    <li data-filter=".cat5"><i class="fa-solid fa-industry"></i>IOT Automation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 filter-box popup-gallery wow fadeInUp" data-wow-duration="1s" data-wow-delay=".75s">
                        {galleryArea.map((gallery, i) => (
                            <div className={`col-md-4 filter-item ${gallery.categuary}`} key={i}>
                                <div className="gallery-item">
                                    <div className="gallery-img">
                                        <img src={gallery.image} alt="gallery" />
                                    </div>
                                    <div className="gallery-content">
                                        <button className="popup-img gallery-link" onClick={() => openPopup(gallery.image)}><i
                                            className="far fa-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {isOpen && (
                            <div className="custom-popup">
                                <div className="popup-inner">
                                    <span className="close-btn" onClick={closePopup}>
                                        &times;
                                    </span>
                                    <img src={selectedImage} alt="popup" className="popup-image" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* gallery-area end */}

            {/* team-area */}
            {/* <div className="team-area bg pt-80 pb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto wow fadeInDown" data-wow-duration="1s" data-wow-delay=".25s">
                            <div className="site-heading text-center">
                                <span className="site-title-tagline"><i className="fas fa-bring-forward"></i> Our Team</span>
                                <h2 className="site-title">Meet Our Experts <span>Team</span></h2>
                                <div className="heading-divider"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        {teamArea.map((team, i) => (
                            <div className="col-md-6 col-lg-3" key={i}>
                                <div className="team-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".25s">
                                    <div className="team-img">
                                        <img src={team.image} alt="thumb" />
                                    </div>
                                    <div className="team-content">
                                        <div className="team-bio">
                                            <h5><Link to="/">{team.name}</Link></h5>
                                            <span>{team.description}</span>
                                        </div>
                                    </div>
                                    <div className="team-social">
                                        {team.social.map((social, i) => (
                                            <Link to={social.href} key={i}><i className={social.icon}></i></Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
            {/* team-area end  */}



            {/* testimonial-area -- */}
            {/* <div className="testimonial-area py-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto wow fadeInDown" data-wow-duration="1s" data-wow-delay=".25s">
                            <div className="site-heading text-center">
                                <span className="site-title-tagline"><i className="fas fa-bring-forward"></i> Testimonials</span>
                                <h2 className="site-title text-white">What Client <span>Say's</span> About Us</h2>
                                <div className="heading-divider"></div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-slider owl-carousel owl-theme wow fadeInUp" data-wow-duration="1s" data-wow-delay=".25s">
                        {testimonialArea.map((testimonial, i) => (
                            <div className="testimonial-single" key={i}>
                                <div className="testimonial-content">
                                    <div className="testimonial-author-img">
                                        <img src={testimonial.image} alt="" />
                                    </div>
                                    <div className="testimonial-author-info">
                                        <h4>{testimonial.name}</h4>
                                        <p>{testimonial.description}</p>
                                    </div>
                                </div>
                                <div className="testimonial-quote">
                                    <p>{testimonial.description2}</p>
                                    <div className="testimonial-quote-icon">
                                        <img src={testimonial.icon} alt="" />
                                    </div>
                                </div>
                                <div className="testimonial-rate">
                                    {testimonial.star.map((star, i) => (
                                        <i className={star.icon} key={i}></i>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
            {/* testimonial-area end  */}

            {/* blog-area */}
            {/* <div className="blog-area py-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto wow fadeInDown" data-wow-duration="1s" data-wow-delay=".25s">
                            <div className="site-heading text-center">
                                <span className="site-title-tagline"><i className="fas fa-bring-forward"></i> Our Blog</span>
                                <h2 className="site-title">Latest News & <span>Blog</span></h2>
                                <div className="heading-divider"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {blogArea.map((blog, i) => (
                            <div className="col-md-6 col-lg-4" key={i}>
                                <div className="blog-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".25s">
                                    <span className="blog-date"><i className="far fa-calendar-alt"></i> {blog.date}</span>
                                    <div className="blog-item-img">
                                        <img src={blog.image} alt="Thumb" />
                                    </div>
                                    <div className="blog-item-info">
                                        <h4 className="blog-title">
                                            <Link to={blog.titlelink}>{blog.title}</Link>
                                        </h4>
                                        <div className="blog-item-meta">
                                            <ul>
                                                <li><Link to={blog.userlink}><i className="far fa-user-circle"></i> {blog.user}</Link></li>
                                                <li><Link to={blog.commentlink}><i className="far fa-comments"></i> {blog.comment}</Link></li>
                                            </ul>
                                        </div>
                                        <p>
                                            {blog.description}
                                        </p>
                                        <Link className="theme-btn" href={blog.readmorelink}>{blog.readmore}<i className="fas fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
            {/* blog-area end  */}

            {/* partner area  */}
            {/* <div className="partner-area bg pt-50 pb-50">
                <div className="container">
                    <div className="partner-wrapper partner-slider owl-carousel owl-theme">
                        {partnerArea.map((partner) => (
                            <img src={partner.image} alt="thumb" />
                        ))}
                    </div>
                </div>
            </div> */}
            {/* partner area end  */}
        </main>
    );
};

export default Home;
