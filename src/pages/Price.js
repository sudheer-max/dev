import React from 'react';
import { Link } from 'react-router-dom';

const Price = () => {
    return (
        <section className="r-bg-a sec-pad">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <div className="page-headings">
                            <h2 className="mb15"><span className="ree-text rt40">Flexible</span> & Transparent Pricing</h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mt60">
                    <div className="col-lg-12">
                        <div className="header--btn  mb30">
                            <h4>Progressive Web App Design Packages</h4>
                            <Link to="/contact" className="ree-btn  ree-btn-grdt2 mr20">Request A Quote <i className="fas fa-arrow-right fa-btn"></i></Link>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="shadows">
                            <div className="price-table-heading">
                                <ul>
                                    <li>Category</li>
                                    <li>Features</li>
                                    <li>Price</li>
                                </ul>
                            </div>
                            <div className="price-table-ree">
                                <ul className="price-ree">
                                    <li className="heading ">Static Web Page</li>
                                    <li className="content">
                                        <p>1 Domain Name, 10 Web Pages including 1 Home page and Login-Registration page, SEO Semantic Html 5 Code, HTML 5 Sitemap Page, Fully Mobile Compatible </p>
                                        <p>Website Type : Personal Website, Blog, Corporate, Portfolio, etc.</p>
                                        <p><strong>FREE : Hosting for 1 Year</strong></p>
                                        <p><strong>FREE: Search Engine Submission</strong></p>
                                    </li>
                                    <li className="price">   <span className="price-title">starting from</span><i className="fas fa-rupee-sign"></i><span>2450</span><sup>*</sup> <span className="price-off"><i className="fas fa-rupee-sign"></i><span>4500</span><sup>*</sup></span></li>
                                </ul>
                            </div>
                            <div className="price-table-ree">
                                <ul className="price-ree">
                                    <li className="heading ">Dynamic Web Page</li>
                                    <li className="content">
                                        <p>1 Domain Name, 15 Web Pages including 1 Home page and Login-Registration page, SEO Semantic Html 5 Code, HTML 5 Sitemap Page, Fully Mobile Compatible </p>
                                        <p>Website Type : Travel, Hospital, Grocery, Food, Restaurant website, Beauty salon website, etc.</p>
                                        <p><strong>FREE : Hosting for 1 Year</strong></p>
                                        <p><strong>FREE: Search Engine Submission</strong></p>
                                    </li>
                                    <li className="price">  <span className="price-title">starting from</span><i className="fas fa-rupee-sign"></i><span>4599</span><sup>*</sup> <span className="price-off"><i className="fas fa-rupee-sign"></i><span>8550</span><sup>*</sup></span></li>
                                </ul>
                            </div>
                            <div className="price-table-ree">
                                <ul className="price-ree">
                                    <li className="heading  br-bl">E-Commerce Web Page</li>
                                    <li className="content">
                                        <p>1 Domain Name, 50 Web Pages including 1 Home page, SEO Semantic Html 5 Code, HTML 5 Sitemap Page, Fully Mobile Compatible</p>
                                        <p><strong>FREE: Hosting for 1 year, Search Engine Submission</strong></p>
                                    </li>
                                    <li className="price br-br">  <span className="price-title">starting from</span><i className="fas fa-rupee-sign"></i><span>16,550</span><sup>*</sup> <span className="price-off"><i className="fas fa-rupee-sign"></i><span>21,750</span><sup>*</sup></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="header--btn mt15">
                                <div className="divright">
                                    <p>Our web design rates are very reasonable.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </section>
    )
}

export default Price
