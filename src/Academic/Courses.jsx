import React from 'react';
import "./Courses.css";
import CoursesApi from "./CoursesApi";

const Courses = () => {
  return (
    <div>
      <main role="main">
        {/* Banner */}
        <CoursesApi />
        {/* feature */}
      </main> 
    </div>
  )
}

export default Courses
