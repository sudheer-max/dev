import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutStart } from '../redux/User/user.actions';


const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const Header = (props) => {
    const dispatch = useDispatch();
    // console.log(props);

    const signOut = () => {
        dispatch(logoutStart())
    }
    const { currentUser } = useSelector(mapState);
    return (

        <header className="ree-header fixed-top">
            <div className="container-fluid m-p-l-r-0">
                <div className="menu-header horzontl">
                    <div className="menu-logo">
                        <div className="dskt-logo"><Link className="nav-brand" to="/">	<img src={process.env.PUBLIC_URL + "images/logo.png"} alt="Logo" className="ree-logo" /> </Link> </div>
                    </div>
                    <div className="ree-nav" role="navigation">
                        <ul className="nav-list">
                            <li><Link to="/" className="menu-links">Home</Link></li>
                            <li><Link to="/about" className="menu-links">About Us</Link></li>
                            <li><Link to="/service" className="menu-links">Services</Link></li>
                            {/* <li><Link to="/work" className="menu-links">Our Work</Link></li> */}
                            <li><Link to="/contact" className="menu-links">Contact Us</Link></li>
                            {!currentUser && (
                                <>
                                    <li><Link to="/login" className="menu-links">Login</Link></li>
                                    <li><Link to="/register" className="menu-links">Register</Link></li>
                                </>
                            )}
                            {currentUser && (
                                <li><Link onClick={signOut} className="menu-links">Logout</Link></li>
                            )}

                        </ul>
                    </div>
                    <div className="ree-nav-cta">
                        <ul>
                            <li><Link to="/contact" className="ree-btn ree-btn0 ree-btn-grdt2"> Request Quote</Link> </li>
                        </ul>
                    </div>
                    <div className="mobile-menu2">
                        <ul className="mob-nav2">
                            <li><Link to="/contact" className="ree-btn2 ree-btn-grdt1"><i className="fas fa-envelope-open-text"></i></Link></li>
                            <li className="navm-"><Link className="toggle" to="#"> <span></span> </Link> </li>
                        </ul>
                    </div>
                    <nav id="main-nav">
                        <ul>
                            <li><Link to="/" className="menu-links">Home</Link></li>
                            <li><Link to="/about" className="menu-links">About Us</Link></li>
                            <li><Link to="/service" className="menu-links">Services</Link></li>
                            {/* <li><Link to="/work" className="menu-links">Our Work</Link></li> */}
                            <li><Link to="/contact" className="menu-links">Contact Us</Link></li>
                        </ul>

                    </nav>
                </div>
            </div>
        </header>

    )
}

Header.defaultProps = {
    currentUser: null
}





export default Header;
