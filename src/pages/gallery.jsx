import galleryArea1 from "../assets/img/gallery/03.jpg";
import galleryArea2 from "../assets/img/gallery/01.jpg";
import galleryArea3 from "../assets/img/gallery/02.jpg";
import galleryArea4 from "../assets/img/gallery/04.jpg";
import galleryArea5 from "../assets/img/gallery/05.jpg";
import { useState } from "react";
const Gallerys=()=>{
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
    return(
        <>
         {/* gallery-area */}
         <div className="gallery-area py-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 mx-auto">
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
        </>
    )
}
export default Gallerys;