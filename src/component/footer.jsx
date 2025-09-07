import { Link } from "react-router-dom";
import logo from "../assets/img/logo/logo-light.webp";
const Footer=()=>{
    const quickLinks=[
        {link:"/",name:"Home"},
        {link:"/about",name:"About Us"},
        {link:"/industrialcardrepair",name:"Industrial Cardrepair"},
        {link:"/gallery",name:"Gallery"},
        {link:"/contact",name:"Contact Us"},
    ]
    const ourServices=[
        {link:"/industrialcardrepair",name:"Industrial Cardrepair"},
        {link:"/ledcdtvrepair",name:"Led / Lcd TV Repair"},
        {link:"/vfddrivesrepair",name:"VFD Drives Repair"},
        {link:"/plcrepair",name:"PLC Repair"},
        {link:"/Controlcardsrepair",name:"Control Cards Repair"},
        {link:"/iotautomaticservice",name:"IOT Automatic Service"},
    ]
    
    return(
        <>
         {/* footer area  */}
    <footer className="footer-area footer-bg">
        <div className="footer-widget">
            <div className="container">
                <div className="row footer-widget-wrap pt-100 pb-70">
                    <div className="col-md-6 col-lg-4">
                        <div className="footer-widget-box about-us">
                            <Link to="/" className="footer-logo">
                                <img src={logo} alt=""/>
                            </Link>
                            <p className="mb-4">
                                We are many variations of passages available but the majority have suffered alteration
                                in some form by injected humour words believable.
                            </p>
                            <ul className="footer-contact">
                                <li><Link to="/"><i className="far fa-phone"></i>+2 123 654 7898</Link></li>
                                <li><i className="far fa-map-marker-alt"></i>Noida sector-15</li>
                                <li><Link to="/">
                                <i className="far fa-envelope"></i><span className="__cf_email__" data-cfemail="97fef9f1f8d7f2eff6fae7fbf2b9f4f8fa">[Chandankumar19198@gmail.com]</span></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2">
                        <div className="footer-widget-box list">
                            <h4 className="footer-widget-title">Quick Links</h4>
                            <ul className="footer-list">
                                {quickLinks.map((item,i)=>(
                                <li key={i}><Link to={item.link}><i className="fas fa-dot-circle"></i> {item.name}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-widget-box list">
                            <h4 className="footer-widget-title">Our Services</h4>
                            <ul className="footer-list">
                                {ourServices.map((item,i)=>(
                                <li key={i}><Link to={item.link}><i className="fas fa-dot-circle"></i> {item.name}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-widget-box list">
                            <h4 className="footer-widget-title">Newsletter</h4>
                            <div className="footer-newsletter">
                                <p>Subscribe Our Newsletter To Get Latest Update And News</p>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="email" className="form-control" placeholder="Your Email"/>
                                        <button className="theme-btn" type="submit">
                                            Subscribe Now <i className="far fa-paper-plane"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <p className="copyright-text">
                            &copy; Copyright <span id="date"></span> <Link to="/"> iCURE Private Limited </Link> All Rights Reserved.
                        </p>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <ul className="footer-social">
                            <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link to="/"><i className="fab fa-x-twitter"></i></Link></li>
                            <li><Link to="/"><i className="fab fa-linkedin-in"></i></Link></li>
                            <li><Link to="/"><i className="fab fa-youtube"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* footer area end  */}
        </>
    )
}
export default Footer;