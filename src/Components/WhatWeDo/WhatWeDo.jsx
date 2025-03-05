import { Link } from "react-router-dom";
import parse from 'html-react-parser';

const WhatWeDo = () => {

    const heading = { 
        subtitle:"WHY CHOOSE US",
        title:'Your One-Stop Website Solution',
        content:'At Probild, we don’t just build websites— <br> we create powerful digital experiences that <br> drive growth, engagement, and success.',  
      }

    const whyContent = [
        {img:'/assets/img/service/world-wide-web.png', title:'Complete Web Solutions', content:'From custom website design and development to SEO, maintenance, and security, we handle everything under one roof.'},
        {img:'/assets/img/service/trend.png', title:'SEO-Optimized for Growth', content:'We implement the latest SEO strategies to ensure your website ranks higher on search engines, bringing in more organic traffic and leads.'},
        {img:'/assets/img/service/lightning.png', title:'Fast, Responsive & Scalable', content:'We build mobile-friendly, high-speed websites that provide seamless user experiences across all devices.'},
        {img:'/assets/img/service/target.png', title:'Tailor-Made for Your Business', content:'Whether you need a corporate website, eCommerce store, or web app, our custom solutions align perfectly with your brand’s goals.'},
        {img:'/assets/img/service/web-design.png', title:'Modern & Future-Ready Designs', content:'We create sleek, engaging, and conversion-focused designs to captivate your audience and drive more sales.'},
        {img:'/assets/img/service/maintenance.png', title:'Expert Support & Maintenance', content:'Our team provides ongoing support, updates, and security to ensure your website runs smoothly 24/7.'},

      ];  

    return (
        <section id="services" className="service-section fix section-padding">
            <div className="left-shape float-bob-y">
                <img src="/assets/img/service/left-shape.png" alt="img" />
            </div>
            <div className="right-shape">
                <img src="/assets/img/service/right-shape.png" alt="img" />
            </div>
            <div className="bg-shape">
                <img src="/assets/img/service/bg-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <div className="sub-title wow fadeInUp">
                            <span>{heading.subtitle}</span>
                        </div>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        {parse(heading.title)}
                        </h2>
                    </div>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                    {parse(heading.content)}
                    </p>
                </div>
                <div className="row">
                {whyContent.map((item, i) => (
                    <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-box-items">
                            <div className="icon">
                                <img src={item.img} alt="img" />
                            </div>
                            <div className="content"> 
                                <h4><Link to="/service/service-details">{item.title}</Link></h4>
                                <p>{item.content}</p>
                                <Link to="/service/service-details" className="link-btn">Read More <i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    ))}


                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;