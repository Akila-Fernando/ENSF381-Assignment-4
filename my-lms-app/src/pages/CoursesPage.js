import React, { useState } from "react";
import Header from "../components/Header";
import CourseCatalog from "../components/CourseCatalog";
import EnrollmentList from "../components/EnrollmentList";
import Footer from "../components/Footer";

const CoursesPage = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enroll = (course) => {
    if (!enrolledCourses.includes(course)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  const dropCourse = (courseId) => {
    setEnrolledCourses(enrolledCourses.filter(course => course.id !== courseId));
  };

  return (
    <div className="courses-page">
      <Header />
      <div className="content">
        <CourseCatalog enroll={enroll} enrolledCourses={enrolledCourses} />
        <EnrollmentList enrolledCourses={enrolledCourses} dropCourse={dropCourse} />
      </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;