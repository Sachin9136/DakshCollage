import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Dropdown_img from "../../img/caret-down.png";
import {
  getaboutusapi,
  getAcademicDataapi,
  getAddmissionapi,
  getFacilitiesApi,
  getMedicalFacilitiesApi,
  getDepartmentsApi,
} from "../../Redux-toolkit/Slice/NavbarSlice";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../img/Logo-Daksh-School-1.png";
const Navbar = () => {
  const dispatch = useDispatch();
  const { aboutus, academics,Addmissions, Facilities, MedicalFacility, Departments, } = useSelector((state) => state.navbar);

  useEffect(() => {
    dispatch(getaboutusapi());
    dispatch(getAcademicDataapi());
    dispatch(getAddmissionapi());
    dispatch(getFacilitiesApi());
    dispatch(getMedicalFacilitiesApi());
    dispatch(getDepartmentsApi());

  }, []);

  console.log(Departments.data);
  // -------------------------------------------------------------------------------

  return (
    <div>
      <>
        <>
          <div className="" />
          <header role="banner">
            <div className="" />
            <div className="main-bar stick ">
              <div className="container-fluid">
                <div className="row align-items-center main-navbar">
                  <div className="col-md-1">
                    <div className="logo">
                      <Link to="/">
                        <img src={logo} alt="" width="100%"/>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-11">
                    <nav role="navigation">
                      <div className="main-menu">
                        <ul className="d-flex justify-content-center">
                          <li className="menu-item-has-children">
                            <Link to="/" title="">
                              Home
                            </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="#" title="">
                              About{" "}
                              <img src={Dropdown_img} alt="" width="8px" />
                            </Link>
                            <ul>
                              {aboutus.data &&
                                aboutus.data.map((about, index) => (
                                  <div key={index}>
                                    <li>
                                      <Link to={`/about/${about._id}`} title="">
                                        {about.title}
                                      </Link>
                                    </li>
                                  </div>
                                ))}
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="#" title="">
                              Academic{" "}
                              <img src={Dropdown_img} alt="" width="8px" />
                            </Link>
                            <ul>
                              {academics.data &&
                                academics.data.map((academicdata, index) => (
                                  <div key={index}>
                                    <li>
                                      <Link
                                        to={index === 0 ? `/academic/${academicdata._id}`  : ""}
                                        title=""
                                      >
                                        {academicdata.title}
                                      </Link>
                                    </li>
                                  </div>
                                ))}
                              
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="#" title="">
                              Gallery{" "}
                              <img src={Dropdown_img} alt="" width="8px" />
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
                              Admission Form{" "}
                              <img src={Dropdown_img} alt="" width="8px" />
                            </Link>
                            <ul>
                              {Addmissions.data && Addmissions.data.map((addmissions, index) => (
                                <div key={index}>
                                  <li>
                                    <Link
                                      to={`/addmission_form/${addmissions._id}`}
                                      title=""
                                    >
                                      {addmissions.name}
                                    </Link>
                                  </li>
                                </div>
                              ))}
                              
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="blog" title="">
                              Blog
                            </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="#" title="">
                              Student{" "}
                              <img src={Dropdown_img} alt="" width="8px" />
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
                              Contact{" "}
                              <img src={Dropdown_img} alt="" width="8px" />
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
                              Facilities{" "}
                              <img src={Dropdown_img} alt="" width="8px" />
                            </Link>
                            <ul>
                              {Facilities.data &&
                                Facilities.data.map((Facility, index) => (
                                  <div key={index}>
                                    <li>
                                      <Link to={`/facilities/${Facility._id}`} title="">
                                        {Facility.title}
                                      </Link>
                                    </li>
                                  </div>
                                ))}
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="#" title="">
                              Medical Facilities{" "}
                              <img src={Dropdown_img} alt="" width="8px" />
                            </Link>
                              <ul>
                                {MedicalFacility.data &&
                                  MedicalFacility.data.map((MedicalFacility, index) => (
                                    <div key={index}>
                                      <li>
                                        <Link to={`/medicalaFacility/${MedicalFacility._id}`} title="">
                                          {MedicalFacility.title}
                                        </Link>
                                      </li>
                                    </div>
                                  ))}
                              </ul>   
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="#" title="">
                              Departments{" "}
                              <img src={Dropdown_img} alt="" width="8px" />
                            </Link>
                            <ul>
                                {Departments.data &&
                                  Departments.data.map((Departments, index) => (
                                    <div key={index}>
                                      <li>
                                        <Link to={`/department/${Departments._id}`} title="">
                                          {Departments.title}
                                        </Link>
                                      </li>
                                    </div>
                                  ))}
                              </ul> 
                          </li>
                          {/* <li className="menu-item-has-children">
                            <Link to="#" title="">
                              Approval{" "}
                              <img src={Dropdown_img} alt="" width="8px" />
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
                          </li> */}
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
                      <Link to="/">
                      <img src={logo} alt="" width="85px"/>
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
          <div className="menu-wraper">
            <div className="side-menu">
              <span className="close-menu">
                <i className="fa fa-times" />
              </span>
              <ul>
                <p>
                  <Link to="/">Home</Link>
                </p>
                <li className="menu-item-has-children">
                  <Link to="#" title="">
                    About <img src={Dropdown_img} alt="" width="8px" />
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
                    Academic <img src={Dropdown_img} alt="" width="8px" />
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
                    Gallery <img src={Dropdown_img} alt="" width="8px" />
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
                    Admission Form <img src={Dropdown_img} alt="" width="8px" />
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
                <p>
                  <Link to="/blog" title="">
                    Blog
                  </Link>
                </p>
                <li className="menu-item-has-children">
                  <Link to="#" title="">
                    Student <img src={Dropdown_img} alt="" width="8px" />
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
                    Contact <img src={Dropdown_img} alt="" width="8px" />
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
                    Facilities <img src={Dropdown_img} alt="" width="8px" />
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
                    Medical Facilities{" "}
                    <img src={Dropdown_img} alt="" width="8px" />
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
                    Departments <img src={Dropdown_img} alt="" width="8px" />
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
                    Approval <img src={Dropdown_img} alt="" width="8px" />
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
          </div>
        </>
      </>
    </div>
  );
};

export default Navbar;
