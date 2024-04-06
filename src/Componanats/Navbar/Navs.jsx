import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown_img from "../../img/caret-down.png"; 
import { getAboutUs } from "../api/api_base";
import { getAcademicData } from "../api/api_base";
import { getAddmission } from "../api/api_base";
import axios from "axios";

const Navs = () => {

    const [about_us, setabout] = useState([]);
    const [academic, setAcademic] = useState([]);
    const [addmission, setAddmission] = useState([]);

    const getAboutApi = async () => {
        try {
          const response = await axios.get(getAboutUs);
          setabout(response.data.data);
        } catch (error) {
          console.error("Error fetching blogs:", error);
        }
      };
    
      useEffect(() => {
        getAboutApi();
      }, []);
    
    // -------------------------------------------------------------------------------
    
      const getAcademicApi = async () => {
        try {
          const response = await axios.get(getAcademicData);
          setAcademic(response.data.data);
        } catch (error) {
          console.error("Error fetching blogs:", error);
        }
      };
    
      useEffect(() => {
        getAcademicApi();
      }, []);
    
      // -------------------------------------------------------------------------------
    
      const getAddmissionApi = async () => {
        try {
          const response = await axios.get(getAddmission);
          setAddmission(response.data.data);
        } catch (error) {
          console.error("Error fetching blogs:", error);
        }
      };
    
      useEffect(() => {
        getAddmissionApi();
      }, []);
    
      console.log(addmission);



  return (
    <div>
        <ul>
            <li
            className="menu-item-has-children"
            >
            <Link to="/" title="">
                Home
            </Link>
            </li>
            <li className="menu-item-has-children">
            <Link to="#" title="">
                About <img src={Dropdown_img} alt="" width="8px"/>
            </Link>
            <ul>
                {about_us.map((about, index) => (
                <div key={index}>
                    <li>
                    <Link to={`/about/${about._id}`} title="">
                        {about.title}
                    </Link>
                    </li>
                </div>
                ))};
            </ul>
            </li>
            <li className="menu-item-has-children">
            <Link to="#" title="">
                Academic <img src={Dropdown_img} alt="" width="8px"/>
            </Link>
            <ul>
                {academic.map((academicdata, index) => (
                <div key={index}>
                    <li>
                    <Link to={`/academic/${academicdata._id}`} title="">
                        {academicdata.title}
                    </Link>
                    </li>
                </div>
                ))};
            </ul>
            </li>
            <li className="menu-item-has-children">
            <Link to="#" title="">
                Gallery <img src={Dropdown_img} alt="" width="8px"/>
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
                Admission Form <img src={Dropdown_img} alt="" width="8px"/>
            </Link>
            <ul>
                {addmission.map((addmissions, index) => (
                <div key={index}>
                    <li>
                    <Link to={`/addmission_form/${addmissions._id}`} title="">
                        {addmissions.name}
                    </Link>
                    </li>
                </div>
                ))};
            </ul>
            </li>
            <li className="menu-item-has-children">
            <Link to="blog" title="">
                Blog
            </Link>
            </li>
            <li className="menu-item-has-children">
            <Link to="#" title="">
                Student <img src={Dropdown_img} alt="" width="8px"/>
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
                Contact <img src={Dropdown_img} alt="" width="8px"/>
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
                Facilities <img src={Dropdown_img} alt="" width="8px"/>
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
                Medical Facilities <img src={Dropdown_img} alt="" width="8px"/>
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
                Departments <img src={Dropdown_img} alt="" width="8px"/>
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
                Approval <img src={Dropdown_img} alt="" width="8px"/>
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
  )
}

export default Navs
