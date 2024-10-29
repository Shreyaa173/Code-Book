import React, { useState } from "react";
import "./HelpCenter.css"; // Import the stylesheet

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const helpTopics = [
    { title: "Getting Started", description: "Learn the basics of CodeBook and how to navigate the platform.", icon: "📘" },
    { title: "Account Management", description: "Guidance on creating and managing your account.", icon: "👤" },
    { title: "Courses & Resources", description: "Explore available courses and resources on CodeBook.", icon: "📚" },
    { title: "Community & Collaboration", description: "Discover ways to engage with the community.", icon: "💬" },
    { title: "Technical Support", description: "Get help with technical issues and platform-related questions.", icon: "🛠️" },
    { title: "FAQs", description: "Find answers to frequently asked questions.", icon: "❓" },
  ];

  return (
    <div className="help-center-container">
      <div className="help-center-header">
        <h1>Help Center</h1>
        <p>Your guide to using CodeBook. Find answers, tutorials, and support.</p>
        <input
          type="text"
          className="help-center-search"
          placeholder="Search help topics..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="help-center-content">
        {helpTopics.map((topic, index) => (
          <div key={index} className="help-topic">
            <span className="help-icon">{topic.icon}</span>
            <div>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;
