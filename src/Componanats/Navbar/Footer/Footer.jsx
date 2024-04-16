import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../../img/Logo-Daksh-School-1.png";

const Footer = () => {
  return (
    <div>
        <>
            <footer role="contentinfo">
                <div className="quick-link-bar">
                <div className="container">
                    <p>
                    <strong>
                        <i className="fa fa-plus" />
                        Qucik Links
                    </strong>{" "}
                    - Explore popular categories
                    </p>
                </div>
                </div>
                {/* link bar */}
                <div className="quick-link">
                
                </div>
                {/* quick link */}
                <div className="block main-footer">
                <div className="container">
                    <div className="footer-bg">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 col-xl-3">
                        <div className="widget">
                            <div>
                            <Link to="/" className="logo-div ">
                                <div className='about-logo d-flex justify-content-center'>
                                    <img src={Logo} alt="" className="img-fluid rounded"  height={80} width={80}/>
                                </div>
                            </Link>
                            <p>
                                Pellentesque ultrices orci id justo vehicula, non aliquam
                                erat lacinia. Mauris rhoncus venenatis tempor.
                            </p>
                            <ul>
                                <li>
                                <i className="fa fa-map-marker-alt" />
                                31-33B Tan Thuan St, Tan Thuan EZ,
                                </li>
                                <li>
                                <i className="fa fa-envelope" />
                                <Link
                                    to="https://html.webinane.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="f2819b9f829e97979f939b9eb2959f939b9edc919d9f"
                                >
                                    [email&nbsp;protected]
                                </Link> 
                                </li>
                                <li>
                                <i className="fa fa-phone" />
                                +98 987 787 123
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 col-xl-3">
                        <div className="widget">
                            <div className="widget-title">
                            <h4>Get in Touch</h4>
                            </div>
                            <div className="get-in-touch">
                            <ul className="row no-gutters">
                                <li className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <Link to="#" className="social-icn facebook">
                                    <i className="fab fa-facebook-f" />
                                    Facebook
                                </Link> 
                                </li>
                                <li className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <Link to="#" className="social-icn twitter">
                                    <i className="fab fa-twitter" />
                                    Twitter
                                </Link> 
                                </li>
                                <li className=" col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <Link to="#" className="social-icn google-plus">
                                    <i className="fab fa-google-plus-g" />
                                    Google+
                                </Link> 
                                </li>
                                <li className=" col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <Link to="#" className="social-icn linkedin-in">
                                    <i className="fab fa-linkedin-in" />
                                    linkedin
                                </Link> 
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 col-xl-3">
                        <div className="widget">
                            <div className="widget-title">
                            <h4>Quick Links</h4>
                            </div>
                            <ul className="recent-posts">
                            <li>
                                <Link to="/">
                                    <i className="fa fa-clock" />
                                    Home
                                </Link> 
                            </li>
                            <li>
                                <Link to="/about">
                                    <i className="fa fa-clock" />
                                    About
                                </Link> 
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="fa fa-clock" />
                                    Facilities
                                </Link> 
                            </li>
                            
                            <li>
                                <Link to="#">
                                    <i className="fa fa-clock" />
                                    Blog
                                </Link> 
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="fa fa-clock" />
                                    Contact
                                </Link> 
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="fa fa-clock" />
                                    Complain / Feedback
                                </Link> 
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 col-xl-3">
                        <div className="widget">
                            <div className="widget-title">
                            <h4>Contact Details</h4>
                            </div>
                            <ul className="recent-posts">
                                <li>
                                    <p>abc@gmail.com</p>
                                </li>
                                <li>
                                    <p>123456782</p>
                                </li>
                                <li>
                                    <p>Siwan, Bihar</p>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* main footer */}
            </footer>
            <div className="bottom-bar">
                <p>
                © 2024 <Link to="https://www.srnsdigitechnologies.co.in/"><u>SRNS Digi Technologies</u></Link>  All Rights Reserved.
                </p>
            </div>
            {/* bottom bar */}
            <div className="scroll-top">
                <i className="fa fa-angle-up" />
            </div>
            {/* scroll top */}
            {/* login / register popup */}
            <div className="cust-modal">
                <span className="model-close">
                <i className="fa fa-times" />
                </span>
                <div className="model-content">
                <div className="registr-form">
                    <div
                    className="bg-image with-pattern"
                    style={{ backgroundImage: "url(assets/images/pattern.jpg)" }}
                    />
                    <div className="registr-content">
                    <h3>Register Now</h3>
                    <p>Get 100s of online Courses For Free</p>
                    <form>
                        <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Complete Name"
                        />
                        </div>
                        <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Email Address"
                        />
                        </div>
                        <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Password"
                        />
                        </div>
                        <button type="submit">Register Now</button>
                    </form>
                    </div>
                    <Link to="#">Have An Account</Link> 
                </div>
                <div className="registr-form show-logn">
                    <div
                    className="bg-image with-pattern"
                    style={{ backgroundImage: "url(assets/images/pattern.jpg)" }}
                    />
                    <div className="registr-content">
                    <h3>Login Now</h3>
                    <p>Get 100s of online Courses For Free</p>
                    <form>
                        <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Email Address"
                        />
                        </div>
                        <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Password"
                        />
                        </div>
                        <button type="submit">Login Now</button>
                    </form>
                    </div>
                    <Link to="#">Don't Have Account</Link> 
                </div>
                </div>
            </div>
            <div className="modal-overlay" />
        </>

    </div>
  )
}

export default Footer
