import React from "react";

const EnrolledCourse = ({ course, dropCourse }) => {
  return (
    <div className="enrolled-course">
      <h3>{course.name}</h3>
      <p>Credit Hours: 3</p>

      <button onClick={() => dropCourse(course.id)}>Drop Course</button>
    </div>
  );
};

export default EnrolledCourse;