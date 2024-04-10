import React,{useState,useEffect} from "react";
import { getSingleCourses } from "../Componanats/api/api_base";
import { useParams } from "react-router-dom";
import axios from "axios";
const Single_Courses = () => {
  const { id } = useParams();
  console.log(getSingleCourses)
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
 console.log(singleCourses)
  return (
    <>
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 py-5 mt-5 mb-5 border rounded ">
                        <table class="table">
                            <tbody>
                                <tr>
                                <th scope="row">Course Name:</th>
                                <td>{singleCourses.courseName} </td>
                                </tr>
                                <tr>
                                <th scope="row">Course Description:</th>
                                <td>{singleCourses.description}</td>
                                </tr>
                                <tr>
                                <th scope="row">Course Duration:</th>
                                <td>{singleCourses.duration}</td>
                                </tr>
                                <tr>
                                <th scope="row">Course price:</th>
                                <td>{singleCourses.price}</td>
                                </tr>
                            </tbody>
                        </table>
                       
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Single_Courses
