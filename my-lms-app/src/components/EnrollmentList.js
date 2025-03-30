import React, {useEffect, useState} from "react";
import "./EnrollmentList.css";
import EnrolledCourse from "./EnrolledCourse";

const EnrollmentList = ({ enrolledCourses, dropCourse }) => {
    const [totalCredHrs, setTotalCredHrs] = useState(0);

    useEffect(() => {
        const total = enrolledCourses.reduce((sum, course) => sum + 3, 0);
        setTotalCredHrs(total);}, [enrolledCourses]);

    
    useEffect(() => {
        localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));}, [enrolledCourses]);

    useEffect(() => {
        const savedCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
        if (savedCourses.length > 0) {
        savedCourses.forEach((course) => {
            if (!enrolledCourses.some((c) => c.id === course.id)) {
            enrolledCourses.push(course);
            }
        });
        }
    }, []);

    return (
        <div className="enrollment-list">
          <h2>Enrolled Courses</h2>
          {enrolledCourses.length > 0 ? (
            enrolledCourses.map((course) => (
              <EnrolledCourse key={course.id} course={course} dropCourse={dropCourse} />
            ))
          ) : (
            <p>Not Enrolled in any Courses.</p>
          )}
          <p>Total Credit Hours: {totalCredHrs}</p>
        </div>
      );
    };

export default EnrollmentList;