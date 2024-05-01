import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoursesApi } from "../Redux-toolkit/Slice/NavbarSlice";

const CoursesApi = () => {
  const dispatch = useDispatch();
  const { Courses, error } = useSelector((state) => state.navbar);

  useEffect(() => {
    dispatch(getAllCoursesApi());
  }, []);

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
                    {Courses.data &&
                      Courses.data.map((course, index) => (
                        <li
                          key={index}
                          className="col-sm-6 col-lg-4 trending certified"
                        >
                          <Link to={`/single_courses/${course._id}`}>
                            <div className="pop-course border p-2 rounded">
                              <div className="course-thumb">
                                <div className="">
                                  <img src={course.Image} alt="" />
                                 
                                </div>
                              </div>
                              <div className="course-meta">
                                <div className="course-author">
                                  <p className=" m-0"><b>Duration:</b> {course.duration}</p>
                                  <span className="p-0 m-0"><b>Course: </b>{course.courseName}</span>
                                </div>
                                <h2>
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: truncateDescription(
                                        course.description
                                      ),
                                    }}
                                  ></div>
                                  {/* Render "Read More" link */}
                                  {course.description.split(" ").length > 30 && (
                                    <Link
                                      to={`/single_courses/${course._id}`}
                                      className="read-more-link"
                                    >
                                      <p className="text-warning">Read More...</p>
                                    </Link>
                                  )}
                                </h2>
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

// Function to truncate description to 30 words
const truncateDescription = (description) => {
  const words = description.split(" ");
  if (words.length > 10) {
    return words.slice(0, 10).join(" ") + "...";
  }
  return description;
};

export default CoursesApi;
