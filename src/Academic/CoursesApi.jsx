import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoursesApi } from "../Redux-toolkit/Slice/NavbarSlice";


const CoursesApi = () => {
    const dispatch = useDispatch();
    let { Courses,error, } = useSelector((state) => state.navbar);
  
    useEffect(() => {
      dispatch(getAllCoursesApi());
    }, []);
    let newCourses = Courses.data
    console.log(newCourses) 
  if (error) { 
    return <div>Error fetching blogs. Please try again later.</div>;
  }
  return (
    <div>
      <section>
        <div className="block inner-pages">
          <div className="container">
            <div className="row">
              <div className="col-md-11 col-xl-10 mx-auto">
                <div className="course-page">
                  <ul className="row masonry d-flex">
                    {Courses.data && Courses.data.map((course, index) => (
                      <li
                        key={index}
                        className="col-sm-6 col-lg-4 trending certified"
                      >
                        <Link to={`/single_courses/${course._id}`}>
                          <div className="pop-course border p-2 rounded">
                            <div className="course-thumb">
                              <div className="">
                                <img src={course.Image} alt="" />
                                <span className="text-dark">
                                  {course.price} /INR
                                </span>
                                <a href="course-detail.html" className="butn">
                                  {course.duration}
                                </a>
                              </div>
                            </div>
                            <div className="course-meta">
                              <div className="course-author">
                                <img
                                  src="assets/images/author.png"
                                  alt=""
                                />
                                <span>{course.courseName}</span>
                              </div>
                              <h2><div dangerouslySetInnerHTML={{ __html: course.description }}></div></h2>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesApi;
