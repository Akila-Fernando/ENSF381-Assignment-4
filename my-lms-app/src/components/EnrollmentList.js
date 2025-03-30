import React, { useEffect } from "react";
import EnrolledCourse from "./EnrolledCourse";

const EnrollmentList = ({ enrolledCourses }) => {
    return (
      <div className="enrollment-list">
        <h2>Enrolled Courses</h2>
        {enrolledCourses.length > 0 ? (
          enrolledCourses.map((course) => (
            <div key={course.id} className="enrolled-course">
              <h3>{course.name}</h3>
              <p>{course.instructor}</p>
            </div>
          ))
        ) : (
          <p>No courses enrolled yet.</p>
        )}
      </div>
    );
  };

export default EnrollmentList;
