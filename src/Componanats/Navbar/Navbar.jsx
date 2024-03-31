import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <>
        <>
          <div className="" />
          <header role="banner">
            <div className="full-menu-height" />
            <div className="main-bar stick ">
              <div className="container-fluid">
                <div className="row align-items-center main-navbar">
                  <div className="col-md-2">
                    <div className="logo">
                      <Link to="/">
                        <img src="assets/images/logo.png" alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <nav role="navigation">
                      <div className="main-menu">
                        <ul>
                          <li className="menu-item-has-children">
                            <Link to="/" title="">
                              Home
                            </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="#" title="">
                              About
                            </Link>
                            <ul>
                              <li>
                                <Link to="about" title="">
                                  About Us
                                </Link>
                              </li>
                              <li>
                                <Link to="chairman_message" title="">
                                  Chairman Message
                                </Link>
                              </li>
                              <li>
                                <Link to="college_of_glance" title="">
                                  College of Glance
                                </Link>
                              </li>
                              <li>
                                <Link to="mission_vision" title="">
                                  Mission / Vision
                                </Link>
                              </li>
                              <li>
                                <Link to="objectives" title="">
                                  Objectives
                                </Link>
                              </li>
                              <li>
                                <Link to="management" title="">
                                  Management
                                </Link>
                              </li>
                              <li>
                                <Link to="mandatatory_discussion" title="">
                                  Mandatory Discussion
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="#" title="">
                              Academic
                            </Link>
                            <ul>
                              <li>
                                <Link to="courses" title="">
                                  Courses
                                </Link>
                              </li>
                              <li>
                                <Link to="admission_process" title="">
                                  Admission Process
                                </Link>
                              </li>
                              <li>
                                <Link to="calenders" title="">
                                  Calenders
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="#" title="">
                              Gallery
                            </Link>
                            <ul>
                              <li>
                                <Link to="photo_gallery" title="">
                                  Photo Gallery
                                </Link>
                              </li>
                              <li>
                                <Link to="videos_gallery" title="">
                                  Video Gallery
                                </Link>
                              </li>
                              <li>
                                <Link to="press_release" title="">
                                  Press Release
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="#" title="">
                              Admission Form
                            </Link>
                            <ul>
                              <li>
                                <Link to="admission_form" title="">
                                    Admission Form
                                </Link>
                              </li>
                              <li>
                                <Link to="gallery2.html" title="">
                                    Anant 2022
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="blog" title="">
                              Blog
                            </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="#" title="">
                              Student
                            </Link>
                            <ul>
                              <li>
                                <Link to="broshure" title="">
                                  Download Brochure
                                </Link>
                              </li>
                              <li>
                                <Link to="syllabus" title="">
                                  Syllabus
                                </Link>
                              </li>
                              <li>
                                <Link to="study_materials" title="">
                                  Study Material
                                </Link>
                              </li>
                              <li>
                                <Link to="alumni_association" title="">
                                  Alumni Association
                                </Link>
                              </li>
                              <li>
                                <Link to="anti_ragging" title="">
                                  Anti Ragging
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="#" title="">
                              Contact
                            </Link>
                            <ul>
                              <li>
                                <Link to="contact" title="">
                                  Contact Us
                                </Link>
                              </li>
                              <li>
                                <Link to="quick_payment" title="">
                                  Quick Payment
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="#" title="">
                              Facilities
                            </Link>
                            <ul>
                              <li>
                                <Link to="smart_classroom" title="">
                                  Smart Classroom
                                </Link>
                              </li>
                              <li>
                                <Link to="laboratory" title="">
                                  Laboratory
                                </Link>
                              </li>
                              <li>
                                <Link to="hospital" title="">
                                  Hospital
                                </Link>
                              </li>
                              <li>
                                <Link to="hospital_mess" title="">
                                Hospital Mess
                                </Link>
                              </li>
                              <li>
                                <Link to="abortion" title="">
                                Abortion 
                                </Link>
                              </li>
                              <li>
                                <Link to="sports" title="">
                                Sports 
                                </Link>
                              </li>
                              <li>
                                <Link to="librarian_internet" title="">
                                Librarian & Internet
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="#" title="">
                              Medical Facilities
                            </Link>
                            <ul>
                              <li>
                                <Link to="canteen" title="">
                                  Canteen
                                </Link>
                              </li>
                              <li>
                                <Link to="bank_ATM" title="">
                                  Bank ATM
                                </Link>
                              </li>
                              <li>
                                <Link to="temple" title="">
                                  Saraswati Temple
                                </Link>
                              </li>
                              <li>
                                <Link to="gym" title="">
                                  GYM
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="#" title="">
                              Departments
                            </Link>
                            <ul>
                              <li>
                                <Link to="fundamental_of_nursing" title="">
                                  Fundamental of Nursing
                                </Link>
                              </li>
                              <li>
                                <Link to="medical_surgery" title="">
                                  Medical Surgery Nursing
                                </Link>
                              </li>
                              <li>
                                <Link to="obs_gyne_nursing" title="">
                                  Obs & Gyne Nursing
                                </Link>
                              </li>
                              <li>
                                <Link to="psychatric_nursing" title="">
                                  Psychatric Nursing
                                </Link>
                              </li>
                              <li>
                                <Link to="community_health_nursing" title="">
                                  Community Health Nursing
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="#" title="">
                              Approval
                            </Link>
                            <ul>
                              <li>
                                <Link to="/" title="">
                                Approval
                                </Link>
                              </li>
                              <li>
                                <Link to="/" title="">
                                Approval
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="responsive-header">
            <div className="" />
            <div className="main-bar stick">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-4 col-sm-3">
                    <div className="logo">
                      <Link to="#">
                        <img src="assets/images/logo.png" alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-8 col-sm-9 text-right">
                    {/* <Link to="#" className="butn1 butn-light">
                      Free Consulting
                    </Link> */}
                    {/*  */}
                    {/* <Link to="#" className="cart-icon">
                      <i className="fa fa-shopping-cart" />
                      <span>0</span>
                    </Link> */}
                    <span className="resp-btn">
                      <i />
                      <i />
                      <i />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-wraper">
            <div className="side-menu">
              <span className="close-menu">
                <i className="fa fa-times" />
              </span>
              <ul>
              <li className="menu-item-has-children">
                    <Link to="/" title="">
                        Home
                    </Link>
                </li>
                <li className="menu-item-has-children">
                <Link to="#" title="">
                    About
                </Link>
                <ul>
                    <li>
                    <Link to="about" title="">
                        About Us
                    </Link>
                    </li>
                    <li>
                    <Link to="chairman_message" title="">
                        Chairman Message
                    </Link>
                    </li>
                    <li>
                    <Link to="college_of_glance" title="">
                        College of Glance
                    </Link>
                    </li>
                    <li>
                    <Link to="mission_vision" title="">
                        Mission / Vision
                    </Link>
                    </li>
                    <li>
                    <Link to="objectives" title="">
                        Objectives
                    </Link>
                    </li>
                    <li>
                    <Link to="management" title="">
                        Management
                    </Link>
                    </li>
                    <li>
                    <Link to="mandatatory_discussion" title="">
                        Mandatory Discussion
                    </Link>
                    </li>
                </ul>
                </li>
                <li className="menu-item-has-children">
                <Link to="#" title="">
                    Academic
                </Link>
                <ul>
                    <li>
                    <Link to="courses" title="">
                        Courses
                    </Link>
                    </li>
                    <li>
                    <Link to="admission_process" title="">
                        Admission Process
                    </Link>
                    </li>
                    <li>
                    <Link to="calenders" title="">
                        Calenders
                    </Link>
                    </li>
                </ul>
                </li>
                <li className="menu-item-has-children">
                <Link to="#" title="">
                    Gallery
                </Link>
                <ul>
                    <li>
                    <Link to="photo_gallery" title="">
                        Photo Gallery
                    </Link>
                    </li>
                    <li>
                    <Link to="videos_gallery" title="">
                        Video Gallery
                    </Link>
                    </li>
                    <li>
                    <Link to="press_release" title="">
                        Press Release
                    </Link>
                    </li>
                </ul>
                </li>
                <li className="menu-item-has-children">
                <Link to="#" title="">
                    Admission Form
                </Link>
                <ul>
                    <li>
                    <Link to="admission_form" title="">
                        Admission Form
                    </Link>
                    </li>
                    <li>
                    <Link to="gallery2.html" title="">
                        Anant 2022
                    </Link>
                    </li>
                </ul>
                </li>
                <li className="menu-item-has-children">
                <Link to="#" title="">
                    Blog
                </Link>
                <ul>
                    <li>
                        <Link to="blog">
                            Blogs
                        </Link>
                    </li>
                </ul>
                </li>
                <li className="menu-item-has-children">
                <Link to="#" title="">
                    Student
                </Link>
                <ul>
                    <li>
                    <Link to="broshure" title="">
                        Download Brochure
                    </Link>
                    </li>
                    <li>
                    <Link to="syllabus" title="">
                        Syllabus
                    </Link>
                    </li>
                    <li>
                    <Link to="study_materials" title="">
                        Study Material
                    </Link>
                    </li>
                    <li>
                    <Link to="alumni_association" title="">
                        Alumni Association
                    </Link>
                    </li>
                    <li>
                    <Link to="anti_ragging" title="">
                        Anti Ragging
                    </Link>
                    </li>
                </ul>
                </li>
                <li className="menu-item-has-children">
                <Link to="#" title="">
                    Contact
                </Link>
                <ul>
                    <li>
                    <Link to="contact" title="">
                        Contact Us
                    </Link>
                    </li>
                    <li>
                    <Link to="quick_payment" title="">
                        Quick Payment
                    </Link>
                    </li>
                </ul>
                </li>
                <li className="menu-item-has-children">
                <Link to="#" title="">
                    Facilities
                </Link>
                <ul>
                    <li>
                    <Link to="smart_classroom" title="">
                        Smart Classroom
                    </Link>
                    </li>
                    <li>
                    <Link to="laboratory" title="">
                        Laboratory
                    </Link>
                    </li>
                    <li>
                    <Link to="hospital" title="">
                        Hospital
                    </Link>
                    </li>
                    <li>
                    <Link to="hospital_mess" title="">
                    Hospital Mess
                    </Link>
                    </li>
                    <li>
                    <Link to="abortion" title="">
                    Abortion 
                    </Link>
                    </li>
                    <li>
                    <Link to="sports" title="">
                    Sports 
                    </Link>
                    </li>
                    <li>
                    <Link to="librarian_internet" title="">
                    Librarian & Internet
                    </Link>
                    </li>
                </ul>
                </li>
                <li className="menu-item-has-children">
                <Link to="#" title="">
                    Medical Facilities
                </Link>
                <ul>
                    <li>
                    <Link to="canteen" title="">
                        Canteen
                    </Link>
                    </li>
                    <li>
                    <Link to="bank_ATM" title="">
                        Bank ATM
                    </Link>
                    </li>
                    <li>
                    <Link to="temple" title="">
                        Saraswati Temple
                    </Link>
                    </li>
                    <li>
                    <Link to="gym" title="">
                        GYM
                    </Link>
                    </li>
                </ul>
                </li>
                <li className="menu-item-has-children">
                <Link to="#" title="">
                    Departments
                </Link>
                <ul>
                    <li>
                    <Link to="fundamental_of_nursing" title="">
                        Fundamental of Nursing
                    </Link>
                    </li>
                    <li>
                    <Link to="medical_surgery" title="">
                        Medical Surgery Nursing
                    </Link>
                    </li>
                    <li>
                    <Link to="obs_gyne_nursing" title="">
                        Obs & Gyne Nursing
                    </Link>
                    </li>
                    <li>
                    <Link to="psychatric_nursing" title="">
                        Psychatric Nursing
                    </Link>
                    </li>
                    <li>
                    <Link to="community_health_nursing" title="">
                        Community Health Nursing
                    </Link>
                    </li>
                </ul>
                </li>
                <li className="menu-item-has-children">
                <Link to="#" title="">
                    Approval
                </Link>
                <ul>
                    <li>
                    <Link to="/" title="">
                    Approval
                    </Link>
                    </li>
                    <li>
                    <Link to="/" title="">
                    Approval
                    </Link>
                    </li>
                </ul>
                </li>
              </ul>
              {/* <div className="side-meta topbar style2">
                <ul className="topbar-contact">
                  <li>
                    <Link to="https://html.webinane.com/cdn-cgi/l/email-protection#02777a6c6373746b42656f636b6e2c616d6f">
                      <i className="flaticon-mail" />
                      <span
                        className="__cf_email__"
                        data-cfemail="d7a2afb9b6a6a1be97b0bab6bebbf9b4b8ba"
                      >
                        [email&nbsp;protected]
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="tel:8004896589">
                      <i className="flaticon-phone" />( 800 ) 489 6589
                    </Link>
                  </li>
                </ul>
                <ul className="socials">
                  <li>
                    <Link to="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-google-plus-g" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </>
      </>
    </div>
  );
};

export default Navbar;
