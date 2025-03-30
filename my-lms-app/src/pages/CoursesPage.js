import Footer from "../components/Footer";
import Header from "../components/Header";
import CourseCatalog from "../components/CourseCatalog";
import EnrollmentList from "../components/EnrollmentList";
import React, {useState} from "react";


function CoursesPage(){
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  
  const handleEnroll = (course) => {
    if (!enrolledCourses.some((c) => c.name === course.name)) {
      setEnrolledCourses((prev) => [...prev, course]);
    }
  };

  const handleDrop = (course) => {
    setEnrolledCourses((prev) => prev.filter((c) => c.name !== course.name));
  };

  return (
      <div className="courses-page">   
        <Header />   
        <div className="content">   
          <CourseCatalog onEnroll={handleEnroll} />
          <EnrollmentList enrolledCourses={enrolledCourses} onDrop={handleDrop} />
        </div>   
        <Footer />   
      </div> 
  );
}

// function CoursesPage(){
//   return (
//     <div className="courses-page">   
//       <Header />   
//       <div className="content">   
//         <CourseCatalog />   
//         <EnrollmentList />   
//       </div>   
//       <Footer />   
//     </div>
//   );
// }

export default CoursesPage;