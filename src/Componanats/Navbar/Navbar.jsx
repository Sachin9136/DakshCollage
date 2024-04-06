import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { getaboutusapi, getAcademicDataapi, getAddmissionapi, getFacilitiesApi, getMedicalFacilitiesApi, getDepartmentsApi } from "../../Redux-toolkit/Slice/NavbarSlice";
import logo from "../../img/Logo-Daksh-School-1.png";

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

  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="" className="img-fluid rounded"  height={80} width={80}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" activeClassName="active" exact>
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
              {academics.data &&
                academics.data.map((academicdata, index) => (
                  <NavDropdown.Item key={index} as={Link} to={`/academic/${academicdata._id}`}>
                    {academicdata.title}
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
            <NavDropdown title="Facilities" id="basic-nav-dropdown">
              {Facilities.data &&
                Facilities.data.map((Facilitiesdata, index) => (
                  <NavDropdown.Item key={index} as={Link} to={`/facilities/${Facilitiesdata._id}`}>
                    {Facilitiesdata.title}
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
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
            <NavDropdown title="Gallery" id="basic-nav-dropdown">
              <NavDropdown.Item  as={Link} to={`/photo_gallery`}>
                {"Photo Gallery"}
              </NavDropdown.Item>
              <NavDropdown.Item  as={Link} to={`/videos_gallery`}>
                {"Video Gallery"}
              </NavDropdown.Item>
              <NavDropdown.Item  as={Link} to={`/press_release`}>
                {"press Release"}
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/blog" activeClassName="" exact>
              Blog
            </Nav.Link>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item  as={Link} to={`/contact`}>
                {"Contact Us"}
              </NavDropdown.Item>
              <NavDropdown.Item  as={Link} to={`/contact`}>
                {"Quick Payment"}
              </NavDropdown.Item>
            </NavDropdown>

            {/* Add more NavDropdown items for other sections */}
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-primary btn-sm mx-1">Login</Button>
            <Button variant="outline-success btn-sm mx-1">Singup</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
