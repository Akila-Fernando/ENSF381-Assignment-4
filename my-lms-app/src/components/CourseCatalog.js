import React from "react";
import CourseItem from "./CourseItem";
import courses from "../data/courses";

const CourseCatalog = ({ enroll }) => {
  return (
    <div>
      <h2>Courses</h2>
      {courses.map(course => (
        <CourseItem key={course.id} course={course} enroll={enroll} />
      ))}
    </div>
  );
};

export default CourseCatalog; 