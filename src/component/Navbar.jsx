import { Link } from "react-router-dom";
import logo from "../assets/img/logo/logo.webp";

const Navbar = () => {
    const socialLinks = [
        { icon: "fab fa-facebook-f", url: "#" },
        { icon: "fab fa-x-twitter", url: "#" },
        { icon: "fab fa-instagram", url: "#" },
        { icon: "fab fa-linkedin-in", url: "#" },
    ];

    const contactInfo = [
        { icon: "far fa-phone-volume", text: "+2 123 654 7898", link: "tel:+21236547898" },
        { icon: "far fa-envelope", text: "support@example.com", link: "mailto:support@example.com" },
        { icon: "far fa-clock", text: "Sun - Fri (08AM - 10PM)", link: "#" },
    ];

    const menuItems = [
        { name: "Home", link: "/", dropdown: false },
        { name: "About", link: "/about", dropdown: false },
        // {
        //     name: "Company",
        //     dropdown: true,
        //     subItems: [
        //         { name: "Our Team", link: "/team" },
        //         { name: "Pricing Plan", link: "/pricing" },
        //         { name: "FAQ", link: "/faq" },
        //         { name: "Contact Us", link: "/contact" },
        //     ],
        // },
        {
            name: "Services",
            dropdown: true,
            subItems: [
                        { name: "Industrial Card", link: "/industrialcardrepair" },
                        { name: "Led / Lcd TV Repair", link: "/ledcdtvrepair" },
                        { name: "VFD Drives Repair", link: "/vfddrivesrepair" },
                        { name: "PLC Repair", link: "/plcrepair" },
                        { name: "Control Cards Repair", link: "/Controlcardsrepair" },
                        { name: "IOT Automatic Service", link: "/iotautomaticservice" },
                    ],
            link:"/service"
        },
        { name: "Gallery", link: "/gallery", dropdown: false },
        { name: "Contact", link: "/contact", dropdown: false },
    ];
    
    return (
        <>
            <header className="header">
                {/* Header Top */}
                <div className="header-top">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            {/* Social Links */}
                            <div className="header-top-left">
                                <div className="header-top-social">
                                    <span>Follow Us:</span>
                                    {socialLinks.map((social, index) => (
                                        <Link key={index} href={social.url}>
                                            <i className={social.icon}></i>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="header-top-right">
                                <div className="header-top-contact">
                                    <ul className="list-inline m-0">
                                        {contactInfo.map((contact, index) => (
                                            <li key={index} className="list-inline-item">
                                                <Link to={contact.link}>
                                                    <i className={contact.icon}></i> {contact.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-black text-white ">
                    <div className="container position-relative">
                        {/* Logo */}
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" height="100" />
                        </Link>


                        {/* Mobile Menu Button */}
                        <div className="mobile-menu-right">
                            <div className="mobile-menu-btn">
                                <Link to="#" className="nav-right-link search-box-outer"><i className="far fa-search"></i></Link>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        {/* Navbar Links */}
                        <div className="offcanvas offcanvas-start" id="mobileMenu">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title">Menu</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                            </div>

                            <div className="offcanvas-body text-center">
                            <ul className="navbar-nav justify-content-center flex-grow-1">
  {menuItems.map((menu, index) => (
    <li
      key={index}
      className={`nav-item ${menu.dropdown ? "dropdown" : ""}`}
    >
      {menu.dropdown ? (
        <>
          <Link
            className="nav-link dropdown-toggle"
            to={menu.link}
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ color: "#fff" }}
          >
            {menu.name}
          </Link>
          <ul className="dropdown-menu">
            {menu.subItems.map((sub, subIndex) => (
              <li key={subIndex}>
                <Link className="dropdown-item" to={sub.link}>
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link className="nav-link" to={menu.link} style={{ color: "#fff" }}>
          {menu.name}
        </Link>
      )}
    </li>
  ))}
</ul>

                                {/* Contact Button */}
                                {/* <div className="nav-right">
                                    <div className="search-btn">
                                        <button type="button" className="nav-right-link search-box-outer">
                                            <i className="far fa-search"></i></button>
                                    </div>
                                    <div className="nav-btn">
                                        <Link to="contact.html" className="theme-btn">Let's Talk <i className="fas fa-arrow-right"></i></Link>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Navbar;

