import { useRef } from "react";
import Slider from "react-slick";

const Testimonial1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  

      const sliderRef = useRef(null);

      const next = () => {
        sliderRef.current.slickNext();
      };
    
      const previous = () => {
        sliderRef.current.slickPrev();
      }; 

    const testimonialContent = [
        {img:'/assets/img/testimonial/the-bageecha.png', subtitle:'Farm Stay', title:'The Bageecha Farm', content:'We partnered with Probild to develop our website, and the experience has been nothing short of amazing. Their team understood our vision and delivered a stunning, SEO-friendly, and highly responsive website for The Bageecha Farm. The seamless integration of booking features, fast performance, and modern design truly set them apart.'},
        {img:'/assets/img/testimonial/dytan-logo.png', subtitle:'Home Automation Solutions', title:'Dytan Smart Homes', content:'Working with Probild was an absolute pleasure. They designed and developed a sleek, high-performance website for Dytan Smart Homes, ensuring it was user-friendly, fast, and SEO-optimized. Their attention to detail, seamless functionality, and innovative approach truly exceeded our expectations.If you are looking for a reliable web development partner, Probild is the way to go! Highly recommended!'},
        {img:'/assets/img/testimonial/tunit-logo.png', subtitle:'Tour & Travel', title:'T-Unit', content:'We had an amazing experience working with Probild! They created a modern, high-performance website for T-Unit that perfectly reflects our brand. Their team was highly professional, delivering a seamless, responsive, and SEO-friendly site that enhances our online presence. If you need a website that stands out, Probild is the perfect choice! '},
        {img:'/assets/img/testimonial/snts-logo.png', subtitle:'Tour & Travel', title:'SNTS Group', content:'Working with Probild was a game-changer for SNTS Group! They built a sleek, high-performing website that truly represents our brand. The team is expertise in design, SEO, and functionality ensured a seamless experience. Their ongoing support and attention to detail have been exceptional. Highly recommended for anyone looking for a professional and results-driven website!'},
        {img:'/assets/img/testimonial/Exwindoor-logo.png', subtitle:'Window & Door Manufacturing', title:'Exwindoor', content:'We are quite pleased with the work that PROBILD completed to launch our EXWINDOOR website. Throughout the process, Mr Ishant exhibited professionalism,efficiency and unwavering support.They made sure everything went smoothly and we are really pleased with the outcome I appreciate your knowledge and commitment,PROBILD. We enthusiastically recommend them to everyone searching for trustworthy and skilled experts.'},
      ]; 

    return (
        <section id="testimonials" className="testimonial-section fix section-padding">
            <div className="container">
                <div className="testimonial-wrapper">
                    <div className="section-title-area">
                        <div className="section-title">
                            <div className="sub-title bg-color-2 wow fadeInUp">
                                <span>TESTIMONILAS</span>
                            </div>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            What Our Clients Say <br/> Real Results, Real Success!
                            </h2>
                        </div>
                        <p className="wow fadeInUp" data-wow-delay=".5s">
                        Hear from our satisfied clients who have <br/> elevated their online presence with us!
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-xl-2 col-lg-4">
                            <div className="testimonial-left wow fadeInUp" data-wow-delay=".3s">
                                <div className="client-img">
                                    <img src="/assets/img/testimonial/10.png" alt="img" />
                                    <div className="content">
                                        <div className="star">
                                        <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>15k+(reviews)</p>
                                    </div>
                                </div>
                                <div className="array-button wow fadeInUp" data-wow-delay=".5s">
                                    <button onClick={previous} className="array-prev"><i className="bi bi-arrow-left"></i></button>
                                    <button onClick={next} className="array-next"><i className="bi bi-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-8">
                            <div className="swiper testimonial-slider">
                                <div className="swiper-wrapper cs_slider_gap_30">
                                <Slider ref={sliderRef} {...settings}>
                                {testimonialContent.map((item, i) => (
                                    <div key={i} className="swiper-slide">
                                        <div className="testimonial-box-items">
                                            <div className="icon">
                                                <img src="/assets/img/testimonial/icon.png" alt="img" />
                                            </div>
                                            <div className="testimonial-img">
                                                <img src={item.img} alt="img" />
                                                <div className="shape-img">
                                                    <img src="/assets/img/testimonial/shape.png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="content">
                                               <div className="client-info">
                                                    <div className="star">
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <span>{item.subtitle}</span>
                                               </div>
                                               <p>
                                               {item.content}
                                               </p>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                    </Slider>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial1;
