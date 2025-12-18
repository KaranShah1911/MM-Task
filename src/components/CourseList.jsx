import React from 'react';
import CourseCard from './CourseCard';
import './CourseList.css';

const CourseList = ({ courses }) => {
    if (courses.length === 0) {
        return (
            <div className="no-results">
                <span className="no-results-icon">😕</span>
                <h2>No results found</h2>
                <p>Try adjusting your search terms.</p>
            </div>
        );
    }

    return (
        <div className="course-grid">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
};

export default CourseList;
