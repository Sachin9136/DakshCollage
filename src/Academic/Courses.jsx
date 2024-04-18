import React from 'react';
import "./Courses.css";
import CoursesApi from "./CoursesApi";

const Courses = () => {
  return (
    <div>
      <div className="col-sm-12 d-flex align-items-center justify-content-center banner-img w-100">
        <div className="text-white h1">Courses</div>
      </div>
      <main role="main">
        {/* Banner */}
        <CoursesApi />
        {/* feature */}
      </main> 
    </div>
  )
}

export default Courses
