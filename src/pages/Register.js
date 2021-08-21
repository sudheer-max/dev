import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerUserStart } from '../redux/User/user.actions';

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    registerError: user.registerError
});


const Register = props => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { currentUser, registerError } = useSelector(mapState);


    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (Array.isArray(registerError) && registerError.length > 0) {
            setErrors(registerError);
        }


    }, [registerError]);

    useEffect(() => {
        if (currentUser) {
            formReset();
            history.push('/');
        }
    }, [currentUser, history]);

    const formReset = () => {
        setDisplayName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setErrors([]);
    }



    const handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log(errors);
        dispatch(registerUserStart({
            displayName, email, password, confirmPassword
        }));

    }
    return (

        <section className="home-contact pb120" data-background="images/others/office.jpg" >
            <div className="container">
                <div className="row zup flx-end">
                    {errors.length > 0 && (
                        <>
                            {errors((err, index) => {
                                return (
                                    <p className="invalid-feedback">{err}</p>
                                )
                            })}
                        </>
                    )}
                    <div className="col-right-a" style={{ marginTop: '50px' }}>
                        <div className="form-contact-hom fourc-up-b">
                            <div className="form-block">
                                <div className="form-head">
                                    <h3>Please fill in the form below.</h3>
                                </div>
                                <div className="form-body">
                                    <form onSubmit={handleFormSubmit}>

                                        <div className="fieldsets row">
                                            <div className="col-lg-12"><input type="text" placeholder="Full Name*"
                                                name="displayName" value={displayName} onChange={(e) => setDisplayName(e.target.value)} /></div>
                                        </div>
                                        <div className="fieldsets row">
                                            <div className="col-lg-12"><input type="email" placeholder="Email Address*"
                                                name="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                                        </div>
                                        <div className="fieldsets row">
                                            <div className="col-lg-12"><input type="password" placeholder="Password*"
                                                name="password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
                                        </div>
                                        <div className="fieldsets row">
                                            <div className="col-lg-12"><input type="password" placeholder="Confirm Password*"
                                                name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /></div>
                                        </div>

                                        <div className="fieldsets mt20"> <button type="submit" name="submit"
                                            className="ree-btn  ree-btn-grdt1 w-100">Register with us <i
                                                className="fas fa-arrow-right fa-btn"></i></button> </div>
                                        <p className="trm"><i className="fas fa-lock"></i>We hate spam, and we respect your privacy.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-right-a" style={{ marginTop: '50px' }}>
                        <h3>We build a unique website to convert visitors into customers</h3>
                        <div class="sol-img m-mt30" data-aos="fade-in" data-aos-delay="400"><img src={process.env.PUBLIC_URL + "images/sliders/startup.png"} style={{ height: '450px' }} alt="portfolio" class="img-fluid" /></div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Register;