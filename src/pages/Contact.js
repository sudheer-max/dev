import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { send } from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();
const Contact = () => {


    const [tosend, setToSend] = useState({
        name: '',
        lname: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
        interest: ''
    });

    const handleChange = (e) => {
        setToSend({ ...tosend, [e.target.name]: e.target.value });
    }

    const resetForm = () => {
        setToSend('')
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (tosend.name === '' || tosend.email === '' || tosend.subject === '' || tosend.phone === '') {
            toast.dismiss();
            toast.error('Please fill all (*) field.');
        } else {
            send('service_kce0x7h', 'template_wjr96h3', tosend, 'user_rOAP0DwsCzQO1LbpI5tyY')
                .then((result) => {
                    resetForm();
                    if (result) {
                        toast.dismiss();
                        toast.success('Your message has been sent successfully');
                    }
                    // console.log('Result', result.status, result.text);
                })
                .catch((err) => {
                    if (err) {
                        toast.dismiss();
                        toast.error('Something went wrong, Please try after sometimes!')
                    }
                    // console.log('Failure...', err)
                });
        }



    }

    return (
        <section className="home-contact pb120" style={{ marginTop: '240px' }} data-background="images/others/office.jpg" >
            <div className="container">
                <div className="row zup flx-end">
                    <div className="col-right-a">
                        <div className="sec-heading fourc-up-a">
                            <span className="sub-heading mb15">Inquiry</span>
                            <h2>Let’s Get in <span className="ree-text rt40">Touch</span></h2>
                        </div>
                        <div className="home-contact-block">
                            <div className="contact-infos">
                                <div className="c-infot">
                                    <span>Sales Department</span> <Link to="tel:+919699624066"><i className="fas fa-phone-alt"></i> +91 96 9962 4066</Link>
                                </div>

                                <div className="c-infot">
                                    <span>HR Department</span> <Link to="tel:+918828384404"><i className="fas fa-phone-alt"></i> +91 88 2838 4404</Link>
                                </div>
                            </div>
                            <div className="contact-infos mt35">
                                <div className="c-infot">
                                    <span>Sales Department</span> <Link ><i className="fas fa-envelope"></i> devdzone@gmail.com</Link>
                                </div>

                                <div className="c-infot">
                                    <span>Connect on facebook</span> <Link href="https://www.facebook.com/sudheer.sharma.71"><i className="fab fa-facebook"></i> DEV DZONE</Link>
                                </div>
                            </div>
                            <div className="live-review- mt60">
                                <span>Read Our Customers Feedback</span>
                                <div className="livrve">
                                    <Link to="#"><img src="images/icons/google-logo.svg" alt="review" /> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-right-b">
                        <div className="form-contact-hom fourc-up-b">
                            <div className="form-block">
                                <div className="form-head">
                                    <h3>Please fill in the form below.</h3>
                                </div>
                                <div className="form-body">
                                    <form onSubmit={sendEmail}>
                                        <div className="fieldsets row">
                                            <div className="col-md-6"><input type="text" placeholder="First Name*" name="name" value={tosend.name} onChange={handleChange} />	</div>
                                            <div className="col-md-6"><input type="text" placeholder="Last Name" name="lname" value={tosend.lname} onChange={handleChange} /></div>
                                        </div>
                                        <div className="fieldsets row">
                                            <div className="col-md-6"><input type="number" placeholder="Contact Number*" name="phone" value={tosend.phone} onChange={handleChange} /></div>
                                            <div className="col-md-6"><input type="email" placeholder="Email Address*"
                                                name="email" value={tosend.email} onChange={handleChange} /></div>

                                        </div>
                                        <div className="fieldsets row">
                                            <div className="col-md-6"><input type="text" placeholder="Subject*" name="subject" value={tosend.subject} onChange={handleChange} />
                                            </div>
                                            <div className="col-md-6"><select type="text" name="interest" value={tosend.interest} onChange={handleChange}>
                                                <option>interested in</option>
                                                <option>Web Design</option>
                                                <option>Graphic Design</option>
                                                <option>E-commerce Development</option>
                                                <option>Other...</option>
                                            </select></div>
                                        </div>
                                        <div className="fieldsets"><textarea placeholder="Message" name="message" value={tosend.message} onChange={handleChange}></textarea>
                                        </div>

                                        <div className="fieldsets mt20"> <button type="submit" name="submit"
                                            className="ree-btn  ree-btn-grdt1 w-100">Send your inquiry <i
                                                className="fas fa-arrow-right fa-btn"></i></button> </div>
                                        <p className="trm"><i className="fas fa-lock"></i>We hate spam, and we respect your privacy.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
