import React from 'react';
import { Link } from 'react-router-dom';
import Price from './Price';

const Home = () => {
    return (
        <>
            <section className="home-hero-a">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 vcenter">
                            <div className="hero-content-a">
                                <h1 className="h1 mb30" data-aos="fade-in" data-aos-delay="200"><span className="ree-text rt60">Creative</span> Web Designer in BORIVALI</h1>
                                <p data-aos="fade-in" data-aos-delay="500">Our team provide a wide range of services including web development, ecommerce solutions and cloud development. We stay updated with the technology to build innovative digital products that meet client requirements across multiple business verticals and domains by housing some of the best professionals in the industry.</p>
                                <Link to="/service" className="ree-btn  ree-btn-grdt1 mt40 mw-80" data-aos="fade-in" data-aos-delay="800">Our Service<i className="fas fa-arrow-right fa-btn"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 vcenter">
                            <div className="sol-image m-mt30">
                                <img src="images/sliders/girl-bro.svg" alt="web development" className="img-fluid" data-aos="fade-in" data-aos-delay="400" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container hero-brand-block">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="brand-title text-center">
                            </div>
                            {/* <div className="hero-brands mt30" style={{ display: 'flex' }}>
                            <div className="brand-logo"><Link to="/"><img src={process.env.PUBLIC_URL + "images/brand-logo/customer-logo-1.png"} alt="companyLogo" /></Link> </div>
                            <div className="brand-logo"><Link to="/"><img src={process.env.PUBLIC_URL + "images/brand-logo/customer-logo-1.png"} alt="companyLogo" /></Link> </div>
                            <div className="brand-logo"><Link to="/"><img src={process.env.PUBLIC_URL + "images/brand-logo/customer-logo-1.png"} alt="companyLogo" /></Link> </div>
                            <div className="brand-logo"><Link to="/"><img src={process.env.PUBLIC_URL + "images/brand-logo/customer-logo-1.png"} alt="companyLogo" /></Link> </div>
                            <div className="brand-logo"><Link to="/"><img src={process.env.PUBLIC_URL + "images/brand-logo/customer-logo-1.png"} alt="companyLogo" /></Link> </div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </section>

            <Price></Price>
        </>
    )
}

export default Home
