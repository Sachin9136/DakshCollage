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
                            <div className="about-logo">
                            <Link to="/" className="logo-div">
                                <div>
                                    <img src={Logo} alt="" className="img-fluid rounded"  height={80} width={80}/>
                                </div>
                                <div>
                                    <h5 className="m-0 logo-heading">Daksh B.Sc Nursing College / Hospital </h5>
                                    <h6 className="text-dark m-0 logo-content">Mahatma Budh Educational And Research Center</h6>
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
                                <a
                                    href="https://html.webinane.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="f2819b9f829e97979f939b9eb2959f939b9edc919d9f"
                                >
                                    [email&nbsp;protected]
                                </a>
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
                                <li className="col-6 col-sm-12 col-md-6 col-lg-12 col-xl-6">
                                <a href="#" className="social-icn facebook">
                                    <i className="fab fa-facebook-f" />
                                    Facebook
                                </a>
                                </li>
                                <li className="col-6 col-sm-12 col-md-6 col-lg-12 col-xl-6">
                                <a href="#" className="social-icn twitter">
                                    <i className="fab fa-twitter" />
                                    Twitter
                                </a>
                                </li>
                                <li className="col-6 col-sm-12 col-md-6 col-lg-12 col-xl-6">
                                <a href="#" className="social-icn google-plus">
                                    <i className="fab fa-google-plus-g" />
                                    Google+
                                </a>
                                </li>
                                <li className="col-6 col-sm-12 col-md-6 col-lg-12 col-xl-6">
                                <a href="#" className="social-icn linkedin-in">
                                    <i className="fab fa-linkedin-in" />
                                    linkedin
                                </a>
                                </li>
                            </ul>
                            <div className="newsletter">
                                <form>
                                <div className="form-group">
                                    <input
                                    type="email"
                                    className="form-control"
                                    required="required"
                                    placeholder="Subscribe Email"
                                    />
                                </div>
                                <button type="submit" className="btn append-msg-icon">
                                    <i className="fa fa-envelope" />
                                </button>
                                </form>
                            </div>
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
                                <a href="#">
                                    <i className="fa fa-clock" />
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-clock" />
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-clock" />
                                    Facilities
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-clock" />
                                    Complain / Feedback
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-clock" />
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-clock" />
                                    Contact
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 col-xl-3">
                        <div className="widget">
                            <div className="widget-title">
                            <h4>Recent News</h4>
                            </div>
                            <ul className="recent-posts">
                            <li>
                                <h4>
                                <a href="#">New Your Focus to Prevent Overanalysis</a>
                                </h4>
                                <a href="#">
                                <i className="fa fa-clock" />
                                March 18,2019
                                </a>
                            </li>
                            <li>
                                <h4>
                                <a href="#">
                                    Three Social Media Hacks for the Busy Entrepreneur
                                </a>
                                </h4>
                                <a href="#">
                                <i className="fa fa-clock" />
                                March 18,2019
                                </a>
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
                © 2019 <a href="#">Webinane</a> All Rights Reserved.
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
                    <a href="#">Have An Account</a>
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
                    <a href="#">Don't Have Account</a>
                </div>
                </div>
            </div>
            <div className="modal-overlay" />
        </>

    </div>
  )
}

export default Footer
