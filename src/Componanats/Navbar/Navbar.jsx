import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <>
        <header role="banner" className="banner">
            <div className="full-menu-height m-0 p-0" />
                <div className="main-bar stick">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-1">
                                <div className="logo">
                                    <Link to="/">
                                    <img src="assets/images/logo.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-11 d-flex justify-content-end">
                                <nav role="navigation">
                                    <div className="main-menu">
                                        <ul>
                                            <li className="menu-item-has-children">
                                            <Link to="/" title="">
                                                Home
                                            </Link>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <div>
                                                    About-us
                                                </div>
                                            <ul>
                                                <li>
                                                    <Link to="about">
                                                        About Us
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="chairman_message">
                                                        Chairman Message
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="college_of_glance">
                                                        College of Glance
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/mission_vision">
                                                        Mission/Vision
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/objectives">
                                                        Objectives
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/management">
                                                        Management
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/mandatatory_discussion">
                                                        Mandatatory Discussion
                                                    </Link>
                                                </li>
                                            </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                            <div>
                                                Academic
                                            </div>
                                            <ul>
                                                <li>
                                                    <Link to="/courses">
                                                        Courses
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/admission_process">
                                                        Admission Process
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/calenders">
                                                        Calenders
                                                    </Link>
                                                </li>
                                                {/* <li>
                                                    <Link to="/">
                                                        B.H.U.S Calender
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="pricing-plans.html">
                                                        College Calender
                                                    </Link>
                                                </li> */}
                                            </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <div>
                                                    Gallery
                                                </div>
                                                <ul>
                                                    <li>
                                                        <Link to="/photo_gallery">
                                                            Photo Gallery
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/videos_gallery">
                                                            Video Gallery
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/press_release">
                                                            Press Release
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <div>
                                                    Admission Form
                                                </div>
                                                <ul>
                                                    <li>
                                                        <Link to="/admission_form">
                                                            Admission Form
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/anant_2022">
                                                            Anant-2022 Registration
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                            <Link>
                                                Students
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link to="download" title="">
                                                        Download
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="broshure" title="">
                                                        Broshure
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="syllabus" title="">
                                                        Syllabus
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="study_materials" title="">
                                                        Study Materials
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
                                            <Link>
                                                Contact-Us
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link to="contact" title="">
                                                        Contact us
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
                                            <Link>
                                                Facilities
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link to="smart_classroom">
                                                        Smart Classroom
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="laboratory">
                                                        Laboratory
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="hospital">
                                                        Hospital
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="hospital_mess">
                                                        Hospital Mess
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="abortion">
                                                        Abortion
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="sports">
                                                        Sports
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="librarian_internet">
                                                        Librarian & Internet
                                                    </Link>
                                                </li>
                                            </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                            <Link>
                                                Medical Facilities
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link to="temple">
                                                        Temple
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="canteen">
                                                        Canteen
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="bank_ATM">
                                                        Bank ATM
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="gym">
                                                        Gym
                                                    </Link>
                                                </li>
                                            </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link>
                                                    Departments
                                                </Link>
                                                <ul>
                                                    <li>
                                                        <Link to="fundamental_of_nursing">
                                                            Fundamental of Nursing
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="medical_surgery" title="">
                                                            Medical Surgery
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
                                                <Link to="/blog">
                                                    Blog
                                                </Link>
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
          <div className="full-menu-height" />
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
      </>
    </div>
  );
};

export default Navbar;
