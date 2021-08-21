import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <section className="r-bg-i sec-pad" id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="sec-heading text-center pera-block">
                            <h2>See what we can <span className="ree-text rt40">do</span> for <span className="ree-text rt40">you</span></h2>
                            <p>Our team gives you the required tools to make an impact in the market with
                                your business</p>
                        </div>
                    </div>
                </div>

                <div className="row mt30">
                    <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="ree-card r-bg-c mt60">
                            <div className="ree-card-img shadows"><img src="images/icons/mobile-app.svg" alt="services" /> </div>
                            <div className="ree-card-content mt40">
                                <h3 className="mb15"><Link to="service-details.html"> App Development</Link></h3>
                                <p>Our software house has been recognised by google for outstanding android application	quality.</p>
                            </div>
                            <div className="ree-card-content-link">
                                <Link to="service-details.html" className="ree-card-link mt40">Read More <i className="fas fa-arrow-right fa-btn"></i> </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="ree-card r-bg-c  mt60">
                            <div className="ree-card-img"><img src="images/icons/website.svg" alt="services" /> </div>
                            <div className="ree-card-content mt40">
                                <h3 className="mb15"><Link to="service-details.html">Web Development</Link></h3>
                                <p>At Dev DZone, We offer pixel perfect responsive website design services which are built around aesthetics and usability.</p>
                            </div>
                            <div className="ree-card-content-link">
                                <Link to="service-details.html" className="ree-card-link mt40">Read More <i className="fas fa-arrow-right fa-btn"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="500">
                        <div className="ree-card r-bg-c  mt60">
                            <div className="ree-card-img"><img src="images/icons/buy-online.svg" alt="services" /> </div>
                            <div className="ree-card-content mt40">
                                <h3 className="mb15"><Link to="service-details.html">eCommerce Service</Link></h3>
                                <p>Dev DZone’s product design services cover entire product design lifecycle, From prototyping to fully functional design.</p>
                            </div>
                            <div className="ree-card-content-link">
                                <Link to="service-details.html" className="ree-card-link mt40">Read More <i className="fas fa-arrow-right fa-btn"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="700">
                        <div className="ree-card r-bg-c  mt60">
                            <div className="ree-card-img"><img src="images/icons/communicate.svg" alt="services" /> </div>
                            <div className="ree-card-content mt40">
                                <h3 className="mb15"><Link to="service-details.html">Digital Marketing</Link></h3>
                                <p>Increase conversions. Increase leads. Increase sales. Increase revenue. That's digital marketing services from Dev DZone.</p>
                            </div>
                            <div className="ree-card-content-link">
                                <Link to="service-details.html" className="ree-card-link mt40">Read More <i className="fas fa-arrow-right fa-btn"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="900">
                        <div className="ree-card r-bg-c  mt60">
                            <div className="ree-card-img"><img src="images/icons/design-tools.svg" alt="services" /> </div>
                            <div className="ree-card-content mt40">
                                <h3 className="mb15"><Link to="service-details.html">Product Design</Link></h3>
                                <p>Our highly experienced designers comprehend your vision and business objectives in order to create the designs.</p>
                            </div>
                            <div className="ree-card-content-link">
                                <Link to="service-details.html" className="ree-card-link mt40">Read More <i className="fas fa-arrow-right fa-btn"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="1100">
                        <div className="ree-card r-bg-c  mt60">
                            <div className="ree-card-img"><img src="images/icons/servers.svg" alt="services" /> </div>
                            <div className="ree-card-content mt40">
                                <h3 className="mb15"><Link to="service-details.html">Cloud Services</Link></h3>
                                <p>Our highly experienced designers comprehend your vision and business objectives in order to create the designs.</p>
                            </div>
                            <div className="ree-card-content-link">
                                <Link to="service-details.html" className="ree-card-link mt40">Read More <i className="fas fa-arrow-right fa-btn"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cta-block-wide mt100">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-10 vcenter">
                            <div className="cta-heading-wide-bt">
                                <h3>Hire <span className="ree-text rt40">Developers</span></h3>
                                <Link to="/contact" className="ree-btn  ree-btn-grdt1 mw-80">Hire Now <i className="fas fa-arrow-right fa-btn"></i></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service;
