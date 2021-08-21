import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Google from '../components/Google';
import { emailLoginStart, googleLoginStart } from '../redux/User/user.actions';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const Login = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentUser } = useSelector(mapState);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (currentUser) {
            resetForm();
            history.push('/');
        }
    }, [currentUser, history]);

    const resetForm = () => {
        setEmail("");
        setPassword("");
    }

    const handleGoogleSignIn = () => {
        dispatch(googleLoginStart());
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(emailLoginStart({ email, password }));

    }


    return (
        <section className="home-contact pb120" style={{ marginTop: '240px' }} data-background="images/others/office.jpg" >
            <div className="container">
                <div className="row zup flx-end">

                    <div className="col-right-a" style={{ marginTop: '50px' }}>
                        <div className="form-contact-hom fourc-up-b">
                            <div className="form-block">
                                <div className="form-head">
                                    <h3>Please fill in the form below.</h3>
                                </div>
                                <div className="form-body">
                                    <form onSubmit={handleSubmit}>

                                        <div className="fieldsets row">
                                            <div className="col-lg-12"><input type="email" placeholder="Email Address*"
                                                name="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                                        </div>
                                        <div className="fieldsets row">
                                            <div className="col-lg-12"><input type="password" placeholder="Enter Password*"
                                                name="password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
                                        </div>

                                        <div className="fieldsets row">
                                            <p><span><Link to="/forgot-password">Forgot Password</Link></span></p>
                                        </div>

                                        <div className="fieldsets mt20"> <button type="submit" name="submit"
                                            className="ree-btn  ree-btn-grdt1 w-100">Send your inquiry <i
                                                className="fas fa-arrow-right fa-btn"></i></button> </div>

                                        <p className="trm"><i className="fas fa-lock"></i>We hate spam, and we respect your privacy.
                                        </p>
                                    </form>
                                    <div className="fieldsets mt20"> <Google onClick={handleGoogleSignIn}>Login with Google</Google> </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-right-a" style={{ marginTop: '50px' }}>
                        <h3>Looking for our Services Standard Pricing?</h3>
                        <div class="sol-img m-mt30" data-aos="fade-in" data-aos-delay="400"><img src={process.env.PUBLIC_URL + "images/sliders/team-business.jpg"} alt="portfolio" class="img-fluid" /></div>
                    </div>

                </div>
            </div>
        </section>

    )
}


export default Login;
