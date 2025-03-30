import React, {useState} from 'react';
import courseimage from '../images/course1.jpg'
import "./CourseItem.css";

const CourseItem = ({course, enroll}) => {
    const [showDescription, setShowDesc] = useState(false);

    return (
        
        <div className="course-item" onMouseEnter={() => setShowDesc(true)} onMouseLeave={() => setShowDesc(false)}>

            <img src={courseimage} alt = "course-pic" width={250} height={250}></img>
            <h3>Course Name: {course.name}</h3>
            <p>{course.instructor}</p>
            <p>{course.duration}</p>

            {showDescription && <p>{course.description}</p>}

            <button onClick={() => enroll(course)}>Enroll Now</button>
        </div>
    );

}

export default CourseItem;