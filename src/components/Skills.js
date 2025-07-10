import React, { useState } from 'react';
import './Skills.css';

const skillCategories = [
  {
    name: 'Technical',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'Reactjs', level: 90 },
      { name: 'Nextjs', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Cloud Shell', level: 65 },
      { name: 'C++', level: 85 },
      { name: 'C', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'Python', level: 80 },
      { name: 'SQL', level: 70 },
    ],
  },
  {
    name: 'AI & Content',
    skills: [
      { name: 'Artificial Intelligence (AI)', level: 70 },
      { name: 'Content Strategy', level: 90 },
      { name: 'Content Creation', level: 92 },
      { name: 'Content Management', level: 88 },
      { name: 'Content Management Systems (CMS)', level: 80 },
      { name: 'SEO', level: 75 },
    ],
  },
  {
    name: 'Management & Soft Skills',
    skills: [
      { name: 'Project Management', level: 85 },
      { name: 'Leadership', level: 90 },
      { name: 'Event Management', level: 80 },
      { name: 'Time Management', level: 88 },
      { name: 'Writing', level: 92 },
      { name: 'Public Speaking', level: 80 },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="skills-section fade-in">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-tabs">
        {skillCategories.map((cat, idx) => (
          <button
            key={cat.name}
            className={`skills-tab${activeTab === idx ? ' active' : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <div className="skills-grid">
        {skillCategories[activeTab].skills.map((skill, i) => (
          <div className="skill-card animated-skill" key={skill.name} style={{ animationDelay: `${i * 0.07 + 0.1}s` }}>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar-bg">
              <div className="skill-bar" style={{ width: `${skill.level}%` }}></div>
            </div>
            <div className="skill-level">{skill.level}%</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 