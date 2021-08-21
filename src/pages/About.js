import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className="home-about sec-pad r-bg-a" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-content-home m-mb60 pera-block">
                            <span className="sub-heading mb15">We Are Dev DZone</span>
                            <h2><span className="ree-text rt40">Top-rated</span> Web And Mobile App Development
                                Company</h2>
                            <p>Dev DZone started its operation in the year 2018. We are based Web, App	and Digital Marketing Company. Our main Domain is Web Design, App Development, Digital
                                Marketing, Product Design and Cloud Services. Customer Satisfaction and the Highest rate of	Customer Repeatability make us one of the pioneers in the field. So, what are you waiting
                                for? Let us discuss your ideas and our innovation in detail because catering your requirement and converting it into a final product is our main goal.</p>
                            <div className="company-budges mt60 mb60">
                                <div className="img-budges"><img src="images/icons/badge-a.png" alt="Awards badges" className="img-fluid" /></div>
                                <div className="img-budges"><img src="images/icons/badge-b.png" alt="Awards badges" className="img-fluid" /></div>
                                <div className="img-budges"><img src="images/icons/badge-c.png" alt="Awards badges" className="img-fluid" /></div>
                            </div>
                            <div className="btn-sets">
                                <Link to="/contact" className="ree-btn  ree-btn-grdt2 mr20">Contact Us <i className="fas fa-arrow-right fa-btn"></i></Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="company-stats">
                            <div className="row">
                                <div className="col-lg-6 col-6 m-pr7">
                                    <div className="stats-box stat-bx-1" data-aos="fade-up" data-aos-delay="200">
                                        <span className="sub-heading mb20">Projects</span>
                                        <h3>25<span>+</span></h3>
                                        <p className="mt20">Dev DZone Delivered the Number of Successful projects around the world.</p>
                                    </div>
                                    <div className="stats-box stat-bx-2 mt20" data-aos="fade-up" data-aos-delay="600">
                                        <span className="sub-heading mb20">Team</span>
                                        <h3>5<span>+</span></h3>
                                        <p className="mt20">Our team consists of highly qualified, experienced and knowledgeable.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-6 m-pl7">
                                    <div className="stats-box stat-bx-3 mt100" data-aos="fade-up" data-aos-delay="400">
                                        <span className="sub-heading mb20">Clients</span>
                                        <h3>38<span>+</span></h3>
                                        <p className="mt20">Dev DZone Delivered too many of Successful projects</p>
                                    </div>
                                    <div className="stats-box stat-bx-4 mt20" data-aos="fade-up" data-aos-delay="800">
                                        <span className="sub-heading mb20">Years</span>
                                        <h3>10<span>+</span></h3>
                                        <p className="mt20">Clients across the globe witness our quality, processes and work.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
