import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../../img/Logo-Daksh-School-1.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
        
        <>
            <footer role="contentinfo">
                <div className="quick-link-bar">
                <div className="container">
                    <p className='text-center'>
                    <strong>
                        <i className="fa fa-plus" />
                        Working Time
                    </strong>{" "}
                    - Mon To Sat - 8 AM To 4 PM
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
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 col-xl-3">
                        <div className="widget">
                            <div className="widget-title">
                            <h4>Quick Links 1</h4>
                            </div>
                            <ul className="recent-posts">
                            <li className="mb-2" >
                                <Link to="/">
                                    <i className="fa fa-clock" />
                                    Home
                                </Link> 
                            </li>
                            
                            <li className="mb-2" >
                                <Link to="/courses">
                                    <i className="fa fa-clock" />
                                    Courses
                                </Link> 
                            </li>
                            
                            <li className="mb-2" >
                                <Link to="/blog">
                                    <i className="fa fa-clock" />
                                    Blog
                                </Link> 
                            </li>
                            <li className="mb-2" >
                                <Link to="/contact">
                                    <i className="fa fa-clock" />
                                    Contact
                                </Link> 
                            </li>
                            <li className="mb-2" >
                                <Link to="/complain_feedback">
                                    <i className="fa fa-clock" />
                                    Complain / Feedback
                                </Link> 
                            </li>
                            <li className="mb-2" >
                                <Link to="/photo_gallery">
                                    <i className="fa fa-clock" />
                                    Photo Gallery
                                </Link> 
                            </li>
                            <li className="mb-2" >
                                <Link to="/enterance_form">
                                    <i className="fa fa-clock" />
                                    Entrance Form
                                </Link> 
                            </li>
                            <li className="mb-2" >
                                <Link to="/Privacy_Policy">
                                    <i className="fa fa-clock" />
                                    Privacy Policy
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
                            <li className="mb-2" >
                                <Link to="/academic/6617ea02d2f13fec2791c74f">
                                    <i className="fa fa-clock" />
                                    Addmission Process
                                </Link> 
                            </li>
                            <li className="mb-2" >
                                <Link to="/facilities/65fcfe86f66ce89f0bd3cc82">
                                    <i className="fa fa-clock" />
                                    Smart Classes
                                </Link> 
                            </li>
                            <li className="mb-2" >
                                <Link to="/medicalaFacility/65fd3db63604f547c6771576">
                                    <i className="fa fa-clock" />
                                    Medical facility
                                </Link> 
                            </li>
                            <li className="mb-2" >
                                <Link to="/department/65fcfcf547311569fd623890">
                                    <i className="fa fa-clock" />
                                    Medical Surgery
                                </Link> 
                            </li>
                            <li className="mb-2" >
                                <a href="https://state.bihar.gov.in/health/CitizenHome.html" target='Blank'>
                                    <i className="fa fa-clock" />
                                    Health Department
                                </a>
                            </li>
                            <li className="mb-2" >
                                <a href="https://bnrcpatna.com/" target='Blank'>
                                    <i className="fa fa-clock" />
                                    BNRC
                                </a>
                            </li>
                            <li className="mb-2" >
                                <a href="https://buhs.ac.in/WP/BHUEDU/Default.aspx" target='Blank'>
                                    <i className="fa fa-clock" />
                                    B.U.H.S
                                </a>
                            </li>
                            <li className="mb-2" >
                                <a href="https://www.indiannursingcouncil.org/" target='Blank'>
                                    <i className="fa fa-clock" />
                                    INCD
                                </a>
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
                                <li className="mb-2" >
                                    <p className='m-0'><i class="fa-regular fa-envelope text-light"></i>  enquiry@dakshsiwan.co.in</p>
                                    <p className='m-0'><i class="fa-regular fa-envelope text-light"></i>  principal@dakshsiwan.co.in</p>
                                </li>
                                <li className="mb-2" >
                                    <p className='m-0'><i class="fa-solid fa-phone text-light"></i>  7970800450, 7970845003, 7970845005</p>
                                </li>
                                <li className="mb-2" >
                                    <p className='m-0'><i class="fa-solid fa-location-dot text-light"></i>  Siwan, Bihar</p>
                                </li>
                                <li className='d-flex justify-content-between mt-3 footer-icons px-3'>
                                    <a href="https://www.facebook.com/profile.php?id=61559751117895" target='blank'><i class="fa-brands fa-facebook"></i></a>
                                    <a href="https://x.com/PankajS58475813" target='blank'><i class="fa-brands fa-x-twitter"></i></a>
                                    <a href="https://www.instagram.com/dakshcollegeswn/" target='blank'><i class="fa-brands fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/daksh-bsc-nursing-college-652681309/" target='blank'><i class="fa-brands fa-linkedin-in"></i></a>
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
