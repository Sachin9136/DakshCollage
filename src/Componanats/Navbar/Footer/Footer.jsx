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
                            {/* <ul>
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
                            </ul> */}
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 col-xl-3">
                        <div className="widget">
                            <div className="widget-title">
                            <h4>Quick Links 1</h4>
                            </div>
                            <ul className="recent-posts">
                            <li>
                                <Link to="/">
                                    <i className="fa fa-clock" />
                                    Home
                                </Link> 
                            </li>
                            
                            <li>
                                <Link to="/courses">
                                    <i className="fa fa-clock" />
                                    Courses
                                </Link> 
                            </li>
                            
                            <li>
                                <Link to="/blog">
                                    <i className="fa fa-clock" />
                                    Blog
                                </Link> 
                            </li>
                            <li>
                                <Link to="/contact">
                                    <i className="fa fa-clock" />
                                    Contact
                                </Link> 
                            </li>
                            <li>
                                <Link to="/complain_feedback">
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
                            <h4>Quick Links 2</h4>
                            </div>
                            <ul className="recent-posts">
                            <li>
                                <Link to="/academic/6617ea02d2f13fec2791c74f">
                                    <i className="fa fa-clock" />
                                    Addmission Process
                                </Link> 
                            </li>
                            <li>
                                <Link to="/photo_gallery">
                                    <i className="fa fa-clock" />
                                    Photo Gallery
                                </Link> 
                            </li>
                            <li>
                                <Link to="/facilities/65fcfe86f66ce89f0bd3cc82">
                                    <i className="fa fa-clock" />
                                    Smart Classes
                                </Link> 
                            </li>
                            
                            <li>
                                <Link to="/medicalaFacility/65fd3db63604f547c6771576">
                                    <i className="fa fa-clock" />
                                    Medical facility
                                </Link> 
                            </li>
                            <li>
                                <Link to="/department/65fcfcf547311569fd623890">
                                    <i className="fa fa-clock" />
                                    Medical Surgery
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
        </>
    </div>
  )
}

export default Footer
