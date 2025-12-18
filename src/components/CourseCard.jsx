import React from 'react';
import './CourseCard.css';

const CourseCard = ({ course }) => {
    return (
        <div className="course-card">
            <div className="card-image">
                <img src={course.image} alt={course.title} />
                <span className="category-tag">{course.category}</span>
            </div>
            <div className="card-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <button className="view-btn">View Course</button>
            </div>
        </div>
    );
};

export default CourseCard;
