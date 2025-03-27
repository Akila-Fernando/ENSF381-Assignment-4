import React from "react";

const EnrolledCourse = ({ course, dropCourse }) => {
  return (
    <div className="enrolled-course">
      <h3>{course.name}</h3>
      <p>Credit Hours: {course.creditHours}</p>
      <p>Enrolled: {course.count}</p>

      <button onClick={() => dropCourse(course.id)}>Drop Course</button>
    </div>
  );
};

export default EnrolledCourse;