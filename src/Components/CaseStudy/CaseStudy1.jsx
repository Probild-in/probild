import { useEffect } from "react";
import { Link } from "react-router-dom";

const CaseStudy1 = () => {

    useEffect(() => {
        document.querySelectorAll('.box').forEach(box => {
            box.addEventListener('mouseenter', function () {
                document.querySelectorAll('.box').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }, []);

    return (
        <section id="process" className="case-study-section fix section-padding">
            <div className="overlay-shape">
                <img src="/assets/img/case-studies/overlay-shape.png" alt="img" />
            </div>
            <div className="left-shape float-bob-x">
                <img src="/assets/img/case-studies/left-shape.png" alt="img" />
            </div>
            <div className="right-shape float-bob-x">
                <img src="/assets/img/case-studies/right-shaape.png" alt="img" />
            </div>
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <div className="sub-title wow fadeInUp">
                            <span>OUR PROCESS</span>
                        </div>
                        <h3 className="wow fadeInUp" data-wow-delay=".3s">
                        we follow a streamlined and strategic process to deliver high-performing, <br/>SEO-optimized, and conversion-driven websites tailored to your business needs.
                        </h3>
                    </div>
                    <div className="main-button wow fadeInUp" data-wow-delay=".5s">
                        <Link to="https://calendly.com/probild-info/30min"> <span className="theme-btn"> Book A Call </span><span className="arrow-btn"><i className="bi bi-arrow-right"></i></span></Link>

                    </div>
                </div>
                <div className="case-study-wrapper">
                    <div className="row">
                        <div className="col-xxl-6">
                            <div className="main-box">

                            <div className="box wow fadeInUp fix">
                                    <div className="title-items">
                                        <h3><Link to="/">Discovery </Link></h3>
                                        <span className="number">01</span>
                                    </div>
                                    <span className="number-hover">01</span>
                                    <div className="project-content">
                                        <h3><Link to="/project/project-details">Discovery </Link></h3>
                                        <p>
                                        We start by understanding your business goals, target audience, and brand vision to create a roadmap for success.
                                        </p>
                                    </div>
                                </div>


                                <div className="box wow fadeInUp">
                                    <div className="title-items">
                                        <h3><Link to="/project/project-details">Design </Link></h3>
                                        <span className="number">02</span>
                                    </div>
                                    <span className="number-hover">02</span>
                                    <div className="project-content">
                                        <h3><Link to="/project/project-details">Design </Link></h3>
                                        <p>
                                        Our creative team crafts a modern, user-friendly, and engaging UI/UX design that aligns with your brand identity.
                                        </p>
                                    </div>
                                </div>

                                <div className="box bg-1 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="title-items">
                                        <h3><Link to="/project/project-details">Development </Link></h3>
                                        <span className="number">03</span>
                                    </div>
                                    <span className="number-hover">03</span>
                                    <div className="project-content">
                                        <h3><Link to="/project/project-details">Development </Link></h3>
                                        <p>
                                        We develop a fast, scalable, and SEO-friendly website using the latest technologies to enhance performance and search rankings.
                                        </p>
                                    </div>
                                </div>

                                <div className="box bg-2 active wow fadeInUp wow" data-wow-delay=".4s">
                                    <div className="title-items">
                                        <h3><Link to="/project/project-details">Testing</Link></h3>
                                        <span className="number">04</span>
                                    </div>
                                    <span className="number-hover">04</span>
                                    <div className="project-content">
                                        <h3><Link to="/project/project-details">Testing</Link></h3>
                                        <p>
                                        Before launch, we conduct rigorous testing to ensure smooth functionality, responsiveness, and security across all devices.
                                        </p>
                                    </div>
                                </div>

                                <div className="box bg-3 wow fadeInUp wow" data-wow-delay=".6s">
                                    <div className="title-items">
                                        <h3><Link to="/project/project-details">Launch</Link></h3>
                                        <span className="number">05</span>
                                    </div>
                                    <span className="number-hover">05</span>
                                    <div className="project-content">
                                        <h3><Link to="/project/project-details">Launch</Link></h3>
                                        <p>
                                        We deploy your website with a seamless process, ensuring zero downtime and a smooth transition.
                                        </p>
                                    </div>
                                </div>

                                <div className="box bg-3 wow fadeInUp wow" data-wow-delay=".6s">
                                    <div className="title-items">
                                        <h3><Link to="/project/project-details">Growth</Link></h3>
                                        <span className="number">06</span>
                                    </div>
                                    <span className="number-hover">06</span>
                                    <div className="project-content">
                                        <h3><Link to="/project/project-details">Growth</Link></h3>
                                        <p>
                                        Our partnership doesn’t end at launch! We provide maintenance, SEO updates, and performance optimization to help your website grow.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy1;