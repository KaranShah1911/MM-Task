import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Quote from './components/Quote';
import CourseList from './components/CourseList';
import './App.css';

const MOCK_COURSES = [
  {
    id: 1,
    title: 'Complete React Guide',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Master React.js from scratch. Learn Hooks, Redux, and more.'
  },
  {
    id: 2,
    title: 'UI/UX Design Masterclass',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Learn to design beautiful user interfaces and user experiences.'
  },
  {
    id: 3,
    title: 'Python for Data Science',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Dive into data analysis and visualization with Python.'
  },
  {
    id: 4,
    title: 'Digital Marketing 101',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Strategies to grow your business and brand online.'
  },
  {
    id: 5,
    title: 'Advanced JavaScript',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Deep dive into closures, prototypes, and async programming.'
  },
  {
    id: 6,
    title: 'Blockchain Basics',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Learn Basics of Blockchain technology and how it works.'
  },
  {
    id: 7,
    title: 'Machine Learning',
    category: 'Technology',
    image: 'https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=1621&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Introduction to Machine Learning and its applications.'
  },
  {
    id: 8,
    title: 'Data Stuctures',
    category: 'Technology',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*J38nYZU7gzu-4lQmtjlSUw.jpeg',
    description: 'Learn the foundation of Data Stuctures and how to implement them.'
  },
  {
    id: 9,
    title: 'Accounting',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Master accounting and financial management.'
  },
  {
    id: 10,
    title: 'Web Development',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Learn HTML and CSS to build responsive and modern websites.'
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState(MOCK_COURSES);

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    }
    else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Filter Courses
  useEffect(() => {
    const lowerTerm = searchTerm.toLowerCase();
    const filtered = MOCK_COURSES.filter(course =>
      course.title.toLowerCase().includes(lowerTerm) ||
      course.category.toLowerCase().includes(lowerTerm)
    );
    setFilteredCourses(filtered);
  }, [searchTerm]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="app-container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Quote />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CourseList courses={filteredCourses} />
    </div>
  );
}

export default App;
