import React, {useState, useEffect} from 'react'
import courses from '../data/courses';
import courseimage from '../images/course1.jpg'
import testimonials from '../data/testimonials';

function MainSection() {
    const [randomTestimonials, setRandomTestimonials] = useState([]);

    useEffect(() => {
        const getRandomTestimonials = () => {
            const shuffledTestimonials = [...testimonials].sort(() => Math.random() - 0.5);
            return shuffledTestimonials.slice(0, 2);
        };
        setRandomTestimonials(getRandomTestimonials());
    }, []);

  return (
    <div style={{marginLeft: '20px', textAlign: 'center'}}>
        <h2>About LMS</h2>
        <p>The Learning Management System (LMS) helps students and instructors manage courses, quizzes, and track performance efficiently.</p>
        <hr />
        <h2>Featured Courses:</h2>
        <div style={{display: 'flex', flexDirection: 'right', alignItems: 'center', justifyContent: 'space-between'}}>
        {courses.slice(0,3).map(function(course) {
            return <div key={course.id} style={{marginRight:'15px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)', padding: '10px'}}>
                    <img src={courseimage} alt="Course 1" style={{width: '100%', borderRadius: '5px' }}></img>
                    <h3>Course Name: {course.name}</h3>
                    <div>{course.description}</div>
                    <br />
                    <div style={{marginBottom: '10px'}}>{course.duration}</div>
                </div>;
        })}
        </div>
        <hr />
        <h2>Student Testimonials:</h2>
        <div>
            {randomTestimonials.map((testimonial, index) => (
            <div key={index} style={{ marginBottom: '20px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)', padding: '10px', textAlign: 'center'}}>
                <h3>{testimonial.studentName}</h3>
                <h6>{testimonial.courseName}</h6>
                <p>{testimonial.review}</p>
                <p>
                {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                </p>
            </div>
            ))}
        </div>
    </div>
  );
}

// the course image i imported but is it supposed to be from the list
// random courses each time or can i pick the first 3

export default MainSection