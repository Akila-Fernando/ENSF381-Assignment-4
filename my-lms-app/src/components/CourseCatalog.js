import React from "react";
import CourseItem from "./CourseItem";
import courses from "../data/courses";
import "./CourseCatalog.css";

const CourseCatalog = ({ enroll }) => {
  return (
    <div class name="course-catalog">
      <h2>Courses</h2>
      <div className="course-grid">
      {courses.map(course => (
        <CourseItem key={course.id} course={course} enroll={enroll} />
      ))}
      </div>
    </div>
  );
};

export default CourseCatalog;