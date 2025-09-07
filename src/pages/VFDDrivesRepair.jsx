import { Link } from "react-router-dom";
import servicedetails from "../assets/img/breadcrumb/01.jpg";
import servicedetails1 from "../assets/img/service/vlc1.jpeg";
import servicedetails2 from "../assets/img/service/vfd.jpg";
import servicedetails3 from "../assets/img/service/vfd3.jpg";
const Vfddrivesrepair = () => {
    return (
        <>
            <>
                {/* breadcrumb */}
                <div
                    className="site-breadcrumb"
                    style={{ background: `url(${servicedetails})` }}
                >
                    <div className="container">
                        <h2 className="breadcrumb-title">VFD Drives Repair</h2>
                        <ul className="breadcrumb-menu">
                            <li>
                                <Link href="index-2.html">Home</Link>
                            </li>
                            <li className="active">VFD Drives Repair</li>
                        </ul>
                    </div>
                </div>
                {/* breadcrumb end */}
                {/* service-single */}
                <div className="service-single-area py-120">
                    <div className="container">
                        <div className="service-single-wrapper">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4">
                                    <div className="service-sidebar">
                                        <div className="widget category">
                                            <h4 className="widget-title">All Services</h4>
                                            <div className="category-list">
                                                <Link to="#">
                                                    <i className="far fa-angle-double-right" />
                                                    Industrial Card Repair
                                                </Link>
                                                <Link to="#">
                                                    <i className="far fa-angle-double-right" />
                                                    Led / Lcd TV Repair
                                                </Link>
                                                <Link to="#">
                                                    <i className="far fa-angle-double-right" />
                                                    VFD Drives Repair
                                                </Link>
                                                <Link to="#">
                                                    <i className="far fa-angle-double-right" />
                                                    PLC Repair
                                                </Link>
                                                <Link to="#">
                                                    <i className="far fa-angle-double-right" />
                                                    Control Cards Repair
                                                </Link>
                                                <Link to="#">
                                                    <i className="far fa-angle-double-right" />
                                                    IOT Automatic Service
                                                </Link>

                                            </div>
                                        </div>
                                        <div className="widget service-download">
                                            <h4 className="widget-title">Download</h4>
                                            <Link to="#">
                                                <i className="far fa-file-pdf" /> Download Brochure
                                            </Link>
                                            <Link to="#">
                                                <i className="far fa-file-alt" /> Download Application
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-8">
                                    <div className="service-details">
                                        <div className="service-details-img mb-30">
                                            <img src={servicedetails1} alt="thumb" className="w-100" />
                                        </div>
                                        <div className="service-details">
                                            <h3 className="mb-30">VFD Drives Repair</h3>
                                            <p className="mb-20">
                                                Variable Frequency Drives (VFDs) are essential for controlling the speed and torque of electric motors in industrial environments. However, VFDs can experience issues due to power fluctuations, overheating, dust accumulation, component aging, or improper usage. At iCure Technologies, we offer expert VFD repair services to minimize downtime and keep your operations running smoothly.                                            </p>
                                            <p className="mb-20">
                                                Our technicians are trained to troubleshoot and repair all major brands and models of VFDs. Using advanced diagnostic tools, we identify faults down to the component level—be it IGBTs, control boards, or power modules—and restore the drive to full functionality with precision and care.</p>
                                            <div className="row">
                                                <div className="col-md-6 mb-20">
                                                    <img src={servicedetails2} alt="" className="w-100 h-100" />
                                                </div>
                                                <div className="col-md-6 mb-20">
                                                    <img src={servicedetails3} alt="" className="w-100 h-100" />
                                                </div>
                                            </div>
                                            <p className="mb-20">
                                                We prioritize quick turnaround times and long-lasting repair solutions to ensure your industrial equipment performs reliably.

                                            </p>
                                            <div className="my-4">
                                                <div className="mb-3">
                                                    <h3 className="mb-3">Our Work Process</h3>
                                                    <p>
                                                        Aliquam facilisis rhoncus nunc, non vestibulum mauris volutpat non. Vivamus tincidunt accumsan urna, vel aliquet nunc commodo tristique. Nulla facilisi. Phasellus vel ex nulla. Nunc tristique sapien id mauris efficitur, porta scelerisque nisl dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at mollis tellus. Proin consequat, orci nec bibendum viverra, ante orci suscipit dolor, et condimentum felis dolor ac lectus.                                                    </p>
                                                </div>
                                                <ul className="service-single-list">
                                                    <li>
                                                        <i className="far fa-check" />
                                                        Fusce justo risus placerat in risus eget tincidunt consequat elit.
                                                    </li>
                                                    <li>
                                                        <i className="far fa-check" />
                                                        Nunc fermentum sem sit amet dolor laoreet placerat.
                                                    </li>
                                                    <li>
                                                        <i className="far fa-check" />
                                                        Nullam rhoncus dictum diam quis ultrices.

                                                    </li>
                                                    <li>
                                                        <i className="far fa-check" />
                                                        Integer quis lorem est uspendisse eu augue porta ullamcorper dictum.

                                                    </li>
                                                    <li>
                                                        <i className="far fa-check" />
                                                        Quisque tristique neque arcu ut venenatis felis malesuada et.

                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="my-4">
                                                <h3 className="mb-3">Service Features</h3>
                                                <p>
                                                    Quisque a nisl id sem sollicitudin volutpat. Cras et commodo quam, vel congue ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras quis venenatis neque. Donec volutpat tellus lobortis mi ornare eleifend. Fusce eu nisl ut diam ultricies accumsan. Integer lobortis vestibulum nunc id porta. Curabitur aliquam arcu sed ex dictum, a facilisis urna porttitor. Fusce et mattis nisl. Sed iaculis libero consequat justo auctor iaculis. Vestibulum sed ex et magna tristique bibendum. Sed hendrerit neque nec est suscipit, id faucibus dolor convallis.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* service-single end*/}
            </>

        </>
    )
}
export default Vfddrivesrepair;