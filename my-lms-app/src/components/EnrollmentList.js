import React, { useEffect } from "react";
import EnrolledCourse from "./EnrolledCourse";

const EnrollmentList = ({ enrolledCourses, dropCourse }) => {
    useEffect(() => {
        console.log("EnrollmentList mounted");
        return () => {
        console.log("EnrollmentList unmounted");
        };
    }, []);
    
    return (
        <div className="enrollment-list">
        <h2>Enrolled Courses:</h2>
        {enrolledCourses.map((course) => (
            <EnrolledCourse key={course.id} course={course} dropCourse={dropCourse} />
        ))}
        </div>
    );
}

export default EnrollmentList;