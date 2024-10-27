import React, { useState, useEffect } from 'react';
import CourseCards from './CourseCards';

function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [placeholder, setPlaceholder] = useState('');

  const placeholders = [
    'Learn Java',
  'Master C',
  'Explore C++',
  'Discover C#',
  'Build with Ruby',
  'Unlock Python',
  'Style with CSS',
  'Develop with Go',
  'Create with HTML',
  'Enhance with JavaScript',
  'Build with Kotlin',
  'Scale with Node.js',
  'Craft with Swift',
  'Develop with PHP',
  'Build with React.js',
  'Streamline with Next.js',
  'Secure with Rust',
  'Type with TypeScript',
  'Craft with Dart',
  'Analyze with R',
  'Query with SQL',
  'Scale with Scala',
  'Automate with Shell Scripting',
  'Streamline with Groovy',
  'Optimize with Assembly',
  'Elevate with Elixir',
  'Develop with F#',
  'Explore Haskell',
  'Create with Lua',
  'Build with Objective-C',
  'Master Perl',
  'Solve with Prolog',
  'Innovate with Clojure'
  ];

  let index = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholder(placeholders[index]);
      index = (index + 1) % placeholders.length;
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(intervalId);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div id='courses'>
      <div className="course-head">
        <div className="search-icon">
          <h2>Our Courses</h2>
          <div className="search-bar">
            <input
              type="text"
              placeholder={placeholder}
              spellCheck="false"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className='mag'><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>
      </div>
      <CourseCards searchTerm={searchTerm} />
    </div>
  );
}

export default Courses;