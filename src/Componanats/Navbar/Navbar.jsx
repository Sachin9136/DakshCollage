import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { getaboutusapi, getAcademicDataapi, getAddmissionapi, getFacilitiesApi, getMedicalFacilitiesApi, getDepartmentsApi } from "../../Redux-toolkit/Slice/NavbarSlice";
import logo from "../../img/Logo-Daksh-School-1.png";
import "./Navbar.css";
const token = localStorage.getItem("accessToken")
const CustomNavbar = () => {
  const dispatch = useDispatch();
  const { aboutus, academics, Facilities, MedicalFacility, Departments } = useSelector((state) => state.navbar);

  useEffect(() => {
    dispatch(getaboutusapi());
    dispatch(getAcademicDataapi());
    dispatch(getAddmissionapi());
    dispatch(getFacilitiesApi());
    dispatch(getMedicalFacilitiesApi());
    dispatch(getDepartmentsApi());
  }, []);
  const logout = ()=>{
       localStorage.removeItem("accessToken")
  }
  return (
    <div className="pt-1">
      <div className="container-fluid">
        <div className="row p-0 m-0">
          <div className="col-sm-12 col-md-12 col-lg-6 ">
            <Link to="/" className="logo-div">
              <div>
                <img src={logo} alt="" className="img-fluid rounded" height={80} width={80} />
              </div>
              <div className="px-1">
                <h5 className="m-0 logo-heading pb-1">Daksh B.Sc Nursing College </h5>
                <h6 className="text-dark m-0 logo-content">Daksh School Of Nursing & Hospital</h6>
              </div>
            </Link>
          </div>
          <div className="buttons-nav col-sm-12 col-md-12 col-lg-6 mb-2">
            <Link to="/photo_gallery">
              <button type="button" class="btn btn-success mx-2 gallery-btn">Gallery</button>
            </Link>
            <Link to="/addmisssion_portal">
              <button type="button" class="btn btn-success mx-2 admission-btn">Addmission Portal</button>
            </Link>

            <div className="d-flex">
{  !token &&   <Link to="/login">
                <Button variant="outline-success btn-sm mx-1 login-btn">Login</Button>
              </Link>}
              {token && <Link to="/login">
                <Button variant="outline-success btn-sm mx-1 log-out-btn" onClick={logout}>Logout</Button>
              </Link>}
            </div>
          </div>
        </div>
      </div>
      <Navbar className="d-block" bg="warning" expand="lg">
        <div className="container-fluid p-0 m-0 d-flex justify-content-end px-1">
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="text-dark" activeClassName="active" exact>
                Home
              </Nav.Link>
              <NavDropdown title="About" id="basic-nav-dropdown">
                {aboutus.data &&
                  aboutus.data.map((about, index) => (
                    <NavDropdown.Item key={index} as={Link} to={`/about/${about._id}`}>
                      {about.title}
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>
              <NavDropdown title="Academic" id="basic-nav-dropdown">
                <Link to="/courses" className="p-3 py-0">
                  Courses
                </Link>
                {academics.data &&
                  academics.data.map((academicdata, index) => (
                    <NavDropdown.Item key={index} as={Link} to={`/academic/${academicdata._id}`}>
                      {academicdata.title}
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>
              <NavDropdown title="Gallery" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={`/photo_gallery`}>
                  {"Photo Gallery"}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/videos_gallery`}>
                  {"Video Gallery"}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/press_release`}>
                  {"press Release"}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/blog" activeClassName="" exact>
                Blog
              </Nav.Link>
              <NavDropdown title="Contact" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={`/contact`}>
                  {"Contact Us"}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/contact`}>
                  {"Quick Payment"}
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Facilities" id="basic-nav-dropdown">
                {Facilities.data &&
                  Facilities.data.map((Facilitiesdata, index) => (
                    <NavDropdown.Item key={index} as={Link} to={`/facilities/${Facilitiesdata._id}`}>
                      {Facilitiesdata.title}
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>
              {token && <NavDropdown title="Student" id="basic-nav-dropdown">
                {Facilities.data &&
                  Facilities.data.map((Facilitiesdata, index) => (
                    <NavDropdown.Item key={index} as={Link} to={`/facilities/${Facilitiesdata._id}`}>
                      {Facilitiesdata.title}
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>}
              <NavDropdown title="Medical Facility" id="basic-nav-dropdown">
                {MedicalFacility.data &&
                  MedicalFacility.data.map((MedicalFacilitydata, index) => (
                    <NavDropdown.Item key={index} as={Link} to={`/medicalaFacility/${MedicalFacilitydata._id}`}>
                      {MedicalFacilitydata.title}
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>
              <NavDropdown title="Departments" id="basic-nav-dropdown">
                {Departments.data &&
                  Departments.data.map((departments, index) => (
                    <NavDropdown.Item key={index} as={Link} to={`/department/${departments._id}`}>
                      {departments.title}
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>

              <Nav.Link as={Link} to="/complain_feedback" activeClassName="" exact>
                Complain / Feedback
              </Nav.Link>

              {/* Add more NavDropdown items for other sections */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
