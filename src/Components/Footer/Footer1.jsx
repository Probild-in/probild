import { useEffect } from "react";
import { Link } from "react-router-dom";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Footer1 = () => {

        useEffect(() => {
            loadBackgroudImages();
        }, []);

    return (
        <div>
             <section className="cta-section section-bg section-padding pb-0">
            <div className="rokect-shape float-bob-y">
                <img src="/assets/img/rokect.png" alt="img" />
            </div>
            <div className="container">
                <div className="cta-wrapper bg-cover" data-background="/assets/img/cta-bg.jpg">
                    <div className="cta-img wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s">
                        <img src="/assets/img/cta-img.png" alt="img" />
                    </div>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Stay Connected With <br/> Cutting Edge IT
                    </h2>
                    <div className="main-button wow fadeInUp" data-wow-delay=".5s">
                        <Link to="/contact"> <span className="theme-btn"> talk TO  A SPECIALIST </span><span className="arrow-btn"> <i className="bi bi-arrow-right"></i></span></Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="footer-section footer-bg fix">
            <div className="container">
                <div className="footer-widgets-wrapper">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <a href="index.html">
                                        <img src="/assets/img/logo/white-logo.svg" alt="img" />
                                    </a>
                                </div>
                                <div className="footer-content">
                                    <p>
                                    Craft Your Online Presence With PROBILD Your One Stop Solutions For All You Need For Your Website
                                    </p>
                                    <div className="social-icon d-flex align-items-center">
                                        <a href="https://www.facebook.com/profile.php?id=61558957681168" target="_blank"><i className="bi bi-facebook"></i></a>
                                        <a href="https://wa.me/+919650958969?text=Hey, I am looking for a New Website" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a>
                                        <a href="https://www.instagram.com/probild.in/" target="_blank"><i className="bi bi-instagram"></i></a>
                                        <a href="https://linkedin.com/company/probild-in/" target="_blank"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}} className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <a href= "#about">
                                        <i className="bi bi-arrow-right"></i>
                                            Probild About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#services">
                                        <i className="bi bi-arrow-right"></i>
                                            Our Services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#price">
                                        <i className="bi bi-arrow-right"></i>
                                            Our Pricing
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#testimonials">
                                        <i className="bi bi-arrow-right"></i>
                                            Testimonials
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/faq">
                                        <i className="bi bi-arrow-right"></i>
                                            FAQ’S
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#contact">
                                        <i className="bi bi-arrow-right"></i>
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div style={{ marginLeft: "auto", marginRight: "0", width: "fit-content"}} className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Contact Us</h3>
                                </div>
                                <div className="footer-content">
                                    <ul className="contact-info">
                                        <li>
                                            <i className="fa-regular fa-envelope"></i>
                                            <a href="mailto:info@probild.in">info@probild.in</a>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-phone-volume"></i>
                                            <a href="tel:+919650958969">+91-9650958969</a>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-phone-volume"></i>
                                            <a href="tel:+919582046255">+91-9582046255</a>
                                        </li>
                                    </ul>
                                    <div className="footer-input">
                                        <input type="email" id="email2" placeholder="Your email address" /> 
                                        <button className="newsletter-btn" type="submit">
                                        <i className="bi bi-arrow-right"></i>
                                        </button>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"  id="flexCheckChecked"  />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            I agree to the <a href="#">Privacy Policy.</a>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                            © All Copyright 2022 by Probild
                        </p>
                        <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                            <li>
                                <a href="#">
                                    Terms & Condition       
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <a href="#" id="scrollUp" className="scroll-icon">
                <i className="bi bi-arrow-up"></i>
                </a>
            </div>
        </section>

        </div>
    );
};

export default Footer1;