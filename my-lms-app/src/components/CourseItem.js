import React, {useState} from 'react';
import courseimage from '../images/course1.jpg'

function CourseItem({course}) {
    const [isDesc, setShowDesc] = useState(false);

    return (
        <div className="course-item" onMouseEnter={() => setShowDesc(true)} onMouseLeave={() => setShowDesc(false)}>
            <img src={courseimage} alt="Course 1" style={{width: '100%', borderRadius: '5px'}}></img>
            <h3>Course Name: {course.name}</h3>
            <div>{isDesc ? course.description : null}</div>
            <br />
            <div style={{marginBottom: '10px'}}>{course.duration}</div>

            {showDescription && <p className="description">{course.description}</p>}
            
            <button onClick={() => enrollCourse(course)}>Enroll Now</button>
        </div>
    );

}

export default CourseItem;