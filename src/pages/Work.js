import React from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
    return (
        <section className="r-bg-a sec-pad" id="work">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-8 vcenter">
                        <div className="heading-hz-btn">
                            <h2>Our <span className="ree-text rt40">Selected</span> Work</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-4 vcenter">
                        <div className="link-sol-header">
                            <Link to="portfolio.html" className="ree-card-link">View All <i className="fas fa-arrow-right fa-btn"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="row mt60">
                    <div className="col-lg-12">
                        <div className="full-work-block  owl-carousel">

                            <div className="fwb-main-x fwb-a">
                                <div className="work-thumbnails">
                                    <Link to="#"><img src="images/portfolio/portfolio-1.jpg" alt="portfolio Dev DZone" className="img-fluid" /> </Link>
                                </div>
                                <div className="work-details">
                                    <p className="mb10">UX, UI, Graphic Design</p>
                                    <h4><Link to="#"> Creative and minimal clothing label design</Link> </h4>
                                </div>
                            </div>

                            <div className="fwb-main-x fwb-a">
                                <div className="work-thumbnails">
                                    <Link to="#">	<img src="images/portfolio/portfolio-2.jpg" alt="portfolio Dev DZone" className="img-fluid" /> </Link>
                                </div>
                                <div className="work-details">
                                    <p className="mb10">UX, UI, Graphic Design</p>
                                    <h4><Link to="#">Creative business card design service </Link></h4>
                                </div>
                            </div>

                            <div className="fwb-main-x fwb-a">
                                <div className="work-thumbnails">
                                    <Link to="#">	<img src="images/portfolio/portfolio-3.jpg" alt="portfolio Dev DZone" className="img-fluid" /> </Link>
                                </div>
                                <div className="work-details">
                                    <p className="mb10">UX, UI, Graphic Design</p>
                                    <h4><Link to="#"> Furniture ios app kit design development </Link></h4>
                                </div>
                            </div>

                            <div className="fwb-main-x fwb-a">
                                <div className="work-thumbnails">
                                    <Link to="#">	<img src="images/portfolio/portfolio-2.jpg" alt="portfolio Dev DZone" className="img-fluid" /> </Link>
                                </div>
                                <div className="work-details">
                                    <p className="mb10">UX, UI, Graphic Design</p>
                                    <h4><Link to="#"> Furniture ios app kit design development </Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work
