import Footer from "../components/Footer";
import Header from "../components/Header";
import CourseCatalog from "../components/CourseCatalog";
import EnrollmentList from "../components/EnrollmentList";
import React, {useState} from "react";

const CoursesPage = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enroll = (course) => {
    setEnrolledCourses([...enrolledCourses, course]);
  };

  return (
    <div className="courses-page">
      <Header />
      <div className="content">
        <CourseCatalog enroll={enroll} />
        <EnrollmentList enrolledCourses={enrolledCourses} />
      </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;