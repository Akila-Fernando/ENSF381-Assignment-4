import React from "react";
import CourseItem from "./CourseItem";
import courses from "../data/courses";
import "./CourseCatalog.css";

const CourseCatalog = ({ enrollCourse }) => {
  return (
    <div class name="course-catalog">
      <h2>Courses</h2>
      <div className="course-grid">
      {courses.map(course => (
        <CourseItem key={course.id} 
        course={course} 
        enrollCourse={enrollCourse} />
      ))}
      </div>
    </div>
  );
};

export default CourseCatalog;