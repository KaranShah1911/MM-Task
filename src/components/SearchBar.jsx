import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="search-bar-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search courses by name or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="search-icon">🔍</span>
        </div>
    );
};

export default SearchBar;
