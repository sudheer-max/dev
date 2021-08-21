import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const mapState = ({ user }) => ({
    currentUser: user.currentUser
});


const Footer = () => {

    const { currentUser } = useSelector(mapState);

    return (
        <footer className="footer-a">
            <div className="footer-fist-row pt40">

                <div className="footer-abt pb40">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 vcenter">
                                <div className="footer-ree-lg">
                                    <div className="footer-logo">
                                        <Link to="/"> <img src={process.env.PUBLIC_URL + "images/white-logo.png"} alt="reeven" className="img" /> </Link>
                                    </div>
                                    <div className="star-rating-review mt30">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                    </div>
                                    <h6 className="mt10">Dev DZone is Web Development agency. We value quality, creativity, problem-solving, team building, and storytelling to grow your business. Our specialized services answer your most demanding requirements with precision and innovative solutions that deliver relentless growth to your brand.</h6>
                                </div>
                            </div>
                            <div className="col-lg-6 vcenter">
                                <div className="ref-logo">
                                    <Link to="#"> <img src="images/brand-logo/app-futura.png" alt="Logo" /> </Link>
                                    <Link to="#"> <img src="images/brand-logo/clutch.png" alt="Logo" /> </Link>
                                    <Link to="#"> <img src="images/brand-logo/goodfirm.png" alt="Logo" /> </Link>
                                    <Link to="#"> <img src="images/brand-logo/itfirm.png" alt="Logo" /> </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container ft-cpy">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="ft-copyright">
                                {!currentUser && (
                                    <p>We are tracking any intention of piracy.</p>
                                )}
                                {currentUser && (
                                    <p>{currentUser.displayName}</p>
                                )}
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="ft-copyright ft-r">
                                <p>Copyright © {new Date().getFullYear()} Dev DZone. All rights reserved. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
