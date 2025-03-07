import { useState } from "react";
import PricingCard from "../Card/PricingCard";

const Pricing1 = ({CoulmnClass}) => {

    const [isActive, setIsActive] = useState('monthly');

    return (
        <section id="price" className={CoulmnClass}>
            <div className="left-shape float-bob-y">
                <img src="/assets/img/pricing-left.png" alt="img" />
            </div>
            <div className="right-shape float-bob-y">
                <img src="/assets/img/pricing-right.png" alt="img" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="pricing-content">
                            <div className="section-title">
                                <div className="sub-title bg-color-2 wow fadeInUp">
                                    <span>OUR PRICNG PLAN</span>
                                </div>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    Our awesome <br/> Pricing Plan
                                </h2>
                            </div>
                            <div className="pricing-tab-header mt-4 mt-md-0">
                                <div className="arrow-shape">
                                    <img src="/assets/img/arrow.png" alt="img" />
                                </div>
                                <ul className="nav" role="tablist">
                                    <li className={`nav-item wow fadeInUp ${isActive === 'monthly' ? 'active' : ''}`} onClick={() => setIsActive('monthly')}  data-wow-delay=".3s" role="presentation">
                                        <a href="#monthly" data-bs-toggle="tab" className="nav-link active" aria-selected="true" role="tab">
                                        Monthly
                                        </a>
                                    </li>
                                    <li className={`nav-item ${isActive === 'yearly' ? 'active' : ''}`} onClick={() => setIsActive('yearly')}  data-wow-delay=".5s" role="presentation">
                                        <a href="#yearly" data-bs-toggle="tab" className="nav-link" aria-selected="false" role="tab" tabIndex="-1">
                                        Yearly
                                        </a>
                                    </li>
                                </ul>
                                <div className="save-text">
                                    Save 25%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="tab-content">
                            <div className={`tab-pane ${isActive === 'monthly' ? 'active' : ''}`} id="monthly"  role="tabpanel">
                                <div className="row g-4">
                                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <PricingCard
                                        addclass="pricing-box-items"
                                        title="Starter Elevate"
                                        price="$499"
                                        month="Month"
                                        FeatureList={[
                                            "5-Page Dynamic Website",
                                            "FREE 1-Year Domain & Hosting",
                                            "Basic SEO & Speed Optimization",
                                            "SSL Certificate", 
                                            "24/7 Maintenance & Support",
                                            "Unlimited Images/Videos",
                                            "20 Business Emails",
                                            "Social Media Integration",
                                            "1-Year Free Technical Support",
                                            "Delivery in 1 Week (Fast & Reliable!)",
                                            "Annual Renewal : $109",
                                        ]}
                                        btnurl="/pricing"
                                        btnname="Get Started Now"
                                    ></PricingCard>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <PricingCard
                                        addclass="pricing-box-items style-2"
                                        title="Growth Boost"
                                        price="$1499"
                                        month="Month"
                                        FeatureList={[
                                            "10-Page Dynamic Website",
                                            "FREE 1-Year Domain & Hosting",
                                            "Advanced SEO & Speed Optimization",
                                            "SSL Certificate",
                                            "24/7 Maintenance & Support",
                                            "Unlimited Images/Videos", 
                                            "30 Business Emails",
                                            "Payment Gateway Integration",
                                            "Social Media Integration",
                                            "Delivery in 3 Weeks",
                                            "Annual Renewal: $799",
                                        ]}
                                        btnurl="/pricing"
                                        btnname="Get Started Now"
                                    ></PricingCard>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <PricingCard
                                        addclass="pricing-box-items"
                                        title="Elite Dominate"
                                        price="$1999"
                                        month="Month"
                                        FeatureList={[
                                            "20+ Page Advanced Website",
                                            "FREE 1-Year Domain & Hosting",
                                            "Enterprise-Level SEO & Speed Optimization",
                                            "SSL Certificate",
                                            "AI-Based Chat Support integration", 
                                            "24/7 Maintenance & Support",
                                            "Unlimited Images/Videos",
                                            "50 Business Emails",
                                            "Social Media Integration",
                                            "Lead Generation System & Inquiry Forms",
                                            "1-Year Free Technical Support",
                                            "Delivery in 4 Week",
                                            "Annual Renewal : $1299",
                                        ]}
                                        btnurl="/pricing"
                                        btnname="Get Started Now"
                                    ></PricingCard>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <PricingCard
                                        addclass="pricing-box-items style-2"
                                        title="Ultimate Custom "
                                        price="Custom"
                                        month="Month"
                                        FeatureList={[
                                            "Everything from the Elite Dominate Plan",
                                            "Unlimited Pages & Custom Functionalities",
                                            "Fully Custom Web", 
                                            "Fully Custom App Development",
                                            "Advanced E-Commerce", 
                                            "Advance Payment Solutions",
                                            "AI & Automation Integration",
                                            "Cloud Hosting & Enterprise Security",
                                            "Multilingual & Global SEO Strategy",
                                            "Dedicated Account Manager",
                                            "24/7 VIP Support",
                                        ]}
                                        btnurl="/pricing"
                                        btnname="Get Started Now"
                                    ></PricingCard>
                                    </div>
                                </div>
                            </div>
                            <div id="yearly" className={`tab-pane ${isActive === 'yearly' ? 'active' : ''}`} role="tabpanel">
                                <div className="row g-4">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                    <PricingCard
                                        addclass="pricing-box-items"
                                        title="Starter Elevate"
                                        price="$1999"
                                        month="Year"
                                        FeatureList={[
                                            "5-Page Dynamic Website",
                                            "FREE 1-Year Domain & Hosting",
                                            "Basic SEO & Speed Optimization",
                                            "SSL Certificate", 
                                            "24/7 Maintenance & Support",
                                            "Unlimited Images/Videos",
                                            "20 Business Emails",
                                            "Social Media Integration",
                                            "1-Year Free Technical Support",
                                            "Delivery in 1 Week (Fast & Reliable!)",
                                            "Annual Renewal : $109",
                                        ]}
                                        btnurl="/pricing"
                                        btnname="Get Started Now"
                                    ></PricingCard>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                    <PricingCard
                                        addclass="pricing-box-items style-2"
                                        title="Growth Boost "
                                        price="$2299"
                                        month="Year"
                                        FeatureList={[
                                            "10-Page Dynamic Website",
                                            "FREE 1-Year Domain & Hosting",
                                            "Advanced SEO & Speed Optimization",
                                            "SSL Certificate",
                                            "24/7 Maintenance & Support",
                                            "Unlimited Images/Videos", 
                                            "30 Business Emails",
                                            "Payment Gateway Integration",
                                            "Social Media Integration",
                                            "Delivery in 3 Weeks",
                                            "Annual Renewal: $799",
                                        ]}
                                        btnurl="/pricing"
                                        btnname="Get Started Now"
                                    ></PricingCard>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                    <PricingCard
                                        addclass="pricing-box-items"
                                        title="Elite Dominate "
                                        price="$2999"
                                        month="Year"
                                        FeatureList={[
                                            "20+ Page Advanced Website",
                                            "FREE 1-Year Domain & Hosting",
                                            "Enterprise-Level SEO & Speed Optimization",
                                            "SSL Certificate",
                                            "AI-Based Chat Support integration", 
                                            "24/7 Maintenance & Support",
                                            "Unlimited Images/Videos",
                                            "50 Business Emails",
                                            "Social Media Integration",
                                            "Lead Generation System & Inquiry Forms",
                                            "1-Year Free Technical Support",
                                            "Delivery in 4 Week",
                                            "Annual Renewal : $1299",
                                        ]}
                                        btnurl="/pricing"
                                        btnname="Get Started Now"
                                    ></PricingCard>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                    <PricingCard
                                        addclass="pricing-box-items style-2"
                                        title="Ultimate Custom "
                                        price="Custom"
                                        month="Year"
                                        FeatureList={[
                                            "Everything from the Elite Dominate Plan",
                                            "Unlimited Pages & Custom Functionalities",
                                            "Fully Custom Web", 
                                            "Fully Custom App Development",
                                            "Advanced E-Commerce", 
                                            "Advance Payment Solutions",
                                            "AI & Automation Integration",
                                            "Cloud Hosting & Enterprise Security",
                                            "Multilingual & Global SEO Strategy",
                                            "Dedicated Account Manager",
                                            "24/7 VIP Support",
                                        ]}
                                        btnurl="/pricing"
                                        btnname="Get Started Now"
                                    ></PricingCard>
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

export default Pricing1;
