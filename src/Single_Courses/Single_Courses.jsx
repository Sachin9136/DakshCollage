import React, { useState, useEffect } from "react";
import { getSingleCourses } from "../Componanats/api/api_base";
import { useParams } from "react-router-dom";
import axios from "axios";

const Single_Courses = () => {
  const { id } = useParams();
  const [singleCourses, setSingleCourses] = useState({});

  const singleCoursesApi = async () => {
    try {
      const response = await axios.get(`${getSingleCourses}/${id}`);
      setSingleCourses(response.data.data);
    } catch (error) {
      console.log(error); 
    } 
  };

  useEffect(() => {
    singleCoursesApi();
  }, []);

  const capitalizeFirstLetter = (str) => {
    // Check if the string is defined and not empty
    if (str && typeof str === 'string') {
      return str.replace(/\b\w/g, (char) => char.toUpperCase());
    }
    return ''; 
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 py-5 mt-5 mb-5 border rounded ">
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">Course Name:</th>
                    <td>{capitalizeFirstLetter(singleCourses.courseName)}</td>
                  </tr>
                  <tr>
                    <th scope="row">Course Description:</th>
                    <td dangerouslySetInnerHTML={{ __html: capitalizeFirstLetter(singleCourses.description) }}></td>
                  </tr>
                  <tr>
                    <th scope="row">Course Duration:</th>
                    <td>{capitalizeFirstLetter(singleCourses.duration)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single_Courses;
