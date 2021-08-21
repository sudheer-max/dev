import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordStart } from '../redux/User/user.actions';

const mapState = ({ user }) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    registerError: user.registerError
});

const ForgotPassword = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { registerError, resetPasswordSuccess } = useSelector(mapState);

    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (Array.isArray(registerError) && registerError.length > 0) {
            setErrors(registerError);
        }
    }, [registerError]);

    useEffect(() => {
        if (resetPasswordSuccess) {
            history.push('/login');
        }
    }, [resetPasswordSuccess, history]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        dispatch(resetPasswordStart({ email }));

    }

    return (

        <section className="home-contact pb120" style={{ marginTop: '240px' }} data-background="images/others/office.jpg" >
            <div className="container">
                <div className="row zup flx-end">

                    <div className="col-right-a" style={{ marginTop: '50px' }}>
                        <div className="form-contact-hom fourc-up-b">
                            <div className="form-block">
                                <div className="form-head">
                                    <h3>Forgot Password</h3>
                                </div>
                                <div className="form-body">
                                    {errors.length > 0 && (
                                        <>
                                            {errors((err, index) => {
                                                return (
                                                    <p className="invalid-feedback" key={index}>{err}</p>
                                                )
                                            })}
                                        </>
                                    )}
                                    <form onSubmit={handleFormSubmit}>

                                        <div className="fieldsets row">
                                            <div className="col-lg-12"><input type="email" placeholder="Email Address*"
                                                name="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                                        </div>

                                        <div className="fieldsets mt20"> <button type="submit" name="submit"
                                            className="ree-btn  ree-btn-grdt1 w-100">Reset Password <i
                                                className="fas fa-arrow-right fa-btn"></i></button> </div>

                                        <p className="trm"><i className="fas fa-lock"></i>Please check your email to reset your password.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-right-a" style={{ marginTop: '50px' }}>
                        <h3>Looking for our Services Standard Pricing?</h3>
                        <div class="sol-img m-mt30" data-aos="fade-in" data-aos-delay="400"><img src={process.env.PUBLIC_URL + "images/sliders/app-img4.jpg"} alt="portfolio" class="img-fluid" /></div>
                    </div>

                </div>
            </div>
        </section>

    )

}

export default ForgotPassword;